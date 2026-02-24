"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Bot, Brain, Users, TrendingUp, Gamepad2, Smartphone } from "lucide-react"
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
  <Card className={`group hover:shadow-lg transition-all duration-300 h-full ${featured ? 'ring-2 ring-indigo-200 dark:ring-indigo-800' : ''}`}>
    <CardHeader className="pb-4 space-y-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            {icon}
          </div>
          <div>
            <span className="text-sm font-medium text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded-full border border-indigo-700/50">
              {category}
            </span>
            {featured && (
              <span className="ml-2 text-xs font-medium text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded-full border border-indigo-700/50">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>
      <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-700/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-3 mt-auto pt-4">
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
      title: "Prelive - AI-Powered Creator Platform",
      description: "AI-powered creator platform for streaming content creation, social media management with 15+ platform support, real-time analytics, and intelligent scheduling that surpasses traditional tools like Buffer and Hootsuite.",
      category: "AI Platform",
      techStack: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind", "Prisma"],
      demoUrl: "https://prelive.ai",
      featured: true,
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "ASIS - Autonomous Software Improvement",
      description: "A fully autonomous, distributed system that discovers issues, fixes bugs, and improves codebases 24/7 using AI workers with a 5-level validation pipeline.",
      category: "AI Infrastructure",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis"],
      icon: <Bot className="w-5 h-5" />
    },
    {
      title: "VeryGoodMelon.Fun - Anxiety-Reducing Games",
      description: "A curated collection of thoughtful web games designed to reduce anxiety. 8 unique games including AI conversations with 39+ historical figures via real-time video avatars.",
      category: "Gaming Platform",
      techStack: ["Next.js 16", "Supabase", "Gemini AI", "ElevenLabs"],
      demoUrl: "https://verygoodmelon.fun",
      githubUrl: "https://github.com/shaktech786/verygoodmelon.fun",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      title: "Morpheus - Voice-First AI Remote Control",
      description: "A JARVIS-like voice-first system for remotely controlling machines via Claude Code with push-to-talk, QR pairing, and end-to-end encryption.",
      category: "Mobile + Desktop",
      techStack: ["React Native", "Electron", "TypeScript", "WebSocket"],
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "AI Stock Researcher (MIDAS)",
      description: "Intelligent stock research platform with AI-powered analysis, real-time data processing, paper trading engine, and predictive insights for investment decisions.",
      category: "FinTech AI",
      techStack: ["Next.js", "Python", "OpenAI", "Financial APIs", "Docker"],
      demoUrl: "https://ai-stock-researcher.vercel.app",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "EstimAIte - AI Planning Poker",
      description: "AI-enhanced planning poker for agile teams featuring real-time collaboration, intelligent story analysis, and automated estimation recommendations for better sprint planning.",
      category: "AgTech",
      techStack: ["Next.js", "Pusher", "OpenAI", "Tailwind", "Prisma"],
      demoUrl: "https://estimaite.vercel.app",
      githubUrl: "https://github.com/shaktech786/estimaite",
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            AI-Powered <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From autonomous AI agents to intelligent platforms – see how I&apos;m pushing the boundaries
            of what&apos;s possible when human creativity meets artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
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