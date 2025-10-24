"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Calendar, ShoppingCart, Heart, MessageCircle, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for the robot
const robotData = {
  id: "digit-v2-001",
  manufacturer: "Agility Robotics",
  model: "Digit V2",
  status: "Aktiv",
  category: "Humanoid",
  subcategory: "Logistik",
  description:
    "Der Digit V2 ist ein hochmoderner humanoider Roboter, der speziell für Logistik- und Lageranwendungen entwickelt wurde. Mit seiner fortschrittlichen Bewegungstechnologie kann er autonom navigieren, Pakete handhaben und in dynamischen Umgebungen arbeiten. Der Roboter verfügt über eine intuitive Benutzeroberfläche und kann nahtlos in bestehende Lagerverwaltungssysteme integriert werden.",
  useCases: ["Lagersortierung", "Pakethandling", "Inspektion", "Letzte Meile", "Bestandsverwaltung"],

  // Pricing
  rentalPricePerDay: 850,
  purchasePrice: 160000,
  availability: "Miete & Kauf",
  location: "Hamburg, Deutschland",

  // Technical specs
  payload_kg: 20,
  reach_m: 1.75,
  weight_kg: 85,
  battery_life_hours: 8,
  charging_time_hours: 2,
  degrees_of_freedom: 19,
  ip_rating: "IP54",
  max_speed_ms: 1.5,
  operating_temp_range: "-10°C bis +45°C",

  // Economic data
  tco_per_hour: 14.5,
  roi_months: 22,
  setup_time_hours: 6,
  mtbf_hours: 25000,
  warranty_months: 24,
  maintenance_interval_hours: 500,

  // Seller info
  seller: {
    name: "RoboTrade GmbH",
    verified: true,
    rating: 4.8,
    reviewCount: 127,
  },

  // Images
  mainImage: "/humanoid-robot-digit.jpg",
  thumbnails: [
    "/robot-front-view.jpg",
    "/robot-side-view.jpg",
    "/robot-back-view.jpg",
    "/robot-working.jpg",
  ],
}

export default function RobotDetailPage() {
  const [selectedImage, setSelectedImage] = useState(robotData.mainImage)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link href="/kaufen">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Übersicht
          </Button>
        </Link>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* LEFT COLUMN: Media Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image src={selectedImage || "/placeholder.svg"} alt={robotData.model} fill className="object-cover" />
              </div>
            </Card>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {robotData.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(thumb)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === thumb ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={thumb || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Actions & Info */}
          <div className="space-y-6">
            {/* B1: Header Information */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">{robotData.manufacturer}</p>
              <h1 className="text-3xl font-bold mb-4">{robotData.model}</h1>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground">{robotData.status}</Badge>
                <Badge variant="secondary">{robotData.category}</Badge>
                <Badge variant="outline">{robotData.subcategory}</Badge>
              </div>
            </div>

            <Separator />

            {/* B2: Action Card (Buy Box) */}
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {robotData.rentalPricePerDay} € / Tag
                  <span className="text-sm font-normal text-muted-foreground ml-2">(Miete)</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  oder {robotData.purchasePrice.toLocaleString()} € (Kauf)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Verfügbarkeit:</strong> {robotData.availability}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <strong>Standort:</strong> {robotData.location}
                  </p>
                </div>

                <Separator />

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Mietanfrage senden
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Kaufanfrage stellen
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Zur Merkliste
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* B3: Seller Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Anbieter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>RT</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{robotData.seller.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Verifizierter Händler
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{robotData.seller.rating}</span>
                      <span>({robotData.seller.reviewCount} Bewertungen)</span>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Händler kontaktieren
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* DETAIL SECTION: Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Beschreibung</TabsTrigger>
            <TabsTrigger value="technical">Technische Daten</TabsTrigger>
            <TabsTrigger value="economic">Wirtschaftliche Daten</TabsTrigger>
          </TabsList>

          {/* Tab 1: Description */}
          <TabsContent value="description" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Über diesen Roboter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{robotData.description}</p>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Anwendungsfälle</h3>
                  <div className="flex flex-wrap gap-2">
                    {robotData.useCases.map((useCase, index) => (
                      <Badge key={index} variant="secondary">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Technical Specs */}
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technische Spezifikationen</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Traglast</TableCell>
                      <TableCell>{robotData.payload_kg} kg</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Reichweite</TableCell>
                      <TableCell>{robotData.reach_m} m</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Eigengewicht</TableCell>
                      <TableCell>{robotData.weight_kg} kg</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Akkulaufzeit</TableCell>
                      <TableCell>{robotData.battery_life_hours} Stunden</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ladezeit</TableCell>
                      <TableCell>{robotData.charging_time_hours} Stunden</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Freiheitsgrade</TableCell>
                      <TableCell>{robotData.degrees_of_freedom}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Schutzklasse</TableCell>
                      <TableCell>{robotData.ip_rating}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Maximale Geschwindigkeit</TableCell>
                      <TableCell>{robotData.max_speed_ms} m/s</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Betriebstemperatur</TableCell>
                      <TableCell>{robotData.operating_temp_range}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Economic Data */}
          <TabsContent value="economic">
            <Card>
              <CardHeader>
                <CardTitle>Wirtschaftliche Metriken</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">TCO pro Stunde</TableCell>
                      <TableCell>{robotData.tco_per_hour} €</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Amortisationszeit</TableCell>
                      <TableCell>{robotData.roi_months} Monate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Einrichtungszeit</TableCell>
                      <TableCell>{robotData.setup_time_hours} Stunden</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MTBF (Mean Time Between Failures)</TableCell>
                      <TableCell>{robotData.mtbf_hours.toLocaleString()} Stunden</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Garantie</TableCell>
                      <TableCell>{robotData.warranty_months} Monate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Wartungsintervall</TableCell>
                      <TableCell>{robotData.maintenance_interval_hours} Stunden</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
