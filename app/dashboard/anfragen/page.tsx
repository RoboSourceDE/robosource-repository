"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MessageSquare } from "lucide-react"

const mockAnfragen = [
  {
    datum: "15.01.2025",
    haendler: "Boston Dynamics GmbH",
    roboterModell: "Atlas Pro",
    status: "Angefragt" as const,
  },
  {
    datum: "12.01.2025",
    haendler: "SoftBank Robotics",
    roboterModell: "Pepper",
    status: "Antwort erhalten" as const,
  },
  {
    datum: "08.01.2025",
    haendler: "Tesla Robotics",
    roboterModell: "Optimus Gen 2",
    status: "Abgeschlossen" as const,
  },
  {
    datum: "05.01.2025",
    haendler: "SoftBank Robotics",
    roboterModell: "NAO Evolution",
    status: "Antwort erhalten" as const,
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Angefragt":
      return (
        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
          Angefragt
        </Badge>
      )
    case "Antwort erhalten":
      return (
        <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
          Antwort erhalten
        </Badge>
      )
    case "Abgeschlossen":
      return (
        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
          Abgeschlossen
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function AnfragenPage() {
  return (
    <div className="max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meine Anfragen</h1>
        <p className="text-muted-foreground mt-2">Übersicht über alle Ihre Händleranfragen</p>
      </div>

      {mockAnfragen.length === 0 ? (
        <Card className="border-border bg-card">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-foreground">Sie haben noch keine Anfragen gestellt.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Kontaktieren Sie Händler, um Informationen zu Robotern anzufordern.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-foreground font-semibold">Datum</TableHead>
                  <TableHead className="text-foreground font-semibold">Händler</TableHead>
                  <TableHead className="text-foreground font-semibold">Roboter-Modell</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAnfragen.map((anfrage, index) => (
                  <TableRow key={index} className="border-border hover:bg-muted/50">
                    <TableCell className="font-medium text-foreground">{anfrage.datum}</TableCell>
                    <TableCell className="text-foreground">{anfrage.haendler}</TableCell>
                    <TableCell className="text-foreground">{anfrage.roboterModell}</TableCell>
                    <TableCell>{getStatusBadge(anfrage.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
