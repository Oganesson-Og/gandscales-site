"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Mukanya",
    role: "Operations Manager",
    company: "Zvimba Farms",
    content:
      "G&T Scale Services has been our trusted partner for over 10 years. Their livestock scales are accurate and durable, and their service team is always responsive.",
    rating: 5,
    avatar: "JM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sarah Moyo",
    role: "Quality Controller",
    company: "Metro Butchery",
    content:
      "The precision of their bench scales is exceptional. We've significantly reduced weighing errors since switching to G&T equipment. Highly recommended!",
    rating: 5,
    avatar: "SM",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "David Chikwanha",
    role: "Mine Manager",
    company: "Sunrise Mining Corp",
    content:
      "Our weighbridge installation was handled professionally from start to finish. The calibration service is reliable and always on schedule.",
    rating: 5,
    avatar: "DC",
    gradient: "from-orange-500 to-amber-500",
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

export function TestimonialsSection() {
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
            Testimonials
            <span className="w-8 h-px bg-brand-500" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-steel-300"
          >
            Don&apos;t just take our word for it. Here&apos;s what our valued 
            customers have to say about our products and services.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(0,103,255,0.1)]">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-white/5 group-hover:text-brand-500/20 group-hover:scale-110 transition-all duration-500" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star
                        className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-steel-200 leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors duration-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                    {testimonial.avatar}
                    {/* Ring effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-brand-200 transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-steel-400 group-hover:text-steel-300 transition-colors duration-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-brand-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
