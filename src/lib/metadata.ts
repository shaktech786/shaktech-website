import type { Metadata } from "next"

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ShakTech Labs`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `https://shak-tech.com${path}`,
      siteName: "ShakTech Labs",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  }
}
