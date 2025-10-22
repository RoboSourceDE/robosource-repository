"use client"

import { Filter, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

interface MarketplaceFiltersAIProps {
  filterType: "mieten" | "kaufen"
  aiFilters?: Record<string, string>
}

export function MarketplaceFiltersAI({ filterType, aiFilters = {} }: MarketplaceFiltersAIProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const searchParams = useSearchParams()

  const [usage, setUsage] = useState(aiFilters.usage || searchParams.get("usage") || "alle")
  const [application, setApplication] = useState(
    aiFilters.application || searchParams.get("application") || "alle-anwendungen",
  )
  const [brand, setBrand] = useState(aiFilters.brand || searchParams.get("brand") || "alle-marken")
  const [priceMin, setPriceMin] = useState(aiFilters.priceMin || searchParams.get("priceMin") || "0")
  const [priceMax, setPriceMax] = useState(aiFilters.priceMax || searchParams.get("priceMax") || "1000")
  const [location, setLocation] = useState(aiFilters.location || searchParams.get("location") || "alle-standorte")
  const [weight, setWeight] = useState(aiFilters.weight || "alle")
  const [batteryLife, setBatteryLife] = useState(aiFilters.batteryLife || "alle")
  const [condition, setCondition] = useState(aiFilters.condition || "alle")

  useEffect(() => {
    if (aiFilters.application) setApplication(aiFilters.application)
    if (aiFilters.weight) setWeight(aiFilters.weight)
    if (aiFilters.condition) setCondition(aiFilters.condition)
  }, [aiFilters])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleApplyFilters = () => {
    console.log("[v0] Applying filters:", {
      usage,
      application,
      brand,
      priceMin,
      priceMax,
      location,
      weight,
      batteryLife,
      condition,
    })
  }

  const handleReset = () => {
    setUsage("alle")
    setApplication("alle-anwendungen")
    setBrand("alle-marken")
    setPriceMin("0")
    setPriceMax("1000")
    setLocation("alle-standorte")
    setWeight("alle")
    setBatteryLife("alle")
    setCondition("alle")
  }

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div
        className={`
          hidden lg:block transition-all duration-500 ease-in-out
          ${isScrolled ? "fixed top-24 left-8 w-80 z-40" : "w-80"}
        `}
      >
        <div className="bg-card border border-border rounded-lg p-5 space-y-4 shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filter
            </h3>
            <p className="text-xs text-muted-foreground">
              {Object.keys(aiFilters).length > 0
                ? "KI-synchronisiert • Manuell anpassbar"
                : "Verfeinern Sie Ihre Suche"}
            </p>
          </div>

          <Accordion type="multiple" defaultValue={["price", "location", "application"]} className="space-y-2">
            {/* Preisspanne */}
            <AccordionItem value="price" className="border-b border-border">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                Preisspanne
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pb-4">
                <Label className="text-xs text-muted-foreground">€ / {filterType === "kaufen" ? "Stück" : "Tag"}</Label>
                <Slider
                  value={[Number.parseInt(priceMin), Number.parseInt(priceMax)]}
                  onValueChange={(values) => {
                    setPriceMin(values[0].toString())
                    setPriceMax(values[1].toString())
                  }}
                  max={1000}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">{priceMin}€</span>
                  <span className="flex-1 text-center">-</span>
                  <span className="font-medium">{priceMax}€+</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Standort */}
            <AccordionItem value="location" className="border-b border-border">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                Standort
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alle-standorte">Alle Standorte</SelectItem>
                    <SelectItem value="baden-wuerttemberg">Baden-Württemberg</SelectItem>
                    <SelectItem value="bayern">Bayern</SelectItem>
                    <SelectItem value="berlin">Berlin</SelectItem>
                    <SelectItem value="hamburg">Hamburg</SelectItem>
                    <SelectItem value="hessen">Hessen</SelectItem>
                    <SelectItem value="nordrhein-westfalen">Nordrhein-Westfalen</SelectItem>
                    <SelectItem value="sachsen">Sachsen</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Anwendungsbereich */}
            <AccordionItem value="application" className="border-b border-border">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                Anwendungsbereich
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <Select value={application} onValueChange={setApplication}>
                  <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alle-anwendungen">Alle Anwendungen</SelectItem>
                    <SelectItem value="logistik">Logistik</SelectItem>
                    <SelectItem value="kundenservice">Kundenservice</SelectItem>
                    <SelectItem value="bildung">Bildung</SelectItem>
                    <SelectItem value="gesundheitswesen">Gesundheitswesen</SelectItem>
                    <SelectItem value="forschung">Forschung & Entwicklung</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Technische Spezifikationen */}
            <AccordionItem value="specs" className="border-b border-border">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                Technische Spezifikationen
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pb-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Traglast</Label>
                  <Select value={weight} onValueChange={setWeight}>
                    <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alle">Alle</SelectItem>
                      <SelectItem value="5kg">bis 5kg</SelectItem>
                      <SelectItem value="15kg">bis 15kg</SelectItem>
                      <SelectItem value="30kg">bis 30kg</SelectItem>
                      <SelectItem value="50kg">über 50kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Akkulaufzeit</Label>
                  <Select value={batteryLife} onValueChange={setBatteryLife}>
                    <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alle">Alle</SelectItem>
                      <SelectItem value="4h">bis 4h</SelectItem>
                      <SelectItem value="8h">bis 8h</SelectItem>
                      <SelectItem value="12h">bis 12h</SelectItem>
                      <SelectItem value="24h">über 24h</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Händler / Hersteller */}
            <AccordionItem value="brand" className="border-b border-border">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                Händler / Hersteller
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alle-marken">Alle Marken</SelectItem>
                    <SelectItem value="boston-dynamics">Boston Dynamics</SelectItem>
                    <SelectItem value="softbank">SoftBank Robotics</SelectItem>
                    <SelectItem value="tesla">Tesla</SelectItem>
                    <SelectItem value="hanson">Hanson Robotics</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Zustand */}
            <AccordionItem value="condition" className="border-b-0">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                Zustand
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alle">Alle</SelectItem>
                    <SelectItem value="neu">Neu</SelectItem>
                    <SelectItem value="neuwertig">Neuwertig</SelectItem>
                    <SelectItem value="gebraucht">Gebraucht</SelectItem>
                    <SelectItem value="generalueberholt">Generalüberholt</SelectItem>
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Mietdauer / Finanzierung */}
            {filterType === "mieten" ? (
              <AccordionItem value="duration" className="border-b-0">
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                  Mietdauer
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <Select defaultValue="alle-dauer">
                    <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alle-dauer">Alle Zeiträume</SelectItem>
                      <SelectItem value="tage">Tageweise</SelectItem>
                      <SelectItem value="wochen">Wochenweise</SelectItem>
                      <SelectItem value="monate">Monatsweise</SelectItem>
                      <SelectItem value="langzeit">Langzeitmiete (6+ Monate)</SelectItem>
                    </SelectContent>
                  </Select>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <AccordionItem value="financing" className="border-b-0">
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                  Finanzierung
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <Select defaultValue="alle-finanzierung">
                    <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alle-finanzierung">Alle Optionen</SelectItem>
                      <SelectItem value="sofortkauf">Sofortkauf</SelectItem>
                      <SelectItem value="ratenzahlung">Ratenzahlung</SelectItem>
                      <SelectItem value="leasing">Leasing</SelectItem>
                      <SelectItem value="finanzierung">Finanzierung verfügbar</SelectItem>
                    </SelectContent>
                  </Select>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Button
              onClick={handleApplyFilters}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter anwenden
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-full border-border text-foreground hover:bg-destructive/10 hover:text-destructive bg-transparent"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Zurücksetzen
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for sticky sidebar */}
      {isScrolled && <div className="hidden lg:block w-80 flex-shrink-0" />}
    </>
  )
}
