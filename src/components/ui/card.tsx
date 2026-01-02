import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card text-card-foreground shadow-md transition-all duration-500 ease-out hover:shadow-xl",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Interactive Card - Animated card with hover effects
const InteractiveCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-card-foreground",
      "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
      "transition-all duration-500 ease-out",
      "hover:shadow-[0_16px_48px_rgba(0,103,255,0.15),0_8px_32px_rgba(0,0,0,0.4)]",
      "hover:border-white/20 hover:-translate-y-2",
      "group relative overflow-hidden",
      className
    )}
    {...props}
  >
    {/* Shimmer effect overlay */}
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    {props.children}
  </div>
))
InteractiveCard.displayName = "InteractiveCard"

// Glow Card - Card with glowing border effect
const GlowCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-card-foreground",
      "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
      "transition-all duration-500 ease-out",
      "hover:shadow-[0_0_30px_rgba(0,103,255,0.3),0_8px_32px_rgba(0,0,0,0.4)]",
      "hover:border-brand-500/50",
      "group relative",
      className
    )}
    {...props}
  >
    {/* Glow effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/0 via-brand-500/0 to-brand-500/0 rounded-2xl blur-xl group-hover:from-brand-500/20 group-hover:via-brand-400/10 group-hover:to-brand-500/20 transition-all duration-500 -z-10" />
    {props.children}
  </div>
))
GlowCard.displayName = "GlowCard"

// Premium Card - High-end look with gradient borders
const PremiumCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10",
      "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
      "transition-all duration-500 ease-out",
      "hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_20px_rgba(0,103,255,0.1)]",
      "hover:from-brand-500/30 hover:via-white/10 hover:to-brand-400/20",
      "group",
      className
    )}
    {...props}
  >
    <div className="rounded-[15px] bg-steel-950/90 backdrop-blur-md h-full">
      {props.children}
    </div>
  </div>
))
PremiumCard.displayName = "PremiumCard"

// Stats Card - Optimized for displaying statistics
const StatsCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md",
      "p-6 text-center",
      "transition-all duration-500 ease-out",
      "hover:border-brand-500/30 hover:bg-gradient-to-br hover:from-brand-500/10 hover:to-brand-500/5",
      "hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,103,255,0.15)]",
      "group",
      className
    )}
    {...props}
  />
))
StatsCard.displayName = "StatsCard"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  InteractiveCard,
  GlowCard,
  PremiumCard,
  StatsCard
}
