import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AISearch } from "@/components/ai-search"
import { MarketplaceFilters } from "@/components/marketplace-filters"
import { RobotGrid } from "@/components/robot-grid"

export default function MietenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-[100px]">
        <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Roboter Mieten</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Finden Sie den perfekten humanoiden Roboter für Ihre temporären Projekte
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <AISearch />
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <MarketplaceFilters filterType="mieten" />
              <div className="flex-1 min-w-0">
                <RobotGrid filterType="mieten" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
