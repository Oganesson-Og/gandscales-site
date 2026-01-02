"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Package, Wrench, Settings, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    number: "01",
    icon: Package,
    title: "Equipment Supply",
    description:
      "We supply a comprehensive range of weighing equipment from trusted international manufacturers. From precision laboratory balances to heavy-duty industrial weighbridges.",
    href: "/services#supply",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Repair & Maintenance",
    description:
      "Our certified technicians provide expert repair services with genuine parts. We diagnose and fix issues quickly to minimize your downtime.",
    href: "/services#repair",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    number: "03",
    icon: Settings,
    title: "Calibration Services",
    description:
      "Certified calibration services to ensure your scales meet regulatory standards. We provide calibration certificates for compliance.",
    href: "/services#calibration",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Custom Solutions",
    description:
      "We design and implement custom weighing solutions tailored to your specific industry needs. Integration with existing systems available.",
    href: "/services#custom",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export function ServicesSection() {
  return (
    <section className="section-padding bg-transparent overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4"
            >
              <span className="w-8 h-px bg-brand-500" />
              Comprehensive Weighing Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-steel-300 mb-8 leading-relaxed"
            >
              From equipment supply to ongoing maintenance, we provide end-to-end 
              weighing solutions that keep your operations running smoothly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" variant="premium" className="group">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right - Services grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
              >
                <Link
                  href={service.href}
                  className="block h-full group"
                >
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(0,103,255,0.1)]">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Number badge */}
                    <span className="relative text-5xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                      {service.number}
                    </span>
                    
                    {/* Icon */}
                    <div className="relative mt-4 mb-3 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:border-brand-500/30 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="h-6 w-6 text-brand-300 group-hover:text-brand-200 transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-brand-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="relative text-sm text-steel-300 leading-relaxed group-hover:text-steel-200 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Learn more arrow */}
                    <div className="relative mt-4 flex items-center text-brand-300 text-sm font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Learn more 
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
