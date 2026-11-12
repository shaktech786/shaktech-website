import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const credentials = [
  "Staff Software Engineer at Grainger",
  "Seven years at Thoughtworks",
  "Georgia Tech, B.S. Computer Science",
  "TEDx speaker",
  "2017 American Beatbox Championships vice champion",
]

const FounderSection = () => (
  <section className="py-14 sm:py-20 bg-gray-900" aria-labelledby="founder-heading">
    <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
      <Image
        src="/shakeel_linkedin.jpeg"
        alt="Shakeel Bhamani"
        width={224}
        height={224}
        sizes="224px"
        className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover border border-gray-700 mx-auto"
      />
      <div>
        <h2 id="founder-heading" className="text-3xl sm:text-4xl font-bold text-white">
          Who is behind it
        </h2>
        <p className="mt-3 text-lg text-gray-300 leading-relaxed">
          Shakeel Bhamani, based in Atlanta. Ten-plus years of professional software engineering,
          from consulting at Thoughtworks to Staff Engineer at Grainger.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {credentials.map((credential) => (
            <li key={credential} className="rounded-full border border-gray-700 bg-gray-950 px-3 py-1 text-sm text-gray-200">
              {credential}
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center py-2 font-medium text-indigo-400 hover:text-indigo-300"
        >
          More about Shakeel
          <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
)

export default FounderSection
