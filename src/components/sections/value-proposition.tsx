"use client"

import { motion } from "framer-motion"
import { Target, Wrench, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Precision & Accuracy",
    description:
      "Industry-leading weighing equipment calibrated to exacting standards. Our scales meet international accuracy requirements for all applications.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    icon: Wrench,
    title: "Comprehensive Services",
    description:
      "From supply to repair and certified calibration, we cover all your weighing needs with expert technicians and genuine parts.",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Serving diverse industries across Zimbabwe and the region since 2004. We understand your specific requirements.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partnership",
    description:
      "We build lasting relationships with our clients, providing ongoing support, maintenance contracts, and priority service.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
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

export function ValueProposition() {
  return (
    <section className="section-padding bg-transparent overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4"
          >
            <span className="w-8 h-px bg-brand-500" />
            Why Choose Us?
            <span className="w-8 h-px bg-brand-500" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          >
            Our Unique Value Proposition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-steel-300"
          >
            We combine technical excellence with exceptional service to deliver 
            weighing solutions that drive your business forward.
          </motion.p>
        </div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group"
            >
              <div className={`relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2 ${feature.hoverGlow}`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  <feature.icon className={`h-8 w-8 ${feature.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-white/20 scale-110" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-semibold text-white mb-3 group-hover:text-brand-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-steel-300 leading-relaxed group-hover:text-steel-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
