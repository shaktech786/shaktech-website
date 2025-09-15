import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import { 
  Lightbulb,
  Code,
  Users,
  CheckCircle,
  ArrowRight,
  Rocket,
  Target,
  Brain,
  Zap,
  Shield,
  Award,
  Clock,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-First Team & Technology Services | ThoughtWorks Consultant",
  description: "Team transformation, full-stack AI development, leadership coaching, and social impact consulting. Experienced ThoughtWorks consultant focused on building both great software and strong teams.",
}

const ServicesPage = () => {
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
        "Team retrospectives focused on AI adoption",
        "Individual mentoring for each team member",
        "Leadership coaching for technical managers"
      ],
      deliverables: [
        "Team AI Readiness Assessment Report",
        "Custom AI-First Development Playbook",
        "Individual Development Plans for each team member",
        "AI Tool Integration Guide",
        "3-month follow-up coaching sessions"
      ],
      ideal_for: [
        "Development teams struggling with AI adoption",
        "CTOs wanting to upskill existing developers",
        "Teams experiencing low morale or productivity",
        "Organizations prioritizing psychological safety"
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
      color: "from-cyan-500 to-cyan-700",
      featured: true,
      features: [
        "Next.js/React + AI integration (LLMs, RAG, fine-tuning)",
        "Enterprise-grade security & compliance",
        "PostgreSQL database design & optimization",
        "Comprehensive testing (Jest, Cypress, Pact)",
        "CI/CD deployment pipeline (CircleCI/GitHub Actions)",
        "Team training on AI-first development practices",
        "Code review and mentoring throughout project",
        "Social impact and accessibility considerations"
      ],
      deliverables: [
        "Production-ready AI application",
        "Complete documented source code",
        "Deployment infrastructure & CI/CD pipeline",
        "Team training materials & knowledge transfer",
        "3-month post-launch maintenance included"
      ],
      ideal_for: [
        "Startups building AI-first products",
        "Social impact organizations needing custom solutions",
        "Companies requiring enterprise-grade AI applications",
        "Teams wanting to learn while building"
      ],
      outcome: "Production-ready AI applications with measurable business impact & team upskilling"
    },
    {
      tier: "leadership",
      title: "Leadership Coaching for AI Adoption",
      subtitle: "Guidance from Real Development Experience",
      description: "1:1 coaching for technical leaders navigating AI transformation. Drawing from my development experience at ThoughtWorks and focus on team collaboration.",
      pricing: "$5,000 - $15,000",
      duration: "3-6 months",
      icon: <Target className="w-8 h-8" />,
      color: "from-amber-500 to-amber-700",
      features: [
        "Monthly 1:1 coaching sessions with experienced consultant",
        "Team psychology and psychological safety frameworks",
        "AI strategy development and communication",
        "Change management for AI tool adoption",
        "Technical leadership skills development",
        "Conflict resolution and team dynamics",
        "Performance review and feedback techniques",
        "Career progression planning and mentorship"
      ],
      deliverables: [
        "Personalized leadership development plan",
        "AI adoption strategy for your team",
        "Team health assessment & improvement roadmap",
        "Monthly progress check-ins and adjustments",
        "Access to proven leadership frameworks"
      ],
      ideal_for: [
        "New technical managers and team leads",
        "Senior developers transitioning to leadership",
        "CTOs implementing AI transformation",
        "Leaders struggling with team dynamics"
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
        "Grant writing and funding strategy support",
        "Long-term sustainability planning",
        "Impact measurement and reporting"
      ],
      deliverables: [
        "Custom social impact application",
        "Open-source codebase (when appropriate)",
        "Volunteer developer training materials",
        "Sustainability and maintenance plan",
        "Impact measurement dashboard"
      ],
      ideal_for: [
        "Nonprofits needing custom technology solutions",
        "Social justice organizations with limited budgets",
        "Community groups wanting to build internal capacity",
        "Organizations focused on equitable technology"
      ],
      outcome: "Technology that creates measurable positive social change"
    }
  ]

  const process_steps = [
    {
      step: 1,
      title: "Discovery Call",
      description: "We start with a deep dive into your business challenges, goals, and current technical landscape.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 2, 
      title: "Strategy & Planning",
      description: "Together we craft a tailored approach that aligns AI solutions with your business objectives.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Implementation",
      description: "I work with your team to build, train, or strategize using proven methodologies and best practices.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Success & Growth",
      description: "We ensure successful deployment and provide ongoing support for continuous improvement.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-hexagon-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            AI-First Team & Technology
            <span className="block text-gradient-creative">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            ThoughtWorks-trained consultant with 7+ years of development experience. 
            Whether you need team transformation, full-stack AI development, or leadership coaching - 
            I combine technical skills with collaborative leadership.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇺🇸</span>
              <span>US-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Georgia Tech</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              <span>EST Timezone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-services relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.tier} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gray-900 border-gray-700 ${service.featured ? 'ring-2 ring-accent-400 scale-105' : ''}`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
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
                  <p className="text-cyan-400 font-medium text-lg">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-amber-400 mt-4">
                    {service.pricing}
                  </div>
                  <div className="text-sm text-cyan-400 mt-2">
                    {service.duration}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-amber-400 mr-2" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-indigo-400 mr-2" />
                      Ideal For
                    </h4>
                    <ul className="space-y-2">
                      {service.ideal_for.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.outcome && (
                    <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
                      <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Expected Outcome
                      </h4>
                      <p className="text-sm text-green-300">{service.outcome}</p>
                    </div>
                  )}

                  <Button 
                    variant={service.featured ? "cta" : "outline"} 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-radial relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient-creative">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A practical methodology refined through 7+ years of software development 
              and team collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process_steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-amber-500 rounded-full flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform duration-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                  {index < process_steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-amber-500/50" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-conic relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can work together to achieve your goals. 
            Every engagement starts with a conversation to understand your unique needs.
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

export default ServicesPage