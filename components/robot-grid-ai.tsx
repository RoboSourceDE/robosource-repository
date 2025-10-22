"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, CheckCircle2, Sparkles, Heart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface Robot {
  name: string
  manufacturer: string
  price: string
  location: string
  availability: string
  image: string
  type: "mieten" | "kaufen"
  verified: boolean
  aiRelevance?: string
  specs: string[]
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
    verified: true,
    aiRelevance: "Passt zu: Logistik, >15kg Traglast",
    specs: ["Traglast: 20kg", "Laufzeit: 8h", "Höhe: 1.5m"],
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    location: "Berlin",
    availability: "Verfügbar ab 15.02.2025",
    image: "/pepper-humanoid-robot-softbank.jpg",
    type: "mieten",
    verified: true,
    aiRelevance: "Passt zu: Kundenservice, Bildung",
    specs: ["Traglast: 5kg", "Laufzeit: 12h", "Höhe: 1.2m"],
  },
  {
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "8.500€",
    location: "Hamburg",
    availability: "Auf Lager",
    image: "/nao-humanoid-robot-education.jpg",
    type: "kaufen",
    verified: true,
    specs: ["Traglast: 3kg", "Laufzeit: 6h", "Höhe: 0.58m"],
  },
  {
    name: "Optimus Gen 2",
    manufacturer: "Tesla",
    price: "Ab 580€ / Tag",
    location: "Frankfurt, Hessen",
    availability: "Sofort verfügbar",
    image: "/tesla-optimus-humanoid-robot.jpg",
    type: "mieten",
    verified: true,
    aiRelevance: "Passt zu: Industrie, Neuwertig",
    specs: ["Traglast: 25kg", "Laufzeit: 10h", "Höhe: 1.73m"],
  },
  {
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    location: "Stuttgart, Baden-Württemberg",
    availability: "Sofort verfügbar",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
    type: "mieten",
    verified: true,
    specs: ["Traglast: 20kg", "Laufzeit: 8h", "Höhe: 1.5m"],
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    location: "Köln, Nordrhein-Westfalen",
    availability: "Verfügbar ab 20.02.2025",
    image: "/pepper-humanoid-robot-softbank.jpg",
    type: "mieten",
    verified: true,
    specs: ["Traglast: 5kg", "Laufzeit: 12h", "Höhe: 1.2m"],
  },
]

interface RobotGridAIProps {
  filterType?: "mieten" | "kaufen"
}

export function RobotGridAI({ filterType }: RobotGridAIProps) {
  const [sortBy, setSortBy] = useState("ai-relevance")
  const filteredRobots = filterType ? allRobots.filter((robot) => robot.type === filterType) : allRobots

  return (
    <div className="space-y-6">
      {/* Sorting Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <p className="text-sm text-muted-foreground">
          Zeige <span className="font-semibold text-foreground">{filteredRobots.length}</span> von{" "}
          <span className="font-semibold text-foreground">132</span> Robotern
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Sortieren nach:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[220px] bg-background border-border text-foreground text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai-relevance">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span>Beste Treffer (KI-Relevanz)</span>
                </div>
              </SelectItem>
              <SelectItem value="price-asc">Preis (aufsteigend)</SelectItem>
              <SelectItem value="price-desc">Preis (absteigend)</SelectItem>
              <SelectItem value="newest">Neueste Angebote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {filteredRobots.map((robot, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
          >
            <CardContent className="p-0">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-muted">
                <Image
                  src={robot.image || "/placeholder.svg?height=400&width=400&query=humanoid robot"}
                  alt={robot.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold shadow-lg">
                  {robot.type === "mieten" ? "Mieten" : "Kaufen"}
                </Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 left-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3 p-5">
                {/* Seller Info */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Verkauf durch:</span>
                  <span className="font-semibold text-foreground">{robot.manufacturer}</span>
                  {robot.verified && <CheckCircle2 className="h-3 w-3 text-primary" title="Geprüfter Händler" />}
                </div>

                {/* Product Title */}
                <h3 className="text-lg font-bold text-card-foreground">{robot.name}</h3>

                {/* AI Relevance */}
                {robot.aiRelevance && (
                  <div className="flex items-start gap-2 p-2 bg-primary/5 border border-primary/20 rounded-md">
                    <Sparkles className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-primary font-medium">{robot.aiRelevance}</p>
                  </div>
                )}

                {/* Key Specs */}
                <div className="flex flex-wrap gap-2">
                  {robot.specs.map((spec, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-border text-muted-foreground">
                      {spec}
                    </Badge>
                  ))}
                </div>

                {/* Location & Availability */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{robot.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{robot.availability}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <p className="text-lg font-bold text-primary">{robot.price}</p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Details anzeigen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8">
        <Button variant="outline" size="sm" disabled className="border-border bg-transparent">
          Zurück
        </Button>
        <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" size="sm" className="border-border bg-transparent">
          2
        </Button>
        <Button variant="outline" size="sm" className="border-border bg-transparent">
          3
        </Button>
        <span className="text-muted-foreground">...</span>
        <Button variant="outline" size="sm" className="border-border bg-transparent">
          12
        </Button>
        <Button variant="outline" size="sm" className="border-border bg-transparent">
          Weiter
        </Button>
      </div>
    </div>
  )
}
