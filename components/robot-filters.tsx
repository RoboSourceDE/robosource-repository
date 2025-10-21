"use client"

import { Filter, RotateCcw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RobotFilters() {
  return (
    <div className="w-full space-y-3 sm:space-y-4">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Filter</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Suche verfeinern und passende humanoide Roboter finden
        </p>
      </div>

      <div className="w-full bg-card border border-border rounded-lg p-4 sm:p-6">
        <div className="space-y-4 sm:space-y-5">
          {/* 1. Kauf oder Miete */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Kauf oder Miete</Label>
            <Select defaultValue="alle-typen">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                <SelectValue placeholder="Typ auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle-typen">Alle Typen</SelectItem>
                <SelectItem value="mieten">Mieten</SelectItem>
                <SelectItem value="kaufen">Kaufen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 2. Gewerblich oder Privat */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Gewerblich oder Privat</Label>
            <Select defaultValue="alle">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                <SelectValue placeholder="Nutzung auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle">Alle</SelectItem>
                <SelectItem value="gewerblich">Gewerblich</SelectItem>
                <SelectItem value="privat">Privat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 3. Anwendung */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Anwendung</Label>
            <Select defaultValue="alle-anwendungen">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                <SelectValue placeholder="Anwendung auswählen" />
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

          {/* 4. Marke */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Marke</Label>
            <Select defaultValue="alle-marken">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                <SelectValue placeholder="Marke auswählen" />
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

          {/* 5. Preis */}
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Preisspanne (€ / Tag)</Label>
            <div className="space-y-3 sm:space-y-4">
              <Slider defaultValue={[0, 1000]} max={1000} step={10} className="w-full" />
              <div className="flex items-center gap-2 sm:gap-4">
                <Input
                  type="number"
                  placeholder="Min"
                  className="bg-background border-border text-foreground text-sm"
                />
                <span className="text-muted-foreground text-sm">-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  className="bg-background border-border text-foreground text-sm"
                />
              </div>
            </div>
          </div>

          {/* 6. Standort */}
          <div className="space-y-2">
            <Label className="text-xs sm:text-sm font-medium text-foreground">Standort</Label>
            <Select defaultValue="alle-standorte">
              <SelectTrigger className="w-full bg-background border-border text-foreground text-sm">
                <SelectValue placeholder="Standort auswählen" />
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
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
            <Button
              size="sm"
              className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter anwenden
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto border-border text-foreground hover:bg-destructive/10 hover:text-destructive bg-transparent text-sm"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Zurücksetzen
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
