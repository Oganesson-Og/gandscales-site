"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingHeroIcons } from "@/components/sections/floating-hero-icons"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const features = [
  "EcoCash / OneMoney / Bank transfer",
  "ISO-traceable calibration certificates",
  "Nationwide delivery & service",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 hero-aurora" />
      <div className="absolute inset-0 grid-fade opacity-25" />

      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        className="pointer-events-none absolute -bottom-48 left-[10%] h-[520px] w-[520px] rounded-full bg-brand-400/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        className="pointer-events-none absolute top-1/2 right-[5%] h-[400px] w-[400px] rounded-full bg-accent-orange-500/10 blur-3xl"
      />

      {/* Floating icon chips (premium feel) */}
      <FloatingHeroIcons />

      <div className="container-wide relative z-10 pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={scaleInVariant}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-steel-200 backdrop-blur-md shadow-lg shadow-black/20 mb-8"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-400 shadow-[0_0_18px_rgba(56,175,255,0.6)] animate-pulse" />
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              Certified calibration • Repairs • Nationwide support
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariant}
            custom={0.1}
            className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]"
          >
            Precision You Trust,
            <br />
            <span className="relative">
              <span className="text-gradient-animated">Every Time.</span>
              {/* Decorative underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            custom={0.25}
            className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-steel-300 leading-relaxed"
          >
            Premium weighing equipment for industrial, agricultural, and retail operations —
            backed by expert installation, repair, and ISO-traceable calibration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            custom={0.4}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="xl" variant="premium" className="group">
              <Link href="/shop">
                Browse Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="glass">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUpVariant}
            custom={0.55}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-steel-400"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 group"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/20 group-hover:bg-brand-500/30 transition-colors duration-300">
                  <Check className="h-3 w-3 text-brand-300" />
                </span>
                <span className="group-hover:text-steel-300 transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-steel-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-steel-600 flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-brand-400"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
