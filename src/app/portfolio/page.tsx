import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import {
  ExternalLink,
  Github,
  ArrowRight,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Code,
  Globe,
  Sparkles,
  Gamepad2,
  Smartphone,
  Bot
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-First Portfolio - ShakTech Projects & Case Studies",
  description: "Explore Shakeel's AI-powered platforms and applications: from autonomous social media management to 24/7 AI teams and intelligent financial analysis systems.",
}

const PortfolioPage = () => {
  const projects = [
    {
      id: "shakgpt",
      title: "ShakGPT - AI Social Media Platform",
      category: "AI Platform",
      description: "Revolutionary AI-powered platform for autonomous social media management with 15+ platform support, real-time analytics, and intelligent scheduling that surpasses traditional tools like Buffer and Hootsuite.",
      longDescription: "ShakGPT represents the future of social media management - a fully autonomous AI system that learns, adapts, and optimizes content strategy across multiple platforms simultaneously. Built with enterprise-grade architecture and powered by advanced AI agents.",
      techStack: ["Next.js 15", "OpenAI GPT-4", "PostgreSQL", "Prisma", "Tailwind CSS", "Node.js", "TypeScript", "Docker"],
      features: [
        "15+ Platform Integration (Twitter, Instagram, Facebook, LinkedIn, TikTok, YouTube, etc.)",
        "Autonomous AI Agents for Content Creation",
        "Real-Time Performance Analytics",
        "Intelligent Scheduling & Optimization",
        "Crisis Management & Auto-Response",
        "Cross-Platform Campaign Orchestration",
        "ML-Powered Engagement Prediction",
        "Brand Voice Consistency Engine"
      ],
      metrics: [
        "1000+ Active Users",
        "95% Content Approval Rate",
        "300% Engagement Increase",
        "24/7 Autonomous Operation"
      ],
      demoUrl: "https://shakgpt.com",
      githubUrl: "#",
      imageUrl: "/portfolio-screenshots/shaktech-website-viewport.png",
      featured: true,
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "asis",
      title: "ASIS - Autonomous Software Improvement",
      category: "AI Infrastructure",
      description: "A fully autonomous, distributed system that discovers issues, fixes bugs, and improves codebases 24/7 using AI workers with a 5-level validation pipeline.",
      longDescription: "ASIS (Autonomous Software Improvement System) orchestrates multiple Claude Code workers to systematically improve codebases. It autonomously discovers issues via security audits, test failures, and code quality gaps, then validates all changes through syntax, build, unit test, integration test, and security gates before committing.",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Claude API", "MCP", "Drizzle ORM"],
      features: [
        "Autonomous Issue Discovery & Fix",
        "5-Level Validation Pipeline",
        "Distributed Claude Code Workers",
        "Self-Healing with Auto-Rollback",
        "Real API Integration Testing",
        "Knowledge Base & Learning",
        "MCP Server Integration",
        "Headless 24/7 Operation"
      ],
      metrics: [
        "5-Level Validation Gates",
        "Multi-Worker Scaling",
        "Self-Healing System",
        "24/7 Autonomous Operation"
      ],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/portfolio-screenshots/github-profile-viewport.png",
      icon: <Bot className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "verygoodmelon",
      title: "VeryGoodMelon.Fun - Anxiety-Reducing Games",
      category: "Gaming Platform",
      description: "A curated collection of thoughtful web games designed to reduce anxiety and promote reflection. Zero friction — no accounts, no ads, just meaningful experiences.",
      longDescription: "VeryGoodMelon.Fun offers philosophical, accessible web games that prioritize emotional well-being. Features 8 unique games including AI-powered conversations with 39+ historical figures via real-time video avatars, daily word puzzles, ethical dilemma voting, and mindfulness experiences.",
      techStack: ["Next.js 16", "TypeScript", "Supabase", "Google Gemini", "ElevenLabs", "Simli.ai", "Tailwind CSS", "Zustand"],
      features: [
        "8 Unique Thoughtful Games",
        "AI Conversations with Historical Figures",
        "Real-Time Video Avatars (Simli.ai)",
        "Voice-to-Voice with ElevenLabs TTS",
        "WCAG 2.1 AA+ Accessible",
        "Neurodivergent-Friendly Design",
        "Community Word Clouds & Voting",
        "Zero-Friction (No Login Required)"
      ],
      metrics: [
        "8 Unique Games",
        "39+ AI Historical Figures",
        "WCAG 2.1 AA+ Compliant",
        "90+ Lighthouse Score"
      ],
      demoUrl: "https://verygoodmelon.fun",
      githubUrl: "https://github.com/shaktech786/verygoodmelon.fun",
      imageUrl: "/portfolio-screenshots/github-profile-viewport.png",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "morpheus",
      title: "Morpheus - Voice-First AI Remote Control",
      category: "Mobile + Desktop",
      description: "A JARVIS-like voice-first system for remotely controlling machines via Claude Code. Features push-to-talk mobile app, desktop agent, and end-to-end encrypted communication.",
      longDescription: "Morpheus provides a unified interface to remotely control multiple machines through voice commands. The mobile app connects to a desktop Electron agent that sandboxes Claude Code execution, with QR code pairing, risk-based approval gates, and real-time streaming of terminal output.",
      techStack: ["React Native", "Expo", "Electron", "TypeScript", "Turborepo", "WebSocket", "TweetNaCl", "SQLite"],
      features: [
        "Push-to-Talk Voice Commands",
        "Multi-Device Management",
        "End-to-End Encryption (NaCl)",
        "QR Code Secure Pairing",
        "Risk-Based Approval Gates",
        "Real-Time Terminal Streaming",
        "Biometric Authentication",
        "Cross-Platform (iOS, Android, Desktop)"
      ],
      metrics: [
        "End-to-End Encrypted",
        "Cross-Platform Support",
        "Voice-First Interface",
        "Real-Time Streaming"
      ],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/portfolio-screenshots/github-profile-viewport.png",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "ai-stock-researcher",
      title: "AI Stock Researcher (MIDAS)",
      category: "FinTech AI",
      description: "Intelligent stock research platform with AI-powered analysis, real-time data processing, paper trading engine, and predictive insights for investment decisions.",
      longDescription: "MIDAS (Machine Intelligence Data Analysis System) combines advanced AI with comprehensive financial data to deliver institutional-grade investment research and analysis tools for individual and professional investors.",
      techStack: ["Next.js", "Python", "OpenAI", "Financial APIs", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
      features: [
        "AI-Powered Stock Analysis",
        "Real-Time Market Data Integration",
        "Paper Trading Simulation",
        "Predictive Analytics Engine",
        "Risk Assessment Tools",
        "Portfolio Optimization",
        "News Sentiment Analysis",
        "Automated Research Reports"
      ],
      metrics: [
        "85% Prediction Accuracy",
        "Real-Time Data Processing",
        "500+ Stocks Analyzed",
        "Advanced Risk Models"
      ],
      demoUrl: "https://ai-stock-researcher.vercel.app",
      githubUrl: "#",
      imageUrl: "/portfolio-screenshots/shaktech-website-viewport.png",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "estimaite",
      title: "EstimAIte - AI Planning Poker",
      category: "AgTech",
      description: "AI-enhanced planning poker for agile teams featuring real-time collaboration, intelligent story analysis, and automated estimation recommendations for better sprint planning.",
      longDescription: "EstimAIte revolutionizes agile estimation by combining the collaborative benefits of planning poker with AI-powered story analysis and estimation recommendations, helping teams achieve more accurate sprint planning.",
      techStack: ["Next.js", "Pusher", "OpenAI", "Tailwind CSS", "Prisma", "PostgreSQL", "TypeScript"],
      features: [
        "Real-Time Collaborative Estimation",
        "AI Story Analysis",
        "Automated Complexity Assessment",
        "Team Performance Analytics",
        "Historical Estimation Data",
        "Sprint Planning Integration",
        "Custom Estimation Scales",
        "Export & Reporting Tools"
      ],
      metrics: [
        "90% Estimation Accuracy",
        "50% Faster Planning",
        "Real-Time Collaboration",
        "Agile Team Optimization"
      ],
      demoUrl: "https://estimaite.vercel.app",
      githubUrl: "https://github.com/shaktech786/estimaite",
      imageUrl: "/portfolio-screenshots/estimaite-viewport.png",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    }
  ]

  const clientProjects = [
    {
      title: "Global Language Services Website",
      client: "Global Language Services, Inc.",
      description: "Professional corporate website showcasing language translation services with modern design and seamless user experience.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      testimonial: "ShakTech has created our company's website in a very professional way. We are beyond pleased with Shakeel's impeccable service."
    },
    {
      title: "E-commerce Platform",
      client: "Prince Distribution",
      description: "Complete trading card wholesaler e-commerce solution with inventory management and customer portal.",
      techStack: ["React", "Node.js", "PostgreSQL", "Payment Integration"],
      testimonial: "We couldn't be more thrilled with the outcome of our trading card wholesaler business website."
    },
    {
      title: "UI/UX Design System",
      client: "Unstationery",
      description: "Comprehensive UI design system and user interface development with focus on user experience optimization.",
      techStack: ["React", "Design System", "UI Components", "UX Research"],
      testimonial: "Shakeel demonstrated outstanding knowledge of UI design principles and delivered a polished interface that exceeded our expectations."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-900/50 px-4 py-2 rounded-full border border-indigo-700 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">
              AI-First Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Transforming Ideas Into
            <span className="block text-indigo-400">AI-Powered Reality</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From autonomous AI platforms serving thousands of users to enterprise consulting solutions - 
            explore how I&apos;m pushing the boundaries of AI-first software delivery.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-indigo-400" />
              <span>10+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <span>1000+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <span>Enterprise Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough AI applications that demonstrate the power of human creativity 
              combined with artificial intelligence.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl p-1`}>
                      <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                            {project.icon}
                          </div>
                          <p className="text-gray-400">Project Screenshot</p>
                        </div>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                        Featured Project
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center text-white`}>
                        {project.icon}
                      </div>
                      <span className="bg-indigo-900/50 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium border border-indigo-700">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-900/50 rounded-lg p-3 text-center border border-gray-800">
                        <div className="text-indigo-400 font-bold text-sm">{metric}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-800/50 text-indigo-300 rounded-full text-sm font-medium border border-indigo-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Button variant="cta" className="group" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Client <span className="text-indigo-400">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses across industries to deliver professional web solutions 
              that drive results and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientProjects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                      <p className="text-gray-400 text-sm">{project.client}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400 text-sm">
                    &quot;{project.testimonial}&quot;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next AI Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a custom AI platform, enterprise consulting, or team training,
            let&apos;s discuss how we can bring your vision to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl" className="group" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PortfolioPage