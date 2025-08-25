import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 border border-indigo-500/20",
        destructive: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl hover:shadow-red-500/25 border border-red-500/20",
        outline: "border-2 border-indigo-500/50 bg-transparent text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-indigo-300 backdrop-blur-sm",
        secondary: "bg-gray-800/50 text-gray-100 hover:bg-gray-700/50 border border-gray-600/50 backdrop-blur-sm hover:border-gray-500/50",
        ghost: "hover:bg-white/5 hover:text-gray-100 hover:backdrop-blur-sm",
        link: "text-indigo-400 underline-offset-4 hover:underline hover:text-indigo-300 p-0 h-auto",
        tertiary: "text-gray-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full",
        cta: "bg-gradient-to-r from-indigo-600 via-cyan-500 to-amber-500 text-white hover:from-indigo-700 hover:via-cyan-600 hover:to-amber-600 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 border border-white/10",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 text-xs rounded-md px-3",
        lg: "h-12 text-base rounded-lg px-8",
        xl: "h-14 text-lg rounded-xl px-10",
        icon: "h-10 w-10 p-0",
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