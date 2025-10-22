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
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Top Humanoide Roboter in Ihrer Nähe</h2>
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

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {robots.map((robot, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={robot.image || "/placeholder.svg?height=400&width=400&query=humanoid robot"}
                    alt={robot.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
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
      </div>
    </section>
  )
}
