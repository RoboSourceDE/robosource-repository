import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { AboutProof } from "@/components/about/about-proof"
import { AboutCta } from "@/components/about/about-cta"

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <AboutMission />
        <AboutTeam />
        <AboutValues />
        <AboutProof />
        <AboutCta />
      </main>
      <Footer />
    </div>
  )
}
