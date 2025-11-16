import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import { 
  ArrowRight,
  Clock,
  User,
  Calendar,
  BookOpen,
  Sparkles,
  Brain,
  Code,
  TrendingUp,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-First Software Delivery Blog - Insights & Best Practices",
  description: "Explore insights on AI-first software delivery, team leadership, and modern development practices from Shakeel Bhamani's experience at Thoughtworks and beyond.",
}

const BlogPage = () => {
  // Sample blog posts - these would come from the CMS in production
  const posts = [
    {
      id: "aifsd-methodology",
      title: "AIFSD Methodology: The Future of Software Development",
      excerpt: "Discover how AI-First Software Delivery is transforming the way we build applications, from initial concept to production deployment.",
      content: "Learn about the core principles, practical applications, and transformative potential of AI-First Software Delivery methodology.",
      readTime: 8,
      publishedAt: "2024-01-15",
      tags: ["AI", "Methodology", "Software Development"],
      featured: true,
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: "team-leadership-ai-era",
      title: "Leading Development Teams in the AI Era",
      excerpt: "How traditional team leadership evolves when AI becomes a core part of your development workflow and decision-making process.",
      content: "Practical strategies for leading technical teams through AI adoption and transformation.",
      readTime: 6,
      publishedAt: "2024-01-10",
      tags: ["Leadership", "AI", "Team Management"],
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "thoughtworks-lessons",
      title: "Lessons from 4 Years at Thoughtworks",
      excerpt: "Key insights and practices learned from consulting at one of the world's leading software consultancies.",
      content: "Essential lessons in software craftsmanship, client consulting, and team empowerment.",
      readTime: 10,
      publishedAt: "2024-01-05",
      tags: ["Consulting", "Best Practices", "Career"],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: "ai-platforms-architecture",
      title: "Building Scalable AI Platforms: Architecture Patterns",
      excerpt: "Technical deep-dive into the architecture patterns and design decisions behind successful AI platforms.",
      content: "Explore the technical foundations of building robust, scalable AI-powered applications.",
      readTime: 12,
      publishedAt: "2023-12-28",
      tags: ["Architecture", "AI Platforms", "Technical"],
      icon: <Code className="w-5 h-5" />
    },
    {
      id: "creativity-meets-code",
      title: "When Creativity Meets Code: From Beatbox to Tech",
      excerpt: "How my journey from beatboxing championships to software development shapes my approach to problem-solving.",
      content: "The surprising connections between musical creativity and innovative software solutions.",
      readTime: 7,
      publishedAt: "2023-12-20",
      tags: ["Creativity", "Personal Journey", "Innovation"],
      icon: <Sparkles className="w-5 h-5" />
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  const getTagColor = (tag: string) => {
    const colors = {
      "AI": "bg-indigo-900/30 text-indigo-300 border-indigo-700",
      "Methodology": "bg-indigo-900/30 text-indigo-300 border-indigo-700",
      "Leadership": "bg-indigo-900/30 text-indigo-300 border-indigo-700",
      "Technical": "bg-gray-700 text-gray-300 border-gray-600",
      "Career": "bg-purple-900/30 text-purple-300 border-purple-700",
      "Innovation": "bg-pink-900/30 text-pink-300 border-pink-700"
    }
    return colors[tag as keyof typeof colors] || "bg-gray-700 text-gray-300 border-gray-600"
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-indigo-900 via-indigo-950 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-800/50 px-4 py-2 rounded-full border border-indigo-700 mb-8">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">
              Insights & Perspectives
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            AI-First Software
            <span className="block text-gradient-creative">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Thoughts on AI-first software delivery, team leadership, and the intersection 
            of creativity and technology from the field and beyond.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured Post
              </span>
            </div>

            <Card className="bg-gradient-to-r from-indigo-900 to-indigo-800 border-indigo-700 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Shakeel Bhamani</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center text-white">
                      {post.icon}
                    </div>
                    <Button variant="cta" className="group" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* All Posts */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Latest <span className="text-gradient-primary">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep dives into AI-first development, leadership insights, and lessons 
              learned from building cutting-edge software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-700 hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                      {post.icon}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Shakeel</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-md text-xs font-medium border ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group mt-4 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stay Updated on AI-First Development
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI-first software delivery, team leadership, 
            and innovative development practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BlogPage