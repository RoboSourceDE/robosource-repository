import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const robots = [
  {
    name: "Atlas Pro",
    manufacturer: "Boston Dynamics",
    price: "Ab 450€ / Tag",
    image: "/humanoid-robot-atlas-boston-dynamics.jpg",
  },
  {
    name: "Pepper",
    manufacturer: "SoftBank Robotics",
    price: "Ab 320€ / Tag",
    image: "/pepper-humanoid-robot-softbank.jpg",
  },
  {
    name: "NAO Evolution",
    manufacturer: "SoftBank Robotics",
    price: "Kaufpreis: 8.500€",
    image: "/nao-humanoid-robot-education.jpg",
  },
  {
    name: "Optimus Gen 2",
    manufacturer: "Tesla",
    price: "Ab 580€ / Tag",
    image: "/tesla-optimus-humanoid-robot.jpg",
  },
]

export function FeaturedRobots() {
  return (
    <section className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 lg:py-20">
      <h2 className="mb-8 sm:mb-12 text-balance text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        Top humanoide Roboter im Angebot
      </h2>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {robots.map((robot, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-2 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
          >
            <CardContent className="p-0">
              <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={robot.image || "/placeholder.svg?height=400&width=400&query=humanoid robot"}
                  alt={robot.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 sm:space-y-3 p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-card-foreground">{robot.name}</h3>
                <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                  {robot.manufacturer}
                </Badge>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">{robot.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
