"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Home, Users, LayoutList, DollarSign, ShieldAlert, LifeBuoy, Settings, Server, ArrowLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navigationGroups = [
  {
    title: "HAUPTBEREICH",
    items: [
      { href: "/admin-dashboard", label: "Dashboard", icon: Home },
      { href: "/admin-dashboard/benutzerverwaltung", label: "Benutzerverwaltung", icon: Users },
      { href: "/admin-dashboard/inseratsverwaltung", label: "Inseratsverwaltung", icon: LayoutList },
    ],
  },
  {
    title: "FINANZEN & SUPPORT",
    items: [
      { href: "/admin-dashboard/transaktionen", label: "Transaktionen", icon: DollarSign },
      { href: "/admin-dashboard/streitschlichtung", label: "Streitschlichtung", icon: ShieldAlert },
      { href: "/admin-dashboard/support-tickets", label: "Support Tickets", icon: LifeBuoy },
    ],
  },
  {
    title: "PLATTFORM",
    items: [
      { href: "/admin-dashboard/einstellungen", label: "Einstellungen", icon: Settings },
      { href: "/admin-dashboard/system-status", label: "System-Status", icon: Server },
    ],
  },
]

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <aside className="w-64 bg-zinc-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-zinc-800">
          <Link href="/admin-dashboard" className="flex items-center gap-3">
            <Image src="/robosource-logo.png" alt="RoboSource" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-white">RoboSource</span>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="p-4">
          <div className="p-3 bg-zinc-800 rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin User" />
                <AvatarFallback className="bg-primary text-primary-foreground">AU</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">Admin User</p>
                <p className="text-xs text-zinc-400 truncate">Administrator</p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mt-3 w-full justify-start bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Link>
          </Button>
        </div>

        <Separator className="bg-zinc-800" />

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6">
          {navigationGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <h3 className="px-6 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">{group.title}</h3>
              <div className="space-y-1 px-3">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
