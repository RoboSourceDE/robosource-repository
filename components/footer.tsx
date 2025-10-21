import Link from "next/link"

const footerLinks = {
  Unternehmen: ["Über uns", "Karriere", "Presse"],
  Support: ["Kontakt", "FAQ", "Hilfe-Center"],
  Rechtliches: ["Impressum", "Datenschutz", "AGB"],
  Schnellzugriffe: ["Kategorien", "Blog", "Marktplatz", "Anbieter werden"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-foreground">{category}</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">© 2025 RoboSource GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
