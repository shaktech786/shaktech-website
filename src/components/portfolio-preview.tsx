import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectVisual from "@/components/project-visual"
import { leadProjects } from "@/lib/projects"

const PortfolioPreview = () => (
  <section className="py-14 sm:py-20 bg-gray-900" aria-labelledby="work-heading">
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 id="work-heading" className="text-3xl sm:text-4xl font-bold text-white">
        The proof is the portfolio
      </h2>
      <p className="mt-3 text-lg text-gray-300 max-w-2xl">
        A SaaS platform, a mobile-first AI app, a developer tool, twelve games and an open-source package.
        Different kinds of software, one builder.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio#${project.id}`}
            className="group flex flex-col rounded-xl border border-gray-800 bg-gray-950 p-4 transition-colors hover:border-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <ProjectVisual project={project} sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw" />
            <p className="mt-4 text-sm font-medium text-indigo-400">{project.category}</p>
            <h3 className="mt-1 text-xl font-bold text-white group-hover:text-indigo-300">{project.name}</h3>
            <p className="mt-1 text-gray-300">{project.tagline}</p>
            <p className="mt-3 text-sm text-gray-400">{project.facts.slice(0, 2).join(" · ")}</p>
          </Link>
        ))}

        <div className="flex flex-col justify-center rounded-xl border border-dashed border-gray-700 p-6">
          <p className="text-lg font-semibold text-white">Plus desktop apps, internal systems and agent infrastructure.</p>
          <Button variant="cta" size="lg" className="mt-5 group" asChild>
            <Link href="/portfolio">
              See all the work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default PortfolioPreview
