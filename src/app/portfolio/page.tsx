import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import ProjectVisual from "@/components/project-visual"
import ProjectLinks from "@/components/project-links"
import { leadProjects, moreProjects, studioStats } from "@/lib/projects"
import { bookingUrl } from "@/lib/site"

const title = "Portfolio: 12+ Products Built Solo"
const description =
  "A streaming SaaS, an AI voice-note library, an issue tracker for AI agents, twelve web games and open-source MCP servers. All designed, built and run by one engineer."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `${title} | ShakTech Labs`,
    description,
    url: "https://shak-tech.com/portfolio",
    siteName: "ShakTech Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ShakTech Labs`,
    description,
  },
}

const PortfolioPage = () => (
  <main className="min-h-screen bg-gray-950">
    <section className="pt-12 pb-10 sm:pt-20 sm:pb-14 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
          ShakTech Labs · Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
          Complete products,
          <span className="block text-indigo-400">built by one engineer</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          I&apos;m Shakeel Bhamani. I design, build and run every product here myself,
          directing a team of AI agents. No co-founders, no contractors, no outside funding.
        </p>

        <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {studioStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse rounded-xl border border-gray-800 bg-gray-900/60 px-3 py-4">
              <dt className="mt-1 text-xs sm:text-sm text-gray-400">{stat.label}</dt>
              <dd className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="py-12 sm:py-16 bg-gray-900" aria-labelledby="featured-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="featured-heading" className="sr-only">Featured products</h2>
        <div className="space-y-14 sm:space-y-20">
          {leadProjects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectVisual project={project} priority={index === 0} sizes="(min-width: 1024px) 560px, 100vw" />
              </div>

              <div>
                <p className="text-sm font-medium text-indigo-400">{project.category}</p>
                <h3 className="mt-1 text-3xl font-bold text-white">{project.name}</h3>
                <p className="mt-1 text-lg text-gray-200">{project.tagline}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.facts.map((fact) => (
                    <li key={fact} className="rounded-full border border-indigo-700 bg-indigo-900/40 px-3 py-1 text-sm font-medium text-indigo-200">
                      {fact}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-gray-400">{project.techStack.join(" · ")}</p>

                <div className="mt-6">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 bg-gray-950" aria-labelledby="more-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="more-heading" className="text-3xl font-bold text-white">More from the studio</h2>
        <p className="mt-2 text-gray-300 max-w-2xl">
          Desktop software, internal systems and agent infrastructure. Same engineer, same process.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-24 flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-4"
            >
              <ProjectVisual project={project} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" />
              <p className="mt-4 text-sm font-medium text-indigo-400">{project.category}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-200">{project.tagline}</p>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">{project.description}</p>
              <p className="mt-3 mb-5 text-xs text-gray-400">{project.techStack.join(" · ")}</p>
              <div className="mt-auto">
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 sm:py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Investing, or have something to build?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          I&apos;m raising a pre-seed round to run the studio full-time, and I take on client builds.
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

export default PortfolioPage
