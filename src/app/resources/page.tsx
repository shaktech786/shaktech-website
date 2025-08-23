"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import AICostCalculator from "@/components/ai-cost-calculator"
import NewsletterSignup from "@/components/newsletter-signup"
import { 
  Calculator,
  Download,
  BookOpen,
  FileText,
  Video,
  Code,
  Lightbulb,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Clock,
  CheckCircle,
  Mail,
  FileCode,
  Cpu,
  Zap
} from "lucide-react"

const ResourcesPage = () => {
  const freeResources = [
    {
      title: "AI Readiness Checklist",
      description: "Comprehensive 50-point checklist to assess your organization's AI readiness",
      icon: <CheckCircle className="w-6 h-6" />,
      type: "PDF Download",
      cta: "Download Free",
      featured: true,
      comingSoon: false,
    },
    {
      title: "10 AI Integration Mistakes",
      description: "Learn from common pitfalls when implementing AI in production",
      icon: <FileText className="w-6 h-6" />,
      type: "PDF Guide",
      cta: "Get the Guide",
      featured: false,
      comingSoon: false,
    },
    {
      title: "AI Prompt Templates",
      description: "20+ battle-tested prompts for development tasks",
      icon: <Code className="w-6 h-6" />,
      type: "GitHub Repo",
      cta: "View on GitHub",
      featured: false,
      comingSoon: false,
    },
    {
      title: "Weekly AI Newsletter",
      description: "Latest AI tools, techniques, and trends for developers",
      icon: <Mail className="w-6 h-6" />,
      type: "Email Series",
      cta: "Subscribe Free",
      featured: false,
      comingSoon: false,
    },
    {
      title: "AI Cost-Benefit Analysis Template",
      description: "Excel template to calculate ROI for AI projects",
      icon: <TrendingUp className="w-6 h-6" />,
      type: "Excel Template",
      cta: "Download Template",
      featured: false,
      comingSoon: true,
    },
    {
      title: "AI Development Roadmap",
      description: "Step-by-step guide to AI implementation",
      icon: <Lightbulb className="w-6 h-6" />,
      type: "Interactive Guide",
      cta: "Coming Soon",
      featured: false,
      comingSoon: true,
    },
  ]

  const tools = [
    {
      title: "AI ROI Calculator",
      description: "Calculate potential savings and ROI from AI implementation",
      icon: <Calculator className="w-6 h-6" />,
      interactive: true,
      component: "calculator",
    },
    {
      title: "Complexity Estimator",
      description: "Estimate the complexity and effort for AI integration",
      icon: <Cpu className="w-6 h-6" />,
      interactive: false,
      comingSoon: true,
    },
    {
      title: "Tech Stack Analyzer",
      description: "Get AI recommendations based on your current stack",
      icon: <FileCode className="w-6 h-6" />,
      interactive: false,
      comingSoon: true,
    },
  ]

  const guides = [
    {
      title: "Getting Started with OpenAI API",
      description: "Complete guide to integrating OpenAI in your applications",
      readTime: "15 min read",
      level: "Beginner",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Building AI Agents with LangChain",
      description: "Advanced patterns for autonomous AI agents",
      readTime: "25 min read",
      level: "Advanced",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "AI Security Best Practices",
      description: "Secure your AI implementations against common vulnerabilities",
      readTime: "20 min read",
      level: "Intermediate",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      title: "Cost Optimization for AI Apps",
      description: "Strategies to reduce AI API costs by 70%",
      readTime: "18 min read",
      level: "Intermediate",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ]

  const videos = [
    {
      title: "AI-First Development Workflow",
      duration: "12:34",
      views: "2.3k",
      thumbnail: "🎥",
    },
    {
      title: "Building a RAG System in 30 Minutes",
      duration: "28:45",
      views: "1.8k",
      thumbnail: "🎬",
    },
    {
      title: "Prompt Engineering Masterclass",
      duration: "45:20",
      views: "3.1k",
      thumbnail: "📹",
    },
  ]

  return (
    <main className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-hexagon-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-accent-400 text-sm font-medium">Free AI Development Resources</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            AI Development
            <span className="block text-gradient-creative">Resource Hub</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Free tools, calculators, guides, and templates to accelerate your AI journey. 
            Everything you need to evaluate, plan, and implement AI solutions.
          </p>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-24 section-services relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interactive <span className="text-gradient-primary">AI Tools</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Use our free calculators and tools to plan your AI implementation
            </p>
          </div>

          {/* AI Cost Calculator */}
          <div className="mb-12">
            <AICostCalculator />
          </div>

          {/* Other Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {tools.slice(1).map((tool, idx) => (
              <Card key={idx} className="bg-gray-900 border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                        {tool.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{tool.title}</CardTitle>
                        {tool.comingSoon && (
                          <span className="text-xs bg-creative-500/20 text-creative-400 px-2 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-400 mt-3">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={tool.comingSoon ? "outline" : "cta"}
                    className="w-full"
                    disabled={tool.comingSoon}
                  >
                    {tool.comingSoon ? "Coming Soon" : "Launch Tool"}
                    {!tool.comingSoon && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-24 bg-diagonal-lines relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Free <span className="text-gradient-creative">Downloads</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Practical resources to help you get started with AI development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeResources.map((resource, idx) => (
              <Card 
                key={idx}
                className={`bg-gray-900 border-gray-700 hover:shadow-xl transition-all duration-300 ${
                  resource.featured ? 'ring-2 ring-accent-400' : ''
                } ${resource.comingSoon ? 'opacity-75' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-creative-500 rounded-lg flex items-center justify-center text-white">
                      {resource.icon}
                    </div>
                    {resource.featured && (
                      <span className="text-xs bg-accent-500/20 text-accent-400 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg text-white mb-2">{resource.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{resource.type}</span>
                    {!resource.comingSoon && (
                      <span className="text-sm text-green-400">Free</span>
                    )}
                  </div>
                  <Button 
                    variant={resource.featured ? "cta" : "outline"}
                    size="sm"
                    className="w-full group"
                    disabled={resource.comingSoon}
                  >
                    {resource.cta}
                    {!resource.comingSoon && <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-24 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guides */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Development <span className="text-gradient-primary">Guides</span>
                </h3>
                <p className="text-gray-400">In-depth tutorials and best practices</p>
              </div>
              
              <div className="space-y-4">
                {guides.map((guide, idx) => (
                  <Card key={idx} className="bg-gray-900 border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                          {guide.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1 group-hover:text-accent-400 transition-colors">
                            {guide.title}
                          </h4>
                          <p className="text-sm text-gray-400 mb-2">{guide.description}</p>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className="text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {guide.readTime}
                            </span>
                            <span className={`px-2 py-1 rounded-full ${
                              guide.level === 'Beginner' ? 'bg-green-900/30 text-green-400' :
                              guide.level === 'Intermediate' ? 'bg-yellow-900/30 text-yellow-400' :
                              'bg-red-900/30 text-red-400'
                            }`}>
                              {guide.level}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 group" asChild>
                <Link href="/blog">
                  View All Guides
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Videos */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Video <span className="text-gradient-creative">Tutorials</span>
                </h3>
                <p className="text-gray-400">Watch and learn AI development techniques</p>
              </div>

              <div className="space-y-4">
                {videos.map((video, idx) => (
                  <Card key={idx} className="bg-gray-900 border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-3xl">
                          {video.thumbnail}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-2 group-hover:text-accent-400 transition-colors">
                            {video.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Video className="w-4 h-4 mr-1" />
                              {video.duration}
                            </span>
                            <span>{video.views} views</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 group">
                <Video className="w-4 h-4 mr-2" />
                View All Videos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-conic relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
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