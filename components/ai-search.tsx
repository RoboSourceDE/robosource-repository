"use client"

import { Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AISearch() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/20">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">KI-gestützte Suche</h2>
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="z.B. Roboter für Gartenarbeit, Roboter für Logistik, Roboter für Kundenservice..."
          className="h-12 sm:h-14 lg:h-16 text-sm sm:text-base lg:text-lg pl-4 pr-14 bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse" />
        </div>
      </div>
      <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
        Beschreiben Sie Ihre Anforderungen in natürlicher Sprache – unsere KI findet den perfekten Roboter für Sie.
      </p>
    </div>
  )
}
