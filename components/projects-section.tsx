"use client"

import { useLanguage } from "@/components/language-context"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          {t.projects.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1352AA] to-[#D53476] mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto space-y-8">
          {t.projects.data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}