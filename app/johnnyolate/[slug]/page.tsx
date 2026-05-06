import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, formatDate } from '../../../lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Johnny Olate`,
    description: post.description,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <article className="mx-auto max-w-2xl px-6 py-14">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-xs text-neutral-gray/60">
          <Link href="/" className="hover:text-accent transition-colors">Olate &amp; Soto</Link>
          <span>/</span>
          <Link href="/johnnyolate" className="hover:text-accent transition-colors">Johnny Olate</Link>
          <span>/</span>
          <span className="text-neutral-gray/40 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Header del artículo */}
        <header className="mb-10 border-b border-primary/10 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-[0.24em] text-accent font-medium">
              {post.categoria}
            </span>
            <span className="text-neutral-gray/30">·</span>
            <time className="text-xs text-neutral-gray/60">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-heading text-3xl font-semibold leading-snug text-primary sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base italic leading-7 text-neutral-gray">
            {post.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <span className="font-heading text-sm font-semibold text-primary">JO</span>
            </div>
            <div>
              <p className="text-sm font-medium text-primary">Johnny Olate</p>
              <p className="text-xs text-neutral-gray/60">Asesor Jurídico · Olate &amp; Soto</p>
            </div>
          </div>
        </header>

        {/* Contenido del artículo */}
        <div className="prose-article">
          <MDXRemote source={post.content} />
        </div>

        {/* Volver */}
        <div className="mt-16 border-t border-primary/10 pt-8">
          <Link
            href="/johnnyolate"
            className="text-sm font-medium uppercase tracking-[0.18em] text-accent hover:underline"
          >
            ← Volver al blog
          </Link>
        </div>
      </article>
    </main>
  )
}
