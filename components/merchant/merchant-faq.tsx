"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Wie funktioniert die Auszahlung?",
    answer:
      "Auszahlungen erfolgen monatlich auf Ihr hinterlegtes Bankkonto. Nach Abzug der Verkaufsprovision wird der Betrag innerhalb von 5 Werktagen überwiesen. Sie erhalten eine detaillierte Abrechnung über alle Transaktionen.",
  },
  {
    question: "Wie lange dauert die Verifizierung?",
    answer:
      "Die Verifizierung Ihres Händler-Accounts dauert in der Regel 2-3 Werktage. Wir prüfen Ihre Unternehmensunterlagen und kontaktieren Sie bei Rückfragen. Nach erfolgreicher Verifizierung können Sie sofort mit dem Einstellen Ihrer Produkte beginnen.",
  },
  {
    question: "Wer erstellt die Produktseiten?",
    answer:
      "Sie erstellen Ihre Produktseiten selbst über unser intuitives Händler-Dashboard. Sie laden Bilder hoch, fügen Beschreibungen hinzu und legen Preise fest. Unser System unterstützt Sie mit Vorlagen und Tipps für optimale Produktpräsentationen.",
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer:
      "Nein, es gibt keine Mindestvertragslaufzeit. Sie können Ihren Händler-Account jederzeit mit einer Frist von 30 Tagen kündigen. Die Registrierungsgebühr wird bei einer Kündigung nicht erstattet.",
  },
  {
    question: "Wie viele Produkte kann ich einstellen?",
    answer:
      "Sie können unbegrenzt viele Produkte einstellen. Es gibt keine Beschränkung der Anzahl Ihrer Listings. Die monatliche Grundgebühr deckt alle Ihre Produktangebote ab.",
  },
  {
    question: "Welche Zahlungsmethoden werden unterstützt?",
    answer:
      "Käufer können per Banküberweisung, Kreditkarte oder PayPal bezahlen. Alle Zahlungen werden sicher über unsere Plattform abgewickelt. Sie erhalten Ihr Geld nach erfolgreicher Transaktion automatisch ausgezahlt.",
  },
]

export function MerchantFAQ() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Häufig gestellte Fragen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen für Händler
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
