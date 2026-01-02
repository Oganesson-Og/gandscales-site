import { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, 
  FileText, 
  Clock,
  Shield,
  CheckCircle2,
  Phone,
  Package,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/page-hero"
import { COMPANY_PHONE, generateWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a customized quote for weighing equipment and services. Our team will provide competitive pricing tailored to your specific requirements.",
}

const highlights = [
  { icon: Clock, title: "24-hour response", description: "We reply to quote requests within 24 hours." },
  { icon: Shield, title: "Transparent pricing", description: "Clear pricing with no hidden fees." },
  { icon: FileText, title: "Detailed proposals", description: "Quotes with specifications and options." },
] as const

const popularProducts = [
  "Platform Scales",
  "Bench Scales", 
  "Weighbridges",
  "Crane Scales",
  "Livestock Scales",
  "Laboratory Balances",
  "Retail Scales",
  "Load Cells",
  "Indicators",
]

const quoteIncludes = [
  "Product name and quantity required",
  "Application and industry",
  "Capacity and readability needed",
  "Installation requirements",
  "Your contact information",
  "Delivery location",
]

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      <PageHero
        density="compact"
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Get Started
          </span>
        }
        title="Request a Quote"
        description={
          <>
            Tell us about your weighing needs and we&apos;ll provide a customized
            quote tailored to your requirements. No obligation, no hidden fees.
          </>
        }
        aside={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-3xl transform rotate-3" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              <FileText className="h-12 w-12 text-brand-300 mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Why Request a Quote?
              </h3>
              <ul className="space-y-3">
                {[
                  "Customized solutions for your specific needs",
                  "Volume discounts available",
                  "Professional technical consultation",
                  "Installation and service packages",
                  "Flexible payment terms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                    <span className="text-steel-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      >
        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <h.icon className="h-5 w-5 text-brand-300" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{h.title}</h3>
                <p className="text-xs text-steel-300">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Main content section */}
      <section className="container-wide pb-16 lg:pb-24 pt-10 lg:pt-12 -mt-8 lg:-mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* How to request */}
          <div className="lg:col-span-2">
            <Card className="border-white/10 bg-white/5 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  How to Request a Quote
                </h2>
                <p className="text-steel-300 mb-8">
                  Contact us via phone, email, or WhatsApp with the following information for the fastest response:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {quoteIncludes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-300 shrink-0 mt-0.5" />
                      <span className="text-steel-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Contact Us for a Quote
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" variant="whatsapp">
                      <a
                        href={generateWhatsAppUrl(
                          WHATSAPP_NUMBER,
                          "Hi, I would like to request a quote for weighing equipment. Here are my requirements:\n\n- Product:\n- Quantity:\n- Application:\n- Location:\n\nPlease provide pricing and availability."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp Quote Request
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick contact */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <p className="text-steel-300 text-sm mb-6">
                  Our sales team is ready to assist you with any questions.
                </p>
                <div className="space-y-4">
                  <a 
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-brand-400" />
                    <div>
                      <div className="font-medium">{COMPANY_PHONE}</div>
                      <div className="text-xs text-steel-400">Office Line</div>
                    </div>
                  </a>
                  <Button asChild variant="whatsapp" className="w-full">
                    <a
                      href={generateWhatsAppUrl(
                        WHATSAPP_NUMBER,
                        "Hi, I would like to request a quote for weighing equipment."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular products */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Popular Products</h3>
                <div className="flex flex-wrap gap-2">
                  {popularProducts.map((product) => (
                    <Link
                      key={product}
                      href={`/shop?category=${product.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-white/20 text-steel-200 hover:text-white text-sm rounded-full transition-colors"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Browse products CTA */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <Package className="h-10 w-10 text-brand-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Browse Our Catalog
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  View our full range of weighing equipment and find the perfect solution.
                </p>
                <Link href="/shop">
                  <Button variant="outline" className="w-full group">
                    View Products
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

