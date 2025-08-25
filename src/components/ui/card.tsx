import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "gradient" | "elevated"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "border border-gray-700/50 bg-gray-900/95 backdrop-blur-sm",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 shadow-glass",
    gradient: "bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-indigo-500/20 backdrop-blur-sm",
    elevated: "bg-gray-900 border border-gray-700/30 shadow-xl shadow-black/20"
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl text-gray-50 transition-all duration-300 relative overflow-hidden group",
        "hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/0 before:to-cyan-500/0",
        "hover:before:from-indigo-500/5 hover:before:to-cyan-500/5 before:transition-all before:duration-500",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-2 p-6 relative",
      "after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gray-700/50 after:to-transparent",
      className
    )}
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
      "text-xl font-bold leading-tight tracking-tight",
      "bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent",
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
    className={cn("text-sm text-gray-400 leading-relaxed", className)}
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
    className={cn(
      "flex items-center p-6 pt-0 relative",
      "before:absolute before:top-0 before:left-6 before:right-6 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-700/50 before:to-transparent",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }