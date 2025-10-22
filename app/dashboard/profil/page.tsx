"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ProfilPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profil bearbeiten</h1>
        <p className="text-muted-foreground mt-2">Verwalten Sie Ihre persönlichen Daten und Einstellungen</p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Persönliche Daten</CardTitle>
          <CardDescription>Aktualisieren Sie Ihre Kontaktinformationen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Max Mustermann" className="bg-background border-border text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              defaultValue="max@beispiel.de"
              className="bg-background border-border text-foreground"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Änderungen speichern</Button>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Passwort ändern</CardTitle>
          <CardDescription>Aktualisieren Sie Ihr Passwort für mehr Sicherheit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Aktuelles Passwort</Label>
            <Input
              id="current-password"
              type="password"
              placeholder="••••••••"
              className="bg-background border-border text-foreground"
            />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="new-password">Neues Passwort</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="••••••••"
              className="bg-background border-border text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Neues Passwort bestätigen</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="bg-background border-border text-foreground"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Passwort ändern</Button>
        </CardContent>
      </Card>
    </div>
  )
}
