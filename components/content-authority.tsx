import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Newspaper, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    icon: TrendingUp,
    title: "Die 5 wichtigsten Trends in der humanoiden Robotik 2025",
    excerpt: "Erfahren Sie, welche Entwicklungen die Branche revolutionieren werden.",
    date: "15. Januar 2025",
    href: "#",
  },
  {
    icon: Newspaper,
    title: "Neues Modell von Boston Dynamics vorgestellt",
    excerpt: "Atlas Pro setzt neue Maßstäbe in Mobilität und Präzision.",
    date: "10. Januar 2025",
    href: "#",
  },
  {
    icon: Lightbulb,
    title: "Humanoide Roboter in der Logistik: Ein Praxisbericht",
    excerpt: "Wie Unternehmen von der Automatisierung profitieren.",
    date: "5. Januar 2025",
    href: "#",
  },
]

export function ContentAuthority() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            News & Einblicke aus der humanoiden Robotik
          </h2>
          <p className="text-lg text-muted-foreground">Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.href} className="group">
              <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <article.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
