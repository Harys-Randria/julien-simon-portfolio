"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar } from "lucide-react"

const socialLinks = [
  {
    id: "linkedin",
    icon: "/images/linkedin.webp",
    href: "https://www.linkedin.com/in/julien-simon4/",
  },
  {
    id: "malt",
    icon: "/images/malt.png",
    href: "https://www.malt.fr/profile/juliensimon1",
  },
  {
    id: "collective",
    icon: "/images/collective.png",
    href: "https://www.collective.work/profile/julien-simon",
  },
]

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">{t.contact.title}</h2>

        <p className="text-lg text-muted-foreground text-center mb-3">{t.contact.subtitle}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1352AA] to-[#D53476] mx-auto rounded-full mb-12" />

        <Card className="max-w-2xl mx-auto border-none shadow-lg">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <p className="text-muted-foreground mb-8 max-w-md">{t.contact.intro}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center">
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2 px-6 py-5 text-base border-[#1352AA] text-[#1352AA] hover:bg-[#1352AA]/10 bg-transparent"
              >
                <a href="mailto:julien.simon4@gmail.com">
                  <Mail className="w-5 h-5" />
                  {t.contact.email}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2 px-6 py-5 text-base border-[#1352AA] text-[#1352AA] hover:bg-[#1352AA]/10 bg-transparent"
              >
                <a href="tel:+33671246240">
                  <Phone className="w-5 h-5" />
                  {t.contact.phone}
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors hover:scale-110"
                >
                  <Image
                    src={link.icon || "/placeholder.svg"}
                    alt={link.id}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>

            <Button
              asChild
              className="flex items-center gap-2 px-8 py-6 text-base font-semibold text-white bg-gradient-to-r from-[#1352AA] to-[#D53476] hover:opacity-90 transition-opacity"
            >
              <a href="https://calendly.com/julien-simon4" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                {t.contact.cta}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
