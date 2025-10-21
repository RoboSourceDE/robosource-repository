"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin } from "lucide-react"

const robots = [
  {
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    image: "/pepper-humanoid-robot-softbank.jpg",
  },
  {
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "Kaufpreis: 8.500€",
    image: "/nao-humanoid-robot-education.jpg",
  },
  {
    name: "Optimus Gen 2",
    manufacturer: "Tesla",
    price: "Ab 580€ / Tag",
    image: "/tesla-optimus-humanoid-robot.jpg",
  },
]

export function FeaturedRobots() {
  const [radius, setRadius] = useState("30")

  return (
    <section className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-balance text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
          Top Humanoide Roboter in Ihrer Nähe
        </h2>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <Select value={radius} onValueChange={setRadius}>
            <SelectTrigger className="w-[140px] h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 km Radius</SelectItem>
              <SelectItem value="30">30 km Radius</SelectItem>
              <SelectItem value="50">50 km Radius</SelectItem>
              <SelectItem value="100">100 km Radius</SelectItem>
              <SelectItem value="250">250 km Radius</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {robots.map((robot, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-2 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
          >
            <CardContent className="p-0">
              <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={robot.image || "/placeholder.svg?height=400&width=400&query=humanoid robot"}
                  alt={robot.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 sm:space-y-3 p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-card-foreground">{robot.name}</h3>
                <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                  {robot.manufacturer}
                </Badge>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">{robot.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
