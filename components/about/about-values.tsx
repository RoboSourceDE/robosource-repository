import { Shield, Eye, Award, Lock } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Qualität",
    description:
      "Nur verifizierte Händler und geprüfte Angebote. Jeder Partner durchläuft einen strengen Qualifizierungsprozess.",
  },
  {
    icon: Eye,
    title: "Transparenz",
    description: "Offenlegung von Preisen, Konditionen und Prozessen. Keine versteckten Kosten, keine Überraschungen.",
  },
  {
    icon: Shield,
    title: "Expertise",
    description: "Wir sind keine Generalisten. Wir leben für humanoide Robotik und kennen den Markt wie kein anderer.",
  },
  {
    icon: Lock,
    title: "Sicherheit",
    description: "Sichere Transaktionen und deutsche Datenschutzstandards. Ihre Daten sind bei uns in besten Händen.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte & Prinzipien</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diese Grundsätze leiten unser tägliches Handeln und definieren, wofür RoboSource steht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
