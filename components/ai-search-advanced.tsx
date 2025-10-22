"use client"

import { Sparkles, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface AISearchAdvancedProps {
  filterType: "mieten" | "kaufen"
  onSearch?: (query: string) => void
  onFilterChange?: (filters: Record<string, string>) => void
}

export function AISearchAdvanced({ filterType, onSearch, onFilterChange }: AISearchAdvancedProps) {
  const [query, setQuery] = useState("")
  const [aiTags, setAiTags] = useState<Array<{ key: string; label: string; value: string }>>([])

  const placeholders = {
    kaufen: "z.B. Industrieroboter für Logistik, mind. 15kg Traglast, neuwertig",
    mieten: "z.B. Roboter für Inspektion mieten, Raum Stuttgart, mind. 8h Akkulaufzeit",
  }

  const handleSearch = () => {
    if (!query.trim()) return

    const mockTags = [
      { key: "application", label: "Anwendung", value: "Logistik" },
      { key: "weight", label: "Traglast", value: ">15kg" },
      { key: "condition", label: "Zustand", value: "Neu" },
    ]
    setAiTags(mockTags)

    // Notify parent components
    onSearch?.(query)
    const filters = mockTags.reduce((acc, tag) => ({ ...acc, [tag.key]: tag.value }), {})
    onFilterChange?.(filters)
  }

  const removeTag = (key: string) => {
    setAiTags(aiTags.filter((tag) => tag.key !== key))
  }

  return (
    <div className="space-y-4">
      {/* Main Search Field */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <span className="hidden sm:inline text-sm font-semibold text-foreground">Source AI</span>
        </div>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={placeholders[filterType]}
          className="h-14 sm:h-16 text-sm sm:text-base pl-24 sm:pl-32 pr-32 bg-background border-2 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-xl shadow-lg"
        />
        <Button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 sm:px-6"
        >
          <Search className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Suchen</span>
        </Button>
      </div>

      {/* AI Feedback Tags */}
      {aiTags.length > 0 && (
        <div className="flex flex-wrap gap-2 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>KI-erkannte Filter:</span>
          </div>
          {aiTags.map((tag) => (
            <Badge
              key={tag.key}
              variant="secondary"
              className="bg-primary/10 text-primary border border-primary/30 pl-3 pr-2 py-1.5 text-sm font-medium"
            >
              <span className="font-semibold">{tag.label}:</span>
              <span className="ml-1">{tag.value}</span>
              <button
                onClick={() => removeTag(tag.key)}
                className="ml-2 hover:bg-primary/20 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <p className="text-xs sm:text-sm text-muted-foreground text-center">
        Beschreiben Sie Ihre Anforderungen in natürlicher Sprache – unsere KI findet den perfekten Roboter für Sie.
      </p>
    </div>
  )
}
