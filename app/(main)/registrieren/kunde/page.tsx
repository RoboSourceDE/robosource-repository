import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

export default function KundenRegistrierungPage() {
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

      {/* Registration Card */}
      <Card className="w-full max-w-md border-border/50 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/registrieren" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <CardTitle className="text-2xl md:text-3xl font-bold">Kunden-Registrierung</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            Erstellen Sie Ihr Konto und starten Sie Ihre Suche nach dem perfekten Roboter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vorname">Vorname</Label>
                <Input id="vorname" type="text" placeholder="Max" required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachname">Nachname</Label>
                <Input id="nachname" type="text" placeholder="Mustermann" required className="h-11" />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail-Adresse</Label>
              <Input id="email" type="email" placeholder="max.mustermann@firma.de" required className="h-11" />
            </div>

            {/* Company Field (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="firma">Firma (optional)</Label>
              <Input id="firma" type="text" placeholder="Ihre Firma GmbH" className="h-11" />
            </div>

            {/* Password Fields */}
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input id="password" type="password" placeholder="Mindestens 8 Zeichen" required className="h-11" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-confirm">Passwort bestätigen</Label>
              <Input
                id="password-confirm"
                type="password"
                placeholder="Passwort wiederholen"
                required
                className="h-11"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <Checkbox id="terms" required className="mt-1" />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                Ich akzeptiere die{" "}
                <Link href="/agb" className="text-primary hover:underline">
                  AGB
                </Link>{" "}
                und die{" "}
                <Link href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>
              </Label>
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-2">
              <Checkbox id="newsletter" className="mt-1" />
              <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                Ich möchte über neue Angebote und Neuigkeiten informiert werden (optional)
              </Label>
            </div>

            {/* Register Button */}
            <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold">
              Jetzt registrieren
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Bereits registriert?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Zur Anmeldung
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>

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
