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

// Company info (from company profile)
export const COMPANY_FOUNDED_YEAR = 2004
export const COMPANY_SLOGAN = "We believe in our business, servicing, supplying and repairing of scales"

// Zimbabwe (Harare) office - Head Office
export const COMPANY_PHONE = "+263 242 498 883"
export const COMPANY_PHONE_ALT = "+263 242 498 884"
export const COMPANY_DIRECT_LINE = "+263 4 490476"
export const COMPANY_CELL_1 = "+263 772 914 705"
export const COMPANY_CELL_2 = "+263 772 819 521"
export const COMPANY_FAX = "+263 4 498885"
export const WHATSAPP_NUMBER = "+263772914705"
export const COMPANY_EMAIL = "sales@gandtscales.com"
export const COMPANY_EMAIL_GODWIN = "godwin@gandtscales.com"
export const COMPANY_EMAIL_MIRIAM = "miriam@gandtscales.com"
export const COMPANY_ADDRESS = "204 Robert Mugabe Road, Harare, Zimbabwe"
export const COMPANY_WEBSITE = "www.gandtscales.com"

// Zimbabwe (Bulawayo) office
export const BULAWAYO_ADDRESS = "Suite 6 Fanum Building, AAZ offices, Leopold Takawira and J. Tongogara, Bulawayo"
export const BULAWAYO_PHONE_1 = "+263 292 60779"
export const BULAWAYO_PHONE_2 = "+263 292 60714"
export const BULAWAYO_EMAIL = "salesbyo@gandtscales.com"

// South Africa office
export const SA_ADDRESS = "32 Bok Street, Joubert Park, Gauteng 2198"
export const SA_PHONE = "+27 78 603 2628"

// Botswana (Gaborone) office
export const BOTSWANA_PHONE = "+267 311 0810"
export const BOTSWANA_CELL_1 = "+267 71 745 655"
export const BOTSWANA_CELL_2 = "+267 75 484 004"
export const BOTSWANA_CELL_3 = "+267 75 484 024"
export const BOTSWANA_FAX = "+267 311 0811"
export const BOTSWANA_EMAIL = "sales@gandtscalesbotswana.com"
export const BOTSWANA_EMAIL_GODWIN = "godwin@gandtscales.com"
export const BOTSWANA_EMAIL_MIRIAM = "miriam@gandtscales.com"
export const BOTSWANA_ADDRESS = "Plot 170, Unit 11, Commerce Park, Box 839 Kgalaview, Gaborone, Botswana"

