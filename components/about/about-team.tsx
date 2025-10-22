import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Michael Schmidt",
    position: "Gründer & CEO",
    expertise: "15 Jahre Erfahrung im B2B-Plattform-Aufbau und Robotik-Vertrieb",
    linkedin: "https://linkedin.com",
    image: "/confident-businessman.png",
  },
  {
    name: "Sarah Weber",
    position: "Co-Gründerin & CTO",
    expertise: "Promovierte Robotik-Ingenieurin mit Fokus auf humanoide Systeme",
    linkedin: "https://linkedin.com",
    image: "/confident-business-woman.png",
  },
  {
    name: "Prof. Dr. Thomas Müller",
    position: "Head of Partnerships",
    expertise: "Ehemaliger Lehrstuhlinhaber für Robotik, 20+ Jahre Industrieerfahrung",
    linkedin: "https://linkedin.com",
    image: "/diverse-professor-lecturing.png",
  },
]

export function AboutTeam() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Das Team hinter RoboSource</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise, Leidenschaft und Engagement für die Zukunft der humanoiden Robotik in Deutschland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="text-center space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.expertise}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profil
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
