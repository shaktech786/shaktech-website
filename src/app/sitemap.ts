import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

const paths = ['', '/services', '/portfolio', '/pricing', '/about', '/contact', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${siteUrl}${path}` }))
}
