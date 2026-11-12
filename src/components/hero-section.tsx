import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { studioStats } from "@/lib/projects"

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
    <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-16 sm:pt-24 sm:pb-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-6">
        ShakTech Labs · One-person software studio
      </p>

      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
        One engineer.
        <span className="block text-indigo-400">A full product team&apos;s output.</span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
        I&apos;m Shakeel Bhamani. I direct a team of AI agents that plan, build, test and review,
        and I ship complete products with them: web platforms, desktop apps, games and developer tools.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
        <Button variant="cta" size="xl" className="group" asChild>
          <Link href="/portfolio">
            See what I&apos;ve built
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>

      <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {studioStats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-5">
            <dt className="mt-1 text-sm text-gray-400">{stat.label}</dt>
            <dd className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default HeroSection
