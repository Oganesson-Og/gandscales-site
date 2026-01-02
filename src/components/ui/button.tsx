import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 text-white shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/35 active:translate-y-0 active:shadow-md btn-shine",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/35 active:translate-y-0",
        outline:
          "border border-white/15 bg-white/0 text-foreground backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-lg",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        link: 
          "text-brand-400 underline-offset-4 hover:underline hover:text-brand-300 transition-colors",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/15 text-foreground hover:bg-white/20 hover:border-white/25 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5",
        glow:
          "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow-sm hover:shadow-glow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-glow-sm",
        success:
          "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/35 active:translate-y-0",
        whatsapp:
          "bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-[#25D366]/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40 active:translate-y-0",
        premium:
          "bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 bg-[length:200%_100%] text-white shadow-lg shadow-brand-500/25 hover:bg-[position:100%_0] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40 active:translate-y-0 transition-all duration-500",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg [&_svg]:size-5",
        icon: "h-10 w-10 rounded-lg",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
