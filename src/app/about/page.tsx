import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Eye, Heart, Shield, Zap, Clock, Lightbulb, Quote, Building2, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/page-hero"
import { COMPANY_FOUNDED_YEAR, COMPANY_SLOGAN } from "@/lib/utils"
import { withBasePath } from "@/lib/withBasePath"


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
  { year: "Today", event: "Supporting customers in Zimbabwe, Botswana, South Africa and beyond." },
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

      {/* Strategy & Story */}
      <section className="section-padding bg-transparent">
        <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
              Our Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Precision and Excellence since {COMPANY_FOUNDED_YEAR}
            </h2>
            <div className="space-y-4 text-steel-300">
              <p>
                G&amp;T Scales Services &amp; Suppliers was incorporated in {COMPANY_FOUNDED_YEAR} and is engaged in selling 
                and servicing scales. Our product range includes high accuracy Micro weighing Scales for 
                Laboratories, Jewellery etc. Electronic Weighing Machines, Weighing Scales, Table top 
                Weighing Scales, Bench Scales, Heavy Duty Industrial Platform Weighing Scales, Trolley 
                Scales, Hanging Scales, Crane Scales and Fully Electronic Weighbridge etc.
              </p>
              <p>
                Weighing is fundamental to almost every business. When checking goods in, monitoring 
                processes or quantifying products for sale, weight measurement is a vital tool in 
                controlling costs, maintaining quality and assessing efficiency.
              </p>
              <p>
                G&amp;T Scales Services does not just sell scales; rather we work with industries to 
                develop weighing-based solutions that focus on specific needs for information and 
                control from the shop floor to the boardroom. Our aim is to provide systems that both 
                solve problems and create new opportunities for raising quality, improving efficiency 
                and increasing sales.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <Image
                src={withBasePath("/images/marketing/truck-scales-weighbridges-002.jpg")}
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

      {/* Mission, Vision & Philosophy */}
      <section className="section-padding bg-transparent border-t border-white/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Vision, Mission &amp; Philosophy
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="premium-card overflow-hidden">
              <div className="h-2 bg-brand-500" />
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-brand-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-steel-300 text-lg">
                  Believing in every aspect of our business, be it in servicing, supplying and repairing. 
                  It gives us comfort to aspire for a leading role in supplying of multi head weighers 
                  and weighing equipment for fixed weight products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="premium-card overflow-hidden">
              <div className="h-2 bg-accent-orange-500" />
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-accent-orange-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-steel-300 text-lg">
                  Retrieving a platform for affordable services with excellent work that will 
                  always meet your expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="premium-card overflow-hidden">
              <div className="h-2 bg-emerald-500" />
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-emerald-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Our Philosophy
                </h3>
                <p className="text-steel-300 text-lg">
                  Achievement requires positive responsibilities. We stand for the expertise of highest order, 
                  problem solving with a degree of professionalism and innovation, sustainability, high quality 
                  and effective use of resources.
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

      {/* CEO Message */}
      <section className="section-padding bg-steel-900 border-t border-white/10">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-brand-400 tracking-wider uppercase mb-4">
                Leadership Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                C.E.O Message
              </h2>
            </div>
            
            <Card className="premium-card overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-brand-500/20 border-2 border-brand-400/40 flex items-center justify-center">
                    <Quote className="h-10 w-10 text-brand-300" />
                  </div>
                </div>
                
                <div className="space-y-6 text-steel-300 text-lg leading-relaxed">
                  <p>
                    Without question, profit is the fuel to the engine that propels a corporation forward. 
                    The blind pursuit of profit at all costs is untenable. It is essential that we make 
                    money the right way. After all if communities suffer as a result of a company&apos;s 
                    actions, those returns are not sustainable. Today, a company&apos;s profits are 
                    inextricably tied to the prosperity of its consumers, customers, employees, communities 
                    and society at large.
                  </p>
                  <p>
                    More than ever before, profitability and sustainability are synonymous. Corporations 
                    should embrace a new way of doing business: aligning the needs of their business with 
                    the needs of the world around them. With this in mind G &amp; T Scale Services and 
                    suppliers looked out across the scale industry nearly a decade ago and charted a new course.
                  </p>
                  <p>
                    We recognised a simple truth: there is profit in purpose. Sustainability is not something 
                    to support with the profits we make, but rather a path to delivering profitability. Weaving 
                    sustainability into the very fabric of our organisation is a way to help future-proof our 
                    business for the changing world around us.
                  </p>
                  <p>
                    It is clear in the years and decades ahead, the private sector will be increasingly impacted 
                    by global environmental and social challenges that no single company, industry, government 
                    or non-governmental organisation (NGO) can address alone. Collaborative solutions, in which 
                    we all play a role, holds the key to a meaningful and lasting progress.
                  </p>
                  <p>
                    That is why G &amp; T Scale Services is more committed to performance with purpose than ever 
                    before. It is how we will position our business for sustainable long-term growth not only in 
                    Zimbabwe, Botswana and the UK but across the globe and contribute to solving broader challenges 
                    that impact each and every one of us.
                  </p>
                  <p className="text-brand-300 font-semibold">
                    Thank you for your interest in our company, our brands and our products.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organogram */}
      <section className="section-padding bg-transparent border-t border-white/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4">
              Company Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Organogram
            </h2>
            <p className="text-lg text-steel-300">
              Our organizational structure ensures efficient operations and clear accountability.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Directors - Top Level */}
            <div className="flex justify-center mb-8">
              <Card className="premium-card w-64">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-500/30 border border-brand-400/40 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-7 w-7 text-brand-300" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Directors</h3>
                </CardContent>
              </Card>
            </div>
            
            {/* Connector Line */}
            <div className="flex justify-center mb-2">
              <div className="w-px h-8 bg-white/20" />
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-[600px] h-px bg-white/20 relative">
                <div className="absolute left-0 top-0 w-px h-8 bg-white/20" />
                <div className="absolute right-0 top-0 w-px h-8 bg-white/20" />
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-white/20" />
              </div>
            </div>
            
            {/* Second Level - Managers */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="premium-card">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center mx-auto mb-3">
                    <UserCircle className="h-6 w-6 text-emerald-300" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Operations Manager</h4>
                </CardContent>
              </Card>
              
              <Card className="premium-card">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/30 border border-blue-400/40 flex items-center justify-center mx-auto mb-3">
                    <UserCircle className="h-6 w-6 text-blue-300" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Finance Manager</h4>
                </CardContent>
              </Card>            
              <Card className="premium-card">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/30 border border-purple-400/40 flex items-center justify-center mx-auto mb-3">
                    <UserCircle className="h-6 w-6 text-purple-300" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Marketing</h4>
                </CardContent>
              </Card>
            </div>
            {/* Marketing Sub-structure - directly under Marketing (3rd column) */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="col-start-3 flex flex-col items-center">
                {/* This width = 76 + 76 + 16(gap-4) = 168px */}
                <div className="relative w-[168px] flex gap-4 pt-14 justify-center">
                  {/* main drop from Marketing card */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-white/20" />

                  {/* horizontal bar between card centers */}
                  <div className="absolute left-[38px] right-[38px] top-8 h-px bg-white/20" />

                  {/* branches down into each small card center */}
                  <div className="absolute left-[38px] top-8 w-px h-6 bg-white/20" />
                  <div className="absolute right-[38px] top-8 w-px h-6 bg-white/20" />

                  {/* Third Level - Marketing Sub-teams */}
                  <Card className="premium-card w-[76px]">
                    <CardContent className="p-3 text-center">
                      <h5 className="font-medium text-steel-200 text-xs">Support</h5>
                    </CardContent>
                  </Card>

                  <Card className="premium-card w-[76px]">
                    <CardContent className="p-3 text-center">
                      <h5 className="font-medium text-steel-200 text-xs">Sales</h5>
                    </CardContent>
                  </Card>
                </div>
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
