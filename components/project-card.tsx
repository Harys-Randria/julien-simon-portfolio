"use client"

import { useLanguage } from "@/components/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface Project {
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  projectName: string
  companyDescription: string
  missionDescription: string
  tasks: string[]
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-xl p-0">
      <div className="bg-gradient-to-r from-[#1352AA] to-[#D53476] px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-white">{project.company}</h3>
            <p className="text-white/80 text-sm">{project.position}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 text-sm">
            <span className="text-white font-medium">
              {project.startDate} - {project.endDate}
            </span>
            <div className="flex items-center gap-1 text-white/80">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 px-6 pb-6 space-y-5 bg-white">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">{t.projects.company}</h4>
          <p className="text-sm text-muted-foreground">{project.companyDescription}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">{t.projects.mission}</h4>
          <p className="text-sm text-muted-foreground">{project.missionDescription}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">{t.projects.tasks}</h4>
          <ul className="space-y-1.5">
            {project.tasks.map((task, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-[#1352AA] mt-0.5">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">{t.projects.technologies}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#1352AA]/10 text-[#1352AA] border border-[#1352AA]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
