"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const robots = [
  {
    id: 1,
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    distance: "5 km",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
  },
  {
    id: 2,
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    distance: "8 km",
    image: "/pepper-humanoid-robot-softbank.jpg",
  },
  {
    id: 3,
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "Kaufpreis: 8.500€",
    distance: "12 km",
    image: "/nao-humanoid-robot-education.jpg",
  },
  {
    id: 4,
    name: "Optimus Gen 2",
    manufacturer: "Tesla",
    price: "Ab 580€ / Tag",
    distance: "15 km",
    image: "/tesla-optimus-humanoid-robot.jpg",
  },
]

export function NearbyRobots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % robots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Basierend auf Ihrem Standort</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Humanoide Roboter in Ihrer Nähe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie verfügbare Roboter in Ihrer Umgebung und starten Sie noch heute
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {robots.map((robot, index) => (
            <Card
              key={robot.id}
              className={`group overflow-hidden border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                index === currentIndex ? "ring-2 ring-primary/50 scale-105" : ""
              }`}
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={robot.image || "/placeholder.svg?height=400&width=400&query=humanoid robot"}
                    alt={robot.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {robot.distance}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3 p-4">
                  <h3 className="text-lg font-semibold text-card-foreground">{robot.name}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                    {robot.manufacturer}
                  </Badge>
                  <p className="text-sm font-medium text-muted-foreground">{robot.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="group">
            <Link href="/kaufen">
              Alle Roboter anzeigen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
