import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPostsByAuthor, getPostBySlugAndAuthor, formatDate } from '../../../lib/blog'
import DebateSection from '../../../components/DebateSection'
import ViewCounter from '../../../components/ViewCounter'
import CommentsSection from '../../../components/CommentsSection'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostsByAuthor('johnny_olate').map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlugAndAuthor('johnny_olate', slug)
  if (!post) return {}
  return {
    title: `${post.title} — Johnny Olate`,
    description: post.description,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlugAndAuthor('johnny_olate', slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <article className="mx-auto max-w-2xl px-6 py-14">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-xs text-neutral-gray/60">
          <Link href="/" className="transition-colors hover:text-accent">Olate &amp; Soto</Link>
          <span>/</span>
          <Link href="/academia" className="transition-colors hover:text-accent">Academia</Link>
          <span>/</span>
          <Link href="/johnny_olate" className="transition-colors hover:text-accent">Johnny Olate</Link>
          <span>/</span>
          <span className="max-w-[200px] truncate text-neutral-gray/40">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 border-b border-primary/10 pb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              {post.categoria}
            </span>
            <span className="text-neutral-gray/30">·</span>
            <time className="text-xs text-neutral-gray/60">{formatDate(post.date)}</time>
            <span className="text-neutral-gray/30">·</span>
            <ViewCounter slug={post.slug} />
          </div>
          <h1 className="font-heading text-3xl font-semibold leading-snug text-primary sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 h-0.5 w-12 bg-accent" />
          <p className="mt-4 text-base italic leading-7 text-neutral-gray">{post.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image src="/equipo/olate.jpg" alt="Johnny Olate" fill className="object-cover object-top" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">Johnny Olate</p>
              <p className="text-xs text-neutral-gray/60">Asesor Jurídico · Olate &amp; Soto</p>
            </div>
          </div>
        </header>

        {/* Contenido */}
        <div className="prose-article">
          <MDXRemote source={post.content} />
        </div>

        <CommentsSection slug={post.slug} />
        <DebateSection titulo={post.title} />

        {/* Volver */}
        <div className="mt-16 border-t border-primary/10 pt-8">
          <Link
            href="/johnny_olate"
            className="text-sm font-medium uppercase tracking-[0.18em] text-accent hover:underline"
          >
            ← Volver al blog
          </Link>
        </div>

      </article>
    </main>
  )
}
