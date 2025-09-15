import Script from 'next/script'

interface StructuredDataProps {
  type: 'person' | 'organization' | 'service' | 'website'
  data?: Record<string, unknown>
}

export default function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://shak-tech.com'
    
    switch (type) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shakeel Bhamani",
          "jobTitle": "Software Consultant",
          "description": "Software Consultant at Thoughtworks with experience in AI-First Software Development and team collaboration",
          "url": baseUrl,
          "image": `${baseUrl}/shakeel-profile.jpg`,
          "sameAs": [
            "https://linkedin.com/in/shakeelbhamani",
            "https://github.com/shakeelbhamani",
            "https://linktr.ee/shakbbx"
          ],
          "knowsAbout": [
            "AI-First Software Development",
            "Team Leadership",
            "Software Consulting",
            "Agile Development",
            "TypeScript",
            "React",
            "Next.js",
            "Python",
            "Machine Learning"
          ],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Georgia Institute of Technology"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Thoughtworks"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",
            "addressCountry": "US"
          }
        }
      
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ShakTech",
          "legalName": "ShakTech",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "foundingDate": "2020",
          "founders": [{
            "@type": "Person",
            "name": "Shakeel Bhamani"
          }],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",  
            "addressCountry": "US"
          },
          "contactPoint": [{
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "en",
            "url": `${baseUrl}/contact`
          }],
          "description": "AI-First Software Delivery services including strategy consulting, development, and team training",
          "knowsAbout": [
            "AI Software Development",
            "Software Consulting", 
            "Team Training",
            "Web Development",
            "Mobile Development"
          ],
          "areaServed": "Worldwide",
          "serviceType": [
            "AI Strategy Consulting",
            "AI-First Development", 
            "Team Training & Enablement"
          ]
        }
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ShakTech - AI-First Software Delivery",
          "url": baseUrl,
          "description": "Empathetic AI Software Delivery where human creativity meets AI acceleration",
          "publisher": {
            "@type": "Person",
            "name": "Shakeel Bhamani"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Software Development Services",
          "provider": {
            "@type": "Person",
            "name": "Shakeel Bhamani"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI-First Software Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Strategy Consulting",
                  "description": "Strategic guidance on AI adoption and implementation"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": 2500,
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI-First Development",
                  "description": "End-to-end development of AI-powered applications"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification", 
                  "minPrice": 15000,
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Team Training & Enablement", 
                  "description": "Upskilling teams in AI-first development practices"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": 5000,
                  "priceCurrency": "USD"
                }
              }
            ]
          }
        }
      
      default:
        return {}
    }
  }

  const structuredData = getStructuredData()

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}