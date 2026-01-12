"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1352AA] via-[#D53476]/60 to-white" />
        {/* Decorative blurred shapes for depth */}
        <div className="absolute top-10 right-20 w-96 h-96 bg-[#D53476]/30 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#1352AA]/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-white/30 rounded-full blur-lg" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/julien-simon.png"
                alt="Julien Simon"
                width={288}
                height={288}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content - Updated text colors for contrast against dark gradient */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Code2 className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{t.hero.experience}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              Julien Simon
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 drop-shadow-md">
              {t.hero.title}
            </h2>

            <p className="text-lg text-white/80 max-w-xl mb-8 text-balance drop-shadow">
              {t.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {t.expertise.cards.map((card, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 border-2 border-white/40 rounded-full text-sm font-semibold text-white bg-white/10 backdrop-blur-sm shadow-sm"
                >
                  {card.title}
                </span>
              ))}
            </div>

            <Button asChild size="lg" className="bg-white text-[#1352AA] hover:bg-white/90 font-semibold shadow-lg">
              <a href="#contact">{t.hero.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}