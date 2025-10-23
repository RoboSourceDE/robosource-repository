"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Store, Ban, Search, UserPlus, MoreHorizontal, Eye, Trash, CheckCircle, LogOut } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Max Mustermann",
    email: "max@robot-händler.de",
    type: "Händler",
    status: "Verifiziert",
    registered: "15. Okt. 2025",
    lastLogin: "Heute",
    typeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: 2,
    name: "Anna Schmidt",
    email: "anna.s@bau-gmbh.de",
    type: "Kunde",
    status: "Aktiv",
    registered: "12. Sep. 2025",
    lastLogin: "Gestern",
    typeColor: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: 3,
    name: "spam-user@bot.net",
    email: "spam-user@bot.net",
    type: "Kunde",
    status: "Gesperrt",
    registered: "10. Aug. 2025",
    lastLogin: "Nie",
    typeColor: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    statusColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
]

export default function BenutzerverwaltungPage() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const toggleUser = (userId: number) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const toggleAll = () => {
    setSelectedUsers((prev) => (prev.length === users.length ? [] : users.map((u) => u.id)))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="flex items-center justify-between px-8 py-4">
          <h1 className="text-2xl font-bold">Benutzerverwaltung</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Suche..." className="pl-9 w-64" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gesamt Benutzer</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1.482</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Aktive Händler</CardTitle>
              <Store className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">157</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gesperrte Konten</CardTitle>
              <Ban className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">12</div>
            </CardContent>
          </Card>
        </div>

        {/* Filter & Actions Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <Select defaultValue="alle-typen">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Kontotyp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alle-typen">Alle</SelectItem>
                  <SelectItem value="kunde">Kunde</SelectItem>
                  <SelectItem value="haendler">Händler</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="alle-status">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alle-status">Alle</SelectItem>
                  <SelectItem value="aktiv">Aktiv</SelectItem>
                  <SelectItem value="verifiziert">Verifiziert</SelectItem>
                  <SelectItem value="gesperrt">Gesperrt</SelectItem>
                  <SelectItem value="ausstehend">Ausstehend</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="neueste">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sortieren nach" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="neueste">Neueste zuerst</SelectItem>
                  <SelectItem value="aelteste">Älteste zuerst</SelectItem>
                </SelectContent>
              </Select>

              <Button className="ml-auto bg-green-600 hover:bg-green-700">
                <UserPlus className="w-4 h-4 mr-2" />
                Neuen Benutzer anlegen
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Table */}
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox checked={selectedUsers.length === users.length} onCheckedChange={toggleAll} />
                  </TableHead>
                  <TableHead>Benutzer</TableHead>
                  <TableHead>Kontotyp</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Registriert am</TableHead>
                  <TableHead>Letzter Login</TableHead>
                  <TableHead className="text-right">Aktionen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox checked={selectedUsers.includes(user.id)} onCheckedChange={() => toggleUser(user.id)} />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={user.typeColor}>
                        {user.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={user.statusColor}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.registered}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Profil ansehen
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Ban className="w-4 h-4 mr-2" />
                            Konto sperren
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash className="w-4 h-4 mr-2" />
                            Löschen
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Als Händler verifizieren
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
