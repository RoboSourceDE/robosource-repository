import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
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

      {/* Login Card */}
      <Card className="w-full max-w-md border-border/50 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl md:text-3xl font-bold">Willkommen zurück</CardTitle>
          <CardDescription className="text-muted-foreground">
            Melden Sie sich mit Ihrer E-Mail-Adresse an
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail-Adresse</Label>
              <Input id="email" type="email" placeholder="ihre@email.de" required className="h-11" />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Passwort</Label>
                <Link
                  href="/passwort-vergessen"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Passwort vergessen?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required className="h-11" />
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold">
              Anmelden
            </Button>
          </form>

          {/* Registration Link */}
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Noch kein Konto?{" "}
              <Link href="/registrieren" className="text-primary font-semibold hover:underline">
                Jetzt registrieren
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
