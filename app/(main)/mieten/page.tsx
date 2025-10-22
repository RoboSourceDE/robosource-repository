"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AISearchAdvanced } from "@/components/ai-search-advanced"
import { MarketplaceFiltersAI } from "@/components/marketplace-filters-ai"
import { RobotGridAI } from "@/components/robot-grid-ai"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function MietenPage() {
  const [aiFilters, setAiFilters] = useState<Record<string, string>>({})

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-[100px]">
        {/* Breadcrumbs & Header Section */}
        <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Roboter mieten</span>
            </nav>

            {/* Page Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Finden Sie Ihren humanoiden Roboter
            </h1>

            {/* AI Search */}
            <div className="mt-8">
              <AISearchAdvanced filterType="mieten" onFilterChange={setAiFilters} />
            </div>
          </div>
        </section>

        {/* Hybrid Interface: Filters + Results */}
        <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left: Filter Sidebar */}
              <MarketplaceFiltersAI filterType="mieten" aiFilters={aiFilters} />

              {/* Right: Results Display */}
              <div className="flex-1 min-w-0">
                <RobotGridAI filterType="mieten" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
