"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [opacity, setOpacity] = useState(1)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const fadeStart = 0
      const fadeEnd = 400

      const progress = Math.min(1, Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart)))
      const newOpacity = 1 - progress
      const newScale = 1 - progress * 0.2 // Scale from 1 to 0.8

      setOpacity(newOpacity)
      setScale(newScale)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center container mx-auto px-3 sm:px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] -z-10" />

      <div
        className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 transition-all duration-100"
        style={{
          opacity,
          transform: `scale(${scale})`, // Combined fade and scale animation
        }}
      >
        <h1 className="text-balance text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          <span className="text-foreground">Die Handelsplattform für </span>
          <span className="text-primary">humanoide Roboter</span>
          <span className="text-foreground"> in Deutschland</span>
        </h1>

        <Link href="/mieten" className="w-full sm:w-auto">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            Jetzt Marktplatz entdecken
          </Button>
        </Link>
      </div>
    </section>
  )
}
