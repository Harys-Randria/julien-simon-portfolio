"use client"

import { useLanguage } from "@/components/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    { key: "languages" as const, skills: t.skills.data.languages },
    { key: "frameworks" as const, skills: t.skills.data.frameworks },
    { key: "tools" as const, skills: t.skills.data.tools },
    { key: "methods" as const, skills: t.skills.data.methods },
    { key: "databases" as const, skills: t.skills.data.databases },
    { key: "os" as const, skills: t.skills.data.os },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          {t.skills.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1352AA] to-[#D53476] mx-auto rounded-full mb-12" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.key}
              className="border-none shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-[#1352AA] to-[#D53476] bg-clip-text text-transparent">
                  {t.skills.categories[category.key]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}