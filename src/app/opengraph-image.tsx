import { ogSize, renderOgImage } from "@/lib/og"

export const alt = "ShakTech Labs: a one-person software studio"
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage(
    "ShakTech Labs",
    "One engineer. A full product team's output.",
    "12+ products built solo · Shakeel Bhamani"
  )
}
