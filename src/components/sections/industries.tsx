"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Factory, Tractor, Store, Gem, Truck, Beef, ArrowRight } from "lucide-react"

const industries = [
  {
    icon: Factory,
    name: "Industrial & Manufacturing",
    description: "Heavy-duty platform scales, crane scales, and weighing systems for warehouses and factories.",
    href: "/shop?industry=industrial",
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    icon: Tractor,
    name: "Agriculture & Farming",
    description: "Livestock cages, veterinary scales, and produce weighing solutions for farms.",
    href: "/shop?industry=agriculture",
    gradient: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/20",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
  },
  {
    icon: Store,
    name: "Retail & Supermarket",
    description: "Deli scales, price computing scales, and label printing solutions.",
    href: "/shop?industry=retail",
    gradient: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/20",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  },
  {
    icon: Gem,
    name: "Jewellery & Precious Metals",
    description: "High-precision carat scales and analytical balances for jewellers.",
    href: "/shop?industry=jewellery",
    gradient: "from-amber-400 to-yellow-500",
    shadowColor: "shadow-amber-500/20",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
  },
  {
    icon: Truck,
    name: "Mining & Logistics",
    description: "Weighbridges, axle scales, and heavy vehicle weighing systems.",
    href: "/shop?industry=mining",
    gradient: "from-orange-500 to-red-500",
    shadowColor: "shadow-orange-500/20",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
  },
  {
    icon: Beef,
    name: "Butchery & Meat Processing",
    description: "Bench scales, overhead rail scales, and labeling equipment for meat industry.",
    href: "/shop?industry=butchery",
    gradient: "from-red-500 to-rose-500",
    shadowColor: "shadow-red-500/20",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function IndustriesSection() {
  return (
    <section className="section-padding bg-steel-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-steel-900/50 to-steel-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 blur-3xl rounded-full" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 tracking-wider uppercase mb-4"
          >
            <span className="w-8 h-px bg-brand-500" />
            Industries We Serve
            <span className="w-8 h-px bg-brand-500" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Solutions for Every Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-steel-300"
          >
            From precision jewellery scales to heavy-duty weighbridges, we provide 
            specialized weighing solutions for diverse industry needs.
          </motion.p>
        </div>

        {/* Industries grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={cardVariants}
              className="group"
            >
              <Link
                href={industry.href}
                className={`block h-full p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 ${industry.hoverGlow} relative`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-5 shadow-lg ${industry.shadowColor} group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                  <industry.icon className="h-7 w-7 text-white" />
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-white/30 scale-110" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-semibold text-white mb-2 group-hover:text-brand-200 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="relative text-steel-400 text-sm leading-relaxed group-hover:text-steel-300 transition-colors duration-300 mb-4">
                  {industry.description}
                </p>
                
                {/* Learn more */}
                <div className="relative flex items-center text-brand-400 text-sm font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View products
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
