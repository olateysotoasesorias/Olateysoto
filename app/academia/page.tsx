import type { Metadata } from 'next'
import Image from 'next/image'
import { getAllPostsCombined, getAllCategories, formatDate } from '../../lib/blog'
import { EQUIPO } from '../../lib/equipo'
import { LANDINGS } from '../../lib/landings'

export const metadata: Metadata = {
  title: { absolute: 'Academia: guías prácticas y análisis jurídico | Olate & Soto' },
  description:
    'Guías prácticas para entender sus trámites y análisis jurídico de sentencias y normas, por Johnny Olate y Constanza Soto, asesores jurídicos en Talca.',
  alternates: { canonical: 'https://olateysoto.cl/academia' },
}

const AUTORES = [
  { label: 'Johnny Olate', value: 'johnny_olate' },
  { label: 'Constanza Soto', value: 'constanza_soto' },
]

const eyebrow = 'text-xs uppercase tracking-[0.35em] text-[#776532]'

function filterUrl(type: 'cat' | 'autor', value: string, currentCat?: string, currentAutor?: string) {
  const p = new URLSearchParams()
  if (type === 'cat') {
    if (currentCat !== value) p.set('cat', value)
    if (currentAutor) p.set('autor', currentAutor)
  } else {
    if (currentCat) p.set('cat', currentCat)
    if (currentAutor !== value) p.set('autor', value)
  }
  const s = p.toString()
  return `/academia${s ? `?${s}` : ''}#articulos`
}

const chip = (activo: boolean) =>
  `border px-3 py-1.5 text-sm transition-colors ${
    activo ? 'border-[#192A4D] bg-[#192A4D] text-white' : 'border-[#192A4D]/25 text-[#192A4D]/80 hover:border-[#192A4D]'
  }`

export default function AcademiaPage({ searchParams }: { searchParams: { cat?: string; autor?: string } }) {
  const { cat, autor } = searchParams
  const posts = getAllPostsCombined({ cat, autor })
  const allCategories = getAllCategories()
  const isFiltered = !!(cat || autor)
  const nombreAutor = (id: string) => EQUIPO.find((p) => p.id === id)?.nombre ?? ''

  return (
    <main className="bg-white text-[#192A4D]">
      {/* Encabezado */}
      <section className="bg-[#f7f6f3] px-6 pt-14 pb-16 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Olate &amp; Soto</p>
          <h1 className="font-heading mt-5 text-5xl font-semibold leading-tight sm:text-6xl">Academia</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Guías prácticas para entender sus trámites y análisis de sentencias y normas. El derecho bien explicado, para quienes toman decisiones reales.
          </p>
        </div>
      </section>

      {/* Guías prácticas */}
      <section id="guias" className="scroll-mt-24 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Guías prácticas</p>
          <h2 className="font-heading mt-4 max-w-2xl text-4xl font-semibold leading-tight">Qué hacer, paso a paso.</h2>
          <ul className="mt-12 border-t border-[#192A4D]/10">
            {LANDINGS.map((l) => (
              <li key={l.slug} className="border-b border-[#192A4D]/10">
                <a href={`/asesoria/${l.slug}`} className="group grid gap-2 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                  <p className="text-sm text-[#192A4D]/70">
                    {nombreAutor(l.autor)}
                    <span className="block">Actualizada el {l.actualizado}</span>
                  </p>
                  <div>
                    <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-[#776532]">{l.h1}</h3>
                    <p className="mt-2 line-clamp-2 text-base leading-7 text-gray-600">{l.intro}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Artículos */}
      <section id="articulos" className="scroll-mt-24 bg-[#f7f6f3] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Análisis jurídico</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight">{isFiltered ? 'Resultados' : 'Últimos artículos'}</h2>

          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm text-[#192A4D]/70">Categoría</span>
              {allCategories.map((c) => (
                <a key={c} href={filterUrl('cat', c, cat, autor)} className={chip(cat === c)}>{c}</a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm text-[#192A4D]/70">Autor</span>
              {AUTORES.map((a) => (
                <a key={a.value} href={filterUrl('autor', a.value, cat, autor)} className={chip(autor === a.value)}>{a.label}</a>
              ))}
              {isFiltered && (
                <a href="/academia#articulos" className="ml-2 text-sm text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4">Ver todos</a>
              )}
            </div>
          </div>

          {posts.length === 0 ? (
            <p className="mt-12 text-base text-gray-600">No hay artículos para esta selección todavía.</p>
          ) : (
            <ul className="mt-10 border-t border-[#192A4D]/10">
              {posts.map((post) => (
                <li key={`${post.autorSlug}-${post.slug}`} className="border-b border-[#192A4D]/10">
                  <a href={`${post.autorPath}/${post.slug}`} className="group grid gap-2 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                    <p className="text-sm text-[#192A4D]/70">
                      {post.autor}
                      <span className="block">{formatDate(post.date)}</span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-[#776532]">{post.categoria}</span>
                    </p>
                    <div>
                      <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-[#776532]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-base leading-7 text-gray-600">{post.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Autores */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Quiénes escriben</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {EQUIPO.map((p) => (
              <a key={p.id} href={p.perfil} className="group flex gap-6 border-t border-[#B5A05F] pt-6">
                <span className="relative block h-28 w-24 flex-shrink-0 overflow-hidden bg-[#f7f6f3]">
                  <Image src={p.retrato} alt={p.nombre} fill sizes="96px" className="object-cover object-top" />
                </span>
                <span>
                  <span className="font-heading block text-2xl font-semibold group-hover:text-[#776532]">{p.nombre}</span>
                  <span className="mt-1 block text-sm leading-6 text-[#192A4D]/70">{p.cargo}</span>
                  <span className="mt-3 block text-sm underline decoration-[#B5A05F] underline-offset-4">Ver perfil y artículos →</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
