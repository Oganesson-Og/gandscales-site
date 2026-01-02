import { HeroSection } from "@/components/sections/hero"
import { ValueProposition } from "@/components/sections/value-proposition"
import { ServicesSection } from "@/components/sections/services"
import { ProductsShowcase } from "@/components/sections/products-showcase"
import { IndustriesSection } from "@/components/sections/industries"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { StatsSection } from "@/components/sections/stats"

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

