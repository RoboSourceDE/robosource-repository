import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MerchantCTA() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-t from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Bereit, Ihre Reichweite zu erhöhen?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
          Werden Sie Teil von Deutschlands führendem Marktplatz für humanoide Roboter und erreichen Sie qualifizierte
          Käufer.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
          Jetzt als Händler registrieren
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          Haben Sie Fragen? Kontaktieren Sie uns unter{" "}
          <a href="mailto:haendler@robosource.de" className="text-primary hover:underline">
            haendler@robosource.de
          </a>
        </p>
      </div>
    </section>
  )
}
