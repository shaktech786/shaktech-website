import React from "react"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import { 
  Check,
  X,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Zap,
  BookOpen,
  Shield,
  Star,
  Rocket,
  Brain
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - AI Partnership Plans | ShakTech",
  description: "Choose the perfect AI partnership plan. From starter consultations to enterprise solutions. Transparent pricing for AI-first software development and consulting.",
}

const PricingPage = () => {
  const subscriptionPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for exploring AI opportunities",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-primary-500 to-primary-700",
      features: [
        { name: "2 hours AI consulting/month", included: true },
        { name: "Weekly AI trend reports", included: true },
        { name: "Private Discord community", included: true },
        { name: "Monthly group office hours", included: true },
        { name: "AI tool recommendations", included: true },
        { name: "Email support (48hr response)", included: true },
        { name: "Priority support", included: false },
        { name: "Custom AI development", included: false },
        { name: "Team training sessions", included: false },
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "For teams ready to implement AI",
      icon: <Zap className="w-6 h-6" />,
      color: "from-accent-500 to-accent-700",
      features: [
        { name: "8 hours consulting/development", included: true },
        { name: "Priority support (24hr response)", included: true },
        { name: "Code reviews & architecture audits", included: true },
        { name: "Custom AI prompts library", included: true },
        { name: "Quarterly strategy sessions", included: true },
        { name: "Private GitHub repos access", included: true },
        { name: "Weekly AI trend reports", included: true },
        { name: "Private Discord community", included: true },
        { name: "White-label solutions", included: false },
      ],
      cta: "Get Started",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Full AI transformation partnership",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-creative-500 to-creative-700",
      features: [
        { name: "20 hours dedicated time/month", included: true },
        { name: "Same-day support response", included: true },
        { name: "Weekly check-in calls", included: true },
        { name: "Custom AI agent development", included: true },
        { name: "Team training sessions", included: true },
        { name: "White-label solutions", included: true },
        { name: "Priority feature requests", included: true },
        { name: "Dedicated Slack channel", included: true },
        { name: "Quarterly business reviews", included: true },
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  const productizedServices = [
    {
      name: "AI Audit Sprint",
      price: "$1,500",
      duration: "5 days",
      description: "Comprehensive AI readiness assessment with actionable roadmap",
      features: [
        "Current tech stack analysis",
        "AI opportunity identification",
        "20-page detailed report",
        "90-minute strategy call",
        "Implementation roadmap",
      ],
      icon: <Brain className="w-5 h-5" />,
    },
    {
      name: "MVP in a Month",
      price: "$9,999",
      duration: "30 days",
      description: "Full AI-powered MVP from concept to deployment",
      features: [
        "Full-stack development",
        "AI integration",
        "Cloud deployment",
        "Documentation",
        "30 days post-launch support",
      ],
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      name: "AI Integration Pack",
      price: "$4,999",
      duration: "2 weeks",
      description: "Add AI capabilities to your existing application",
      features: [
        "OpenAI/Claude integration",
        "Custom prompt engineering",
        "API development",
        "Testing & optimization",
        "Team training included",
      ],
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      name: "Team AI Bootcamp",
      price: "$7,500",
      duration: "2 weeks",
      description: "Intensive hands-on AI training for your development team",
      features: [
        "10 developers maximum",
        "Hands-on projects",
        "Custom curriculum",
        "Certification included",
        "Follow-up support",
      ],
      icon: <Users className="w-5 h-5" />,
    },
  ]

  const learningSubscription = {
    name: "AI Learning Lab",
    price: "$97",
    period: "/month",
    description: "Master AI development with exclusive educational content",
    features: [
      "Weekly coding tutorials",
      "Monthly live workshops",
      "Exclusive course library",
      "Code templates & boilerplates",
      "Community challenges",
      "Certificate programs",
      "Private Discord channel",
      "Early access to new content",
    ],
    icon: <BookOpen className="w-6 h-6" />,
  }

  return (
    <main className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-radial relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-accent-400 text-sm font-medium">Transparent, Value-Based Pricing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Choose Your AI
            <span className="block text-gradient-creative">Partnership Plan</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From exploring AI opportunities to full enterprise transformation. 
            Select the perfect plan for your journey into AI-first development.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>7-day free trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-24 section-services relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Monthly <span className="text-gradient-primary">Partnership Plans</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ongoing support and development with predictable monthly pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {subscriptionPlans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative bg-gray-900 border-gray-700 hover:shadow-2xl transition-all duration-300 ${
                  plan.highlighted ? 'ring-2 ring-accent-400 scale-105' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.highlighted ? "cta" : "outline"}
                    size="lg"
                    className="w-full group"
                    asChild
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Subscription */}
          <Card className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 border-accent-500/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-creative-500 flex items-center justify-center text-white">
                      {learningSubscription.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{learningSubscription.name}</h3>
                      <p className="text-gray-400">{learningSubscription.description}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-accent-400">{learningSubscription.price}</span>
                    <span className="text-gray-400 ml-1">{learningSubscription.period}</span>
                  </div>
                  <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white group" asChild>
                    <Link href="/contact">
                      Join Learning Lab
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <ul className="space-y-2">
                    {learningSubscription.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Productized Services */}
      <section className="py-24 bg-diagonal-lines relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fixed-Price <span className="text-gradient-creative">Packages</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              One-time engagements with clear deliverables and timelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productizedServices.map((service) => (
              <Card key={service.name} className="bg-gray-900 border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-creative-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{service.name}</CardTitle>
                        <p className="text-sm text-gray-400">{service.duration} delivery</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-creative-400">{service.price}</span>
                  </div>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compare <span className="text-gradient-primary">Plans</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All plans include access to our community and learning resources
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Features</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Starter</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Professional</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Monthly consulting hours</td>
                  <td className="text-center py-4 px-4 text-gray-300">2</td>
                  <td className="text-center py-4 px-4 text-gray-300">8</td>
                  <td className="text-center py-4 px-4 text-gray-300">20</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Response time</td>
                  <td className="text-center py-4 px-4 text-gray-300">48 hours</td>
                  <td className="text-center py-4 px-4 text-gray-300">24 hours</td>
                  <td className="text-center py-4 px-4 text-gray-300">Same day</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Code reviews</td>
                  <td className="text-center py-4 px-4">
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Custom AI development</td>
                  <td className="text-center py-4 px-4">
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4 text-gray-300">Limited</td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Team training</td>
                  <td className="text-center py-4 px-4">
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-conic relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl text-white mb-6 italic">
            &quot;Shakeel&apos;s AI expertise transformed our development process. The ROI was evident within the first month.&quot;
          </blockquote>
          <cite className="text-gray-300">
            - Sarah Chen, CTO at TechForward
          </cite>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 section-portfolio relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient-creative">Questions</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Can I switch plans anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">What if I need more hours than my plan includes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Additional hours can be purchased at a discounted rate, or you can upgrade to a higher tier for better value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Do unused hours roll over?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Hours don&apos;t roll over monthly, but we offer quarterly packages for larger projects that need flexibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Is there a contract or commitment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  No long-term contracts! All plans are month-to-month and you can cancel anytime with no penalties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-radial relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies leveraging AI for competitive advantage. 
            Start with a free consultation to find your perfect plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 group" asChild>
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/services">Compare Services</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            <Shield className="w-4 h-4 inline mr-1" />
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PricingPage