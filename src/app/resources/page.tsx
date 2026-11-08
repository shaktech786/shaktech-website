import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import AICostCalculator from "@/components/ai-cost-calculator"
import { getAllPosts } from "@/lib/mdx"
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Clock,
  Github,
  Server,
  Radio,
  Music,
  Gamepad2,
  Users,
  Terminal,
  BookOpen,
  Mic2,
  Package
} from "lucide-react"

export const metadata: Metadata = {
  title: "Free AI Tools & Open Source - ShakTech Resources",
  description: "A free AI ROI calculator, open-source MCP servers and developer tools, and writing on AI-first software delivery from Shakeel Bhamani.",
}

const openSource = [
  {
    title: "Arr Suite MCP Server",
    description: "Give Claude natural-language control over Sonarr, Radarr, Prowlarr, Bazarr, Overseerr, and Plex. Intent recognition routes each request to the right service.",
    tech: ["Python", "MCP", "Pydantic"],
    icon: <Server className="w-6 h-6" />,
    githubUrl: "https://github.com/shaktech786/arr-suite-mcp-server",
    linkUrl: "https://pypi.org/project/arr-suite-mcp-server/",
    linkLabel: "PyPI",
    featured: true,
  },
  {
    title: "Claude Code Preferences",
    description: "My real-world Claude Code setup: global instructions, hooks, custom agents, and the prompt-injection guard I run across every project.",
    tech: ["Claude Code", "Shell", "Hooks"],
    icon: <Terminal className="w-6 h-6" />,
    githubUrl: "https://github.com/shaktech786/claude-code-preferences",
  },
  {
    title: "Prelive Deck",
    description: "Electron soundboard and stream control surface for fightpad controllers. Drives OBS, LiveSplit, and Discord with low-latency ASIO audio routing.",
    tech: ["Electron", "TypeScript", "OBS WebSocket"],
    icon: <Radio className="w-6 h-6" />,
    githubUrl: "https://github.com/shaktech786/soundpad-pro",
  },
  {
    title: "Unbottle",
    description: "AI music production companion for solo musicians. Session-aware Claude producer, canvas piano roll, ElevenLabs audio generation, MIDI export.",
    tech: ["Next.js 16", "Supabase", "Tone.js"],
    icon: <Music className="w-6 h-6" />,
    githubUrl: "https://github.com/shaktech786/unbottle",
    linkUrl: "https://unbottle-rouge.vercel.app",
    linkLabel: "Live Site",
  },
  {
    title: "VeryGoodMelon.Fun",
    description: "Twelve anxiety-reducing web games including AI conversations and debates with historical thinkers. No accounts, no ads, WCAG 2.1 AA+.",
    tech: ["Next.js 16", "Gemini", "ElevenLabs"],
    icon: <Gamepad2 className="w-6 h-6" />,
    githubUrl: "https://github.com/shaktech786/verygoodmelon.fun",
    linkUrl: "https://verygoodmelon.fun",
    linkLabel: "Play",
  },
  {
    title: "EstimAIte",
    description: "Planning poker with AI story analysis. Real-time rooms, no sign-up, sessions are temporary and private. MIT licensed.",
    tech: ["Next.js", "Pusher", "OpenAI"],
    icon: <Users className="w-6 h-6" />,
    githubUrl: "https://github.com/shaktech786/estimaite",
    linkUrl: "https://estimaite.vercel.app",
    linkLabel: "Live Site",
  },
]

const ResourcesPage = async () => {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-hexagon-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">Free Tools & Open Source</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            AI Development
            <span className="block text-gradient-creative">Resource Hub</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A free ROI calculator, open-source MCP servers and developer tools you can run today,
            and writing on how AI-first delivery actually works.
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="py-24 section-services relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI ROI <span className="text-gradient-primary">Calculator</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estimate the savings and payback period of an AI implementation before you commit budget.
            </p>
          </div>

          <AICostCalculator />
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-24 bg-diagonal-lines relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Open <span className="text-gradient-creative">Source</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real code from real products. Clone it, run it, learn from it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openSource.map((project) => (
              <Card
                key={project.title}
                className={`bg-gray-900 border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col ${
                  project.featured ? 'ring-2 ring-indigo-400' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                    {project.featured && (
                      <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full flex items-center">
                        <Package className="w-3 h-3 mr-1" />
                        On PyPI
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg text-white mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant={project.featured ? "cta" : "outline"} size="sm" className="group" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    {project.linkUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.linkUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.linkLabel}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing & Talks */}
      <section className="py-24 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Writing */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-gradient-primary">Writing</span>
                </h3>
                <p className="text-gray-400">Essays on AI-first delivery and engineering leadership</p>
              </div>

              <div className="space-y-4">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <Card className="bg-gray-900 border-gray-700 hover:shadow-lg hover:border-indigo-500/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-sm text-gray-400 mb-2 line-clamp-2">{post.excerpt}</p>
                            {post.readTime && (
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {post.readTime} min read
                              </span>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 group" asChild>
                <Link href="/blog">
                  View the Blog
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Talks */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-gradient-creative">Talks</span> & Creative Work
                </h3>
                <p className="text-gray-400">Speaking, performing, and the creative side of engineering</p>
              </div>

              <div className="space-y-4">
                <Link href="https://linktr.ee/shakbbx" target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="bg-gray-900 border-gray-700 hover:shadow-lg hover:border-indigo-500/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white">
                          <Mic2 className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">
                            TEDx Talk & Beatboxing
                          </h4>
                          <p className="text-sm text-gray-400">
                            TEDx speaker on creativity and innovation. 2017 American Beatbox Championships loopstation vice champion.
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="https://www.linkedin.com/in/shakeelbhamani" target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="bg-gray-900 border-gray-700 hover:shadow-lg hover:border-indigo-500/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                          <Users className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">
                            Engineering Leadership on LinkedIn
                          </h4>
                          <p className="text-sm text-gray-400">
                            Notes on spec-driven development, agent maturity, and leading teams in the AI era.
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-radial relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Personalized Guidance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            These resources are just the beginning. Get custom recommendations
            and strategies tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group" asChild>
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ResourcesPage
