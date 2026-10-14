import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlugAndAuthor, formatDate } from '../lib/blog'
import { EQUIPO } from '../lib/equipo'
import type { Fundador } from '../lib/contacto'
import DebateSection from './DebateSection'
import CtaCaso from './CtaCaso'

const BASE = 'https://olateysoto.cl'
const SLUG: Record<Fundador, string> = { johnny: 'johnny_olate', constanza: 'constanza_soto' }
const OG: Record<Fundador, string> = { johnny: '/og/johnny.png', constanza: '/og/constanza.png' }

export function metadataArticulo(autor: Fundador, slug: string): Metadata {
  const p = EQUIPO.find((x) => x.id === autor)!
  const post = getPostBySlugAndAuthor(SLUG[autor], slug)
  if (!post) return {}
  const url = `${BASE}${p.perfil}/${post.slug}`
  return {
    title: `${post.title} — ${p.nombre}`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      siteName: 'Olate & Soto',
      locale: 'es_CL',
      images: [{ url: OG[autor], width: 1200, height: 630 }],
    },
  }
}

export default function ArticuloAutor({ autor, slug }: { autor: Fundador; slug: string }) {
  const p = EQUIPO.find((x) => x.id === autor)!
  const post = getPostBySlugAndAuthor(SLUG[autor], slug)
  if (!post) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${BASE}${p.perfil}/${post.slug}`,
    mainEntityOfPage: `${BASE}${p.perfil}/${post.slug}`,
    author: { '@type': 'Person', name: p.nombre, url: `${BASE}${p.perfil}` },
    publisher: { '@type': 'Organization', name: 'Olate & Soto Asesores Jurídicos', url: BASE },
  }

  return (
    <main className="bg-white text-[#192A4D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-2xl px-6 py-14">
        <nav aria-label="Ruta" className="mb-10 flex flex-wrap items-center gap-x-2 text-xs text-[#192A4D]/70">
          <a href="/" className="hover:text-[#192A4D]">Olate &amp; Soto</a>
          <span>/</span>
          <a href="/academia" className="hover:text-[#192A4D]">Academia</a>
          <span>/</span>
          <a href={p.perfil} className="hover:text-[#192A4D]">{p.nombre}</a>
        </nav>

        <header className="mb-10 border-b border-[#192A4D]/10 pb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#776532]">
            {post.categoria} <span className="mx-1 text-[#192A4D]/40">·</span>
            <time className="normal-case tracking-normal text-[#192A4D]/70">{formatDate(post.date)}</time>
          </p>
          <h1 className="font-heading mt-4 text-3xl font-semibold leading-snug sm:text-4xl">{post.title}</h1>
          <div className="mt-4 h-0.5 w-12 bg-[#B5A05F]" />
          <p className="mt-4 text-base italic leading-7 text-gray-600">{post.description}</p>
          <a href={p.perfil} className="mt-6 flex items-center gap-3">
            <span className="relative block h-10 w-10 overflow-hidden rounded-full">
              <Image src={p.retrato} alt={p.nombre} fill sizes="40px" className="object-cover object-top" />
            </span>
            <span>
              <span className="block text-sm font-medium">{p.nombre}</span>
              <span className="block text-xs text-[#192A4D]/70">{p.cargo} · Olate &amp; Soto</span>
            </span>
          </a>
        </header>

        <div className="prose-article">
          <MDXRemote source={post.content} />
        </div>

        <CtaCaso autor={autor} categoria={post.categoria} titulo={post.title} />
        <DebateSection titulo={post.title} autor={autor} />

        <div className="mt-12 border-t border-[#192A4D]/10 pt-8">
          <a href={p.perfil} className="text-sm text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]">
            ← Más artículos de {p.nombre}
          </a>
        </div>
      </article>
    </main>
  )
}
