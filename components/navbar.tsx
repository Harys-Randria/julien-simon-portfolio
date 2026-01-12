"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"

const navLinks = [
  { id: "about", href: "#about" },
  { id: "expertise", href: "#expertise" },
  { id: "education", href: "#education" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "contact", href: "#contact" },
] as const

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-border",
        isScrolled && "backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-bold text-[#1352AA]">
            SIMON AND CAREFULL CODE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#1352AA]",
                  activeSection === link.id ? "text-[#1352AA]" : "text-muted-foreground",
                )}
              >
                {t.nav[link.id as keyof typeof t.nav]}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-2 border-[#1352AA] text-[#1352AA] hover:bg-[#1352AA] hover:text-white bg-transparent"
            >
              {language === "fr" ? "EN" : "FR"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-[#1352AA] text-[#1352AA] hover:bg-[#1352AA] hover:text-white bg-transparent"
            >
              {language === "fr" ? "EN" : "FR"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-[#1352AA]",
                  activeSection === link.id ? "text-[#1352AA]" : "text-muted-foreground",
                )}
              >
                {t.nav[link.id as keyof typeof t.nav]}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
