import React from "react"
import { ClipboardList, Hammer, FlaskConical, SearchCheck } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Agents research the codebase and turn an idea into a written spec, broken into small stories.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Several agents implement stories in parallel, each in an isolated workspace.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Every change has to pass type-check, lint and automated tests before it can merge.",
  },
  {
    icon: SearchCheck,
    title: "Review",
    description: "Separate agents review each change. I make the calls on architecture, product and what ships.",
  },
]

const StudioApproach = () => (
  <section className="py-14 sm:py-20 bg-gray-950" aria-labelledby="approach-heading">
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 id="approach-heading" className="text-3xl sm:text-4xl font-bold text-white">
        AI as a team, not autocomplete
      </h2>
      <p className="mt-3 text-lg text-gray-300 max-w-2xl">
        Most engineers use AI to type faster. I run it as a team of autonomous agents and hold
        their work to the engineering discipline I learned in 10+ years of shipping enterprise
        software.
      </p>

      <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <step.icon className="w-7 h-7 text-indigo-400" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-white">
              {index + 1}. {step.title}
            </h3>
            <p className="mt-2 text-gray-300 leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default StudioApproach
