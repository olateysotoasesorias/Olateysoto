import type { MetadataRoute } from 'next'
import { getAllPostsByAuthor } from '../lib/blog'

const BASE = 'https://olateysoto.cl'

export default function sitemap(): MetadataRoute.Sitemap {
  const johnnyPosts = getAllPostsByAuthor('johnny_olate').map((p) => ({
    url: `${BASE}/johnny_olate/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const constanzaPosts = getAllPostsByAuthor('constanza_soto').map((p) => ({
    url: `${BASE}/constanza_soto/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/academia`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/johnny_olate`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/constanza_soto`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...johnnyPosts,
    ...constanzaPosts,
  ]
}
