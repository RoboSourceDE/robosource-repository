"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [opacity, setOpacity] = useState(1)

  console.log("[v0] HeroSection rendering with opacity:", opacity)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const fadeStart = 0
      const fadeEnd = 400
      const newOpacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart))
      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center container mx-auto px-3 sm:px-4">
      <div
        className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 transition-opacity duration-100"
        style={{ opacity }}
      >
        <h1 className="text-balance text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          <span className="text-foreground">Die Handelsplattform für </span>
          <span className="text-primary">humanoide Roboter</span>
          <span className="text-foreground"> in Deutschland</span>
        </h1>

        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
          Jetzt Marktplatz entdecken
        </Button>
      </div>
    </section>
  )
}
