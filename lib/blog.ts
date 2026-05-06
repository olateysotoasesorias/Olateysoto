import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'johnnyolate')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  categoria: string
  content: string
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        categoria: data.categoria,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    categoria: data.categoria,
    content,
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
