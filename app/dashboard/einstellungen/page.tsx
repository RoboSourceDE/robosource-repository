import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Einstellungen</h1>
        <p className="text-muted-foreground">
          Verwalten Sie Ihr Konto, ändern Sie Ihr Passwort und konfigurieren Sie Ihre Präferenzen.
        </p>
      </div>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Konto-Einstellungen</CardTitle>
          <CardDescription>Verwalten Sie Ihre E-Mail-Adresse und Passwort</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail-Adresse</Label>
            <Input id="email" type="email" defaultValue="max.mustermann@example.com" />
          </div>
          <Button>E-Mail ändern</Button>

          <Separator className="my-6" />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Passwort ändern</h3>
            <div className="space-y-2">
              <Label htmlFor="current-password">Aktuelles Passwort</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Neues Passwort</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Passwort bestätigen</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Passwort ändern</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Benachrichtigungen</CardTitle>
          <CardDescription>Wählen Sie, wie Sie benachrichtigt werden möchten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>E-Mail-Benachrichtigungen</Label>
              <p className="text-sm text-muted-foreground">Erhalten Sie Updates per E-Mail</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Neue Nachrichten</Label>
              <p className="text-sm text-muted-foreground">Benachrichtigung bei neuen Chat-Nachrichten</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Buchungs-Updates</Label>
              <p className="text-sm text-muted-foreground">Updates zu Ihren Buchungen</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Zahlungsmethoden</CardTitle>
          <CardDescription>Verwalten Sie Ihre gespeicherten Zahlungsmethoden</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Visa •••• 4242</p>
                <p className="text-sm text-muted-foreground">Läuft ab 12/2025</p>
              </div>
              <Button variant="outline" size="sm">
                Bearbeiten
              </Button>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Neue Zahlungsmethode hinzufügen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
