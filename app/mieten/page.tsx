import { AISearch } from "@/components/ai-search"
import { SidebarFilters } from "@/components/sidebar-filters"
import { RobotGrid } from "@/components/robot-grid"

export default function MietenPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        {/* AI Search */}
        <div className="mb-8 sm:mb-12">
          <AISearch />
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Sidebar Filters - Hidden on mobile, sticky on desktop */}
          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <SidebarFilters defaultType="mieten" />
          </aside>

          {/* Mobile Filters - Visible only on mobile */}
          <div className="lg:hidden">
            <SidebarFilters defaultType="mieten" />
          </div>

          {/* Robot Grid */}
          <div className="flex-1 lg:ml-80">
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
      </div>
    </main>
  )
}
