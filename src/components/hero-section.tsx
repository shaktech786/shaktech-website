"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react"
import Link from "next/link"

const CodeParticle = ({ delay = 0, symbol = "{}", className = "" }) => (
  <div 
    className={`absolute code-particle text-primary-300/40 text-lg font-mono select-none ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {symbol}
  </div>
)

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Neural Network Background */}
      <div className="neural-bg" />
      
      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <CodeParticle symbol="<>" delay={0} className="top-1/4 left-1/4" />
        <CodeParticle symbol="{AI}" delay={1} className="top-1/3 right-1/4" />
        <CodeParticle symbol="()=>" delay={2} className="bottom-1/3 left-1/3" />
        <CodeParticle symbol="[ML]" delay={0.5} className="top-1/2 right-1/3" />
        <CodeParticle symbol="<Dev/>" delay={1.5} className="bottom-1/4 right-1/4" />
        <CodeParticle symbol="{}" delay={2.5} className="top-1/6 left-1/2" />
        <CodeParticle symbol="AI()" delay={3} className="bottom-1/6 left-1/6" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full border border-primary-200 dark:border-primary-700">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              TEDx Speaker • Lead Software Consultant • AI Pioneer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="block text-white">I Turn Ideas Into</span>
            <span className="block text-gradient-creative beat-sync mt-2">AI-Powered Reality</span>
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI-First Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Building with AI from day one, not as an afterthought
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Code2 className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">10+ Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Thoughtworks-trained with enterprise-grade practices
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-creative-100 dark:bg-creative-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="w-8 h-8 text-creative-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Creative Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                From beatbox champion to tech innovator
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection