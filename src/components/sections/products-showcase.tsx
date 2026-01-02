"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Scale, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts, getProductImageUrl } from "@/lib/catalog/data"

const featuredProducts = getFeaturedProducts().slice(0, 6)

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

export function ProductsShowcase() {
  return (
    <section className="section-padding bg-transparent overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 tracking-wider uppercase mb-4"
            >
              <span className="w-8 h-px bg-brand-500" />
              Our Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Browse Our Products
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="glass" className="group">
              <Link href="/shop">
                View All Products
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.slug}
              variants={cardVariants}
              className="group"
            >
              <Link href={`/product/${product.slug}`} className="block">
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(0,103,255,0.1)]">
                  {/* Image container */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-steel-900 to-steel-950 relative overflow-hidden">
                    <Image
                      src={getProductImageUrl(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain p-8 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 bg-steel-950/70 border border-white/10 backdrop-blur-md rounded-full text-xs font-medium text-steel-200 transition-all duration-300 group-hover:bg-brand-500/20 group-hover:border-brand-500/30 group-hover:text-white">
                        {product.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </span>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Quick actions - appear on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <Button size="sm" variant="glass" className="shadow-xl">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="shadow-xl">
                        Quote
                      </Button>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-200 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-steel-300 text-sm mb-4 line-clamp-2 group-hover:text-steel-200 transition-colors duration-300">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-300 font-medium">
                        Request Quote
                      </span>
                      <span className="flex items-center text-brand-300 text-sm font-medium group-hover:text-brand-200 transition-colors duration-300">
                        Learn more 
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
