import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { isMomentumBannerLive, momentumEvent } from "@/lib/site"

const EventBanner = () => {
  if (!isMomentumBannerLive()) return null

  return (
    <Link
      href="/momentum"
      className="flex items-center justify-center gap-2 bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <span>
        At {momentumEvent.name}? <span className="underline">Book a call</span>
      </span>
      <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
    </Link>
  )
}

export default EventBanner
