import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone, MessageCircle, AlertTriangle, CheckCircle2 } from "lucide-react"

import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { generateWhatsAppUrl, WHATSAPP_NUMBER, COMPANY_PHONE } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Report a Fault",
  description: "Report equipment issues and request service support from G&T Scale Services.",
}

const infoToInclude = [
  "Your name and company",
  "Contact phone number",
  "Equipment type and model",
  "Serial number (if known)",
  "Location / site address",
  "Description of the issue",
  "When the problem started",
  "Urgency level (normal or urgent)",
]

export default function ReportFaultPage() {
  const whatsappMessage = `Hi G&T, I'd like to report a fault with my equipment.

Equipment type:
Serial number:
Location:
Issue description:

Urgency: Normal / Urgent`

  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Support
          </span>
        }
        title="Report a Fault"
        description={
          <>
            Having issues with your weighing equipment? Contact us to report
            the problem and we&apos;ll get you back up and running.
          </>
        }
        showFloatingIcons={false}
      />

      <section className="container-wide py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* How to report */}
          <Card className="border-white/10 bg-white/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-accent-orange-400" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Report Your Issue
                </h2>
              </div>
              
              <p className="text-steel-300 mb-6">
                The fastest way to report an equipment fault is via WhatsApp or phone. Include the following information for faster service:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {infoToInclude.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-300 shrink-0 mt-1" />
                    <span className="text-sm text-steel-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contact Us Now
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="whatsapp">
                    <a
                      href={generateWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Report via WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                      <Phone className="h-5 w-5" />
                      Call {COMPANY_PHONE}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick info sidebar */}
          <div className="space-y-6">
            <Card className="premium-card border-accent-orange-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Urgent / Emergency?
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  If your equipment breakdown is affecting critical operations, call us immediately for priority service.
                </p>
                <Button asChild variant="destructive" className="w-full">
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Emergency Call
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-sm text-steel-300">
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-300">1.</span>
                    We receive your report and acknowledge within 2 hours.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-300">2.</span>
                    A technician contacts you to discuss the issue.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-300">3.</span>
                    We schedule a site visit or provide remote guidance.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-brand-300">4.</span>
                    Problem resolved and equipment back in service.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Need Regular Maintenance?
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  Consider a service contract for scheduled maintenance and priority response.
                </p>
                <Link href="/book-service">
                  <Button variant="outline" className="w-full group">
                    Book a Service
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

