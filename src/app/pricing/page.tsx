import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import { 
  ArrowRight,
  Users,
  Code,
  Target,
  Lightbulb,
  CheckCircle,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services & Investment | ThoughtWorks Consultant",
  description: "Transparent pricing for AI-first team transformation, full-stack development, leadership coaching, and social impact consulting. Based on real-world ThoughtWorks experience.",
}

const PricingPage = () => {
  const services = [
    {
      tier: "team-transformation",
      title: "AI-First Team Transformation",
      subtitle: "Teams That Actually Succeed with AI",
      description: "Transform your existing development team from traditional practices to AI-assisted delivery. Based on my experience mentoring developers and fostering team growth at ThoughtWorks.",
      pricing: "$10,000 - $25,000",
      duration: "6-8 weeks",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-700",
      features: [
        "Team psychological safety assessment & improvement",
        "AI tool integration (GitHub Copilot, ChatGPT, etc.)",
        "Pair programming with AI best practices",
        "Test-driven development with AI assistance",
        "Code review processes that leverage AI",
        "Individual mentoring for each team member",
        "3-month follow-up coaching sessions"
      ],
      outcome: "Teams improve their velocity with AI tools while building healthier collaboration patterns"
    },
    {
      tier: "development",
      title: "Full-Stack AI Application Development",
      subtitle: "Technology That Makes a Real Difference",
      description: "End-to-end development of AI-powered applications with modern development practices. From social impact projects to business applications that solve real problems.",
      pricing: "$25,000 - $75,000",
      duration: "3-4 months",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-700",
      featured: true,
      features: [
        "Next.js/React + AI integration (LLMs, RAG, fine-tuning)",
        "Enterprise-grade security & compliance",
        "PostgreSQL database design & optimization",
        "Comprehensive testing (Jest, Cypress, Pact)",
        "CI/CD deployment pipeline (CircleCI/GitHub Actions)",
        "Team training on AI-first development practices",
        "3-month post-launch maintenance included"
      ],
      outcome: "Production-ready AI applications with measurable business impact & team upskilling"
    },
    {
      tier: "leadership",
      title: "Leadership Coaching for AI Adoption",
      subtitle: "From Intern to Lead - I&apos;ve Been Where You Are",
      description: "1:1 coaching for technical leaders navigating AI transformation. Drawing from my development experience at ThoughtWorks and focus on team collaboration.",
      pricing: "$5,000 - $15,000",
      duration: "3-6 months",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-700",
      features: [
        "Monthly 1:1 coaching sessions with ThoughtWorks Lead",
        "Team psychology and psychological safety frameworks",
        "AI strategy development and communication",
        "Change management for AI tool adoption",
        "Technical leadership skills development",
        "Performance review and feedback techniques",
        "Access to ThoughtWorks leadership frameworks"
      ],
      outcome: "Leaders who can effectively guide AI transformation while maintaining team health"
    },
    {
      tier: "social-impact",
      title: "Social Impact Tech Consulting",
      subtitle: "Technology for Positive Change",
      description: "Specialized consulting for nonprofits and social impact organizations. Based on my experience building prison oversight systems and commitment to diversity, equity, and inclusion in tech.",
      pricing: "$5,000 - $20,000",
      duration: "Flexible based on impact",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      features: [
        "Pro-bono and reduced-rate options for qualifying organizations",
        "Open-source development when possible",
        "Accessibility and inclusive design focus",
        "Community-driven development practices",
        "Volunteer developer coordination and training",
        "Long-term sustainability planning",
        "Impact measurement and reporting"
      ],
      outcome: "Technology that creates measurable positive social change"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-hexagon-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Simple, Transparent
            <span className="block text-gradient-creative">Investment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Four proven service offerings based on real ThoughtWorks experience. 
            No recurring subscriptions, hidden fees, or unrealistic promises. 
            Just authentic expertise with measurable outcomes.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇺🇸</span>
              <span>US-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-indigo-400" />
              <span>Professional Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>ThoughtWorks Lead</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-services relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Investment <span className="text-gradient-primary">Options</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service that aligns with your current needs and goals. 
              Every engagement starts with a free consultation to ensure the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.tier} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gray-900 border-gray-700 ${service.featured ? 'ring-2 ring-indigo-400 scale-105' : ''}`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-indigo-400 font-medium text-lg">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-indigo-400 mt-4">
                    {service.pricing}
                  </div>
                  <div className="text-sm text-indigo-400 mt-2">
                    {service.duration}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.outcome && (
                    <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-700/30">
                      <h4 className="text-lg font-semibold text-indigo-400 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Expected Outcome
                      </h4>
                      <p className="text-sm text-indigo-300">{service.outcome}</p>
                    </div>
                  )}

                  <Button 
                    variant={service.featured ? "cta" : "outline"} 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <Link href="/contact">
                      Start Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simple FAQ */}
      <section className="py-24 bg-gradient-radial relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Simple <span className="text-gradient-creative">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No complex contracts or recurring commitments. Just straightforward collaboration 
              based on proven ThoughtWorks methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <CardTitle className="text-white mb-3">Free Consultation</CardTitle>
              <p className="text-gray-400 text-sm">
                We discuss your needs, challenges, and goals to ensure the right service fit.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <CardTitle className="text-white mb-3">Clear Proposal</CardTitle>
              <p className="text-gray-400 text-sm">
                Fixed scope, timeline, and investment with specific deliverables and outcomes.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <CardTitle className="text-white mb-3">Proven Results</CardTitle>
              <p className="text-gray-400 text-sm">
                Execution using ThoughtWorks practices with measurable business impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-conic relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss which service aligns with your goals and timeline. 
            Every engagement starts with a free consultation to understand your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group" asChild>
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/portfolio">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PricingPage