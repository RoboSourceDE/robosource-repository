import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { AboutProof } from "@/components/about/about-proof"
import { AboutCta } from "@/components/about/about-cta"

export default function UeberUnsPage() {
  return (
    <main className="pt-0">
      <AboutMission />
      <AboutTeam />
      <AboutValues />
      <AboutProof />
      <AboutCta />
    </main>
  )
}
