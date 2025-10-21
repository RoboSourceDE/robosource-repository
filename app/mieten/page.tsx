import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AISearch } from "@/components/ai-search"
import { MarketplaceFilters } from "@/components/marketplace-filters"
import { RobotGrid } from "@/components/robot-grid"

export default function MietenPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-12">
          {/* AI Search - smaller and more compact */}
          <div className="mb-6">
            <AISearch />
          </div>

          <div className="mb-6">
            <MarketplaceFilters filterType="mieten" />
          </div>

          {/* Robot Grid */}
          <div className="lg:ml-0">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Humanoide Roboter mieten
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Finden Sie den perfekten humanoiden Roboter für Ihre Anforderungen
              </p>
            </div>
            <RobotGrid filterType="mieten" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
