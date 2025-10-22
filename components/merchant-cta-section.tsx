import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Users,
    text: "Erreichen Sie eine hochspezialisierte Käuferschicht",
  },
  {
    icon: TrendingUp,
    text: "Profitieren Sie von unserer Reichweite im B2B-Sektor",
  },
  {
    icon: Shield,
    text: "Sichere und transparente Transaktionen",
  },
]

export function MerchantCTASection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Verkaufen Sie Ihre Roboter auf RoboSource
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Werden Sie Teil von Deutschlands führendem Marktplatz für humanoide Roboter und erschließen Sie neue
          Vertriebskanäle.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{benefit.text}</p>
            </div>
          ))}
        </div>

        <Link href="/haendler-werden">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg group">
            Jetzt Händler werden
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
