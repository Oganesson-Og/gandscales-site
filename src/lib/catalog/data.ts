import catalogData from "@/content/products.json"

// Types
export type Category = {
  id: string
  name: string
  slug: string
  description: string
}

export type Product = {
  id: string
  name: string
  slug: string
  category: string
  description: string
  image: string
  featured: boolean
  applications: string[]
}

// Fallback image
export const PRODUCT_IMAGE_PLACEHOLDER = "/images/product-placeholder.svg"

export function getProductImageUrl(rawUrl: string): string {
  // Already a local path - return as-is
  if (rawUrl.startsWith("/images/")) return rawUrl
  if (rawUrl.startsWith("/")) return rawUrl
  
  // Fallback for any external/unknown paths
  return PRODUCT_IMAGE_PLACEHOLDER
}

// Data accessors
export function getAllCategories(): Category[] {
  return catalogData.categories as Category[]
}

export function getAllProducts(): Product[] {
  return catalogData.products as Product[]
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return getAllProducts().filter((p) => p.category === categorySlug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((c) => c.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured)
}

type GetProductsParams = {
  category?: string
  q?: string
  page?: number
  pageSize?: number
}

export function getProducts(params?: GetProductsParams): {
  items: Product[]
  total: number
  page: number
  pageSize: number
  totalPages: number
} {
  let products = getAllProducts()
  
  // Filter by category
  if (params?.category) {
    products = products.filter((p) => p.category === params.category)
  }
  
  // Search filter
  if (params?.q) {
    const query = params.q.toLowerCase()
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.applications.some((a) => a.toLowerCase().includes(query))
    )
  }
  
  const total = products.length
  const pageSize = params?.pageSize || 12
  const totalPages = Math.ceil(total / pageSize)
  const page = Math.min(Math.max(1, params?.page || 1), totalPages || 1)
  
  const start = (page - 1) * pageSize
  const items = products.slice(start, start + pageSize)
  
  return { items, total, page, pageSize, totalPages }
}

export function getCategoryWithProductCount(): (Category & { productCount: number })[] {
  const categories = getAllCategories()
  const products = getAllProducts()
  
  return categories.map((cat) => ({
    ...cat,
    productCount: products.filter((p) => p.category === cat.slug).length,
  }))
}

