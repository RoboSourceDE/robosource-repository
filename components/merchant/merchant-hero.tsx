import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MerchantHero() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Verkaufen Sie Ihre humanoiden Roboter auf{" "}
          <span className="text-primary">Deutschlands führendem Marktplatz</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 text-pretty max-w-2xl mx-auto">
          Erreichen Sie Tausende spezialisierte Käufer und steigern Sie Ihren Umsatz.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
          Jetzt als Händler registrieren
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
