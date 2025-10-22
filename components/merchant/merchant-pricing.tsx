import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingFeatures = [
  {
    title: "Registrierungsgebühr",
    price: "99€",
    period: "einmalig",
    description: "Einmalige Gebühr für die Verifizierung und Freischaltung Ihres Händler-Accounts",
  },
  {
    title: "Monatliche Grundgebühr",
    price: "49€",
    period: "pro Monat",
    description: "Zugang zum Händler-Dashboard, unbegrenzte Produktlistings und Support",
  },
  {
    title: "Verkaufsprovision",
    price: "5%",
    period: "pro Verkauf",
    description: "Faire Provision nur bei erfolgreichem Verkauf - keine versteckten Kosten",
  },
]

const includedFeatures = [
  "Unbegrenzte Produktlistings",
  "Professionelles Händler-Dashboard",
  "Sichere Zahlungsabwicklung",
  "Verkaufsstatistiken & Analytics",
  "Prioritäts-Support",
  "Marketing-Tools & Promotion",
]

export function MerchantPricing() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Konditionen & Gebühren</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Transparente Preise ohne versteckte Kosten</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingFeatures.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{feature.price}</div>
                  <div className="text-sm text-muted-foreground font-normal">{feature.period}</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Im Paket enthalten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
