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
      const newScale = 1 - progress * 0.2

      setOpacity(newOpacity)
      setScale(newScale)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative">
      <div
        className="max-w-4xl mx-auto text-center transition-all duration-100"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Die Handelsplattform für <span className="text-primary">humanoide Roboter</span> in Deutschland
        </h1>

        <Link href="/mieten" className="inline-block">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
            Jetzt Marktplatz entdecken
          </Button>
        </Link>
      </div>
    </section>
  )
}
