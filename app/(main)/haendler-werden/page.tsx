import { MerchantHero } from "@/components/merchant/merchant-hero"
import { MerchantBenefits } from "@/components/merchant/merchant-benefits"
import { MerchantProcess } from "@/components/merchant/merchant-process"
import { MerchantPricing } from "@/components/merchant/merchant-pricing"
import { MerchantRequirements } from "@/components/merchant/merchant-requirements"
import { MerchantFAQ } from "@/components/merchant/merchant-faq"
import { MerchantContact } from "@/components/merchant/merchant-contact"
import { MerchantCTA } from "@/components/merchant/merchant-cta"

export default function HaendlerWerdenPage() {
  return (
    <main>
      <MerchantHero />
      <MerchantBenefits />
      <MerchantProcess />
      <MerchantPricing />
      <MerchantRequirements />
      <MerchantFAQ />
      <MerchantContact />
      <MerchantCTA />
    </main>
  )
}
