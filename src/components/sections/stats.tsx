"use client"

import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Package, Award } from "lucide-react"

const stats = [
  { 
    value: 20, 
    suffix: "+", 
    label: "Years of Excellence",
    icon: TrendingUp,
    description: "Serving Zimbabwe since 2004"
  },
  { 
    value: 1000, 
    suffix: "+", 
    label: "Happy Clients",
    icon: Users,
    description: "Across all industries"
  },
  { 
    value: 5000, 
    suffix: "+", 
    label: "Products Delivered",
    icon: Package,
    description: "Quality equipment"
  },
  { 
    value: 98, 
    suffix: "%", 
    label: "Client Satisfaction",
    icon: Award,
    description: "Based on reviews"
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2,
  })
  
  const display = useTransform(spring, (current) => {
    return Math.floor(current).toLocaleString()
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-steel-950/30">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 lg:p-8 text-center transition-all duration-500 hover:border-brand-500/30 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,103,255,0.1)]">
                {/* Icon */}
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:border-brand-500/30 group-hover:scale-110 transition-all duration-500">
                  <stat.icon className="h-6 w-6 text-brand-300 group-hover:text-brand-200 transition-colors duration-300" />
                </div>
                
                {/* Counter */}
                <div className="text-4xl lg:text-5xl font-display font-bold text-transparent bg-gradient-to-b from-white to-steel-300 bg-clip-text mb-2 group-hover:from-brand-200 group-hover:to-brand-400 transition-all duration-500">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <p className="text-white font-medium mb-1">{stat.label}</p>
                
                {/* Description */}
                <p className="text-steel-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-brand-400/0 group-hover:from-brand-500/5 group-hover:to-brand-400/5 transition-all duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
