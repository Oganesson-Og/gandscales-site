import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowRight, Grid3X3 } from "lucide-react"

import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
  getProductImageUrl,
} from "@/lib/catalog/data"

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCategoryBySlug(params.slug)
  if (!category) return { title: "Category Not Found" }
  return {
    title: category.name,
    description: `Browse products in ${category.name}.`,
  }
}

export default function ShopCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  const products = getProductsByCategory(category.slug)

  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Category
          </span>
        }
        title={category.name}
        description={
          <>
            Browse available products in <span className="text-white">{category.name}</span>.
          </>
        }
        actions={
          <Button asChild variant="outline">
            <Link href="/shop/categories">
              All categories <Grid3X3 className="h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="container-wide py-14">
        {products.length === 0 ? (
          <Card className="border-white/10 bg-white/5">
            <CardContent className="p-10 text-center">
              <p className="text-steel-200 font-semibold">No products yet</p>
              <p className="mt-2 text-steel-400">
                This category doesn&apos;t have products in the catalog yet.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/shop">
                    Back to shop <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="group border-white/10 bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square bg-steel-950/40 p-4">
                  <Image
                    src={getProductImageUrl(product.image)}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-brand-300 font-medium uppercase tracking-wider mb-1">
                    {category.name}
                  </p>
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="font-semibold text-white group-hover:text-brand-200 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-steel-400">
                      Request Quote
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/product/${product.slug}`}>
                        Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

