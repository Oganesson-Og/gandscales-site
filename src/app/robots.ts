import type { MetadataRoute } from "next"

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
const siteOrigin = new URL(siteRootUrl).origin

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteRootUrl}/sitemap.xml`,
    host: siteOrigin,
  }
}
