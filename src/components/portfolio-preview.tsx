"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Zap, Brain, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
  icon: React.ReactNode
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  techStack,
  demoUrl,
  githubUrl,
  featured = false,
  icon
}) => (
  <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? 'ring-2 ring-primary-200' : ''}`}>
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
            {icon}
          </div>
          <div>
            <span className="text-sm font-medium text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded-full border border-indigo-700/50">
              {category}
            </span>
            {featured && (
              <span className="ml-2 text-xs font-medium text-amber-300 bg-amber-900/30 px-2 py-1 rounded-full border border-amber-700/50">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>
      <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center space-x-3">
        {demoUrl && (
          <Button variant="outline" size="sm" className="group" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Link>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
)

const PortfolioPreview = () => {
  const projects = [
    {
      title: "ShakGPT - AI Social Media Platform",
      description: "Revolutionary AI-powered platform for autonomous social media management with 15+ platform support, real-time analytics, and intelligent scheduling that surpasses traditional tools like Buffer and Hootsuite.",
      category: "AI Platform",
      techStack: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind", "Prisma"],
      demoUrl: "https://shakgpt.com",
      githubUrl: "#",
      featured: true,
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Tmux Orchestrator - 24/7 AI Teams",
      description: "Enable Claude agents to work autonomously around the clock, self-trigger check-ins, and coordinate across multiple projects without human intervention. A breakthrough in AI team management.",
      category: "Automation",
      techStack: ["Python", "Tmux", "Claude API", "Shell Scripting"],
      githubUrl: "#",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "AI Stock Researcher (MIDAS)",
      description: "Intelligent stock research platform with AI-powered analysis, real-time data processing, paper trading engine, and predictive insights for investment decisions.",
      category: "FinTech AI",
      techStack: ["Next.js", "Python", "OpenAI", "Financial APIs", "Docker"],
      demoUrl: "https://ai-stock-researcher.com",
      githubUrl: "#",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "EstimAIte - AI Planning Poker",
      description: "AI-enhanced planning poker for agile teams featuring real-time collaboration, intelligent story analysis, and automated estimation recommendations for better sprint planning.",
      category: "AgTech",
      techStack: ["Next.js", "Pusher", "OpenAI", "Tailwind", "Prisma"],
      demoUrl: "https://estimate.com",
      githubUrl: "#",
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <section className="py-24 bg-wave-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            AI-Powered <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From autonomous AI agents to intelligent platforms – see how I&apos;m pushing the boundaries 
            of what&apos;s possible when human creativity meets artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg" className="group" asChild>
            <Link href="/portfolio">
              View Complete Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview