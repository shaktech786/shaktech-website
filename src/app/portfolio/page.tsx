import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import {
  ExternalLink,
  Github,
  ArrowRight,
  Brain,
  Users,
  TrendingUp,
  Code,
  Globe,
  Sparkles,
  Gamepad2,
  Bot,
  Radio,
  KanbanSquare,
  Mic,
  Music,
  Wallet,
  Server,
  Package
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-First Portfolio - ShakTech Projects & Case Studies",
  description: "Explore Shakeel's shipped products and AI harnesses: a streaming toolkit for creators, developer tooling for Claude Code, privacy-first finance automation, and open-source MCP servers.",
}

const PortfolioPage = () => {
  const projects = [
    {
      id: "prelive",
      title: "Prelive - AI Streaming Toolkit",
      category: "AI Platform",
      longDescription: "Prelive (v5 \"Horizon\") is the everything-before-you-go-live platform for Twitch, YouTube, and Kick streamers. One OBS stream fans out to all three platforms through a single-ingest relay with no re-encoding. A dozen OBS browser-source docks handle go-live, metadata, unified chat, alerts, talking points, and mic tuning, while Claude-powered content generation writes titles, descriptions, scripts, and social posts.",
      techStack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis + BullMQ", "Claude API", "Deepgram", "Vertex AI", "Stripe"],
      metrics: [
        "Twitch + YouTube + Kick, One Ingest",
        "12+ OBS Docks & Overlays",
        "6 Social Platforms Scheduled",
        "v5.0 in Production"
      ],
      demoUrl: "https://prelive.ai",
      imageUrl: "/portfolio-screenshots/prelive-viewport.webp",
      featured: true,
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "prelive-deck",
      title: "Prelive Deck - Soundboard & Stream Control Surface",
      category: "Desktop App",
      longDescription: "An Electron soundboard built for fightpad and arcade-stick controllers, with a Haute42-style 4x4 pad layout. Every pad is dual-purpose: it plays a sound and fires an integration action on the same press. It drives OBS over WebSocket v5, splits LiveSplit timers, toggles Discord mute via local RPC, detects the foreground game, and routes audio through a low-latency ASIO engine into VoiceMeeter.",
      techStack: ["Electron", "TypeScript", "React", "Web Gamepad API", "node-hid", "OBS WebSocket v5", "Howler.js", "RtAudio ASIO"],
      metrics: [
        "~10.7 ms ASIO Latency",
        "OBS + LiveSplit + Discord",
        "Native HID for GP2040-CE",
        "Open Source"
      ],
      githubUrl: "https://github.com/shaktech786/soundpad-pro",
      icon: <Radio className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "tack",
      title: "Tack - Epic & Story Tracker for AI Agents",
      category: "Developer Tooling",
      longDescription: "A lightweight issue tracker designed to be driven by Claude Code rather than clicked through by humans. Ships as a web app, a CLI, and an MCP server so an agent can pull the next ready story, claim it, link PRs, and move it to Done without leaving the terminal. A GitHub App links commits and deploys back to stories automatically.",
      techStack: ["Next.js", "TypeScript", "pnpm + Turborepo", "PostgreSQL", "MCP Server", "GitHub App", "Vitest", "Playwright"],
      metrics: [
        "Web + CLI + MCP Server",
        "Agent-First Workflow",
        "GitHub App Integration",
        "Monorepo, Fully Typed"
      ],
      icon: <KanbanSquare className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "alaap",
      title: "Alaap - AI Voice-Note Library for a Vocal Teacher",
      category: "Applied AI",
      longDescription: "A phone-first PWA that turns thousands of unnamed voice notes in Hindi, Urdu, and English into a searchable, organised library. Each recording is classified (speech, singing, instrumental), transcribed with timestamps, titled, tagged, and annotated with raga, taal, key, and tempo guesses with confidence scores. Semantic search works across scripts, and a swipe-based review queue makes triage fast on a phone.",
      techStack: ["Next.js 16", "TypeScript", "Neon Postgres + pgvector", "Cloudflare R2", "Google Gemini", "Vercel Workflow", "PWA"],
      metrics: [
        "Multilingual Transcription",
        "Semantic Search Across Scripts",
        "Raga / Taal / Key Detection",
        "Installable on iOS & Android"
      ],
      icon: <Mic className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "unbottle",
      title: "Unbottle - AI Music Production Companion",
      category: "Creative AI",
      longDescription: "An AI producer for solo musicians, especially those with ADHD or creative anxiety who struggle to finish tracks. Hum a melody, tap a rhythm, or describe a vibe, and a Claude-powered producer that knows your session's BPM, key, and sections handles arrangement structure, chord voicings, and what to work on next. Includes a canvas piano roll, ElevenLabs audio generation, and MIDI export to any DAW.",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Claude API", "Tone.js", "ElevenLabs Music API"],
      metrics: [
        "Streaming AI Producer Chat",
        "Piano Roll + MIDI Export",
        "Momentum & Hyperfocus Guards",
        "Open Source"
      ],
      demoUrl: "https://unbottle-rouge.vercel.app",
      githubUrl: "https://github.com/shaktech786/unbottle",
      imageUrl: "/portfolio-screenshots/unbottle-viewport.webp",
      icon: <Music className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "verygoodmelon",
      title: "VeryGoodMelon.Fun - Thoughtful Games",
      category: "Gaming Platform",
      longDescription: "A curated collection of twelve web games designed to reduce anxiety and invite reflection. No accounts, no ads, no distractions. Includes The Sage, an AI-powered conversation with 61 historical thinkers, The Arena, where any two minds debate a topic you pick, a daily word puzzle about global progress, ethical dilemma voting, breathing games, and a collective last-words word cloud.",
      techStack: ["Next.js 16", "TypeScript", "Supabase", "Google Gemini", "ElevenLabs", "Tailwind CSS", "Zustand"],
      metrics: [
        "12 Original Games",
        "61 AI Wisdom Figures",
        "WCAG 2.1 AA+ Accessible",
        "No Accounts, No Ads"
      ],
      demoUrl: "https://verygoodmelon.fun",
      githubUrl: "https://github.com/shaktech786/verygoodmelon.fun",
      imageUrl: "/portfolio-screenshots/verygoodmelon-viewport.webp",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "bursar",
      title: "Bursar - Privacy-First AI Accountant",
      category: "FinOps",
      longDescription: "A self-hosted accountant for a one-person software company. It pulls transactions from Mercury and Chase, reads invoices out of Gmail, attributes every dollar to a product, and applies federal, Georgia, and Illinois tax rules. Money is bigint minor units so no float ever touches a balance, the bank provider interface has no method that can move funds, and a transport-layer gate guarantees the LLM never sees an account number.",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Mercury API", "Teller mTLS", "Gmail API", "Claude API", "Tailscale"],
      metrics: [
        "Deterministic Rules First, LLM Last",
        "Every Categorisation Explainable",
        "Read-Only by Type Design",
        "Self-Hosted, Tailscale-Only"
      ],
      icon: <Wallet className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "arr-suite-mcp",
      title: "Arr Suite MCP Server",
      category: "Open Source MCP",
      longDescription: "A Model Context Protocol server that gives Claude and other AI assistants natural-language control over a full media automation stack: Sonarr, Radarr, Prowlarr, Bazarr, Overseerr, and Plex. Intent recognition routes each request to the right service, so \"grab the new season of that show and add subtitles\" just works. Published on PyPI.",
      techStack: ["Python 3.10+", "MCP", "Pydantic", "httpx", "asyncio"],
      metrics: [
        "6 Services, One Interface",
        "Published on PyPI",
        "Async-First, Type-Safe",
        "MIT Licensed"
      ],
      demoUrl: "https://pypi.org/project/arr-suite-mcp-server/",
      githubUrl: "https://github.com/shaktech786/arr-suite-mcp-server",
      icon: <Server className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "asis",
      title: "ASIS - Autonomous Software Improvement",
      category: "AI Infrastructure",
      longDescription: "ASIS orchestrates multiple Claude Code workers to systematically improve codebases without human interaction. It discovers issues through security audits, failing tests, and code-quality gaps, then pushes every change through five validation gates (syntax, build, unit tests, integration tests, security) before committing, with automatic rollback when a gate fails.",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Claude Code", "MCP", "Drizzle ORM"],
      metrics: [
        "5-Level Validation Gates",
        "Parallel Claude Code Workers",
        "Auto-Rollback on Failure",
        "Headless 24/7 Operation"
      ],
      icon: <Bot className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "ai-stock-researcher",
      title: "MIDAS - AI Stock Researcher",
      category: "FinTech AI",
      longDescription: "MIDAS (Machine Intelligence Data Analysis System) combines LLM analysis with live market data to produce research reports, risk assessments, and news sentiment for individual investors, with a paper-trading engine to test ideas without real money.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI", "Financial Data APIs", "Vitest", "Playwright"],
      metrics: [
        "AI Research Reports",
        "Paper Trading Engine",
        "News Sentiment Analysis",
        "End-to-End Tested"
      ],
      demoUrl: "https://ai-stock-researcher.vercel.app",
      imageUrl: "/portfolio-screenshots/midas-viewport.webp",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      id: "estimaite",
      title: "EstimAIte - AI Planning Poker",
      category: "Agile Tooling",
      longDescription: "Planning poker for agile teams with an AI twist: real-time rooms over Pusher, plus story analysis that flags ambiguity and suggests a complexity range before the team votes. Open source under MIT.",
      techStack: ["Next.js", "TypeScript", "Pusher", "OpenAI", "Prisma", "PostgreSQL", "Tailwind CSS"],
      metrics: [
        "Real-Time Rooms",
        "AI Story Analysis",
        "Custom Estimation Scales",
        "Open Source (MIT)"
      ],
      demoUrl: "https://estimaite.vercel.app",
      githubUrl: "https://github.com/shaktech786/estimaite",
      imageUrl: "/portfolio-screenshots/estimaite-viewport.webp",
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
            Shipped Products,
            <span className="block text-indigo-400">Built Solo with AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            A production streaming platform, developer tooling for AI agents, privacy-first finance automation,
            and open-source MCP servers. Every project here was designed, built, and shipped by one engineer
            using an AI-first workflow.
          </p>

          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-indigo-400" />
              <span>15+ Shipped Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-indigo-400" />
              <span>Open Source on GitHub & PyPI</span>
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
              Real products in production, not demos. Each one shows what a single senior engineer
              with the right AI harness can ship.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} id={project.id} className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl p-1`}>
                      {project.imageUrl ? (
                        <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                          <Image
                            src={project.imageUrl}
                            alt={`${project.title} screenshot`}
                            width={1280}
                            height={720}
                            className="w-full h-full object-cover object-top"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                              {project.icon}
                            </div>
                            <p className="text-gray-400">{project.githubUrl ? "Open Source" : "Private Build"}</p>
                          </div>
                        </div>
                      )}
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
                    {project.demoUrl && (
                      <Button variant="cta" className="group" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.demoUrl.includes("pypi.org") ? "View on PyPI" : "Live Site"}
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
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
      <section id="client-work" className="py-24 bg-gray-950 scroll-mt-24">
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
            Whether you need a custom AI platform, an agent harness for your team, or enterprise consulting,
            let&apos;s discuss how to ship it faster than you thought possible.
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
