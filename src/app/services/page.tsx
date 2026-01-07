import { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, 
  Truck, 
  Wrench, 
  Settings, 
  Shield, 
  Clock, 
  Award,
  CheckCircle2,
  Phone,
  FileCheck,
  Gauge,
  Hammer,
  Package,
  CalendarCheck,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { PageHero } from "@/components/sections/page-hero"
import { COMPANY_PHONE } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive weighing solutions including equipment supply, repair, calibration, and maintenance. Certified technicians serving Zimbabwe.",
}

const mainServices = [
  {
    id: "01",
    icon: Truck,
    title: "Equipment Supply",
    description: "We supply a comprehensive range of precision weighing equipment from leading global manufacturers. From compact retail scales to industrial weighbridges, we have the right solution for your needs.",
    features: [
      "Platform scales and bench scales",
      "Industrial floor scales",
      "Weighbridges and truck scales",
      "Crane and overhead scales",
      "Retail and POS scales",
      "Laboratory and analytical balances",
      "Livestock and veterinary scales",
      "Load cells and indicators",
    ],
    cta: "Browse Products",
    ctaLink: "/shop",
  },
  {
    id: "02",
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Our factory-trained technicians provide expert repair services for all types and brands of weighing equipment. We use genuine parts and follow manufacturer specifications to restore your equipment to peak performance.",
    features: [
      "On-site and workshop repairs",
      "Emergency breakdown service",
      "Load cell replacement",
      "Indicator repairs and upgrades",
      "Cable and junction box repairs",
      "Weighbridge pit maintenance",
      "Preventive maintenance contracts",
      "All brands serviced",
    ],
    cta: "Book a Repair",
    ctaLink: "/book-service",
  },
  {
    id: "03",
    icon: Settings,
    title: "Calibration Services",
    description: "Ensure accuracy and regulatory compliance with our ISO-traceable calibration services. We provide certified calibration for all types of weighing equipment with comprehensive documentation.",
    features: [
      "ISO-traceable calibration",
      "ZIMTRADE certified",
      "On-site calibration available",
      "Calibration certificates provided",
      "Legal-for-trade verification",
      "Calibration reminders and scheduling",
      "Audit support documentation",
      "Multi-point calibration",
    ],
    cta: "Schedule Calibration",
    ctaLink: "/book-service",
  },
]

const additionalServices = [
  {
    icon: Package,
    title: "Installation",
    description: "Professional installation of weighing equipment with site preparation guidance and operator training.",
  },
  {
    icon: FileCheck,
    title: "Certification",
    description: "Trade verification and certification services to ensure legal compliance for commercial transactions.",
  },
  {
    icon: CalendarCheck,
    title: "Service Contracts",
    description: "Customized maintenance contracts with scheduled visits and priority response times.",
  },
  {
    icon: Hammer,
    title: "Custom Fabrication",
    description: "Bespoke weighing solutions including custom platforms, livestock cages, and specialized mounting.",
  },
  {
    icon: Gauge,
    title: "System Integration",
    description: "Integration of weighing systems with ERP, inventory management, and automated processes.",
  },
  {
    icon: Shield,
    title: "Warranty Support",
    description: "Extended warranty options and comprehensive after-sales support for all equipment purchased.",
  },
]

const whyChooseUs = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service available for emergencies",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Factory-trained and experienced team",
  },
  {
    icon: Shield,
    title: "Genuine Parts",
    description: "Only authentic replacement components",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Work",
    description: "90-day warranty on all repairs",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Comprehensive Solutions
          </span>
        }
        title="Weighing Equipment Services"
        description={
          <>
            Precision and reliability for your weighing needs. From supply to
            calibration, we provide end-to-end solutions backed by 20+ years of
            expertise.
          </>
        }
        actions={
          <>
            <Button asChild size="xl">
              <Link href="/book-service">
                Book a Service
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </>
        }
      />

      {/* Why Choose Us */}
      <section className="bg-steel-900 py-12">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-steel-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="container-wide py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Comprehensive Weighing Solutions
          </h2>
          <p className="text-lg text-steel-300">
            We offer a complete range of services to meet all your weighing equipment 
            needs, from initial supply to ongoing maintenance and calibration.
          </p>
        </div>

        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <Card 
              key={service.id}
              className="border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-display font-bold text-steel-100">
                      {service.id}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-brand-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-steel-300 mb-8">
                    {service.description}
                  </p>
                  
                  <Link href={service.ctaLink}>
                    <Button size="lg" className="group">
                      {service.cta}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>

                {/* Features */}
                <div className="bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 p-8 lg:p-12">
                  <h4 className="font-semibold text-white mb-6">What&apos;s included:</h4>
                  <ul className="grid gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="text-steel-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-transparent py-20 lg:py-28 border-t border-white/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
              Additional Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Complete Support for Your Equipment
            </h2>
            <p className="text-lg text-steel-300">
              Beyond our core services, we offer a range of specialized solutions 
              to ensure your weighing systems perform at their best.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <Card key={service.title} className="premium-card group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/30 group-hover:border-brand-400/40 transition-colors">
                    <service.icon className="h-7 w-7 text-brand-300 group-hover:text-brand-200 transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-steel-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Training Section */}
      <section className="bg-steel-900 py-20 lg:py-28 border-t border-white/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-brand-400 tracking-wider uppercase mb-4">
                Expert Knowledge
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Staff Training
              </h2>
              <p className="text-steel-300 mb-8 text-lg leading-relaxed">
                G &amp; T Scales Services employs trained technicians capable of calibrating, 
                maintaining, and repairing most makes and models of scales. Our experienced 
                scale technicians are specialized and they quickly identify and solve scale 
                equipment problems.
              </p>
              <p className="text-steel-300 mb-8 leading-relaxed">
                Our professional service consultants study how critical each instrument is to 
                your goals, as measured by its impact on quality, downtime, accuracy, and 
                regulatory compliance. Then they determine the right service strategies for 
                the instruments that best support those business goals.
              </p>
              <p className="text-steel-300 mb-8 leading-relaxed">
                These service strategies typically include appropriate calibration intervals, 
                calibration certificate, preventive maintenance, repair, training, and regulatory 
                compliance services. We offer digital scale repair, truck scale repair, and scale 
                calibration service. G &amp; T Scales Services&apos; scale calibration service is unsurpassed.
              </p>
              <p className="text-brand-300 font-semibold">
                Our calibration process is backed by a genuine Quality Assurance Program.
              </p>
            </div>

            <div>
              <Card className="premium-card overflow-hidden">
                <div className="h-2 bg-brand-500" />
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center">
                      <GraduationCap className="h-7 w-7 text-brand-300" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      Training Areas
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {[
                      { title: "Services", description: "Comprehensive service training for all equipment types" },
                      { title: "Calibration", description: "ISO-traceable calibration techniques and procedures" },
                      { title: "Installation", description: "Proper installation methods for optimal performance" },
                      { title: "Maintenance", description: "Preventive and routine maintenance best practices" },
                      { title: "Repair", description: "Diagnostic and repair skills for all scale models" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-5 w-5 text-brand-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-sm text-steel-400">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-wide py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Simple Service Process
          </h2>
          <p className="text-lg text-steel-300">
            Getting your equipment serviced is easy with our streamlined process.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Request", description: "Contact us or fill out our online form with your service needs" },
            { step: "02", title: "Consultation", description: "We assess your requirements and provide a detailed quote" },
            { step: "03", title: "Service", description: "Our certified technicians perform the work on-site or in our workshop" },
            { step: "04", title: "Delivery", description: "Receive your equipment with full documentation and warranty" },
          ].map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/10 -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-steel-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-steel-900 to-steel-800 py-20 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Need Expert Service?
              </h2>
              <p className="text-xl text-steel-300 mb-8">
                Whether it&apos;s routine maintenance, emergency repair, or certified 
                calibration, our team is ready to help. Contact us today for 
                a free consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-service">
                  <Button size="xl" className="group">
                    Book a Service
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact our service team:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-400">Phone</div>
                    <div className="text-white font-semibold">{COMPANY_PHONE}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-400">Service Hours</div>
                    <div className="text-white font-semibold">Mon - Fri: 8AM - 5PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
