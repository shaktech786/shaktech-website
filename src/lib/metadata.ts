import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

// A page that sets its own openGraph drops the root opengraph-image, so name it here.
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "ShakTech Labs: a founder-led product engineering studio",
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ShakTech Labs`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: "ShakTech Labs",
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
