"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Brain, Gamepad2, Radio, KanbanSquare, Music, Wallet } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  detailsHref: string
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
  detailsHref,
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
        {demoUrl ? (
          <Button variant="outline" size="sm" className="group" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Site
            </Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="group" asChild>
            <Link href={detailsHref}>
              Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
      title: "Prelive - AI Streaming Toolkit",
      description: "The everything-before-you-go-live platform for Twitch, YouTube, and Kick. One OBS stream fans out to all three, a dozen OBS docks handle go-live and chat, and Claude writes the titles, scripts, and social posts.",
      category: "AI Platform",
      techStack: ["Next.js 15", "PostgreSQL", "Redis", "Claude API", "Stripe"],
      demoUrl: "https://prelive.ai",
      detailsHref: "/portfolio#prelive",
      featured: true,
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Prelive Deck - Stream Control Surface",
      description: "Electron soundboard for fightpad controllers where every pad plays a sound and drives OBS, LiveSplit, or Discord on the same press. Low-latency ASIO audio routing included.",
      category: "Desktop App",
      techStack: ["Electron", "TypeScript", "OBS WebSocket", "ASIO"],
      githubUrl: "https://github.com/shaktech786/soundpad-pro",
      detailsHref: "/portfolio#prelive-deck",
      icon: <Radio className="w-5 h-5" />
    },
    {
      title: "Tack - Story Tracker for AI Agents",
      description: "An issue tracker built to be driven by Claude Code: web app, CLI, and MCP server so an agent can claim the next ready story, link PRs, and close it without leaving the terminal.",
      category: "Developer Tooling",
      techStack: ["Next.js", "Turborepo", "PostgreSQL", "MCP"],
      detailsHref: "/portfolio#tack",
      icon: <KanbanSquare className="w-5 h-5" />
    },
    {
      title: "Bursar - Privacy-First AI Accountant",
      description: "Self-hosted accountant that pulls Mercury and Chase transactions, reads Gmail invoices, attributes every dollar to a product, and applies tax rules. The LLM never sees an account number.",
      category: "FinOps",
      techStack: ["TypeScript", "PostgreSQL", "Claude API", "Tailscale"],
      detailsHref: "/portfolio#bursar",
      icon: <Wallet className="w-5 h-5" />
    },
    {
      title: "Unbottle - AI Music Production Companion",
      description: "An AI producer for solo musicians with ADHD or creative anxiety. Hum, tap, or describe an idea and a session-aware Claude producer handles arrangement, voicings, and what to do next.",
      category: "Creative AI",
      techStack: ["Next.js 16", "Supabase", "Tone.js", "ElevenLabs"],
      demoUrl: "https://unbottle-rouge.vercel.app",
      githubUrl: "https://github.com/shaktech786/unbottle",
      detailsHref: "/portfolio#unbottle",
      icon: <Music className="w-5 h-5" />
    },
    {
      title: "VeryGoodMelon.Fun - Thoughtful Games",
      description: "Twelve web games designed to reduce anxiety, including AI conversations with 61 historical thinkers and AI-staged debates between any two of them. No accounts, no ads, WCAG 2.1 AA+ accessible.",
      category: "Gaming Platform",
      techStack: ["Next.js 16", "Supabase", "Gemini", "ElevenLabs"],
      demoUrl: "https://verygoodmelon.fun",
      githubUrl: "https://github.com/shaktech786/verygoodmelon.fun",
      detailsHref: "/portfolio#verygoodmelon",
      icon: <Gamepad2 className="w-5 h-5" />
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
            Production platforms, developer tooling for AI agents, and open-source MCP servers –
            all designed, built, and shipped solo with an AI-first workflow.
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
