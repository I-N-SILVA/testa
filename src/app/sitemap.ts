import { MetadataRoute } from 'next'
import { routing } from 'src/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plyaz.net'
  
  // Define all your routes
  const routes = [
    '',
    '/cookies',
    '/terms',
  ]

  // Generate sitemap entries for all locales and routes
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  for (const locale of routing.locales) {
    for (const route of routes) {
      const url = route === '' 
        ? `${baseUrl}/${locale}`
        : `${baseUrl}/${locale}${route}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map(supportedLocale => [
              supportedLocale,
              route === '' 
                ? `${baseUrl}/${supportedLocale}`
                : `${baseUrl}/${supportedLocale}${route}`
            ])
          )
        }
      })
    }
  }

  return sitemapEntries
}