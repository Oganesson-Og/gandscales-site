import Link from "next/link"
import { Metadata } from "next"
import { ChevronRight, Grid3X3 } from "lucide-react"

import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { getCategoryWithProductCount } from "@/lib/catalog/data"

export const metadata: Metadata = {
  title: "Product Categories",
  description: "Browse all product categories.",
}

export default function ShopCategoriesPage() {
  const categories = getCategoryWithProductCount()

  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Shop
          </span>
        }
        title="Browse categories"
        description={
          <>
            Find products faster by starting with a category, then explore the
            available models and variants.
          </>
        }
        showFloatingIcons={false}
      />

      <section className="container-wide py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/category/${category.slug}`}
              className="group"
            >
              <Card className="border-white/10 bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/35 transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-steel-950/60 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-600/10 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Grid3X3 className="h-7 w-7 text-brand-300" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white truncate group-hover:text-brand-200 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-steel-400">
                        {category.productCount} products
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-steel-400 shrink-0 group-hover:text-brand-200 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

