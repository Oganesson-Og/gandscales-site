"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Scale,
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { COMPANY_PHONE } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  {
    name: "Products",
    href: "/shop",
    children: [
      { name: "All Products", href: "/shop" },
      { name: "Industrial Scales", href: "/shop?category=industrial-scales" },
      { name: "Agricultural Scales", href: "/shop?category=agricultural-scales" },
      { name: "Retail Scales", href: "/shop?category=retail-scales" },
      { name: "Weighbridges", href: "/shop?category=weighbridges" },
      { name: "Jewellery Scales", href: "/shop?category=jewellery-weighing-scales" },
      { name: "Accessories", href: "/shop?category=accessories" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-steel-950/70 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "border-b border-white/10 transition-all duration-300",
          isScrolled ? "hidden" : "block"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4 text-steel-300">
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-steel-200 border border-white/10 rounded-full text-xs font-medium">
                Precision weighing solutions since 2004
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-steel-300 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{COMPANY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-shadow">
              <Scale className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg lg:text-xl text-white">
                G&T Scales
              </span>
              <span className="text-[10px] lg:text-xs text-steel-400 -mt-0.5 hidden sm:block">
                Precision Weighing Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-white bg-white/10"
                      : "text-steel-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="w-56 rounded-xl bg-steel-950/90 backdrop-blur-md shadow-2xl shadow-black/40 border border-white/10 py-2 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-steel-200 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden lg:flex">
              <Link href="/quote">Get Quote</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-steel-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-steel-950/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === item.href
                        ? "text-white bg-white/10"
                        : "text-steel-200 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-steel-300 hover:text-white transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full">
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

