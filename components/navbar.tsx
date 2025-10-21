"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

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
          <Link href="#haendler" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
            Händler werden
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="outline"
            className="text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}
