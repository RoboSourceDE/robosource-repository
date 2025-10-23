import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare } from "lucide-react"

export default function InboxPage() {
  const conversations = [
    {
      id: 1,
      merchant: "TechRobotics GmbH",
      lastMessage: "Gerne können wir Ihnen ein individuelles Angebot erstellen...",
      timestamp: "vor 2 Stunden",
      unread: 2,
      avatar: "TR",
    },
    {
      id: 2,
      merchant: "Boston Dynamics Partner",
      lastMessage: "Die Lieferung ist für nächste Woche geplant.",
      timestamp: "vor 5 Stunden",
      unread: 0,
      avatar: "BD",
    },
    {
      id: 3,
      merchant: "SoftBank Robotics DE",
      lastMessage: "Vielen Dank für Ihre Anfrage. Wir melden uns...",
      timestamp: "vor 1 Tag",
      unread: 1,
      avatar: "SR",
    },
    {
      id: 4,
      merchant: "RoboTech Solutions",
      lastMessage: "Der Wartungstermin wurde bestätigt.",
      timestamp: "vor 2 Tagen",
      unread: 0,
      avatar: "RS",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Posteingang</h1>
        <p className="text-muted-foreground">
          Ihr Chat-Verlauf mit Händlern. Kommunizieren Sie direkt über Anfragen und Buchungen.
        </p>
      </div>

      <div className="grid gap-4">
        {conversations.map((conversation) => (
          <Card key={conversation.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">{conversation.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <CardTitle className="text-base">{conversation.merchant}</CardTitle>
                    {conversation.unread > 0 && (
                      <Badge variant="default" className="ml-2">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="line-clamp-1">{conversation.lastMessage}</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                </div>
                <MessageSquare className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
