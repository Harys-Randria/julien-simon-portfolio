import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Julien Simon - Développeur Freelance Java & Python",
  description:
    "Développeur logiciel freelance avec plus de 10 ans d'expérience. Spécialisé en Java, Python, AWS et architecture cloud. Solutions robustes, scalables et maintenables.",
  generator: "v0.app",
  keywords: ["développeur", "freelance", "Java", "Python", "AWS", "cloud engineer", "Paris"],
  authors: [{ name: "Julien Simon" }],
  icons: {
    icon: "/avatar.png",
    apple: "/avatar.png",
  },
}

export const viewport = {
  themeColor: "#1352AA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
