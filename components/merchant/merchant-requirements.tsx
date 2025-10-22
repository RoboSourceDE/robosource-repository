import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const requirements = [
  "Firmensitz in Deutschland oder der EU",
  "Nachweisbare Gewerbeanmeldung oder Handelsregistereintrag",
  "Ausschließlicher Verkauf von humanoiden Robotern",
  "Akzeptanz unserer AGB für Händler",
  "Bereitstellung vollständiger Produktinformationen",
  "Einhaltung gesetzlicher Garantie- und Gewährleistungspflichten",
]

export function MerchantRequirements() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Anforderungen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wer darf auf RoboSource verkaufen?</p>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-8 md:p-10">
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground text-lg leading-relaxed">{requirement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Alle Händler durchlaufen einen Verifizierungsprozess, um die Qualität und Sicherheit unserer Plattform zu
          gewährleisten.
        </p>
      </div>
    </section>
  )
}
