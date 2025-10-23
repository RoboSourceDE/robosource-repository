"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Bell, Search, MoreVertical, Eye, Edit, Trash2 } from "lucide-react"

const mockListings = [
  {
    id: "INS-001",
    name: "Tesla Optimus Gen 2",
    image: "/humanoid-robot.jpg",
    status: "Aktiv",
    type: "Miete & Kauf",
    priceRent: "2.500 €/Monat",
    priceBuy: "45.000 €",
    clicks: 1247,
  },
  {
    id: "INS-002",
    name: "Boston Dynamics Atlas",
    image: "/atlas-robot.jpg",
    status: "Pausiert",
    type: "Kauf",
    priceRent: "-",
    priceBuy: "75.000 €",
    clicks: 892,
  },
  {
    id: "INS-003",
    name: "Unitree H1 Humanoid",
    image: "/unitree-robot.jpg",
    status: "Entwurf",
    type: "Miete",
    priceRent: "1.800 €/Monat",
    priceBuy: "-",
    clicks: 0,
  },
]

export default function MeineInseratePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  return (
    <div className="flex flex-col h-full">
      {/* Sticky Header Bar */}
      <header className="sticky top-0 z-10 bg-background border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Meine Inserate</h1>
          <div className="flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Neues Inserat
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">HM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="flex-1 p-6 space-y-6">
        {/* Filter Card */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Field */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Suche nach Modell oder ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Status</SelectItem>
                  <SelectItem value="active">Aktiv</SelectItem>
                  <SelectItem value="paused">Pausiert</SelectItem>
                  <SelectItem value="draft">Entwurf</SelectItem>
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Typ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Typen</SelectItem>
                  <SelectItem value="rent">Miete</SelectItem>
                  <SelectItem value="buy">Kauf</SelectItem>
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Kategorien</SelectItem>
                  <SelectItem value="humanoid">Humanoid</SelectItem>
                  <SelectItem value="industrial">Industrie-Arm</SelectItem>
                  <SelectItem value="logistics">Logistik</SelectItem>
                  <SelectItem value="inspection">Inspektion</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Listings Table Card */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Roboter</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Typ</TableHead>
                  <TableHead>Preis (Miete / Kauf)</TableHead>
                  <TableHead>Klicks (30T)</TableHead>
                  <TableHead className="text-right">Aktionen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium">{listing.name}</div>
                          <div className="text-sm text-muted-foreground">{listing.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          listing.status === "Aktiv"
                            ? "default"
                            : listing.status === "Pausiert"
                              ? "secondary"
                              : "outline"
                        }
                        className={listing.status === "Aktiv" ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        {listing.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{listing.type}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{listing.priceRent}</div>
                        <div className="text-sm text-muted-foreground">{listing.priceBuy}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{listing.clicks.toLocaleString()}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Ansehen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Bearbeiten
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Löschen
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
