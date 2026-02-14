import type { MetadataRoute } from "next"
import { getAllCategories, getAllProducts } from "@/lib/catalog/data"

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
    : ""
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gandtscales.com").replace(
  /\/+$/,
  ""
)
const siteRootUrl = `${siteUrl}${normalizedBasePath}`

function absoluteUrl(path: string) {
  return `${siteRootUrl}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/shop"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/shop/categories"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/quote"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/book-service"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: absoluteUrl("/report-fault"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/faq"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/case-studies"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: absoluteUrl(`/shop/category/${category.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const productRoutes: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: absoluteUrl(`/product/${product.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}
