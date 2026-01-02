"use client"

import { motion } from "framer-motion"
import { Scale, Truck, Wrench } from "lucide-react"

import { cn } from "@/lib/utils"

type FloatingHeroIconsProps = {
  className?: string
}

export function FloatingHeroIcons({ className }: FloatingHeroIconsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      {/* Wrench - Repair services */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[7%] top-[24%] hidden lg:block"
      >
        <div className="h-14 w-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/30 flex items-center justify-center">
          <Wrench className="h-6 w-6 text-brand-300" />
        </div>
      </motion.div>

      {/* Scale - Weighing equipment (core business) */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="absolute right-[10%] top-[22%] hidden lg:block"
      >
        <div className="h-14 w-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/30 flex items-center justify-center">
          <Scale className="h-6 w-6 text-brand-300" />
        </div>
      </motion.div>

      {/* Truck - Weighbridge services */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute right-[14%] bottom-[18%] hidden lg:block"
      >
        <div className="h-14 w-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/30 flex items-center justify-center">
          <Truck className="h-6 w-6 text-brand-300" />
        </div>
      </motion.div>
    </div>
  )
}


