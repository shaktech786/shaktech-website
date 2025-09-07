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
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      role="banner"
      aria-label="Hero section"
    >
      {/* Enhanced gradient background with parallax effect */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out'
        }}
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      </div>
      
      {/* Strong grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-700">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">
              🇺🇸 ThoughtWorks Lead Consultant • 2017 Beatbox Vice Champion • TEDx Speaker
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" id="main-heading">
            <span className="block text-white">I Turn Ideas Into</span>
            <span className="block text-gradient-creative mt-2 hover-glow">AI-Powered Reality</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed" aria-describedby="main-heading">
            From intern to <span className="text-indigo-400 font-semibold">ThoughtWorks Lead Consultant</span> in 9+ years. 
            I&apos;ve coached <span className="text-cyan-400 font-semibold">11 diverse developers to full-time success</span> and 
            built AI solutions for <span className="text-amber-400 font-semibold">Fortune 500 clients</span>. 
            My superpower? Combining cutting-edge technology with 
            <span className="text-gradient-primary font-semibold"> team psychology</span> – 
            because great AI needs great people.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="cta" size="xl" className="group" asChild>
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

          {/* Key Value Props */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white" id="feature-team-psychology">Team Psychology Expert</h3>
              <p className="text-gray-400 mt-2" aria-describedby="feature-team-psychology">
                100% success rate coaching diverse developers
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                <Code2 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white" id="feature-social-impact">Social Impact Focus</h3>
              <p className="text-gray-400 mt-2" aria-describedby="feature-social-impact">
                Technology that makes a real difference
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                <Sparkles className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white" id="feature-journey">Full Career Journey</h3>
              <p className="text-gray-400 mt-2" aria-describedby="feature-journey">
                From intern to Lead - I&apos;ve been where you are
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection