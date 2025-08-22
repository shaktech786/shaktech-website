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
  title: "AI-First Software Services - Strategy, Development & Training",
  description: "From AI strategy consulting to hands-on development and team training. Shakeel offers three comprehensive tiers to transform your business with AI-first software delivery.",
}

const ServicesPage = () => {
  const services = [
    {
      tier: "strategy",
      title: "AI Strategy Consulting",
      subtitle: "Chart Your AI Journey",
      description: "Perfect for leaders who need strategic clarity on how AI can transform their business operations and competitive position.",
      pricing: "Starting at $2,500",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-primary-500 to-primary-700",
      features: [
        "AI Readiness Assessment",
        "Custom AI Strategy Roadmap",
        "Technology Stack Recommendations",
        "ROI Projections & Business Case",
        "Risk Assessment & Mitigation",
        "Implementation Timeline",
        "Team Skill Gap Analysis",
        "Vendor Evaluation & Selection"
      ],
      deliverables: [
        "Comprehensive AI Strategy Document",
        "Executive Presentation",
        "Technical Architecture Recommendations",
        "3-Month Implementation Plan"
      ],
      ideal_for: [
        "CEOs and CTOs planning AI transformation",
        "Companies exploring AI opportunities",
        "Organizations needing AI roadmaps",
        "Teams requiring strategic direction"
      ]
    },
    {
      tier: "development",
      title: "AI-First Development",
      subtitle: "Build Your AI Solution",
      description: "End-to-end development of AI-powered applications with enterprise-grade practices and modern technology stacks.",
      pricing: "Starting at $15,000",
      icon: <Code className="w-8 h-8" />,
      color: "from-accent-500 to-accent-700",
      featured: true,
      features: [
        "Full-Stack AI Application Development",
        "API Design & Integration",
        "Database Design & Optimization",
        "User Experience (UX) Design",
        "Security & Compliance Implementation",
        "Performance Optimization",
        "Testing & Quality Assurance",
        "Deployment & DevOps Setup"
      ],
      deliverables: [
        "Production-Ready AI Application",
        "Complete Source Code",
        "Documentation & Guides",
        "Deployment Infrastructure"
      ],
      ideal_for: [
        "Startups building AI-first products",
        "Companies needing custom AI solutions",
        "Teams requiring hands-on development",
        "Organizations modernizing with AI"
      ]
    },
    {
      tier: "training",
      title: "Team Training & Enablement", 
      subtitle: "Empower Your Team",
      description: "Comprehensive training programs to upskill your team in AI-first development practices and modern software methodologies.",
      pricing: "Starting at $5,000",
      icon: <Users className="w-8 h-8" />,
      color: "from-creative-500 to-creative-700",
      features: [
        "AI-First Development Workshops",
        "Hands-on Coding Sessions",
        "Agile & DevOps Best Practices",
        "Code Review & Mentoring",
        "Team Collaboration Training",
        "Technical Leadership Coaching",
        "Custom Curriculum Development",
        "Progress Tracking & Assessment"
      ],
      deliverables: [
        "Custom Training Program",
        "Workshop Materials & Resources",
        "Skills Assessment Reports",
        "Ongoing Mentorship Access"
      ],
      ideal_for: [
        "Development teams adopting AI",
        "Companies upskilling developers",
        "Organizations improving practices",
        "Teams needing technical mentorship"
      ]
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
    <main className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-primary-900 via-primary-950 to-accent-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            AI-First Software
            <span className="block text-gradient-creative">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From strategic AI consulting to hands-on development and team training. 
            Choose the perfect engagement level for your AI transformation journey.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent-400" />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-creative-400" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary-400" />
              <span>Proven Methodologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.tier} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gray-900 border-gray-700 ${service.featured ? 'ring-2 ring-accent-400 scale-105' : ''}`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-accent-500 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
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
                  <p className="text-accent-400 font-medium text-lg">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-creative-400 mt-4">
                    {service.pricing}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-400 mr-2" />
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-creative-400 mr-2" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <ArrowRight className="w-4 h-4 text-creative-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-primary-400 mr-2" />
                      Ideal For
                    </h4>
                    <ul className="space-y-2">
                      {service.ideal_for.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={service.featured ? "jazz" : "outline"} 
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
      <section className="py-24 bg-gradient-to-br from-primary-900 to-accent-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="text-gradient-creative">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology refined through 10+ years of enterprise consulting 
              and AI-first software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process_steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-creative-500 rounded-full flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform duration-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                  {index < process_steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent-500/50 to-creative-500/50" />
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
      <section className="py-24 bg-gradient-to-r from-primary-600 via-accent-500 to-creative-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss which service tier aligns with your goals and timeline. 
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

export default ServicesPage