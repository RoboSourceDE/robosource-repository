"use client"

import { Search, Filter, RotateCcw, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

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
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
          {/* Left Side: Search and Price Range */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Nach Modell suchen..."
                className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground text-sm"
              />
            </div>

            {/* Price Range Filter */}
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
          </div>

          {/* Right Side: Filter Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:items-end lg:ml-auto">
            {/* Location Filter Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-full lg:w-auto border-border text-foreground hover:bg-accent/10 hover:text-accent bg-transparent text-sm"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Standort
            </Button>

            {/* Apply Filter Button */}
            <Button
              size="sm"
              className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
            >
              <Filter className="mr-2 h-4 w-4" />
              Anwenden
            </Button>

            {/* Reset Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-full lg:w-auto border-border text-foreground hover:bg-destructive/10 hover:text-destructive bg-transparent text-sm"
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
