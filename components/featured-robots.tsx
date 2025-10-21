import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const robots = [
  {
    name: "UR5e Cobot",
    category: "Industrie",
    price: "Ab 250€ / Tag",
    image: "/ur5e-collaborative-robot-industrial-arm.jpg",
  },
  {
    name: "AMR Logistics Bot",
    category: "Logistik",
    price: "Ab 180€ / Tag",
    image: "/autonomous-mobile-robot-warehouse-logistics.jpg",
  },
  {
    name: "Inspection Drone",
    category: "Inspektion",
    price: "Kaufpreis: 12.000€",
    image: "/industrial-inspection-drone-quadcopter.jpg",
  },
  {
    name: "Service Robot",
    category: "Service",
    price: "Ab 320€ / Tag",
    image: "/humanoid-service-robot-hospitality.jpg",
  },
]

export function FeaturedRobots() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-12 text-balance text-center text-3xl font-bold text-foreground lg:text-4xl">
        Top Roboter im Angebot
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {robots.map((robot, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-2 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
          >
            <CardContent className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={robot.image || "/placeholder.svg"}
                  alt={robot.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-lg font-semibold text-card-foreground">{robot.name}</h3>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {robot.category}
                </Badge>
                <p className="text-sm font-medium text-muted-foreground">{robot.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
