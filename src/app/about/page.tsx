import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Eye, Heart, Shield, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/page-hero"
import { COMPANY_FOUNDED_YEAR } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A leading weighing company providing precision weighing equipment solutions since 2004.",
}

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical standards in all our dealings.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "We are committed to delivering accurate and reliable weighing solutions that meet the highest standards.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do. We strive to exceed their expectations.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously embrace new technologies and methodologies to provide cutting-edge solutions.",
  },
]

const milestones = [
  { year: "2004", event: "Operations began in Harare, Zimbabwe" },
  {
    year: "Since 2004",
    event:
      "Providing weighing equipment supply, repair, and certified calibration for businesses across the region.",
  },
  { year: "Today", event: "Supporting customers in Zimbabwe and Botswana." },
]

const yearsOfExperience = Math.max(1, new Date().getFullYear() - COMPANY_FOUNDED_YEAR)

const stats = [
  { value: `${yearsOfExperience}+`, label: "Years of Experience" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "1000+", label: "Products Installed" },
  { value: "50+", label: "Certified Technicians" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            About G&amp;T Scale Services
            </span>
        }
        title="Your Trusted Weighing Equipment Partner"
        description={
          <>
            Since 2004, we&apos;ve been a leading provider of precision weighing
            solutions, serving industries from agriculture to pharmaceuticals
            with unwavering commitment to quality and service.
          </>
        }
        actions={
          <>
            <Button asChild size="xl" className="group">
              <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="text-white">
              <Link href="/services">Our Services</Link>
                </Button>
          </>
        }
      />

      {/* Stats */}
      <section className="py-14 sm:py-16 border-t border-white/10 bg-transparent">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-steel-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-transparent">
        <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Precision and Excellence since {COMPANY_FOUNDED_YEAR}
            </h2>
            <div className="space-y-4 text-steel-300">
              <p>
                Founded in {COMPANY_FOUNDED_YEAR}, G&T Scale Services began with a simple mission: to provide 
                Zimbabwe&apos;s businesses with reliable, accurate weighing solutions backed by 
                exceptional service.
              </p>
              <p>
                What started as a small operation has grown into the country&apos;s most trusted 
                name in weighing equipment. Today, we serve hundreds of clients across 
                agriculture, mining, manufacturing, retail, and healthcare sectors.
              </p>
              <p>
                Our success is built on a foundation of technical expertise, genuine parts, 
                certified calibration, and a deep understanding of our customers&apos; needs. 
                We don&apos;t just sell equipment – we build lasting partnerships.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <Image
                src="/images/marketing/truck-scales-weighbridges-002.jpg"
                alt="Weighbridge installation and service work"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-black/40" />
            </div>

            {/* ISO badge (kept as a separate block to avoid awkward overlap) */}
            <div className="mt-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/35 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Award className="h-7 w-7 text-brand-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">ISO 9001</div>
                  <div className="text-sm text-steel-300">Certified Quality</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-transparent border-t border-white/10">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="premium-card overflow-hidden">
              <div className="h-2 bg-brand-500" />
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-brand-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-steel-300 text-lg">
                  To provide accurate, reliable, and innovative weighing solutions that 
                  empower businesses to operate efficiently, maintain compliance, and 
                  achieve their goals with confidence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="premium-card overflow-hidden">
              <div className="h-2 bg-accent-orange-500" />
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-accent-orange-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-steel-300 text-lg">
                  To be the undisputed leader in weighing equipment and services across 
                  Southern Africa, recognized for our technical excellence, customer 
                  commitment, and continuous innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-transparent">
        <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            The Principles That Guide Us
          </h2>
          <p className="text-lg text-steel-300">
            Our core values define who we are and how we serve our customers every day.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} className="premium-card group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-500/30 group-hover:border-brand-400/40 transition-colors">
                  <value.icon className="h-8 w-8 text-brand-300 group-hover:text-brand-200 transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-steel-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-steel-900 py-20 lg:py-28">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-wider uppercase mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Key Milestones
            </h2>
            <p className="text-lg text-steel-400">
              A look back at the moments that shaped our growth and success.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-steel-700 hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-steel-800 rounded-xl p-6 inline-block">
                      <div className="text-brand-400 font-display font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-steel-300">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="w-4 h-4 rounded-full bg-brand-500 shrink-0 hidden md:block relative z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-transparent">
        <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Meet the Experts
          </h2>
          <p className="text-lg text-steel-300">
            Our team of certified technicians and dedicated professionals are committed 
            to delivering excellence in every interaction.
          </p>
        </div>
        
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-brand-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">50+ Team Members</h4>
              <p className="text-steel-300">Across sales, service, and support</p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-brand-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Certified Professionals</h4>
              <p className="text-steel-300">Factory-trained technicians</p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-brand-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Rapid Response</h4>
              <p className="text-steel-300">Same-day service available</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-transparent relative overflow-hidden border-t border-white/10">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-[520px] w-[520px] rounded-full bg-brand-400/10 blur-3xl" />
        </div>

        <div className="container-wide relative z-10 text-center">
          <div className="max-w-4xl mx-auto gradient-border p-10 sm:p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
            Whether you need new equipment, repair services, or calibration, 
            our team is ready to help you find the perfect solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="group">
            <Link href="/contact">
                Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/shop">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

