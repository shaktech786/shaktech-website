import React from "react"
import { pageMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Engagements from "@/components/engagements"
import { buyerQuestions } from "@/components/buyer-questions"
import { bookingUrl } from "@/lib/site"
import Footer from "@/components/footer"
import StructuredData, { pageGraph } from "@/components/structured-data"

export const metadata: Metadata = pageMetadata(
  "Pricing: Fixed-Price Software Builds from $25,000",
  "Three ways to work with ShakTech Labs: a fixed-price product build from $25,000, a monthly studio retainer from $10,000, or an equity and go-to-market partnership.",
  "/pricing"
)

const faqs = [
  {
    question: "Why \"from\" and not a fixed menu?",
    answer:
      "Every build is scoped individually. The anchors tell you whether we are in the same range before either of us spends time on a call. You get a written fixed price before any work starts.",
  },
  {
    question: "How can one person deliver a whole product?",
    answer:
      "Ten years of doing exactly this, and a process built to avoid rework: a written scope up front, small changes, automated tests on everything, and no handoffs between people. The portfolio is the proof: every product on it was built by one person.",
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
  ...buyerQuestions,
  {
    question: "Do you use AI tools?",
    answer:
      "Yes, the way most engineering teams do now: as tools. They don't decide what gets built or what ships. I do, and every change goes through the same tests and review either way. You are paying for judgment and accountability, and those stay with me.",
  },
]

const structuredData = pageGraph("Pricing", "/pricing", [
  {
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  },
])

const PricingPage = () => (
  <main className="min-h-screen bg-gray-900">
    <StructuredData data={structuredData} />
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
          Send a few lines about it, or book a call. I reply within one business day.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Button variant="cta" size="xl" className="group" asChild>
            <Link href="/contact">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a call</a>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </main>
)

export default PricingPage
