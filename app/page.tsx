import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RobotFilters } from "@/components/robot-filters"
import { TrustSignals } from "@/components/trust-signals"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedRobots } from "@/components/featured-robots"
import { MerchantCTASection } from "@/components/merchant-cta-section"
import { ContentAuthority } from "@/components/content-authority"
import { Footer } from "@/components/footer"
import { SourceAIChat } from "@/components/source-ai-chat"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[100px]">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Quick Search Module */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RobotFilters />
          </div>
        </section>

        {/* Section 3: Trust Signals / Social Proof */}
        <TrustSignals />

        {/* Section 4: So funktioniert's */}
        <HowItWorks />

        {/* Section 5: Product Showcase */}
        <FeaturedRobots />

        {/* Section 6: Secondary CTA - Händler werden */}
        <MerchantCTASection />

        {/* Section 7: Content & Authority */}
        <ContentAuthority />
      </main>
      <Footer />
      <SourceAIChat />
    </div>
  )
}
