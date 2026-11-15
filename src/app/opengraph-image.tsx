import { ogSize, renderOgImage } from "@/lib/og"

export const alt = "ShakTech Labs: a founder-led product engineering studio"
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage(
    "ShakTech Labs",
    "Bring me the problem. I'll build what solves it.",
    "10+ years · 12+ products live · Shakeel Bhamani"
  )
}
