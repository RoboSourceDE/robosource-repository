"use client"

import { useState } from "react"
import { Sparkles, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SourceAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    {
      role: "ai",
      content: "Hallo! Ich bin Source AI, Ihr persönlicher Roboter-Assistent. Wie kann ich Ihnen heute helfen?",
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages([...messages, { role: "user", content: message }])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Vielen Dank für Ihre Anfrage! Ich helfe Ihnen gerne bei der Suche nach dem perfekten humanoiden Roboter.",
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/30 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/30 hover:shadow-xl"
        aria-label="Source AI Chat öffnen"
      >
        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="rounded-lg border-2 border-primary/30 bg-card shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-4 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Source AI</h3>
                  <p className="text-xs text-muted-foreground">Ihr Roboter-Assistent</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-primary/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="h-[400px] p-4 bg-background/50">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="border-t border-border p-4 bg-card">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ihre Nachricht..."
                  className="flex-1 bg-background"
                />
                <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
