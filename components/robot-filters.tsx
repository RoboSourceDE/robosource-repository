"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RobotFilters() {
  return (
    <div className="w-full space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Filter</h2>
        <p className="text-sm text-muted-foreground mt-1">Suche verfeinern und passende Roboter finden</p>
      </div>

      <div className="w-full bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Nach Modell oder Hersteller suchen..."
              className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Type Select */}
          <div className="w-full lg:w-48">
            <Select defaultValue="alle-typen">
              <SelectTrigger className="bg-background border-border text-foreground">
                <SelectValue placeholder="Typ wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle-typen">Alle Typen</SelectItem>
                <SelectItem value="mieten">Mieten</SelectItem>
                <SelectItem value="kaufen">Kaufen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Select */}
          <div className="w-full lg:w-48">
            <Select defaultValue="alle-kategorien">
              <SelectTrigger className="bg-background border-border text-foreground">
                <SelectValue placeholder="Kategorie wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle-kategorien">Alle Kategorien</SelectItem>
                <SelectItem value="industrie">Industrie</SelectItem>
                <SelectItem value="logistik">Logistik</SelectItem>
                <SelectItem value="service">Service</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location Select */}
          <div className="w-full lg:w-48">
            <Select defaultValue="alle-standorte">
              <SelectTrigger className="bg-background border-border text-foreground">
                <SelectValue placeholder="Standort wählen" />
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

          {/* Search Button */}
          <Button className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <Filter className="mr-2 h-4 w-4" />
            Suchen
          </Button>
        </div>
      </div>
    </div>
  )
}
