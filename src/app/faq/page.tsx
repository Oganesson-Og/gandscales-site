import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react"

import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { generateWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils"

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about products, quotes, delivery, and calibration.",
}

const faqs = [
  {
    q: "Do you sell equipment online or is it quote-only?",
    a: "Many industrial products are quote-only due to configuration and installation requirements. For priced items, you can add to cart and proceed to checkout.",
  },
  {
    q: "Do you provide calibration certificates?",
    a: "Yes. We provide ISO-traceable calibration services and documentation for compliance.",
  },
  {
    q: "Do you offer nationwide service?",
    a: "Yes. We support customers across Zimbabwe for installation, maintenance, and repairs.",
  },
  {
    q: "How fast do you respond to quote requests?",
    a: "We aim to respond within 24 hours during business days.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Support
          </span>
        }
        title="Frequently asked questions"
        description={
          <>
            Quick answers about products, service bookings, and how quotes and
            checkout work.
          </>
        }
        actions={
          <>
            <Button asChild variant="outline" size="xl">
              <Link href="/contact">
                Contact us <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="whatsapp">
              <a
                href={generateWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  "Hi, I have a question about your weighing equipment."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </Button>
          </>
        }
        showFloatingIcons={false}
      />

      <section className="container-wide py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <Card key={item.q} className="premium-card">
              <CardContent className="p-7">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="h-5 w-5 text-brand-300" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{item.q}</h2>
                    <p className="mt-2 text-sm text-steel-300 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}


