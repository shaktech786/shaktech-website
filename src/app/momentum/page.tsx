import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import PortfolioPreview from "@/components/portfolio-preview"
import FounderSection from "@/components/founder-section"
import Footer from "@/components/footer"
import { pageMetadata } from "@/lib/metadata"
import { bookingUrl, momentumEvent } from "@/lib/site"

export const metadata: Metadata = {
  ...pageMetadata(
    "For IPN Momentum Founders and Investors",
    "Met Shakeel Bhamani at IPN Momentum in Austin? Book a call, see what the studio has built, and get a written scope and fixed price for your product.",
    "/momentum"
  ),
  robots: { index: false, follow: true },
}

const audiences = [
  {
    audience: "You have the idea and no technical co-founder",
    title: "I build the first version",
    description:
      "Tack went from an empty repo to a web app, a CLI and an MCP server in under four weeks. Product builds start at $25,000, fixed in writing before work starts. For early-stage founders, part of the fee can be equity.",
  },
  {
    audience: "You have an MVP that is starting to creak",
    title: "I take over the codebase",
    description:
      "In ten-plus years I have worked greenfield, brownfield and legacy, including enterprise systems taken from scratch to production. Retainers start at $10,000 a month, with no long-term contract.",
  },
  {
    audience: "You invest in or mentor founders",
    title: "Ask me how one engineer ships this much",
    description:
      "I am raising a pre-seed round to run the studio full-time. Everything below was built with no team and no outside funding, and I will walk you through any of it.",
  },
  {
    audience: "You are good at distribution",
    title: "I have products that need you",
    description:
      "Prelive and VeryGoodMelon are built and live. They need distribution more than they need code, and I am looking for a go-to-market partner.",
  },
]

const MomentumPage = () => (
  <main className="min-h-screen bg-gray-950">
    <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
          {momentumEvent.name} · {momentumEvent.place} · {momentumEvent.dates}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
          You pitched it this weekend. I can build it.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          I&apos;m Shakeel Bhamani, a Staff Engineer at Grainger, in from Atlanta for Momentum. I build
          complete products for founders with a team of AI agents, at a fixed price.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Button variant="cta" size="xl" asChild>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Book a call
            </a>
          </Button>
          <Button variant="outline" size="xl" className="group" asChild>
            <Link href="/portfolio">
              See what I&apos;ve built
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 bg-gray-900" aria-labelledby="offer-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-indigo-600 bg-indigo-950/40 p-6 sm:p-8">
          <p className="text-sm font-medium text-indigo-300">For Momentum founders</p>
          <h2 id="offer-heading" className="mt-1 text-2xl sm:text-3xl font-bold text-white">
            Go home with a build plan
          </h2>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Book a 30-minute call for the week after Momentum. Bring the idea, the deck, or the
            feedback a mentor gave you this weekend. Afterwards I send you a written scope: what gets
            built first, a fixed price and a delivery date. It is free, and it is yours to use even
            if you hire someone else. Book by {momentumEvent.offerDeadline}, mention Momentum, and you
            get the next open build slot.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center py-2 font-medium text-indigo-300 hover:text-indigo-200"
          >
            Pick a time
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {audiences.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-950 p-6">
              <p className="text-sm font-medium text-indigo-400">{item.audience}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-gray-300">
          Rather read first?{" "}
          <Link href="/pricing" className="text-indigo-400 underline hover:text-indigo-300">
            See pricing
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-indigo-400 underline hover:text-indigo-300">
            send a message
          </Link>
          .
        </p>
      </div>
    </section>

    <PortfolioPreview />
    <FounderSection />
    <Footer />
  </main>
)

export default MomentumPage
