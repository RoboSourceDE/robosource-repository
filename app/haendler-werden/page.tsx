import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MerchantHero } from "@/components/merchant/merchant-hero"
import { MerchantBenefits } from "@/components/merchant/merchant-benefits"
import { MerchantProcess } from "@/components/merchant/merchant-process"
import { MerchantPricing } from "@/components/merchant/merchant-pricing"
import { MerchantRequirements } from "@/components/merchant/merchant-requirements"
import { MerchantFAQ } from "@/components/merchant/merchant-faq"
import { MerchantCTA } from "@/components/merchant/merchant-cta"

export default function HaendlerWerdenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[100px]">
        <MerchantHero />
        <MerchantBenefits />
        <MerchantProcess />
        <MerchantPricing />
        <MerchantRequirements />
        <MerchantFAQ />
        <MerchantCTA />
      </main>
      <Footer />
    </div>
  )
}
