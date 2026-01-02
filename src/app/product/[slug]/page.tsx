import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Settings, Shield, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  getAllProducts,
  getProductBySlug, 
  getProductsByCategory,
  getProductImageUrl,
} from "@/lib/catalog/data"
import { COMPANY_PHONE, generateWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/utils"

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const products = getAllProducts()
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return { title: "Product Not Found" }
  }
  
  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  // Fetch related products (same category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)

  const primaryImage = getProductImageUrl(product.image)
  const categoryName = product.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-steel-950/60 border-b border-white/10">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/shop" className="text-steel-400 hover:text-brand-200">
              Shop
            </Link>
            <span className="text-white/10">/</span>
            <Link href={`/shop?category=${product.category}`} className="text-steel-400 hover:text-brand-200">
              {categoryName}
            </Link>
            <span className="text-white/10">/</span>
            <span className="text-white font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product details */}
      <section className="container-wide py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6 sm:p-8">
                <div className="relative aspect-square">
                  <Image
                    src={primaryImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <Link 
                href={`/shop?category=${product.category}`}
                className="text-sm font-semibold text-brand-300 uppercase tracking-wider hover:text-brand-200"
              >
                {categoryName}
              </Link>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {product.name}
            </h1>
            
            <p className="text-lg text-steel-300 mb-8">
              {product.description}
            </p>

            {/* Price / Quote */}
            <div className="mb-8 p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="text-lg text-steel-300">
                <span className="font-semibold text-white">Price on request</span> — Contact us for a quote
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-steel-300">In stock (typ.)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="xl">
                <Link href={`/quote?product=${product.slug}`}>
                  Request Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <a 
                href={generateWhatsAppUrl(
                  WHATSAPP_NUMBER,
                  `Hi, I would like to enquire about the ${product.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" variant="outline" className="border-green-500/40 text-green-200 hover:bg-green-500/10 hover:border-green-400/50">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Inquiry
                </Button>
              </a>
            </div>

            {/* Key features quick view */}
            {product.applications && product.applications.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {product.applications.slice(0, 4).map((app) => (
                  <div key={app} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-300 shrink-0" />
                    <span className="text-sm text-steel-200">{app}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-center">
                <Truck className="h-6 w-6 text-brand-300 mx-auto mb-1" />
                <span className="text-xs text-steel-300">Nationwide Delivery</span>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-brand-300 mx-auto mb-1" />
                <span className="text-xs text-steel-300">Warranty Included</span>
              </div>
              <div className="text-center">
                <Settings className="h-6 w-6 text-brand-300 mx-auto mb-1" />
                <span className="text-xs text-steel-300">Installation Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product tabs */}
      <section className="bg-steel-950/40 border-y border-white/10 py-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Product Details
              </h2>
              <p className="text-steel-300 leading-relaxed mb-6">{product.description}</p>

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <>
                  <h3 className="text-xl font-display font-bold text-white mt-8 mb-4">
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span 
                        key={app}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-steel-200 rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Specifications sidebar */}
            <div>
              <Card className="border-white/10 bg-white/5 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-display font-bold text-white mb-4">
                    Specifications
                  </h3>
                  <p className="text-steel-400 text-sm">Contact us for detailed specifications.</p>

                  {/* Quick contact */}
                  <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Need Help?</h4>
                    <p className="text-sm text-steel-300 mb-3">
                      Our team can help you choose the right equipment.
                    </p>
                    <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4" />
                        {COMPANY_PHONE}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="container-wide py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-white">
              Related Products
            </h2>
            <Link href="/shop" className="text-brand-300 hover:text-brand-200 font-medium flex items-center gap-1">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <Card 
                key={relProduct.slug}
                className="group border-white/10 bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square bg-steel-950/40 p-4">
                  <Image
                    src={getProductImageUrl(relProduct.image)}
                    alt={relProduct.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-brand-300 font-medium uppercase tracking-wider mb-1">
                    {categoryName}
                  </p>
                  <Link href={`/product/${relProduct.slug}`}>
                    <h3 className="font-semibold text-white group-hover:text-brand-200 transition-colors line-clamp-2">
                      {relProduct.name}
                    </h3>
                  </Link>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-steel-400">
                      Request Quote
                    </span>
                    <Link href={`/product/${relProduct.slug}`}>
                      <Button size="sm" variant="outline">
                        Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-steel-950/60 border-t border-white/10 py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Interested in this product?
            </h2>
            <p className="text-steel-300">
              Get in touch for pricing, technical specifications, or to schedule a demonstration.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href={`/quote?product=${product.slug}`}>
              <Button size="lg" variant="secondary" className="bg-white text-steel-950 hover:bg-white/90">
                Request Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

