import { ogSize, renderOgImage } from "@/lib/og"

export const alt = "ShakTech Labs portfolio: products built solo"
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgImage(
    "ShakTech Labs · Portfolio",
    "12+ products. One engineer. No team.",
    "Prelive · Alaap · Tack · VeryGoodMelon · Arr Suite MCP"
  )
}
