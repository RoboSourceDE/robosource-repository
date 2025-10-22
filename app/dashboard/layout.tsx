import type React from "react"
import { Home, Heart, MessageSquare, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border bg-card p-6 flex flex-col">
        {/* Logo/Brand */}
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RoboSource</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <Link
            href="/dashboard/profil"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4" />
            Profil
          </Link>
          <Link
            href="/dashboard/merkliste"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Heart className="h-4 w-4" />
            Merkliste
          </Link>
          <Link
            href="/dashboard/anfragen"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            Meine Anfragen
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-6">
          <Separator className="mb-4" />
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive">
            <LogOut className="h-4 w-4 mr-3" />
            Abmelden
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
