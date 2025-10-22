import { Target, Package, Shield, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Target,
    title: "Fokussierte Zielgruppe",
    description: "Zugang zu 100% relevanten Käufern aus Forschung, Industrie & Dienstleistung",
  },
  {
    icon: Package,
    title: "Einfaches Listing",
    description: "Unkompliziertes Einstellen und Verwalten Ihrer Produkte über unser Dashboard",
  },
  {
    icon: Shield,
    title: "Sichere Transaktionen",
    description: "Verifizierte Käufer und sichere Zahlungsabwicklung für Ihre Sicherheit",
  },
  {
    icon: Sparkles,
    title: "Spezialisierter Fokus",
    description: "Die einzige Plattform ausschließlich für humanoide Robotik in Deutschland",
  },
]

export function MerchantBenefits() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ihre Vorteile</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Warum RoboSource die beste Wahl für Ihren Roboter-Vertrieb ist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
