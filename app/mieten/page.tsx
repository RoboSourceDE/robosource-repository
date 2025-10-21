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
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Roboter Mieten</h1>
          </div>

          {/* AI Search - smaller and more compact */}
          <div className="mb-6">
            <AISearch />
          </div>

          <div className="flex gap-8">
            <MarketplaceFilters filterType="mieten" />

            {/* Robot Grid - with proper spacing for sidebar */}
            <div className="flex-1 min-w-0">
              <RobotGrid filterType="mieten" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
