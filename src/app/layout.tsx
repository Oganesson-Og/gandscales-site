import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/utils"

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
const seoDescription =
  "Buy scales in Zimbabwe from G&T Scale Services. We supply industrial, agricultural, retail and laboratory scales with installation, repair, and certified calibration."

function absoluteUrl(path: string = "/") {
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+/, "")
  return normalizedPath ? `${siteRootUrl}/${normalizedPath}` : siteRootUrl
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "G&T Scale Services",
  url: siteRootUrl,
  image: absoluteUrl("/og-image.svg"),
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "204 Robert Mugabe Road",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Zimbabwe",
    },
  ],
  sameAs: [
    "https://facebook.com/gandtscales",
    "https://instagram.com/gandtscales",
    "https://linkedin.com/company/gandtscales",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "G&T Scale Services",
  url: siteRootUrl,
  inLanguage: "en-ZW",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// DM Sans as display font - clean, modern geometric sans-serif
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-cabinet",
})

export const metadata: Metadata = {
  title: {
    default: "Scales in Zimbabwe | G&T Scale Services",
    template: "%s | G&T Scale Services",
  },
  description: seoDescription,
  keywords: [
    "scales in Zimbabwe",
    "scales Zimbabwe",
    "weighing scales Zimbabwe",
    "industrial scales Zimbabwe",
    "digital scales Zimbabwe",
    "weighbridge Zimbabwe",
    "scale calibration Zimbabwe",
    "platform scales Zimbabwe",
    "retail scales Zimbabwe",
    "agricultural scales Zimbabwe",
    "laboratory scales Zimbabwe",
    "weighing equipment",
  ],
  authors: [{ name: "G&T Scale Services" }],
  creator: "G&T Scale Services",
  publisher: "G&T Scale Services",
  metadataBase: new URL(siteRootUrl),
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: siteRootUrl,
    siteName: "G&T Scale Services",
    title: "Scales in Zimbabwe | G&T Scale Services",
    description: seoDescription,
    images: [
      {
        url: absoluteUrl("/og-image.svg"),
        width: 1200,
        height: 630,
        alt: "G&T Scale Services - Scales in Zimbabwe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scales in Zimbabwe | G&T Scale Services",
    description: seoDescription,
    images: [absoluteUrl("/og-image.svg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: absoluteUrl("/favicon.svg"),
    apple: absoluteUrl("/apple-touch-icon.svg"),
  },
  manifest: absoluteUrl("/site.webmanifest"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

