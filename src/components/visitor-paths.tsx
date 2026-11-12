import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const paths = [
  {
    audience: "Investors",
    title: "Back the studio",
    description:
      "I'm raising a pre-seed round to go full-time. Everything in the portfolio was built with no team and no outside funding.",
    href: "/contact",
    cta: "Start a conversation",
    external: false,
  },
  {
    audience: "Founders and companies",
    title: "Get something built",
    description:
      "Fixed-price product builds from $25,000, monthly retainers from $10,000, and equity hybrids for the right product.",
    href: "/services",
    cta: "See how it works",
    external: false,
  },
  {
    audience: "Engineers",
    title: "Read the code",
    description:
      "VeryGoodMelon, Prelive Deck, Unbottle and the Arr Suite MCP server are open source.",
    href: "https://github.com/shaktech786",
    cta: "GitHub",
    external: true,
  },
]

const VisitorPaths = () => (
  <section className="py-14 sm:py-20 bg-gray-950" aria-labelledby="paths-heading">
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 id="paths-heading" className="text-3xl sm:text-4xl font-bold text-white">
        Where to go from here
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {paths.map((path) => (
          <Link
            key={path.title}
            href={path.href}
            {...(path.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <p className="text-sm font-medium text-indigo-400">{path.audience}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{path.title}</h3>
            <p className="mt-3 mb-6 text-gray-300 leading-relaxed">{path.description}</p>
            <span className="mt-auto inline-flex items-center font-medium text-indigo-400 group-hover:text-indigo-300">
              {path.cta}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default VisitorPaths
