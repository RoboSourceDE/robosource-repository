"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

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
      {/* Floating Chat Button - Reduced size and subtle glow animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/30 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/30 hover:shadow-xl animate-subtle-glow"
        aria-label="Source AI Chat öffnen"
      >
        <Sparkles className="h-5 w-5 text-primary" />
      </button>

      {/* Chat Window - Reduced overall size */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[85vw] max-w-sm animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="rounded-lg border-2 border-primary/30 bg-card shadow-2xl overflow-hidden">
            {/* Header - Reduced padding and sizes */}
            <div className="flex items-center justify-between bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-3 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/30">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Source AI</h3>
                  <p className="text-xs text-muted-foreground">Ihr Roboter-Assistent</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 hover:bg-primary/20"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Messages - Reduced height */}
            <ScrollArea className="h-[300px] p-3 bg-background/50">
              <div className="space-y-3">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-2.5 ${
                        msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-xs leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input - Reduced padding and sizes */}
            <div className="border-t border-border p-3 bg-card">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ihre Nachricht..."
                  className="flex-1 bg-background text-sm h-9"
                />
                <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90 h-9 w-9">
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes subtle-glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
          }
        }
        .animate-subtle-glow {
          animation: subtle-glow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
