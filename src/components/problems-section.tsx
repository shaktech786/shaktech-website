import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const problems = [
  {
    problem: "“I have an idea and no one to build it.”",
    title: "I build the first version",
    description:
      "From a rough sketch to a live product with real users, built so it can grow without a rewrite. Alaap started with one music teacher who had thousands of unnamed voice notes. Now she finds any recording from her phone.",
    proof: { label: "See Alaap", href: "/portfolio#alaap" },
  },
  {
    problem: "“Our app mostly works, and everyone is scared to touch it.”",
    title: "I make it safe to change again",
    description:
      "I learn the codebase before changing it, add the tests it is missing, fix what is fragile, and give you a straight answer on what to keep and what to replace. Greenfield, brownfield and legacy: I have worked in all three for over a decade.",
    proof: { label: "My background", href: "/about" },
  },
  {
    problem: "“Our team runs on spreadsheets and copy-paste.”",
    title: "I build the tool that does it for you",
    description:
      "Internal systems that pull data from the services you already use and handle the repetitive work, so your people can stop doing it by hand. Bursar does a one-person company’s bookkeeping from its bank feeds and inbox.",
    proof: { label: "See Bursar", href: "/portfolio#bursar" },
  },
  {
    problem: "“We have a product, but shipping has stalled.”",
    title: "I become your engineer",
    description:
      "A prioritized backlog shipped continuously, production watched and fixed, and one person accountable for all of it. Month to month, no long-term contract.",
    proof: { label: "How retainers work", href: "/pricing#retainer" },
  },
]

const ProblemsSection = () => (
  <section className="py-14 sm:py-20 bg-gray-950" aria-labelledby="problems-heading">
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 id="problems-heading" className="text-3xl sm:text-4xl font-bold text-white">
        Problems I solve
      </h2>
      <p className="mt-3 text-lg text-gray-300 max-w-2xl">
        Most people don&apos;t arrive with a spec. They arrive with a problem. These are the ones I hear most.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((item) => (
          <div key={item.title} className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8">
            <p className="text-lg font-medium text-indigo-300">{item.problem}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 mb-6 text-gray-300 leading-relaxed">{item.description}</p>
            <Link
              href={item.proof.href}
              className="mt-auto inline-flex items-center py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              {item.proof.label}
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ProblemsSection
