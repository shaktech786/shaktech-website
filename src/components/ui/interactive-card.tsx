"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  children: React.ReactNode
}

export const InteractiveCard = React.forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, glowColor = "primary", children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }

    const glowColors = {
      primary: "rgba(99, 102, 241, 0.3)",
      accent: "rgba(251, 146, 60, 0.3)",
      creative: "rgba(168, 85, 247, 0.3)"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl p-6 transition-all duration-300",
          "bg-gray-900/50 backdrop-blur-sm border border-gray-700/50",
          "hover:border-indigo-500/50 hover:shadow-xl",
          "transform hover:scale-[1.02]",
          "cursor-pointer overflow-hidden",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Glow effect that follows mouse */}
        {isHovered && (
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              background: `radial-gradient(circle, ${glowColors[glowColor as keyof typeof glowColors] || glowColors.primary}, transparent)`,
              opacity: 0.6,
              filter: "blur(40px)"
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Shimmer effect on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
            "opacity-0 hover:opacity-100 transition-opacity duration-500",
            "-skew-x-12 translate-x-[-100%] hover:translate-x-[100%]",
            "pointer-events-none"
          )}
          style={{
            transition: "transform 0.8s ease-out, opacity 0.3s ease-out"
          }}
        />
      </div>
    )
  }
)

InteractiveCard.displayName = "InteractiveCard"