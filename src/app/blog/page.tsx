import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"
import { getAllPosts, PostMeta } from "@/lib/mdx"
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
  description: "Essays on AI-first software delivery, AI harnesses and agent workflows, and engineering leadership from Shakeel Bhamani, Staff Software Engineer and former Thoughtworks Lead Consultant.",
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    "AI": "bg-indigo-900/30 text-indigo-300 border-indigo-700",
    "Methodology": "bg-indigo-900/30 text-indigo-300 border-indigo-700",
    "Leadership": "bg-indigo-900/30 text-indigo-300 border-indigo-700",
    "Technical": "bg-gray-700 text-gray-300 border-gray-600",
    "Career": "bg-purple-900/30 text-purple-300 border-purple-700",
    "Innovation": "bg-pink-900/30 text-pink-300 border-pink-700"
  }
  return colors[tag] || "bg-gray-700 text-gray-300 border-gray-600"
}

const getPostIcon = (tags: string[]) => {
  if (tags.includes("Leadership") || tags.includes("Team Management")) return <Users className="w-5 h-5" />
  if (tags.includes("Architecture") || tags.includes("Technical")) return <Code className="w-5 h-5" />
  if (tags.includes("Career") || tags.includes("Consulting")) return <TrendingUp className="w-5 h-5" />
  if (tags.includes("Creativity") || tags.includes("Innovation")) return <Sparkles className="w-5 h-5" />
  return <Brain className="w-5 h-5" />
}

const BlogPage = async () => {
  const posts = await getAllPosts()
  const featuredPost: PostMeta | undefined = posts.find((post) => post.featured) ?? posts[0]
  const otherPosts = posts.filter((post) => post.slug !== featuredPost?.slug)

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
            Essays on AI-first delivery, building harnesses for coding agents, and leading
            engineering teams through the shift. Written from the field, not the sidelines.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-900">
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
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      {featuredPost.readTime && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime} min read</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
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
                      {getPostIcon(featuredPost.tags)}
                    </div>
                    <Button variant="cta" className="group" asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
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
      )}

      {/* All Posts */}
      {otherPosts.length > 0 && (
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Latest <span className="text-gradient-primary">Articles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep dives into AI-first development, leadership insights, and lessons
                learned from building and shipping software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Card key={post.slug} className="bg-gray-900 border-gray-700 hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                        {getPostIcon(post.tags)}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {formatDate(post.date)}
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
                      {post.readTime && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                      )}
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
                      <Link href={`/blog/${post.slug}`}>
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
      )}

      {/* Newsletter */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BlogPage
