import React from "react"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import { 
  Code, 
  Users, 
  Award, 
  Mic, 
  GraduationCap, 
  Building, 
  Heart,
  Lightbulb,
  Target,
  ArrowRight,
  Music,
  Sparkles
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Shakeel Bhamani - AI Expert & TEDx Speaker",
  description: "From enterprise consulting to beatboxing championships - learn about Shakeel's unique journey in AI-first software delivery, empathetic leadership, and creative innovation.",
}

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-primary-950/20 via-primary-950/10 to-accent-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid-jazz items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary-900/30 px-4 py-2 rounded-full border border-primary-700">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-300">
                  About Shakeel Bhamani
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                From Beatbox Champion to
                <span className="block text-gradient-creative">AI Pioneer</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                My journey from <strong>TEDx stages</strong> to <strong>Thoughtworks consulting</strong> to 
                <strong> AI-first software delivery</strong> has taught me that the most powerful technology 
                solutions come from understanding the <em>human story</em> behind every project.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="jazz" size="lg" asChild>
                  <Link href="/contact">Work With Me</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://linktr.ee/shakbbx" target="_blank" rel="noopener noreferrer">
                    <Music className="w-5 h-5 mr-2" />
                    Watch TEDx Talk
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-primary-500 via-accent-500 to-creative-500 rounded-2xl p-1">
                  <div className="w-full h-full bg-primary-950 rounded-xl overflow-hidden">
                    <Image
                      src="/shakeel_linkedin.jpeg"
                      alt="Shakeel Bhamani - Lead Software Consultant"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="text-center mt-6 space-y-1">
                  <p className="font-bold text-xl text-white">Shakeel Bhamani</p>
                  <p className="text-gray-400">AI-First Software Expert</p>
                  <p className="text-gray-400">TEDx Speaker & Beatbox Champion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-primary-950/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient-primary">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A unique path that combines technical excellence, creative expression, 
              and empathetic leadership to deliver AI-first solutions.
            </p>
          </div>

          <div className="space-y-12">
            {/* Current Role */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <Card className="p-6 border-l-4 border-l-primary-500">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Building className="w-6 h-6 text-primary-600" />
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                        Present
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Lead Software Consultant at Thoughtworks
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Leading AI-first software delivery initiatives, building digital accelerator programs, 
                      and mentoring diverse engineering teams. Received commendation from Thoughtworks North America CEO 
                      for successfully training 11 diverse interns who all received full-time offers.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Georgia Tech */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center lg:order-first">
                <div className="w-16 h-16 bg-gradient-to-br from-creative-500 to-accent-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <Card className="p-6 border-l-4 border-l-creative-500">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <GraduationCap className="w-6 h-6 text-creative-600" />
                      <span className="text-sm font-medium text-creative-600 bg-creative-50 px-2 py-1 rounded-full">
                        2012-2016
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Georgia Institute of Technology
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      B.S. in Computer Science with Dean&apos;s List honors. Served as Peer Leader mentoring 30 students, 
                      while simultaneously developing my beatboxing skills that would later lead to championship performances.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Beatboxing Achievement */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <Card className="p-6 border-l-4 border-l-accent-500">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Mic className="w-6 h-6 text-accent-600" />
                      <span className="text-sm font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full">
                        2017
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Loopstation Vice Champion & TEDx Speaker
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Achieved vice champion status at the American Beatbox Championships and delivered a TEDx talk. 
                      This experience taught me the power of creative expression and performing under pressure - 
                      skills I now apply to technical presentations and client engagements.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-creative-500 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-24 bg-primary-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient-creative">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The intersection of empathy, creativity, and technical excellence drives everything I do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Empathy First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every project starts with understanding the human story. Whether it&apos;s a founder&apos;s vision 
                  or a team&apos;s challenges, I listen first and build solutions that truly serve people.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-creative-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Creative Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  My beatboxing background taught me that the most powerful expressions come from 
                  combining existing elements in new ways. I bring this creative thinking to AI solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Pragmatic Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Thoughtworks trained me in enterprise-grade practices: test-driven development, 
                  continuous integration, and agile methodologies. I combine rigor with innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-24 bg-primary-950/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core <span className="text-gradient-primary">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code className="w-6 h-6 text-primary-600 mr-3" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React & Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
                    "AWS & Azure", "Docker", "Kubernetes", "GraphQL", "REST APIs"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-creative-600 mr-3" />
                  AI & Machine Learning
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "OpenAI API", "Claude API", "LangChain", "Vector Databases",
                    "RAG Systems", "AI Agents", "Prompt Engineering", "ML Operations"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-creative-100 dark:bg-creative-900/30 text-creative-700 dark:text-creative-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 text-accent-600 mr-3" />
                  Leadership & Consulting
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Agile Coaching", "Technical Training", "Team Leadership",
                    "Client Consulting", "Stakeholder Management", "Public Speaking"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🏆 Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Led 11 diverse interns to 100% full-time offer rate</li>
                  <li>• TEDx Speaker on creativity and technology</li>
                  <li>• Beatbox Loopstation Vice Champion 2017</li>
                  <li>• Built AI platforms serving 1000+ users</li>
                  <li>• 10+ years of enterprise software experience</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-creative-50 to-accent-50 dark:from-creative-900/20 dark:to-accent-900/20 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🎯 What Drives Me
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  I believe the future belongs to those who can bridge the gap between human creativity 
                  and artificial intelligence. Every project is an opportunity to create something 
                  that makes people&apos;s lives better, easier, or more meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-accent-500 to-creative-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a startup with a bold vision or an established company ready to embrace AI, 
            I&apos;d love to hear your story and explore how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage