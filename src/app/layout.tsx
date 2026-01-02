import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"

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
    default: "G&T Scale Services | Precision Weighing Equipment Solutions",
    template: "%s | G&T Scale Services",
  },
  description:
    "Leading weighing company providing precision weighing equipment solutions. Reliable supply, repair, and certified calibration services since 2004.",
  keywords: [
    "weighing equipment",
    "industrial scales",
    "weighbridge",
    "scale calibration",
    "Zimbabwe",
    "precision scales",
    "livestock scales",
    "retail scales",
  ],
  authors: [{ name: "G&T Scale Services" }],
  creator: "G&T Scale Services",
  publisher: "G&T Scale Services",
  metadataBase: new URL("https://gandtscales.com"),
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://gandtscales.com",
    siteName: "G&T Scale Services",
    title: "G&T Scale Services | Precision Weighing Equipment Solutions",
    description:
      "Leading weighing company providing precision weighing equipment solutions. Reliable supply, repair, and certified calibration services since 2004.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "G&T Scale Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G&T Scale Services | Precision Weighing Equipment Solutions",
    description:
      "Leading weighing company providing precision weighing equipment solutions. Reliable supply, repair, and certified calibration services since 2004.",
    images: ["/og-image.svg"],
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
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
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

