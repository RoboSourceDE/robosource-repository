"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-foreground">
          RoboSource
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#mieten" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Roboter mieten
          </Link>
          <Link href="#verkaufen" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Roboter verkaufen
          </Link>
          <Link href="#funktioniert" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Wie es funktioniert
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Registrieren</Button>
        </div>
      </div>
    </nav>
  )
}
