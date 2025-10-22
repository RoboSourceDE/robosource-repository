import { UserPlus, CheckCircle, Package, TrendingUp } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Bewerben",
    description: "Füllen Sie das Registrierungsformular aus und reichen Sie Ihre Unternehmensunterlagen ein",
  },
  {
    number: 2,
    icon: CheckCircle,
    title: "Verifizieren",
    description: "Unser Team prüft Ihre Angaben und verifiziert Ihr Unternehmen (ca. 2-3 Werktage)",
  },
  {
    number: 3,
    icon: Package,
    title: "Produkte listen",
    description: "Erstellen Sie Ihre Produktangebote im Händler-Dashboard mit Bildern und Details",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Verkaufen",
    description: "Erreichen Sie qualifizierte Käufer und steigern Sie Ihren Umsatz",
  },
]

export function MerchantProcess() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">So funktioniert's</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In vier einfachen Schritten zum erfolgreichen Händler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
