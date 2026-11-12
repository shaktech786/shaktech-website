import { ogSize, renderOgImage } from "@/lib/og"

export const alt = "ShakTech Labs: a founder-led product engineering studio"
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage(
    "ShakTech Labs",
    "Your product, built by a Staff Engineer and a team of AI agents.",
    "12+ products shipped · Shakeel Bhamani"
  )
}
