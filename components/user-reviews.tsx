import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reviews = [
  {
    id: 1,
    name: "Michael Schmidt",
    role: "Logistikleiter",
    company: "LogiTech GmbH",
    avatar: "/confident-businessman.png",
    rating: 5,
    text: "Die Miete des Atlas Pro hat unsere Lagerlogistik revolutioniert. Einfache Abwicklung und hervorragender Support!",
    date: "Vor 2 Wochen",
  },
  {
    id: 2,
    name: "Sarah Weber",
    role: "Geschäftsführerin",
    company: "ServiceBot Solutions",
    avatar: "/confident-business-woman.png",
    rating: 5,
    text: "Pepper hat sich perfekt in unser Kundenservice-Team integriert. Die Kunden lieben die Interaktion!",
    date: "Vor 1 Monat",
  },
  {
    id: 3,
    name: "Dr. Thomas Müller",
    role: "Forschungsleiter",
    company: "TU München",
    avatar: "/diverse-professor-lecturing.png",
    rating: 5,
    text: "NAO Evolution ist ideal für unsere Bildungsforschung. Zuverlässig, vielseitig und einfach zu programmieren.",
    date: "Vor 3 Wochen",
  },
]

export function UserReviews() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erfahrungen von Unternehmen und Organisationen, die bereits humanoide Roboter nutzen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-xs text-muted-foreground/80">{review.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm text-foreground/90 mb-3 leading-relaxed">{review.text}</p>

                <p className="text-xs text-muted-foreground">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
