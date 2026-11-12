import React from "react"

export const buyerQuestions = [
  {
    question: "Is AI-built software safe to run a business on?",
    answer:
      "The agents write code. They do not decide what ships. Every change has to pass type-check, lint and automated tests, then a separate review pass, and I make the architecture and release calls myself. Prelive has run in production this way through 370+ tagged releases.",
  },
  {
    question: "What happens if you are unavailable?",
    answer:
      "You are not locked in. You own the source code, the infrastructure and the docs, and the test suite records how the product is meant to behave. Any competent engineer can pick it up without me.",
  },
  {
    question: "How long does a build take?",
    answer:
      "It depends on scope, and the timeline is in the written scope before you commit to anything. As a reference point, Tack, a web app with a CLI and an MCP server, was built in under four weeks.",
  },
  {
    question: "Can I check your claims?",
    answer:
      "Yes. Most products in the portfolio link to a live URL, a public repository or a published package. I will walk you through the private ones on a call.",
  },
]

const BuyerQuestions = () => (
  <section className="py-12 sm:py-16 bg-gray-900" aria-labelledby="buyer-questions-heading">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="buyer-questions-heading" className="text-3xl font-bold text-white mb-8">
        What founders ask before hiring the studio
      </h2>
      <dl className="space-y-8">
        {buyerQuestions.map((item) => (
          <div key={item.question}>
            <dt className="text-lg font-semibold text-white">{item.question}</dt>
            <dd className="mt-2 text-gray-300 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default BuyerQuestions
