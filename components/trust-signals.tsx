"use client"

import { Building2, Award, Shield, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "RoboIndustries", logo: "RI" },
  { name: "FutureAI", logo: "FA" },
  { name: "AutomationPro", logo: "AP" },
  { name: "SmartBots", logo: "SB" },
  { name: "RoboTech", logo: "RT" },
]

const stats = [
  { icon: Building2, value: 50, suffix: "+", label: "Verifizierte Händler" },
  { icon: Award, value: 200, suffix: "+", label: "Roboter-Modelle" },
  { icon: Shield, value: 100, suffix: "%", label: "Sichere Transaktionen" },
  { icon: Users, value: 1000, suffix: "+", label: "Zufriedene Kunden" },
]

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuad = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOutQuad * end))

            if (progress === 1) {
              clearInterval(timer)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return { count, ref }
}

export function TrustSignals() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const duration = 2000
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuad = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOutQuad * 1000))

            if (progress === 1) {
              clearInterval(timer)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vertraut von führenden Institutionen</h2>
          <p className="text-lg text-muted-foreground">Deutschlands führende Plattform für humanoide Robotik</p>
        </div>

        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors min-w-[150px]"
              >
                <div className="text-4xl font-bold text-primary/30">{partner.logo}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
