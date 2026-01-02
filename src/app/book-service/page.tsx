import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Wrench, Settings, FileCheck } from "lucide-react"
import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { COMPANY_PHONE, generateWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Book a Service",
  description:
    "Schedule calibration, repair, or maintenance for your weighing equipment. Our certified technicians provide expert service across Zimbabwe.",
}

const benefits = [
  "Certified technicians with 20+ years experience",
  "ISO-traceable calibration certificates",
  "Genuine replacement parts",
  "Same-day emergency service available",
  "Coverage across Zimbabwe",
]

const serviceTypes = [
  {
    icon: Settings,
    title: "Calibration",
    description: "ISO-traceable calibration with certificates for compliance and accuracy verification.",
  },
  {
    icon: Wrench,
    title: "Repair",
    description: "Expert repairs for all types and brands of weighing equipment with genuine parts.",
  },
  {
    icon: FileCheck,
    title: "Maintenance",
    description: "Preventive maintenance programs to maximize equipment lifespan and performance.",
  },
]

const bookingInfo = [
  "Equipment type and model",
  "Serial number (if available)",
  "Issue description or service needed",
  "Site location / address",
  "Preferred date and time",
  "Contact person and phone number",
]

export default function BookServicePage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Professional Services
          </span>
        }
        title="Book a Service"
        description={
          <>
            Schedule calibration, repair, or maintenance for your weighing
            equipment. Our certified technicians are ready to help.
          </>
        }
      >
        {/* Benefits */}
        <div className="space-y-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-300 shrink-0" />
              <span className="text-steel-200">{benefit}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Service types */}
      <section className="container-wide py-16">
        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {serviceTypes.map((service) => (
            <Card key={service.title} className="premium-card">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-brand-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-steel-300 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking information */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                How to Book a Service
              </h2>
              <p className="text-steel-300 mb-6">
                Contact us via WhatsApp or phone with the following information:
              </p>
              
              <div className="space-y-3 mb-8">
                {bookingInfo.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                    <span className="text-steel-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="whatsapp">
                  <a
                    href={generateWhatsAppUrl(
                      WHATSAPP_NUMBER,
                      "Hi, I would like to book a service for my weighing equipment.\n\n- Equipment:\n- Issue/Service needed:\n- Location:\n- Preferred date:\n- Contact name:\n- Phone:"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Booking
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                    <Phone className="h-5 w-5" />
                    Call {COMPANY_PHONE}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Emergency Service
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  Equipment breakdown affecting your operations? We offer same-day emergency service for urgent situations.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Call for Emergency Service
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Service Contracts
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  Regular maintenance? Ask about our service contract options for scheduled visits and priority response.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Report a Fault
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  Need to report an equipment issue? Visit our fault reporting page for structured support.
                </p>
                <Link href="/report-fault">
                  <Button variant="outline" className="w-full group">
                    Report Fault
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

