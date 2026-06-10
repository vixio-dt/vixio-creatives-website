import type { MetadataRoute } from 'next'

const BASE = 'https://vixiocreatives.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/studio`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
