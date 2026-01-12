"use client"

import { useLanguage } from "@/components/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Languages } from "lucide-react"

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">{t.education.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1352AA] to-[#D53476] mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Degrees */}
          <Card className="border-none shadow-lg bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1352AA]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#1352AA]" />
                </div>
                <CardTitle className="text-xl text-foreground">{t.education.degrees}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {t.education.degreesList.map((degree, index) => (
                <div key={index} className="border-l-2 border-[#1352AA] pl-4">
                  <p className="text-sm text-[#D53476] font-medium">{degree.year}</p>
                  <p className="font-semibold text-foreground">{degree.title}</p>
                  <p className="text-sm text-muted-foreground">{degree.school}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="border-none shadow-lg bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D53476]/10 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-[#D53476]" />
                </div>
                <CardTitle className="text-xl text-foreground">{t.education.languages}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {t.education.languagesList.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{lang.language}</span>
                  <span className="px-3 py-1 bg-[#D53476]/10 text-[#D53476] text-sm rounded-full">{lang.level}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
