"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, CheckCircle2, Heart } from "lucide-react"
import Image from "next/image"

const mockMerkliste = [
  {
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    location: "München, Bayern",
    availability: "Sofort verfügbar",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
    type: "mieten" as const,
    verified: true,
    specs: ["Traglast: 20kg", "Laufzeit: 8h", "Höhe: 1.5m"],
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    location: "Berlin",
    availability: "Verfügbar ab 15.02.2025",
    image: "/pepper-humanoid-robot-softbank.jpg",
    type: "mieten" as const,
    verified: true,
    specs: ["Traglast: 5kg", "Laufzeit: 12h", "Höhe: 1.2m"],
  },
  {
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "8.500€",
    location: "Hamburg",
    availability: "Auf Lager",
    image: "/nao-humanoid-robot-education.jpg",
    type: "kaufen" as const,
    verified: true,
    specs: ["Traglast: 3kg", "Laufzeit: 6h", "Höhe: 0.58m"],
  },
]

export default function MerklistePage() {
  return (
    <div className="max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meine Merkliste</h1>
        <p className="text-muted-foreground mt-2">Ihre gespeicherten Roboter im Überblick</p>
      </div>

      {mockMerkliste.length === 0 ? (
        <Card className="border-border bg-card">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-foreground">Ihre Merkliste ist derzeit leer.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Fügen Sie Roboter zu Ihrer Merkliste hinzu, um sie später wiederzufinden.
            </p>
            <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">Roboter entdecken</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {mockMerkliste.map((robot, index) => (
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
                    className="absolute top-3 left-3 h-8 w-8 rounded-full bg-destructive/80 backdrop-blur-sm hover:bg-destructive"
                  >
                    <Heart className="h-4 w-4 fill-current" />
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
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
