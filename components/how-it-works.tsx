import { Search, FileCheck, Truck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "1. Suchen & Finden",
    description: "Durchsuchen Sie hunderte von Robotern mit präzisen Filtern für Ihre spezifischen Anforderungen.",
  },
  {
    icon: FileCheck,
    title: "2. Sicher Buchen oder Verkaufen",
    description:
      "Mieten oder kaufen Sie direkt über unsere Plattform mit transparenten Verträgen und sicherer Zahlungsabwicklung.",
  },
  {
    icon: Truck,
    title: "3. Einsetzen & Profitieren",
    description:
      "Erhalten Sie Ihren Roboter pünktlich zum Einsatz oder vermarkten Sie Ihre ungenutzte Hardware an ein breites Publikum.",
  },
]

export function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-20" id="funktioniert">
      <h2 className="mb-16 text-balance text-center text-3xl font-bold text-foreground lg:text-4xl">
        So einfach funktioniert es
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <Icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-pretty text-muted-foreground">{step.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
