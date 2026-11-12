import React from "react"
import { pageMetadata } from "@/lib/metadata"
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
  ArrowRight,
  Music,
  Sparkles,
  CheckCircle,
  TrendingUp,
  MapPin
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = pageMetadata(
  "About Shakeel Bhamani",
  "Staff Software Engineer and founder of ShakTech Labs, a one-person software studio in Atlanta. Georgia Tech CS, seven years at Thoughtworks, TEDx speaker, 2017 American Beatbox Championships vice champion.",
  "/about"
)

const AboutPage = () => {
  const journeyMilestones = [
    {
      year: "Present",
      title: "Staff Software Engineer",
      description: "Tech lead on an enterprise supplier content platform. Built the team's AI enablement programme: an autonomous weekly refactoring agent, AI code review wired to Jira acceptance criteria, a five-server MCP setup, and a spec-driven development playbook adopted company-wide.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500",
      badge: "2026-Present",
      badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50"
    },
    {
      year: "2016-2026",
      title: "Thoughtworks, Lead Consultant",
      description: "Seven years across two stints, ending as Lead Software Consultant. Tech lead for a Fortune 500 health retailer's digital accelerator, a social impact prison oversight platform, and the 2022 DEI internship program where all 11 interns earned full-time offers.",
      icon: <Building className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500",
      badge: "2016-2018 · 2021-2026",
      badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50"
    },
    {
      year: "2018-2020",
      title: "Senior & Lead UI Engineer",
      description: "Senior Software Engineer at Arity (Allstate) building Java/React platforms on Kafka and Cassandra, then Lead UI Engineer at Groundbreaker introducing modern React, GraphQL, and feature-flag practices.",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-500",
      badge: "2018-2020",
      badgeColor: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50"
    },
    {
      year: "2017",
      title: "Beatboxer & TEDx Speaker",
      description: "Vice champion at the 2017 American Beatbox Championships, and a TEDx speaker. Performing taught me to prepare hard and deliver live.",
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
      title: "Start with the person",
      description: "Alaap exists because one music teacher could not find her own recordings. I build for a specific person with a specific problem.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      title: "Range over repetition",
      description: "A SaaS platform, a desktop app, games and developer tools. I would rather learn a new kind of software than build the same one twice.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-500"
    },
    {
      title: "Discipline at speed",
      description: "Test-driven development, continuous integration and code review apply to agents exactly as they apply to people.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-500"
    }
  ]

  const highlights = [
    "12+ products built solo at ShakTech Labs, with 4,000+ commits across them",
    "Staff Software Engineer and tech lead on an enterprise platform",
    "Seven years at Thoughtworks, ending as Lead Software Consultant",
    "Tech lead for a 2022 internship program where all 11 interns earned full-time offers",
    "TEDx speaker and 2017 American Beatbox Championships vice champion",
    "B.S. in Computer Science, Georgia Institute of Technology",
  ]

  const skillCategories = [
    {
      category: "AI Agents",
      icon: <Sparkles className="w-5 h-5" />,
      color: "text-purple-400",
      skills: ["Claude Code", "MCP Servers", "Autonomous Agents", "Claude API", "Gemini API", "Spec-Driven Development"]
    },
    {
      category: "Full-Stack Development",
      icon: <Code className="w-5 h-5" />,
      color: "text-blue-400",
      skills: ["React & Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS & Azure", "Docker", "GraphQL"]
    },
    {
      category: "Leadership",
      icon: <Users className="w-5 h-5" />,
      color: "text-emerald-400",
      skills: ["Tech Lead", "Mentoring", "Client Consulting", "Public Speaking"]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section - Enhanced */}
      <section className="relative flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <div className="absolute inset-0 bg-circuit-board opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-700/50">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Founder, ShakTech Labs · Staff Software Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Shakeel Bhamani</span>
                <span className="block text-indigo-400 mt-2 text-3xl sm:text-4xl lg:text-5xl">One engineer, running a studio</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Ten-plus years from <strong className="text-indigo-400">Georgia Tech</strong> through <strong className="text-indigo-400">Thoughtworks</strong> to Staff Engineer.
                Outside the day job I run ShakTech Labs, where I direct AI agents to build and run complete products on my own.
                I&apos;m raising a pre-seed round to do it full-time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="cta" size="xl" className="group" asChild>
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="group" asChild>
                  <Link href="https://linktr.ee/shakbbx" target="_blank" rel="noopener noreferrer">
                    <Music className="w-5 h-5 mr-2" />
                    TEDx talk and music
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
                      alt="Shakeel Bhamani - Staff Software Engineer"
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
                    <p className="text-indigo-400 text-sm font-medium">Founder, ShakTech Labs</p>
                    <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Atlanta, Georgia</span>
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
              From Georgia Tech to Staff Engineer, with a stage career along the way.
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
              How I <span className="text-gradient-creative">Work</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Three habits behind everything in the portfolio.
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

            {/* Highlights */}
            <div className="space-y-8">
              <Card className="bg-gray-800/20 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-white">Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/20 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-white">Social impact</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I offer reduced rates for nonprofits and organizations working on social good.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-conic relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Want to talk?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Investors, founders with something to build, and engineers curious about the process are all welcome.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group shadow-lg" asChild>
              <Link href="/contact">
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900 group" asChild>
              <Link href="/portfolio">
                <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                See the work
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage
