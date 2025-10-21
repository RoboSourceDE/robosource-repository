import { SearchCheck, FileCheck, Bot } from "lucide-react"

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
    <section className="container mx-auto px-4 py-20" id="funktioniert">
      <h2 className="mb-16 text-balance text-center text-3xl font-bold text-foreground lg:text-4xl">
        So einfach funktioniert es
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-10 w-10 text-primary" />
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
