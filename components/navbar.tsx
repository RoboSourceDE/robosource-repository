"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  console.log("[v0] Navbar rendering, pathname:", pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

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
          <Link
            href="/kaufen"
            className={`text-sm transition-colors ${
              isActive("/kaufen") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Roboter kaufen
          </Link>
          <Link
            href="/mieten"
            className={`text-sm transition-colors ${
              isActive("/mieten") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Roboter mieten
          </Link>
          <Link
            href="/haendler-werden"
            className={`text-sm font-medium transition-colors ${
              isActive("/haendler-werden") ? "text-primary" : "text-primary hover:text-primary/80"
            }`}
          >
            Händler werden
          </Link>
          <Link
            href="/ueber-uns"
            className={`text-sm transition-colors ${
              isActive("/ueber-uns") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Über Uns
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-3 py-4 space-y-3">
            <Link
              href="/kaufen"
              className={`block text-sm transition-colors py-2 ${
                isActive("/kaufen") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Roboter kaufen
            </Link>
            <Link
              href="/mieten"
              className={`block text-sm transition-colors py-2 ${
                isActive("/mieten") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Roboter mieten
            </Link>
            <Link
              href="/haendler-werden"
              className={`block text-sm font-medium transition-colors py-2 ${
                isActive("/haendler-werden") ? "text-primary" : "text-primary hover:text-primary/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Händler werden
            </Link>
            <Link
              href="/ueber-uns"
              className={`block text-sm transition-colors py-2 ${
                isActive("/ueber-uns") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Über Uns
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
