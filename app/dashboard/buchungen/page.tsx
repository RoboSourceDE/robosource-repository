import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Clock } from "lucide-react"

export default function BookingsPage() {
  const bookings = [
    {
      id: 1,
      type: "Miete",
      robot: "Atlas Humanoid",
      merchant: "Boston Dynamics Partner",
      startDate: "15.01.2025",
      endDate: "15.02.2025",
      status: "Aktiv",
      price: "2.500€/Monat",
    },
    {
      id: 2,
      type: "Kauf",
      robot: "Pepper Robot",
      merchant: "SoftBank Robotics DE",
      date: "10.01.2025",
      status: "Geliefert",
      price: "18.000€",
    },
    {
      id: 3,
      type: "Miete",
      robot: "NAO Robot",
      merchant: "RoboTech Solutions",
      startDate: "01.02.2025",
      endDate: "01.03.2025",
      status: "Geplant",
      price: "1.200€/Monat",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Meine Buchungen</h1>
        <p className="text-muted-foreground">Hier sehen Sie alle Ihre Käufe und Mieten von humanoiden Robotern.</p>
      </div>

      <div className="grid gap-4">
        {bookings.map((booking) => (
          <Card key={booking.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {booking.type === "Miete" ? (
                      <Clock className="h-5 w-5 text-primary" />
                    ) : (
                      <Package className="h-5 w-5 text-primary" />
                    )}
                    {booking.robot}
                  </CardTitle>
                  <CardDescription>{booking.merchant}</CardDescription>
                </div>
                <Badge
                  variant={
                    booking.status === "Aktiv" ? "default" : booking.status === "Geliefert" ? "secondary" : "outline"
                  }
                >
                  {booking.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Typ:</span>
                  <span className="font-medium">{booking.type}</span>
                </div>
                {booking.type === "Miete" ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Zeitraum:</span>
                      <span className="font-medium">
                        {booking.startDate} - {booking.endDate}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kaufdatum:</span>
                    <span className="font-medium">{booking.date}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Preis:</span>
                  <span className="font-medium text-primary">{booking.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
