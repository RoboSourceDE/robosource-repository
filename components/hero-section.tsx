"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

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
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/humanoid-robot-modern-technology.jpg"
          alt="Humanoid Robot"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      <div
        className="max-w-4xl mx-auto text-center transition-all duration-100 relative z-10"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Image src="/robosource-logo.png" alt="RoboSource Logo" width={60} height={60} className="animate-pulse" />
          <span className="text-3xl md:text-4xl font-bold text-primary">RoboSource</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          Die Handelsplattform für <span className="text-primary">humanoide Roboter</span> in Deutschland
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
          Geprüfte Händler. Transparente Preise. Direkter Vergleich.
        </p>

        <Link href="/kaufen" className="inline-block">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
            Jetzt Roboter entdecken
          </Button>
        </Link>
      </div>
    </section>
  )
}
