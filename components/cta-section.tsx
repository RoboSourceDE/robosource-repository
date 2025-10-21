import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 lg:py-20">
      <div className="rounded-2xl bg-gradient-to-b from-background to-card px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className="mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
          Bereit, die Automatisierung zu revolutionieren?
        </h2>
        <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-pretty text-sm sm:text-base lg:text-lg text-muted-foreground px-2">
          Werden Sie Teil der RoboSource-Community. Egal ob Sie Kapazitäten suchen oder anbieten, die Registrierung ist
          kostenlos und dauert nur wenige Minuten.
        </p>
        <Button
          size="lg"
          className="bg-primary px-6 sm:px-8 text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
        >
          Jetzt kostenlos registrieren
        </Button>
      </div>
    </section>
  )
}
