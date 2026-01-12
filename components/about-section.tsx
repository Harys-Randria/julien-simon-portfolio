"use client"

import { useLanguage } from "@/components/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">{t.about.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1352AA] to-[#D53476] mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto space-y-6">
          {t.about.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
