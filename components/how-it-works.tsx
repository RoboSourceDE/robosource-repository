import { SearchCheck, FileCheck, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: SearchCheck,
    title: "1. Humanoide Roboter finden",
    description:
      "Durchsuchen Sie unsere spezialisierte Auswahl an humanoiden Robotern für verschiedene Einsatzbereiche.",
  },
  {
    icon: FileCheck,
    title: "2. Sicher Mieten oder Kaufen",
    description:
      "Mieten oder kaufen Sie direkt über unsere Plattform mit transparenten Verträgen und sicherer Zahlungsabwicklung.",
  },
  {
    icon: Bot,
    title: "3. Einsetzen & Profitieren",
    description: "Erhalten Sie Ihren humanoiden Roboter pünktlich zum Einsatz in Service, Bildung oder Forschung.",
  },
]

export function HowItWorks() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5"
      id="funktioniert"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">So einfach funktioniert es</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In drei einfachen Schritten zu Ihrem humanoiden Roboter
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
