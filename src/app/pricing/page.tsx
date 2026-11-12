import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Engagements from "@/components/engagements"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three ways to work with ShakTech Labs: a fixed-price product build from $25,000, a monthly studio retainer from $10,000, or an equity and go-to-market partnership.",
  alternates: { canonical: "/pricing" },
}

const faqs = [
  {
    question: "Why \"from\" and not a fixed menu?",
    answer:
      "Every build is scoped individually. The anchors tell you whether we are in the same range before either of us spends time on a call. You get a written fixed price before any work starts.",
  },
  {
    question: "How can one person deliver a whole product?",
    answer:
      "I direct a team of AI agents that plan, build, test and review in parallel, and I hold their output to the same standards I apply as a Staff Engineer. The portfolio is the proof: every product on it was built this way, by one person.",
  },
  {
    question: "What does a build include?",
    answer:
      "Design, implementation, automated tests, deployment and a handoff. You own the code and the infrastructure it runs on.",
  },
  {
    question: "Do you take equity?",
    answer:
      "For early-stage products where I believe in the founder and the market, yes, as part of a cash and equity hybrid.",
  },
  {
    question: "Do you work with nonprofits?",
    answer: "Yes, at reduced rates. Tell me about the mission when you get in touch.",
  },
]

const PricingPage = () => (
  <main className="min-h-screen bg-gray-900">
    <section className="pt-12 pb-10 sm:pt-20 sm:pb-14 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
          Team-level output,
          <span className="block text-indigo-400">one invoice</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Three ways to work with the studio. Every engagement starts with a free 30-minute call
          and a written scope.
        </p>
      </div>
    </section>

    <section className="py-12 sm:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Engagements />
      </div>
    </section>

    <section className="py-12 sm:py-16 bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Common questions</h2>
        <dl className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-semibold text-white">{faq.question}</dt>
              <dd className="mt-2 text-gray-300 leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="py-16 sm:py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Have something to build?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Send a few lines about it. I reply within one business day.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Button variant="cta" size="xl" className="group" asChild>
            <Link href="/contact">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link href="/portfolio">See the work</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </main>
)

export default PricingPage
