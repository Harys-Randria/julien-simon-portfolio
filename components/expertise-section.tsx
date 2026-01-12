"use client"

import { useLanguage } from "@/components/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, LayoutGrid, ShieldCheck } from "lucide-react"

const icons = [Code2, LayoutGrid, ShieldCheck]

export function ExpertiseSection() {
  const { t } = useLanguage()

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">{t.expertise.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1352AA] to-[#D53476] mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.expertise.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#1352AA]/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#1352AA]" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
