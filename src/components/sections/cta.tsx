"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_PHONE, generateWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils"

export function CTASection() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute -top-32 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute -bottom-40 left-0 h-[520px] w-[520px] rounded-full bg-brand-400/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-accent-orange-500/10 blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Gradient border card */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-brand-500/50 via-white/10 to-brand-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="rounded-[23px] bg-steel-950/95 backdrop-blur-xl p-10 sm:p-14 text-center overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-400/10 rounded-3xl" />
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm text-brand-300 mb-6">
                  <Sparkles className="h-4 w-4" />
                  Ready to Get Started?
                </span>
                
                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                  Contact us today for all your{" "}
                  <span className="text-gradient-animated">weighing equipment needs</span>
                </h2>

                <p className="text-lg text-steel-300 mb-10 max-w-2xl mx-auto">
                  Whether you need new equipment, repair services, or expert advice, 
                  our team is ready to help. Get in touch today for a free consultation.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Button asChild size="xl" variant="premium" className="group">
                    <Link href="/quote">
                      Request a Quote
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="whatsapp" className="group">
                    <a
                      href={generateWhatsAppUrl(WHATSAPP_NUMBER, "Hi, I'd like to inquire about your weighing equipment.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                  </Button>
                </div>

                {/* Phone number */}
                <div className="flex items-center justify-center gap-3 text-steel-400">
                  <span className="text-sm">or call us at:</span>
                  <motion.a
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors duration-300">
                      <Phone className="h-4 w-4 text-brand-300" />
                    </div>
                    <span className="font-semibold text-white">{COMPANY_PHONE}</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-brand-500/10 blur-2xl" />
              <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-accent-orange-500/10 blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
