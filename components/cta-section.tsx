import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="rounded-2xl bg-gradient-to-b from-background to-card px-8 py-16 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold text-foreground lg:text-4xl">
          Bereit, die Automatisierung zu revolutionieren?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground">
          Werden Sie Teil der RoboSource-Community. Egal ob Sie Kapazitäten suchen oder anbieten, die Registrierung ist
          kostenlos und dauert nur wenige Minuten.
        </p>
        <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
          Jetzt kostenlos registrieren
        </Button>
      </div>
    </section>
  )
}
