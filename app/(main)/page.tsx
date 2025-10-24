import { HeroSection } from "@/components/hero-section"
import { NearbyRobots } from "@/components/nearby-robots"
import { RobotFilters } from "@/components/robot-filters"
import { TrustSignals } from "@/components/trust-signals"
import { HowItWorks } from "@/components/how-it-works"
import { MerchantCTASection } from "@/components/merchant-cta-section"
import { ContentAuthority } from "@/components/content-authority"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Roboter in der Nähe */}
      <NearbyRobots />

      {/* Section 3: Quick Search Module */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RobotFilters />
        </div>
      </section>

      {/* Section 4: Trust Signals / Social Proof */}
      <TrustSignals />

      {/* Section 5: So funktioniert's */}
      <HowItWorks />

      {/* Section 6: Secondary CTA - Händler werden */}
      <MerchantCTASection />

      {/* Section 7: Content & Authority */}
      <ContentAuthority />
    </div>
  )
}
