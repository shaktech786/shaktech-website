import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bookingUrl } from "@/lib/site"

const proof = [
  { value: "12+", label: "products shipped" },
  { value: "370+", label: "Prelive releases" },
  { value: "<4 weeks", label: "to build Tack" },
]

const windows = [
  {
    id: "prelive",
    title: "prelive.ai",
    src: "/portfolio-screenshots/prelive-2026.webp",
    alt: "Prelive, a streaming SaaS platform",
    position: "top-0 right-0 w-[88%]",
    delay: "0ms",
  },
  {
    id: "tack",
    title: "Tack",
    src: "/portfolio-screenshots/tack-board.webp",
    alt: "Tack, an issue tracker built for AI agents",
    position: "top-[34%] left-0 w-[64%]",
    delay: "120ms",
  },
  {
    id: "alaap",
    title: "Alaap",
    src: "/portfolio-screenshots/alaap-library.webp",
    alt: "Alaap, an AI voice-note library",
    position: "bottom-0 right-[3%] w-[54%]",
    delay: "240ms",
  },
]

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gray-950">
    <div
      className="pointer-events-none absolute -top-40 right-[-20%] h-[640px] w-[640px] rounded-full bg-indigo-600/25 blur-[140px] lg:right-0"
      aria-hidden="true"
    />

    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-10 pb-14 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-12 lg:pt-20 lg:pb-24">
      <div>
        <h1 className="text-balance text-4xl leading-[1.05] font-bold text-white sm:text-5xl lg:text-6xl">
          Your product, built by a senior engineer and a team of AI agents.
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
          ShakTech Labs is a founder-led product studio. Fixed scope, fixed price, and you talk
          to the person writing the code.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Button variant="cta" size="xl" asChild>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
              Book a call
            </a>
          </Button>
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center py-3 text-lg font-medium text-gray-100 hover:text-white"
          >
            See the work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <dl className="mt-10 grid grid-cols-3 divide-x divide-gray-800 border-t border-gray-800 pt-6">
          {proof.map((item) => (
            <div key={item.label} className="flex flex-col-reverse px-3 first:pl-0 sm:px-5">
              <dt className="mt-1 text-xs leading-snug text-gray-400 sm:text-sm">{item.label}</dt>
              <dd className="font-display text-xl font-bold whitespace-nowrap text-white sm:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative aspect-[10/9] w-full">
        {windows.map((item, index) => (
          <Link
            key={item.id}
            href={`/portfolio#${item.id}`}
            aria-label={item.alt}
            style={{ animationDelay: item.delay }}
            className={`hero-window absolute ${item.position} overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/70 transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-400`}
          >
            <div className="flex items-center gap-1.5 border-b border-gray-800 bg-gray-900 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-gray-700" />
              <span className="h-2 w-2 rounded-full bg-gray-700" />
              <span className="h-2 w-2 rounded-full bg-gray-700" />
              <span className="ml-2 truncate text-xs font-medium text-gray-300">{item.title}</span>
            </div>
            <Image
              src={item.src}
              alt=""
              width={1280}
              height={720}
              priority={index === 0}
              sizes="(min-width: 1024px) 560px, 88vw"
              className="aspect-video w-full object-cover object-top"
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default HeroSection
