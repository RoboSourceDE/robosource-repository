import { MapPin, Award, Newspaper } from "lucide-react"

const partners = [
  { name: "Boston Dynamics", logo: "/boston-dynamics-logo.jpg" },
  { name: "SoftBank Robotics", logo: "/softbank-robotics-logo.jpg" },
  { name: "Tesla", logo: "/tesla-logo.png" },
  { name: "Hanson Robotics", logo: "/hanson-robotics-logo.jpg" },
]

const pressLogos = [
  { name: "TechCrunch", logo: "/techcrunch-logo.png" },
  { name: "Handelsblatt", logo: "/handelsblatt-logo.jpg" },
  { name: "Wired", logo: "/wired-logo.png" },
]

export function AboutProof() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Partner Logos */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Vertraut von führenden Herstellern</h2>
              </div>
              <p className="text-muted-foreground">Wir arbeiten mit den besten Robotik-Unternehmen weltweit zusammen</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="w-full h-16 relative grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Press Mentions */}
          <div>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Newspaper className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Bekannt aus</h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 items-center justify-center">
              {pressLogos.map((press) => (
                <div
                  key={press.name}
                  className="h-10 relative grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                >
                  <img src={press.logo || "/placeholder.svg"} alt={press.name} className="h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Unser Standort in Deutschland</h3>
                <p className="text-muted-foreground mb-4">
                  Wir sind kein Briefkasten-Unternehmen. RoboSource hat seinen Hauptsitz in München und ist fest in der
                  deutschen Robotik-Community verankert.
                </p>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">RoboSource GmbH</p>
                  <p className="text-muted-foreground">Maximilianstraße 13</p>
                  <p className="text-muted-foreground">80539 München</p>
                  <p className="text-muted-foreground">Deutschland</p>
                </div>
              </div>
            </div>
            <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
              <img src="/munich-city-map.jpg" alt="Standort München" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
