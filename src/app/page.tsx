import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { ValueProposition } from "@/components/sections/value-proposition"
import { ServicesSection } from "@/components/sections/services"
import { ProductsShowcase } from "@/components/sections/products-showcase"
import { IndustriesSection } from "@/components/sections/industries"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { StatsSection } from "@/components/sections/stats"

export const metadata: Metadata = {
  title: "Scales in Zimbabwe - Industrial, Retail, Weighbridge & Calibration",
  description:
    "Looking for scales in Zimbabwe? G&T Scale Services supplies industrial, retail, laboratory and agricultural scales with delivery, installation, repair and certified calibration.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ValueProposition />
      <ServicesSection />
      <ProductsShowcase />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

