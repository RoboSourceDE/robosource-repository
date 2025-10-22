import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-t from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Bereit, die Automatisierung zu revolutionieren?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto text-pretty">
          Werden Sie Teil der RoboSource-Community. Egal ob Sie Kapazitäten suchen oder anbieten, die Registrierung ist
          kostenlos und dauert nur wenige Minuten.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
          Jetzt kostenlos registrieren
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
