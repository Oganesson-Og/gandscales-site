import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white",
          "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-steel-400",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-0 focus:border-brand-500/50",
          "focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,103,255,0.15)]",
          "hover:border-white/25 hover:bg-white/[0.07]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Premium Input with animated label
const PremiumInput = React.forwardRef<
  HTMLInputElement,
  InputProps & { label?: string }
>(({ className, type, label, ...props }, ref) => {
  return (
    <div className="relative group">
      <input
        type={type}
        className={cn(
          "peer flex h-14 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 pt-5 pb-2 text-sm text-white",
          "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder-transparent",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-0 focus:border-brand-500/50",
          "focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,103,255,0.15)]",
          "hover:border-white/25 hover:bg-white/[0.07]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        placeholder={label}
        {...props}
      />
      {label && (
        <label
          className={cn(
            "absolute left-4 transition-all duration-300 ease-out pointer-events-none",
            "text-steel-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4",
            "text-xs top-2 peer-focus:text-xs peer-focus:top-2 peer-focus:text-brand-300"
          )}
        >
          {label}
        </label>
      )}
      {/* Focus glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-brand-500/10 via-transparent to-brand-500/10 -z-10 blur-xl" />
    </div>
  )
})
PremiumInput.displayName = "PremiumInput"

// Search Input with icon slot
const SearchInput = React.forwardRef<
  HTMLInputElement,
  InputProps & { icon?: React.ReactNode }
>(({ className, icon, ...props }, ref) => {
  return (
    <div className="relative group">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-400 group-focus-within:text-brand-400 transition-colors duration-300">
          {icon}
        </div>
      )}
      <input
        type="search"
        className={cn(
          "flex h-12 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-white",
          icon ? "pl-12 pr-4" : "px-4",
          "ring-offset-background",
          "placeholder:text-steel-400",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-0 focus:border-brand-500/50",
          "focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,103,255,0.15)]",
          "hover:border-white/25 hover:bg-white/[0.07]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
SearchInput.displayName = "SearchInput"

export { Input, PremiumInput, SearchInput }
