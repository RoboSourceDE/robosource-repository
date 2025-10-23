"use client"

import type React from "react"
import { LayoutDashboard, CalendarCheck, Inbox, Heart, UserCircle, Settings, LogOut, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Übersicht", icon: LayoutDashboard },
    { href: "/dashboard/buchungen", label: "Meine Buchungen", icon: CalendarCheck },
    { href: "/dashboard/posteingang", label: "Posteingang", icon: Inbox },
    { href: "/dashboard/merkliste", label: "Merkliste", icon: Heart },
    { href: "/dashboard/profil", label: "Profil", icon: UserCircle },
    { href: "/dashboard/einstellungen", label: "Einstellungen", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border bg-card p-6 flex flex-col">
        {/* Logo with green accent */}
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/robosource-logo.png" alt="RoboSource Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">RoboSource</span>
          </Link>
        </div>

        {/* Profile section with avatar and username */}
        <div className="mb-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Max Mustermann" />
              <AvatarFallback className="bg-primary text-primary-foreground">MM</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">Max Mustermann</p>
              <p className="text-xs text-muted-foreground truncate">Kunde</p>
            </div>
          </div>
        </div>

        <Button asChild variant="outline" className="mb-6 w-full justify-start bg-transparent">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </Button>

        <Separator className="mb-6" />

        {/* Navigation with active state highlighting */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-6">
          <Separator className="mb-4" />
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-destructive hover:bg-gray-800/50"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Abmelden
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-background">{children}</main>
    </div>
  )
}
