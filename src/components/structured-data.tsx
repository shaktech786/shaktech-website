interface StructuredDataProps {
  type: 'person' | 'organization' | 'website'
}

const baseUrl = 'https://shak-tech.com'

const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shakeel Bhamani",
    "jobTitle": "Staff Software Engineer",
    "description": "Staff Software Engineer and founder of ShakTech Labs, a founder-led product engineering studio. Georgia Tech CS graduate, seven years at Thoughtworks, TEDx speaker.",
    "url": baseUrl,
    "image": `${baseUrl}/shakeel_linkedin.jpeg`,
    "sameAs": [
      "https://linkedin.com/in/shakeelbhamani",
      "https://github.com/shaktech786",
      "https://linktr.ee/shakbbx"
    ],
    "knowsAbout": [
      "AI Agents",
      "Model Context Protocol (MCP)",
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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    }
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ShakTech Labs",
    "url": baseUrl,
    "logo": `${baseUrl}/shaktech_logo.png`,
    "founder": {
      "@type": "Person",
      "name": "Shakeel Bhamani"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hi@shak-tech.com",
      "availableLanguage": "en",
      "url": `${baseUrl}/contact`
    }],
    "description": "A founder-led product engineering studio: a senior engineer directing AI agents to design, build and run complete products."
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ShakTech Labs",
    "url": baseUrl,
    "publisher": {
      "@type": "Person",
      "name": "Shakeel Bhamani"
    }
  }
}

export default function StructuredData({ type }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData[type]),
      }}
    />
  )
}
