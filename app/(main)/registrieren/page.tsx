import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Store, ArrowRight } from "lucide-react"

export default function RegistrierenPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-background px-4 py-8">
      {/* Logo */}
      <Link href="/" className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">RS</span>
          </div>
          <span className="text-2xl font-bold text-foreground">RoboSource</span>
        </div>
      </Link>

      {/* Main Content */}
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Wie möchten Sie RoboSource nutzen?</h1>
          <p className="text-muted-foreground text-lg">Wählen Sie die passende Option für Ihre Bedürfnisse</p>
        </div>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Customer Option */}
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Ich möchte kaufen/mieten</CardTitle>
              <CardDescription className="text-base">
                Zugang zu geprüften humanoiden Robotern für Ihr Unternehmen oder Ihre Forschung
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Sofortiger Zugang zum Marktplatz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Vergleichen Sie Angebote von geprüften Händlern</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Sichere Transaktionen und Support</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold group-hover:shadow-lg transition-all"
              >
                <Link href="/registrieren/kunde">
                  Als Kunde registrieren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Merchant Option */}
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Ich möchte Händler werden</CardTitle>
              <CardDescription className="text-base">
                Verkaufen Sie Ihre humanoiden Roboter auf Deutschlands führendem Marktplatz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Erreichen Sie spezialisierte B2B-Käufer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Professionelle Verkaufsplattform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Transparente Konditionen und Support</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full h-11 border-primary text-primary hover:bg-primary hover:text-white font-semibold group-hover:shadow-lg transition-all bg-transparent"
              >
                <Link href="/haendler-werden">
                  Zum Händler-Programm
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Back to Login */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Bereits registriert?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Zur Anmeldung
            </Link>
          </p>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="mt-8 flex gap-4 text-xs text-muted-foreground">
        <Link href="/impressum" className="hover:text-primary transition-colors">
          Impressum
        </Link>
        <span>•</span>
        <Link href="/datenschutz" className="hover:text-primary transition-colors">
          Datenschutz
        </Link>
        <span>•</span>
        <Link href="/agb" className="hover:text-primary transition-colors">
          AGB
        </Link>
      </div>
    </div>
  )
}
