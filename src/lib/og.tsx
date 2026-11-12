import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }

export function renderOgImage(eyebrow: string, headline: string, footer: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #111827 0%, #030712 60%, #1e1b4b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#818cf8" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
          {headline}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#d1d5db" }}>
          <span>{footer}</span>
          <span style={{ color: "#818cf8" }}>shak-tech.com</span>
        </div>
      </div>
    ),
    ogSize
  )
}
