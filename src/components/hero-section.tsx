"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle gradient background with parallax effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-creative-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-900/30 px-4 py-2 rounded-full border border-primary-700">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              TEDx Speaker • AI-First Software Expert • Beatbox Champion
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="block text-white">I Turn Ideas Into</span>
            <span className="block text-gradient-creative mt-2 hover-glow">AI-Powered Reality</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Empathetic AI Software Delivery where <span className="text-primary-600 font-semibold">human creativity</span> meets 
            <span className="text-accent-500 font-semibold"> AI acceleration</span>. 
            From <span className="text-creative-500 font-semibold">Thoughtworks consulting</span> to 
            <span className="text-gradient-primary font-semibold"> beatboxing championships</span> – 
            I bridge worlds to build yours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="jazz" size="xl" className="group" asChild>
              <Link href="/contact">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="group" asChild>
              <Link href="/portfolio">
                <Code2 className="w-5 h-5 mr-2" />
                See My Work
              </Link>
            </Button>
          </div>

          {/* Key Stats/Features */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI-First Development</h3>
              <p className="text-gray-400 mt-2">
                Building with AI from day one, not as an afterthought
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Code2 className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">10+ Years Experience</h3>
              <p className="text-gray-400 mt-2">
                Enterprise-grade practices and proven methodologies
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-creative-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="w-8 h-8 text-creative-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Creative Innovation</h3>
              <p className="text-gray-400 mt-2">
                From beatbox champion to tech innovator
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection