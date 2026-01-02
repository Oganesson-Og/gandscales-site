"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { FloatingHeroIcons } from "@/components/sections/floating-hero-icons"

type PageHeroProps = {
  badge?: React.ReactNode
  kicker?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  children?: React.ReactNode
  aside?: React.ReactNode
  align?: "left" | "center"
  density?: "default" | "compact"
  showFloatingIcons?: boolean
  className?: string
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function PageHero({
  badge,
  kicker,
  title,
  description,
  actions,
  children,
  aside,
  align = "left",
  density = "default",
  showFloatingIcons = true,
  className,
}: PageHeroProps) {
  const isCenter = align === "center" && !aside
  const spacing =
    density === "compact"
      ? "pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-16"
      : "pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"

  return (
    <section className={cn("relative overflow-hidden min-h-[50vh]", className)}>
      {/* Background */}
      <div className="absolute inset-0 hero-aurora" />
      <div className="absolute inset-0 grid-fade opacity-25" />

      {/* Animated soft glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-500/12 blur-3xl"
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
        className="pointer-events-none absolute top-1/3 right-[5%] h-[350px] w-[350px] rounded-full bg-accent-orange-500/8 blur-3xl"
      />

      {/* Floating icon chips */}
      {showFloatingIcons ? <FloatingHeroIcons /> : null}

      <div className={cn("container-wide relative z-10", spacing)}>
        {aside ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              {badge ? (
                <motion.div
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  {badge}
                </motion.div>
              ) : null}

              {kicker ? (
                <motion.div
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.05}
                  className="mt-2"
                >
                  {kicker}
                </motion.div>
              ) : null}

              <motion.h1
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]"
              >
                {title}
              </motion.h1>

              {description ? (
                <motion.div
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="mt-6 text-lg sm:text-xl text-steel-300 leading-relaxed"
                >
                  {description}
                </motion.div>
              ) : null}

              {actions ? (
                <motion.div
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.3}
                  className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  {actions}
                </motion.div>
              ) : null}

              {children ? (
                <motion.div
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.4}
                  className="mt-10"
                >
                  {children}
                </motion.div>
              ) : null}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="hidden lg:block"
            >
              {aside}
            </motion.div>
          </div>
        ) : (
          <div className={cn(isCenter ? "mx-auto max-w-4xl text-center" : "max-w-3xl")}>
            {badge ? (
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className={cn(isCenter ? "inline-flex justify-center" : "")}
              >
                {badge}
              </motion.div>
            ) : null}

            {kicker ? (
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.05}
                className={cn("mt-2", isCenter ? "flex justify-center" : "")}
              >
                {kicker}
              </motion.div>
            ) : null}

            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className={cn(
                "mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]",
              )}
            >
              {title}
            </motion.h1>

            {description ? (
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className={cn(
                  "mt-6 text-lg sm:text-xl text-steel-300 leading-relaxed",
                  isCenter ? "mx-auto max-w-2xl" : ""
                )}
              >
                {description}
              </motion.div>
            ) : null}

            {actions ? (
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className={cn(
                  "mt-10 flex flex-col sm:flex-row gap-4",
                  isCenter ? "items-center justify-center" : "items-start"
                )}
              >
                {actions}
              </motion.div>
            ) : null}

            {children ? (
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="mt-10"
              >
                {children}
              </motion.div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}
