"use client"

import { Building2, Award, Shield, Users } from "lucide-react"

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "RoboIndustries", logo: "RI" },
  { name: "FutureAI", logo: "FA" },
  { name: "AutomationPro", logo: "AP" },
]

const stats = [
  { icon: Building2, value: "50+", label: "Verifizierte Händler" },
  { icon: Award, value: "200+", label: "Roboter-Modelle" },
  { icon: Shield, value: "100%", label: "Sichere Transaktionen" },
  { icon: Users, value: "1000+", label: "Zufriedene Kunden" },
]

export function TrustSignals() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vertraut von führenden Institutionen</h2>
          <p className="text-lg text-muted-foreground">Deutschlands führende Plattform für humanoide Robotik</p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl font-bold text-primary/30">{partner.logo}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
