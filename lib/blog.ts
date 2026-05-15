import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const AUTHORS = [
  { slug: 'johnny_olate', name: 'Johnny Olate', dir: 'johnnyolate', path: '/johnny_olate' },
  { slug: 'constanza_soto', name: 'Constanza Soto', dir: 'constanza_soto', path: '/constanza_soto' },
]

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  categoria: string
  autor: string
  autorSlug: string
  autorPath: string
}

export interface PostFull extends Post {
  content: string
}

function normalizeSlug(raw: string): string {
  return raw
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function readDir(dir: string, autorName: string, autorSlug: string, autorPath: string): Post[] {
  const dirPath = path.join(process.cwd(), 'content', dir)
  if (!fs.existsSync(dirPath)) return []
  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = normalizeSlug(filename.replace(/\.md$/, ''))
      const { data } = matter(fs.readFileSync(path.join(dirPath, filename), 'utf-8'))
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        categoria: data.categoria as string,
        autor: (data.autor as string) || autorName,
        autorSlug,
        autorPath,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPostsCombined(filters?: { cat?: string; autor?: string }): Post[] {
  const all = AUTHORS.flatMap((a) => readDir(a.dir, a.name, a.slug, a.path)).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return all.filter((p) => {
    if (filters?.cat && p.categoria.toLowerCase() !== filters.cat.toLowerCase()) return false
    if (filters?.autor && p.autorSlug !== filters.autor) return false
    return true
  })
}

export function getAllPostsByAuthor(autorSlug: string): Post[] {
  const author = AUTHORS.find((a) => a.slug === autorSlug)
  if (!author) return []
  return readDir(author.dir, author.name, author.slug, author.path)
}

export function getPostBySlugAndAuthor(autorSlug: string, slug: string): PostFull | null {
  const author = AUTHORS.find((a) => a.slug === autorSlug)
  if (!author) return null
  const dirPath = path.join(process.cwd(), 'content', author.dir)
  if (!fs.existsSync(dirPath)) return null
  const filename = fs.readdirSync(dirPath)
    .filter((f) => f.endsWith('.md'))
    .find((f) => normalizeSlug(f.replace(/\.md$/, '')) === slug)
  if (!filename) return null
  const { data, content } = matter(fs.readFileSync(path.join(dirPath, filename), 'utf-8'))
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    categoria: data.categoria as string,
    autor: (data.autor as string) || author.name,
    autorSlug,
    autorPath: author.path,
    content,
  }
}

export function getAllCategories(): string[] {
  return [...new Set(getAllPostsCombined().map((p) => p.categoria))].sort()
}

// Compatibilidad con /johnnyolate existente
export function getAllPosts(): Post[] {
  return getAllPostsByAuthor('johnny_olate')
}

export function getPostBySlug(slug: string): PostFull | null {
  return getPostBySlugAndAuthor('johnny_olate', normalizeSlug(slug))
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
