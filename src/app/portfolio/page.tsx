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
  Sparkles
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
      imageUrl: "/projects/shakgpt.jpg",
      featured: true,
      icon: <Brain className="w-6 h-6" />,
      color: "from-primary-500 to-accent-500"
    },
    {
      id: "tmux-orchestrator",
      title: "Tmux Orchestrator - 24/7 AI Teams",
      category: "Automation",
      description: "Revolutionary system enabling Claude agents to work autonomously around the clock, self-trigger check-ins, and coordinate across multiple projects without human intervention.",
      longDescription: "A groundbreaking approach to AI team management that overcomes context window limitations through a three-tier hierarchy. This system allows AI agents to persist work sessions, coordinate tasks, and maintain progress across multiple codebases simultaneously.",
      techStack: ["Python", "Tmux", "Claude API", "Shell Scripting", "Docker", "Linux", "Git", "MCP"],
      features: [
        "Self-Triggering AI Agents",
        "Multi-Project Coordination",
        "Persistent Work Sessions",
        "Hierarchical Team Structure",
        "Automatic Progress Tracking",
        "Context Window Management",
        "Cross-Repository Coordination",
        "24/7 Autonomous Operation"
      ],
      metrics: [
        "99.9% Uptime",
        "5x Development Speed",
        "Zero Context Loss",
        "Multi-Team Scaling"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/shakeelbhamani/tmux-orchestrator",
      imageUrl: "/projects/tmux-orchestrator.jpg",
      icon: <Zap className="w-6 h-6" />,
      color: "from-creative-500 to-accent-500"
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
      demoUrl: "https://ai-stock-researcher.com",
      githubUrl: "#",
      imageUrl: "/projects/ai-stock-researcher.jpg",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-accent-500 to-creative-500"
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
      demoUrl: "https://estimaite.com",
      githubUrl: "#",
      imageUrl: "/projects/estimaite.jpg",
      icon: <Users className="w-6 h-6" />,
      color: "from-primary-500 to-creative-500"
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
    <main className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-primary-900 via-primary-950 to-accent-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-800/50 px-4 py-2 rounded-full border border-primary-700 mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-accent-300">
              AI-First Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Transforming Ideas Into
            <span className="block text-gradient-creative">AI-Powered Reality</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From autonomous AI platforms serving thousands of users to enterprise consulting solutions - 
            explore how I&apos;m pushing the boundaries of AI-first software delivery.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-accent-400" />
              <span>10+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-creative-400" />
              <span>1000+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary-400" />
              <span>Enterprise Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
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
                      <span className="bg-gray-800 text-accent-400 px-3 py-1 rounded-full text-sm font-medium">
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
                        <div className="text-accent-400 font-bold text-sm">{metric}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-800/50 text-primary-300 rounded-full text-sm font-medium border border-primary-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Button variant="jazz" className="group" asChild>
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
      <section className="py-24 bg-gradient-to-br from-primary-900 to-accent-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Client <span className="text-gradient-creative">Success Stories</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-creative-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
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

                  <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-400 text-sm">
                    &quot;{project.testimonial}&quot;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-accent-500 to-creative-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next AI Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a custom AI platform, enterprise consulting, or team training, 
            let&apos;s discuss how we can bring your vision to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
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