"use client"

import { Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AISearch() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-base sm:text-lg font-bold text-foreground">KI-gestützte Suche</h2>
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="z.B. Roboter für Gartenarbeit, Roboter für Logistik..."
          className="h-10 sm:h-12 text-sm sm:text-base pl-4 pr-12 bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse" />
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Beschreiben Sie Ihre Anforderungen – unsere KI findet den perfekten Roboter.
      </p>
    </div>
  )
}
