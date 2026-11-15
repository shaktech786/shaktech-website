import React from "react"
import { MessagesSquare, ClipboardList, Hammer, KeyRound } from "lucide-react"

const steps = [
  {
    icon: MessagesSquare,
    title: "Understand",
    description:
      "We start with the problem, not a feature list. I talk to the people who have it and work out what actually needs to exist.",
  },
  {
    icon: ClipboardList,
    title: "Scope",
    description:
      "You get it in writing: what gets built first, a fixed price, a delivery date and what done looks like.",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Working software on a live URL early, so you see progress instead of hearing about it. Every change is tested and reviewed before it ships.",
  },
  {
    icon: KeyRound,
    title: "Hand over",
    description:
      "You own the code, the infrastructure and the docs. I can stay on to run it, or any competent engineer can take it from there.",
  },
]

const StudioApproach = () => (
  <section className="py-14 sm:py-20 bg-gray-950" aria-labelledby="approach-heading">
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2 id="approach-heading" className="text-3xl sm:text-4xl font-bold text-white">
        How a project runs
      </h2>
      <p className="mt-3 text-lg text-gray-300 max-w-2xl">
        The same discipline I have used on enterprise teams for 10+ years, sized to your project.
        No surprises, no handoffs, no black box.
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
