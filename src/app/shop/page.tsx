"use client"

import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { 
  Search, 
  Grid3X3, 
  List, 
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/page-hero"
import { 
  getProducts, 
  getCategoryWithProductCount,
  getProductImageUrl,
} from "@/lib/catalog/data"

const PRODUCTS_PER_PAGE = 12

function ShopContent() {
  const searchParams = useSearchParams()
  const currentPage = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1)
  const categoryFilter = searchParams.get("category") || undefined

  const categories = getCategoryWithProductCount()
  const { items: products, total: totalProducts, totalPages, page: validPage } = getProducts({ 
    page: currentPage, 
    pageSize: PRODUCTS_PER_PAGE,
    category: categoryFilter,
  })
  
  const showingStart = products.length > 0 ? (validPage - 1) * PRODUCTS_PER_PAGE + 1 : 0
  const showingEnd = showingStart + products.length - 1

  const getPageNumbers = () => {
    const pages: (number | "...")[] = []
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      if (validPage > 3) {
        pages.push("...")
      }
      
      const start = Math.max(2, validPage - 1)
      const end = Math.min(totalPages - 1, validPage + 1)
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }
      
      if (validPage < totalPages - 2) {
        pages.push("...")
      }
      
      if (!pages.includes(totalPages)) {
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  const pageNumbers = getPageNumbers()

  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams()
    params.set("page", String(page))
    if (categoryFilter) params.set("category", categoryFilter)
    return `/shop?${params.toString()}`
  }

  return (
    <>
      {/* Products grid */}
      <section className="container-wide py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-64 shrink-0">
            <Card className="border-white/10 bg-white/5 sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-white">Filters</h3>
                  {categoryFilter && (
                    <Link href="/shop" className="text-sm text-brand-300 hover:text-brand-200">
                      Clear all
                    </Link>
                  )}
                </div>
                
                {/* Category filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link 
                        key={category.slug} 
                        href={`/shop?category=${category.slug}`}
                        className={`flex items-center gap-2 cursor-pointer hover:text-white transition-colors ${
                          categoryFilter === category.slug ? "text-brand-300" : "text-steel-200"
                        }`}
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs text-steel-400 ml-auto">({category.productCount})</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Application filter placeholder */}
                <div>
                  <h4 className="font-medium text-white mb-3">Application</h4>
                  <div className="space-y-2">
                    {["Industrial", "Retail", "Laboratory", "Agriculture", "Medical"].map((app) => (
                      <label key={app} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded border-white/20 bg-transparent text-brand-400 focus:ring-brand-400"
                        />
                        <span className="text-sm text-steel-200">{app}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white/5 border border-white/10 rounded-xl p-4 shadow-sm">
              <p className="text-steel-300">
                {totalProducts > 0 ? (
                  <>
                    Showing <span className="font-semibold text-white">{showingStart}-{showingEnd}</span> of{" "}
                    <span className="font-semibold text-white">{totalProducts}</span> products
                  </>
                ) : (
                  "No products found"
                )}
              </p>
              <div className="flex items-center gap-4">
                <select className="text-sm border border-white/10 bg-white/5 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-400">
                  <option>Sort by: Featured</option>
                  <option>Name: A to Z</option>
                  <option>Name: Z to A</option>
                  <option>Newest First</option>
                </select>
                <div className="flex gap-1">
                  <button className="p-2 rounded-lg bg-white/10 text-white">
                    <Grid3X3 className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 text-steel-300">
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-steel-300 mb-4">No products found in this category.</p>
                <Link href="/shop">
                  <Button variant="outline">View all products</Button>
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card 
                    key={product.slug}
                    className="group border-white/10 bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative aspect-square bg-steel-950/40 p-4">
                      <Image
                        src={getProductImageUrl(product.image)}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Quick actions overlay */}
                      <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                        <Link href={`/product/${product.slug}`}>
                          <Button size="sm" variant="secondary" className="shadow-lg">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                        </Link>
                        <Button asChild size="sm" variant="outline" className="shadow-lg">
                          <Link href={`/quote?product=${product.slug}`}>Request Quote</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-4">
                      <p className="text-xs text-brand-300 font-medium uppercase tracking-wider mb-1">
                        {product.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
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
                        <Link href={`/product/${product.slug}`}>
                          <Button size="sm" variant="outline" className="group/btn">
                            Details
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination - only show if more than one page */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1" aria-label="Pagination">
                  {/* Previous button */}
                  {validPage > 1 ? (
                    <Link href={buildPageUrl(validPage - 1)}>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="gap-1">
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                  )}

                  {/* Page numbers */}
                  <div className="flex items-center gap-1 mx-2">
                    {pageNumbers.map((page, index) => (
                      page === "..." ? (
                        <span key={`ellipsis-${index}`} className="px-2 text-steel-400">
                          
                        </span>
                      ) : (
                        <Link key={page} href={buildPageUrl(page)}>
                          <Button 
                            size="sm" 
                            variant={page === validPage ? "default" : "outline"}
                            className="w-10"
                          >
                            {page}
                          </Button>
                        </Link>
                      )
                    ))}
                  </div>

                  {/* Next button */}
                  {validPage < totalPages ? (
                    <Link href={buildPageUrl(validPage + 1)}>
                      <Button variant="outline" size="sm" className="gap-1">
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="gap-1">
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-steel-950/60 border-t border-white/10 py-16">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
            We have access to a wide range of products not listed here. 
            Contact us with your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote">
              <Button size="xl" variant="secondary" className="bg-white text-steel-950 hover:bg-white/90">
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Our Products
          </span>
        }
        title="Precision Weighing Equipment"
        description={
          <>
            Browse our complete range of weighing solutions from leading
            manufacturers. Quality equipment for every industry.
          </>
        }
      >
        {/* Search bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-steel-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-12 h-14 text-lg rounded-xl border-white/10 bg-white/5 text-white placeholder:text-steel-400 focus:border-brand-400"
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2">
            Search
          </Button>
        </div>
      </PageHero>

      <Suspense fallback={<div className="container-wide py-12 text-center text-steel-400">Loading products...</div>}>
        <ShopContent />
      </Suspense>
    </div>
  )
}

