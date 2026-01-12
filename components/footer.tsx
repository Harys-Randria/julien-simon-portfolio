"use client"

import { useLanguage } from "@/components/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t.footer.company}. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
