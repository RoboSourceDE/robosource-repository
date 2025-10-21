import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        {/* Two-color Headline */}
        <h1 className="text-balance text-4xl font-bold leading-tight lg:text-6xl">
          <span className="text-muted-foreground">Die Handelsplattform für </span>
          <span className="text-primary">humanoide Roboter</span>
          <span className="text-muted-foreground"> in Deutschland</span>
        </h1>

        {/* Single CTA Button */}
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Jetzt Marktplatz entdecken
        </Button>
      </div>
    </section>
  )
}
