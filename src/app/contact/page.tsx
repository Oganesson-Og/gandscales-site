import { Metadata } from "next"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/page-hero"
import {
  BOTSWANA_ADDRESS,
  BOTSWANA_EMAIL,
  BOTSWANA_PHONE,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  generateWhatsAppUrl,
  WHATSAPP_NUMBER,
} from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with G&T Scale Services. Reach our Zimbabwe (Harare) office or our Botswana (Gaborone) office — call, WhatsApp, or email us for help with weighing equipment.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Zimbabwe Office",
    details: [
      COMPANY_ADDRESS,
      `Phone: ${COMPANY_PHONE}`,
      `Email: ${COMPANY_EMAIL}`,
    ],
  },
  {
    icon: MapPin,
    title: "Botswana Office",
    details: [
      BOTSWANA_ADDRESS,
      `Phone: ${BOTSWANA_PHONE}`,
      `Email: ${BOTSWANA_EMAIL}`,
    ],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Contact Us
          </span>
        }
        title="Get in Touch"
        description={
          <>
            Have a question about our products or services? Need a quote or
            technical support? We&apos;re here to help.
          </>
        }
        actions={
          <>
            <Button
              asChild
              size="xl"
              variant="whatsapp"
            >
              <a
                href={generateWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  "Hi, I would like to enquire about your weighing equipment solutions."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </>
        }
      />

      {/* Contact info cards */}
      <section className="container-wide -mt-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info) => (
            <Card key={info.title} className="premium-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-brand-300" />
                </div>
                <h3 className="font-semibold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-steel-300">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="container-wide py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact message */}
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Reach Out to Us
            </h2>
            <p className="text-steel-300 mb-8">
              The fastest way to reach us is via WhatsApp or phone. Our team typically responds within a few hours during business days.
            </p>

            <div className="space-y-6">
              <Card className="premium-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Sales Inquiries</h3>
                  <p className="text-steel-300 text-sm mb-4">
                    Looking for a quote or product information? Contact our sales team.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="whatsapp">
                      <a
                        href={generateWhatsAppUrl(
                          WHATSAPP_NUMBER,
                          "Hi, I have a sales inquiry about weighing equipment."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp Sales
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`mailto:${COMPANY_EMAIL}`}>
                        Email Sales
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Technical Support</h3>
                  <p className="text-steel-300 text-sm mb-4">
                    Need help with your equipment? Our technicians are standing by.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="whatsapp">
                      <a
                        href={generateWhatsAppUrl(
                          WHATSAPP_NUMBER,
                          "Hi, I need technical support for my weighing equipment."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp Support
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map and additional info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-steel-950/40 border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=G+and+T+Scale+Services,+Mutare+Rd,+Harare,+Zimbabwe&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G&T Scale Services Location"
              />
            </div>

            {/* Service booking prompt */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Need to Book a Service?
                </h3>
                <p className="text-steel-300 mb-6">
                  For calibration, repair, or maintenance requests, visit our 
                  service booking page.
                </p>
                <Link href="/book-service">
                  <Button variant="outline" className="w-full group">
                    Book a Service
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ prompt */}
      <section className="bg-steel-950/40 border-t border-white/10 py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-steel-300 mb-6 max-w-2xl mx-auto">
            Check out our frequently asked questions for quick answers to common 
            inquiries about our products, services, and processes.
          </p>
          <Link href="/faq">
            <Button variant="outline">
              View FAQs
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

