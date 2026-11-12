import React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const engagements = [
  {
    id: "product-build",
    title: "Product build",
    price: "From $25,000",
    terms: "Fixed scope, fixed price",
    description:
      "A complete product, from first sketch to production. Scope, price and timeline are agreed in writing before work starts.",
    includes: [
      "Design, build, automated tests and deployment",
      "Working software on a live URL throughout the build",
      "Type-check, lint, tests and review on every change",
      "You own the source code, infrastructure and docs",
    ],
    cta: "Scope a build",
  },
  {
    id: "retainer",
    title: "Studio retainer",
    price: "From $10,000 / month",
    terms: "Month to month",
    description:
      "A standing share of the studio for teams that need continuous shipping: new features, a second product, or running what is already live.",
    includes: [
      "A prioritized backlog, shipped continuously",
      "Production monitoring and fixes",
      "The same engineering discipline as a fixed build",
      "No long-term contract",
    ],
    cta: "Talk about a retainer",
  },
  {
    id: "partnership",
    title: "Partnership",
    price: "Let's talk",
    terms: "Equity, hybrid or go-to-market",
    description:
      "For the right product I take part of the fee as equity. I am also raising a pre-seed round to run the studio full-time, and looking for a go-to-market partner for its products.",
    includes: [
      "Cash and equity hybrids for early-stage founders",
      "Go-to-market partnership on studio products",
      "Pre-seed investor conversations",
      "Reduced rates for nonprofits",
    ],
    cta: "Start a conversation",
  },
]

const Engagements = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {engagements.map((engagement) => (
      <div
        key={engagement.id}
        id={engagement.id}
        className="scroll-mt-24 flex flex-col rounded-xl border border-gray-700 bg-gray-900 p-6 sm:p-8"
      >
        <h3 className="text-xl font-bold text-white">{engagement.title}</h3>
        <p className="mt-4 text-3xl font-bold text-indigo-400">{engagement.price}</p>
        <p className="mt-1 text-sm text-gray-400">{engagement.terms}</p>
        <p className="mt-4 text-gray-300 leading-relaxed">{engagement.description}</p>
        <ul className="mt-6 mb-8 space-y-3">
          {engagement.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" size="lg" className="mt-auto w-full group" asChild>
          <Link href="/contact">
            {engagement.cta}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    ))}
  </div>
)

export default Engagements
