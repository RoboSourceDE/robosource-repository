"use client"

import { Filter, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"

interface MarketplaceFiltersProps {
  filterType: "mieten" | "kaufen"
}

export function MarketplaceFilters({ filterType }: MarketplaceFiltersProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`
          transition-all duration-500 ease-in-out
          ${isScrolled ? "hidden lg:block lg:fixed lg:top-24 lg:left-8 lg:w-72 lg:z-40" : "w-full"}
        `}
      >
        <div
          className={`
          bg-card border border-border rounded-lg p-4 space-y-4
          ${!isScrolled ? "lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0" : ""}
        `}
        >
          {/* Header - only show in sidebar mode */}
          {isScrolled && (
            <div className="hidden lg:block mb-2">
              <h3 className="text-base font-bold text-foreground mb-1">Filter</h3>
              <p className="text-xs text-muted-foreground">Verfeinern Sie Ihre Suche</p>
            </div>
          )}

          {/* Gewerblich oder Privat */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Nutzung</Label>
            <Select defaultValue="alle">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle">Alle</SelectItem>
                <SelectItem value="gewerblich">Gewerblich</SelectItem>
                <SelectItem value="privat">Privat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Anwendung */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Anwendung</Label>
            <Select defaultValue="alle-anwendungen">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm h-10">
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
          </div>

          {/* Marke */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Marke</Label>
            <Select defaultValue="alle-marken">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle-marken">Alle Marken</SelectItem>
                <SelectItem value="boston-dynamics">Boston Dynamics</SelectItem>
                <SelectItem value="softbank">SoftBank Robotics</SelectItem>
                <SelectItem value="tesla">Tesla</SelectItem>
                <SelectItem value="hanson">Hanson Robotics</SelectItem>
                <SelectItem value="pal-robotics">PAL Robotics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filterType === "mieten" ? (
            <div className="space-y-2">
              <Label className="text-xs sm:text-sm font-medium text-foreground">Mietdauer</Label>
              <Select defaultValue="alle-dauer">
                <SelectTrigger className="w-full bg-background border-border text-foreground text-sm h-10">
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
            </div>
          ) : (
            <div className="space-y-2">
              <Label className="text-xs sm:text-sm font-medium text-foreground">Finanzierung</Label>
              <Select defaultValue="alle-finanzierung">
                <SelectTrigger className="w-full bg-background border-border text-foreground text-sm h-10">
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
            </div>
          )}

          {/* Preis */}
          <div className="space-y-2 lg:col-span-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">
              Preisspanne (€ / {filterType === "kaufen" ? "Stück" : "Tag"})
            </Label>
            <Slider defaultValue={[0, 1000]} max={1000} step={10} className="w-full" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>0€</span>
              <span className="flex-1 text-center">-</span>
              <span>1000€+</span>
            </div>
          </div>

          {/* Standort */}
          <div className="space-y-2 lg:col-span-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Standort</Label>
            <Select defaultValue="alle-standorte">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle-standorte">Alle Standorte</SelectItem>
                <SelectItem value="baden-wuerttemberg">Baden-Württemberg</SelectItem>
                <SelectItem value="bayern">Bayern</SelectItem>
                <SelectItem value="berlin">Berlin</SelectItem>
                <SelectItem value="brandenburg">Brandenburg</SelectItem>
                <SelectItem value="bremen">Bremen</SelectItem>
                <SelectItem value="hamburg">Hamburg</SelectItem>
                <SelectItem value="hessen">Hessen</SelectItem>
                <SelectItem value="mecklenburg-vorpommern">Mecklenburg-Vorpommern</SelectItem>
                <SelectItem value="niedersachsen">Niedersachsen</SelectItem>
                <SelectItem value="nordrhein-westfalen">Nordrhein-Westfalen</SelectItem>
                <SelectItem value="rheinland-pfalz">Rheinland-Pfalz</SelectItem>
                <SelectItem value="saarland">Saarland</SelectItem>
                <SelectItem value="sachsen">Sachsen</SelectItem>
                <SelectItem value="sachsen-anhalt">Sachsen-Anhalt</SelectItem>
                <SelectItem value="schleswig-holstein">Schleswig-Holstein</SelectItem>
                <SelectItem value="thueringen">Thüringen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className={`flex gap-2 pt-2 ${!isScrolled ? "lg:col-span-2" : "flex-col"}`}>
            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm h-10">
              <Filter className="mr-2 h-4 w-4" />
              Anwenden
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-border text-foreground hover:bg-destructive/10 hover:text-destructive bg-transparent text-sm h-10"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Zurücksetzen
            </Button>
          </div>
        </div>
      </div>

      {isScrolled && <div className="hidden lg:block lg:w-72 flex-shrink-0" />}
    </>
  )
}
