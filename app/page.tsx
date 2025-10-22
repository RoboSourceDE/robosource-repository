import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { RobotFilters } from "@/components/robot-filters"
import { FeaturedRobots } from "@/components/featured-robots"
import { UserReviews } from "@/components/user-reviews"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SourceAIChat } from "@/components/source-ai-chat"

export default function Home() {
  console.log("[v0] Home page rendering")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[100px]">
        <HeroSection />
        <HowItWorks />
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RobotFilters />
          </div>
        </section>
        <FeaturedRobots />
        <UserReviews />
        <CTASection />
      </main>
      <Footer />
      <SourceAIChat />
    </div>
  )
}
