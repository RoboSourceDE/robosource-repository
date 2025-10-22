import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake } from "lucide-react"
import Link from "next/link"

export function AboutCta() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Bereit, die Zukunft der Robotik zu erleben?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ob Sie humanoide Roboter kaufen, mieten oder verkaufen möchten – RoboSource ist Ihre Plattform für den
              deutschen Robotik-Markt.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <Link href="/kaufen">
                Entdecken Sie den Marktplatz
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group bg-transparent">
              <Link href="/haendler-werden">
                <Handshake className="mr-2 w-4 h-4" />
                Werden Sie jetzt Partner
              </Link>
            </Button>
          </div>

          {/* Optional: Career Section */}
          <div className="pt-8 border-t border-border mt-12">
            <p className="text-muted-foreground mb-4">
              Wir wachsen und suchen talentierte Menschen, die unsere Mission teilen.
            </p>
            <Button variant="link" asChild>
              <Link href="mailto:karriere@robosource.de">Karriere bei RoboSource →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
