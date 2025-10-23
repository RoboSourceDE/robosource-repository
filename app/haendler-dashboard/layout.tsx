"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { LayoutDashboard, LayoutList, CalendarClock, Inbox, Star, DollarSign, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationGroups = [
  {
    title: "VERWALTUNG",
    items: [
      { href: "/haendler-dashboard", label: "Übersicht", icon: LayoutDashboard },
      { href: "/haendler-dashboard/inserate", label: "Meine Inserate", icon: LayoutList },
      { href: "/haendler-dashboard/buchungen", label: "Buchungen", icon: CalendarClock },
      { href: "/haendler-dashboard/posteingang", label: "Posteingang", icon: Inbox },
    ],
  },
  {
    title: "WACHSTUM",
    items: [
      { href: "/haendler-dashboard/bewertungen", label: "Bewertungen", icon: Star },
      { href: "/haendler-dashboard/zahlungen", label: "Zahlungen", icon: DollarSign },
      { href: "/haendler-dashboard/statistiken", label: "Statistiken", icon: BarChart3 },
    ],
  },
]

export default function MerchantDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <aside className="w-64 border-r bg-card flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/robosource-logo.png" alt="RoboSource" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-primary">RoboSource</span>
          </Link>
        </div>

        {/* Navigation Groups */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navigationGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-3">{group.title}</h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer Navigation */}
        <div className="p-4 border-t">
          <Link
            href="/haendler-dashboard/einstellungen"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === "/haendler-dashboard/einstellungen"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground",
            )}
          >
            <Settings className="w-5 h-5" />
            Einstellungen
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
