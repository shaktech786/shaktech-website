import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/logs/', '/scraped-data/', '/.vercel/', '/.next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/logs/', '/scraped-data/'],
      },
    ],
    sitemap: 'https://shak-tech.com/sitemap.xml',
    host: 'https://shak-tech.com',
  }
}