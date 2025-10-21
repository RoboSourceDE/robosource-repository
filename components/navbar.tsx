"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-border backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled ? "h-[60px] bg-background/30 shadow-sm" : "h-[100px] bg-background/70"
      }`}
    >
      <div
        className={`container mx-auto flex h-full items-center justify-between transition-all duration-300 ${
          isScrolled ? "px-2 sm:px-3" : "px-3 sm:px-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold text-foreground">
          RoboSource
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:gap-8 lg:flex">
          <Link href="/mieten" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Roboter mieten
          </Link>
          <Link href="/kaufen" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Roboter kaufen
          </Link>
          <Link href="/#funktioniert" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Wie es funktioniert
          </Link>
          <Link href="/#haendler" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
            Händler werden
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent hidden sm:flex"
          >
            Login
          </Button>
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-3 py-4 space-y-3">
            <Link
              href="/mieten"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roboter mieten
            </Link>
            <Link
              href="/kaufen"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roboter kaufen
            </Link>
            <Link
              href="/#funktioniert"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wie es funktioniert
            </Link>
            <Link
              href="/#haendler"
              className="block text-sm font-medium text-primary transition-colors hover:text-primary/80 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Händler werden
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
