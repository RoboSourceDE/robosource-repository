"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"

interface Robot {
  name: string
  manufacturer: string
  price: string
  location: string
  availability: string
  image: string
  type: "mieten" | "kaufen"
}

const allRobots: Robot[] = [
  {
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    location: "München, Bayern",
    availability: "Sofort verfügbar",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
    type: "mieten",
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    location: "Berlin",
    availability: "Verfügbar ab 15.02.2025",
    image: "/pepper-humanoid-robot-softbank.jpg",
    type: "mieten",
  },
  {
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "8.500€",
    location: "Hamburg",
    availability: "Auf Lager",
    image: "/nao-humanoid-robot-education.jpg",
    type: "kaufen",
  },
  {
    name: "Optimus Gen 2",
    manufacturer: "Tesla",
    price: "Ab 580€ / Tag",
    location: "Frankfurt, Hessen",
    availability: "Sofort verfügbar",
    image: "/tesla-optimus-humanoid-robot.jpg",
    type: "mieten",
  },
  {
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    location: "Stuttgart, Baden-Württemberg",
    availability: "Sofort verfügbar",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
    type: "mieten",
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    location: "Köln, Nordrhein-Westfalen",
    availability: "Verfügbar ab 20.02.2025",
    image: "/pepper-humanoid-robot-softbank.jpg",
    type: "mieten",
  },
  {
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "8.500€",
    location: "Dresden, Sachsen",
    availability: "Auf Lager",
    image: "/nao-humanoid-robot-education.jpg",
    type: "kaufen",
  },
  {
    name: "Optimus Gen 2",
    manufacturer: "Tesla",
    price: "Ab 580€ / Tag",
    location: "Düsseldorf, Nordrhein-Westfalen",
    availability: "Sofort verfügbar",
    image: "/tesla-optimus-humanoid-robot.jpg",
    type: "mieten",
  },
]

interface RobotGridProps {
  filterType?: "mieten" | "kaufen"
}

export function RobotGrid({ filterType }: RobotGridProps) {
  const filteredRobots = filterType ? allRobots.filter((robot) => robot.type === filterType) : allRobots

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {filteredRobots.map((robot, index) => (
        <Card
          key={index}
          className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
        >
          <CardContent className="p-0">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-muted">
              <Image
                src={robot.image || "/placeholder.svg?height=400&width=400&query=humanoid robot"}
                alt={robot.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs">
                {robot.type === "mieten" ? "Mieten" : "Kaufen"}
              </Badge>
            </div>
            <div className="space-y-3 p-4 sm:p-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1">{robot.name}</h3>
                <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                  {robot.manufacturer}
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{robot.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{robot.availability}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <p className="text-base sm:text-lg font-bold text-primary">{robot.price}</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
