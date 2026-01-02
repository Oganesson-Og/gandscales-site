import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price)
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + "..."
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export function generateWhatsAppUrl(
  phone: string,
  message?: string
): string {
  let cleanPhone = phone.replace(/\D/g, "")
  // WhatsApp wa.me expects country code format (e.g., 971...) and does NOT accept the "00" prefix.
  if (cleanPhone.startsWith("00")) cleanPhone = cleanPhone.slice(2)
  const baseUrl = `https://wa.me/${cleanPhone}`
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }
  return baseUrl
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function getBaseUrl(): string {
  if (typeof window !== "undefined") return ""
  return ""
}

// Company info (sourced from `inventory/` legacy crawl where available)
export const COMPANY_FOUNDED_YEAR = 2004

// Zimbabwe (Harare) office
export const COMPANY_PHONE = "+263 242 498 883"
// Placeholder WhatsApp number (user-provided)
export const WHATSAPP_NUMBER = "00971561929377"
export const COMPANY_EMAIL = "sales@gandtscales.com"
export const COMPANY_ADDRESS = "Mutare Rd, Eastview, Harare, Zimbabwe"

// Botswana (Gaborone) office (sourced from legacy screenshots)
export const BOTSWANA_PHONE = "+267 311 0810"
export const BOTSWANA_EMAIL = "sales@gandtscalesbotswana.com"
export const BOTSWANA_ADDRESS = "Plot 170, Unit 11 Commerce Park, Gaborone, Botswana"

