"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Building2, User, Phone } from "lucide-react"

export function MerchantContact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Merchant contact form submitted:", formData)
    // Form submission logic would go here
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Noch Fragen? Kontaktieren Sie uns direkt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unser Team steht Ihnen bei allen Fragen rund um den Händler-Zugang zur Verfügung.
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Ihr vollständiger Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Firmenname *
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="company"
                      placeholder="Ihr Firmenname"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-Mail-Adresse *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Telefonnummer (optional)
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Ihre Nachricht *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="gdpr"
                  checked={formData.gdprConsent}
                  onCheckedChange={(checked) => setFormData({ ...formData, gdprConsent: checked as boolean })}
                  required
                />
                <Label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu. *
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                disabled={!formData.gdprConsent}
              >
                Nachricht senden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
