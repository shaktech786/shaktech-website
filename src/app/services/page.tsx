import React from "react"
import { pageMetadata } from "@/lib/metadata"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Monitor, Gamepad2, Terminal, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import Engagements from "@/components/engagements"
import StudioApproach from "@/components/studio-approach"
import BuyerQuestions from "@/components/buyer-questions"
import { bookingUrl } from "@/lib/site"
import Footer from "@/components/footer"

export const metadata: Metadata = pageMetadata(
  "Services: What the Studio Builds",
  "Web platforms, mobile-first apps, desktop software, games, developer tools and AI agent systems, built end to end by one engineer directing AI agents. Fixed-price builds from $25,000.",
  "/services"
)

const capabilities = [
  {
    icon: Globe,
    title: "Web platforms and SaaS",
    description: "Subscriptions, background jobs, third-party integrations, the lot.",
    proof: { name: "Prelive", href: "/portfolio#prelive" },
  },
  {
    icon: Smartphone,
    title: "Mobile-first apps",
    description: "Installable, phone-first apps with AI doing real work behind them.",
    proof: { name: "Alaap", href: "/portfolio#alaap" },
  },
  {
    icon: Monitor,
    title: "Desktop software",
    description: "Electron apps that talk to hardware and other local software.",
    proof: { name: "Prelive Deck", href: "/portfolio#prelive-deck" },
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Original browser games, with AI characters where they help.",
    proof: { name: "VeryGoodMelon", href: "/portfolio#verygoodmelon" },
  },
  {
    icon: Terminal,
    title: "Developer tools",
    description: "CLIs, MCP servers and open-source packages.",
    proof: { name: "Tack", href: "/portfolio#tack" },
  },
  {
    icon: Bot,
    title: "AI agent systems",
    description: "Agents that plan, build and check their own work inside guardrails.",
    proof: { name: "ASIS", href: "/portfolio#asis" },
  },
]

const ServicesPage = () => (
  <main className="min-h-screen bg-gray-900">
    <section className="pt-12 pb-10 sm:pt-20 sm:pb-14 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
          Tell me what you need.
          <span className="block text-indigo-400">I&apos;ll build all of it.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          ShakTech Labs takes a product from idea to production: design, code, tests, deployment
          and running it afterwards. One engineer, one point of contact, no handoffs.
        </p>
      </div>
    </section>

    <section className="py-12 sm:py-16 bg-gray-900" aria-labelledby="capabilities-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="capabilities-heading" className="text-3xl font-bold text-white">What I build</h2>
        <p className="mt-2 text-gray-300">Each one links to a product I have already built.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <div key={capability.title} className="flex flex-col rounded-xl border border-gray-800 bg-gray-950 p-6">
              <capability.icon className="w-7 h-7 text-indigo-400" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-white">{capability.title}</h3>
              <p className="mt-2 mb-4 text-gray-300 leading-relaxed">{capability.description}</p>
              <Link
                href={capability.proof.href}
                className="mt-auto inline-flex items-center py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                Proof: {capability.proof.name}
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <StudioApproach />

    <section className="py-12 sm:py-16 bg-gray-900" aria-labelledby="engagements-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="engagements-heading" className="text-3xl font-bold text-white">Ways to work together</h2>
        <p className="mt-2 mb-8 text-gray-300">
          Every engagement starts with a free 30-minute call and a written scope.
        </p>
        <Engagements />
      </div>
    </section>

    <BuyerQuestions />

    <section className="py-14 sm:py-20 bg-gray-950">
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

export default ServicesPage
