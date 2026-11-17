import { siteUrl } from "@/lib/site"

const personId = `${siteUrl}/#shakeel-bhamani`
const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

const atlanta = {
  "@type": "PostalAddress",
  "addressLocality": "Atlanta",
  "addressRegion": "GA",
  "addressCountry": "US"
}

export const personRef = { "@id": personId }
export const organizationRef = { "@id": organizationId }

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      "name": "Shakeel Bhamani",
      "jobTitle": "Staff Software Engineer",
      "description": "Staff Software Engineer and founder of ShakTech Labs, a founder-led product engineering studio. Georgia Tech CS graduate, seven years at Thoughtworks, TEDx speaker.",
      "url": `${siteUrl}/about`,
      "image": `${siteUrl}/shakeel_linkedin.jpeg`,
      "sameAs": [
        "https://www.linkedin.com/in/shakeelbhamani",
        "https://github.com/shaktech786",
        "https://linktr.ee/shakbbx"
      ],
      "knowsAbout": [
        "Product Engineering",
        "Software Architecture",
        "Legacy System Modernization",
        "Full-Stack Software Development",
        "TypeScript",
        "React",
        "Next.js",
        "Python"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Georgia Institute of Technology"
      },
      "address": atlanta
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": organizationId,
      "name": "ShakTech Labs",
      "alternateName": ["ShakTech", "Shak Tech"],
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/shaktech-logo.png`,
        "width": 256,
        "height": 256
      },
      "image": `${siteUrl}/opengraph-image`,
      "email": "hi@shak-tech.com",
      "founder": personRef,
      "address": atlanta,
      "areaServed": "US",
      "sameAs": ["https://github.com/shaktech786"],
      "knowsAbout": [
        "Custom Software Development",
        "Web Application Development",
        "Legacy Application Modernization",
        "Internal Tools and Workflow Automation"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hi@shak-tech.com",
        "availableLanguage": "en",
        "url": `${siteUrl}/contact`
      }],
      "description": "A founder-led product engineering studio. Shakeel Bhamani, a Staff Software Engineer with 10+ years of experience, designs, builds and runs software that solves real business problems, at a fixed scope and price."
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      "name": "ShakTech Labs",
      "alternateName": "ShakTech",
      "url": siteUrl,
      "publisher": organizationRef
    }
  ]
}

export function pageGraph(name: string, path: string, nodes: object[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": name, "item": `${siteUrl}${path}` }
        ]
      },
      ...nodes
    ]
  }
}

export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}
