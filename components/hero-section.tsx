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
    <section className="min-h-screen flex items-center justify-center container mx-auto px-3 sm:px-4 relative overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/30 -z-10" />

      {/* Radial gradient orbs for visual interest */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.4),transparent_40%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.35),transparent_45%)] -z-10" />

      {/* Diagonal gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/15 to-transparent -z-10" />

      {/* Animated gradient mesh effect */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Bottom gradient fade for clear separation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10" />
      {/* </CHANGE> */}

      <div
        className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 transition-all duration-100 relative z-10"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h1 className="text-balance text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-sm">
          <span className="text-foreground">Die Handelsplattform für </span>
          <span className="text-primary drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">humanoide Roboter</span>
          <span className="text-foreground"> in Deutschland</span>
        </h1>
        {/* </CHANGE> */}

        <Link href="/mieten" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300"
          >
            Jetzt Marktplatz entdecken
          </Button>
        </Link>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
