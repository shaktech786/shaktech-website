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
  GraduationCap, 
  Building, 
  Heart,
  Lightbulb,
  Target,
  ArrowRight,
  Music,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Calendar,
  MapPin
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Shakeel Bhamani - Software Developer & Creative Technologist",
  description: "Atlanta-based software developer with a unique background in technology and creative arts. Learn about my journey in software development, team collaboration, and building solutions that matter.",
}

const AboutPage = () => {
  const journeyMilestones = [
    {
      year: "Present",
      title: "ThoughtWorks Consultant",
      description: "Building software solutions with modern development practices and mentoring fellow developers. Contributing to diverse engineering teams and fostering inclusive tech environments.",
      icon: <Building className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500",
      badge: "Present",
      badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50"
    },
    {
      year: "2017",
      title: "Creative Performer & Public Speaker",
      description: "Developed strong communication and performance skills through creative arts, including competitive beatboxing and public speaking engagements.",
      icon: <Award className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500",
      badge: "2017",
      badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50"
    },
    {
      year: "2012-2016",
      title: "Georgia Institute of Technology",
      description: "B.S. in Computer Science with academic honors. Served as Peer Leader mentoring fellow students while building a strong foundation in software engineering.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500",
      badge: "2012-2016",
      badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50"
    }
  ]

  const coreValues = [
    {
      title: "Empathy-Driven Development",
      description: "Every technical solution starts with understanding the human story. I listen first, then build technology that truly serves people's needs.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      title: "Creative Problem Solving",
      description: "My beatboxing background taught me that innovation comes from combining existing elements in new ways. I apply this creative thinking to AI solutions.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      title: "Enterprise Excellence",
      description: "Trained in industry-standard practices: test-driven development, continuous integration, and agile methodologies that deliver reliable software.",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-500"
    }
  ]

  const skillCategories = [
    {
      category: "AI & Machine Learning",
      icon: <Sparkles className="w-5 h-5" />,
      color: "text-purple-400",
      skills: ["OpenAI API", "Claude API", "LangChain", "Vector Databases", "RAG Systems", "AI Agents", "Prompt Engineering", "ML Operations"]
    },
    {
      category: "Full-Stack Development",
      icon: <Code className="w-5 h-5" />,
      color: "text-blue-400", 
      skills: ["React & Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS & Azure", "Docker", "GraphQL"]
    },
    {
      category: "Leadership & Strategy",
      icon: <Users className="w-5 h-5" />,
      color: "text-emerald-400",
      skills: ["Team Psychology", "Agile Coaching", "Technical Training", "Client Consulting", "Public Speaking", "Change Management"]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <div className="absolute inset-0 bg-circuit-board opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-700/50">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">ThoughtWorks Consultant</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Software Developer with a</span>
                <span className="block text-gradient-creative mt-2">Creative Edge</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                My journey from <strong className="text-indigo-400">Georgia Tech</strong> to <strong className="text-indigo-400">ThoughtWorks</strong>
                has taught me that the best technology solutions come from understanding the <em className="text-indigo-400">people</em> who will use them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="cta" size="xl" className="group" asChild>
                  <Link href="/contact">
                    Let&apos;s Connect
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="group" asChild>
                  <Link href="https://linktr.ee/shakbbx" target="_blank" rel="noopener noreferrer">
                    <Music className="w-5 h-5 mr-2" />
                    Creative Work
                  </Link>
                </Button>
              </div>
            </div>

            {/* Photo & Info Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="space-y-6">
                <div className="w-80 h-80 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-2xl p-1 shadow-2xl mx-auto">
                  <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                    <Image
                      src="/shakeel_linkedin.jpeg"
                      alt="Shakeel Bhamani - ThoughtWorks Lead Consultant"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Info Card - Positioned below photo */}
                <Card className="bg-gray-900/95 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-white text-lg">Shakeel Bhamani</h3>
                    <p className="text-indigo-400 text-sm font-medium">AI-First Software Expert</p>
                    <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Atlanta, Georgia 🇺🇸</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient-primary">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Combining technical skills, creative thinking, and collaborative leadership 
              to build software solutions that make a real difference.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-indigo-600 to-indigo-500 opacity-30 hidden lg:block" />
            
            <div className="space-y-16">
              {journeyMilestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    {/* Left Content (odd indexes) or Empty (even indexes) */}
                    <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-1'}`}>
                      {index % 2 !== 0 ? (
                        <Card className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${milestone.color}`}>
                                <div className="text-white">{milestone.icon}</div>
                              </div>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full border ${milestone.badgeColor}`}>
                                {milestone.badge}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center Timeline Node */}
                    <div className="flex justify-center lg:order-2">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg border-4 border-gray-900 relative z-10`}>
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                    </div>

                    {/* Right Content (even indexes) or Empty (odd indexes) */}
                    <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-3'}`}>
                      {index % 2 === 0 ? (
                        <Card className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${milestone.color}`}>
                                <div className="text-white">{milestone.icon}</div>
                              </div>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full border ${milestone.badgeColor}`}>
                                {milestone.badge}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout - Show card below timeline node */}
                  <div className="lg:hidden mt-6">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${milestone.color}`}>
                            <div className="text-white">{milestone.icon}</div>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full border ${milestone.badgeColor}`}>
                            {milestone.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Reimagined */}
      <section className="py-24 bg-gradient-radial relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core <span className="text-gradient-creative">Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide my approach to software development and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="group bg-gray-800/20 border-gray-700 hover:bg-gray-800/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise - Enhanced Layout */}
      <section className="py-24 bg-gray-950 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical <span className="text-gradient-primary">Skills</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tools and technologies I work with regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Categories */}
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 rounded-lg bg-gray-800 ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements & Stats */}
            <div className="space-y-8">
              <Card className="bg-gray-800/20 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-lg font-bold text-white">Experience Highlights</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Experienced in mentoring junior developers and fostering team growth</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Public speaker with experience in creative technology topics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Competitive beatboxer with national-level performance experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Built modern web applications with focus on user experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">7+ years professional software development experience</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/20 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-lg font-bold text-white">My Approach</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I believe the best technology solutions come from understanding the people who will use them. 
                    Every project is an opportunity to create something that makes a real difference.
                  </p>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-700/30">
                    <p className="text-indigo-300 text-sm">
                      <strong>Social Impact:</strong> I offer discounted rates for non-profits
                      and organizations working on social good initiatives.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-800/50 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">7+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">GA</div>
                    <div className="text-sm text-gray-400">Georgia Tech</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-conic relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Something Great Together?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re building something new or improving what exists, 
            I&apos;d love to hear your story and explore how we can create solutions that make a real difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group shadow-lg" asChild>
              <Link href="/contact">
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900 group" asChild>
              <Link href="/portfolio">
                <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-white/70">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>US-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Atlanta-Based</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage