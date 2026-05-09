import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsCombined, getAllCategories, formatDate } from '../../lib/blog'

export const metadata: Metadata = {
  title: 'Academia — Olate & Soto',
  description: 'Análisis jurídico, reflexiones, guías prácticas y divulgación del derecho por Johnny Olate y Constanza Soto.',
}

const AUTORES = [
  { label: 'Johnny Olate', value: 'johnny_olate' },
  { label: 'Constanza Soto', value: 'constanza_soto' },
  { label: 'Equipo OyS', value: 'equipo_oys' },
]

const LINKEDIN = [
  {
    nombre: 'Johnny Olate',
    href: 'https://www.linkedin.com/in/johnny-olate-rojas-b16313237/',
  },
  {
    nombre: 'Constanza Soto',
    href: 'https://www.linkedin.com/in/constanza-soto-guti%C3%A9rrez-/',
  },
]

function filterUrl(
  type: 'cat' | 'autor',
  value: string,
  currentCat?: string,
  currentAutor?: string
) {
  const p = new URLSearchParams()
  if (type === 'cat') {
    if (currentCat !== value) p.set('cat', value)
    if (currentAutor) p.set('autor', currentAutor)
  } else {
    if (currentCat) p.set('cat', currentCat)
    if (currentAutor !== value) p.set('autor', value)
  }
  const s = p.toString()
  return `/academia${s ? `?${s}` : ''}`
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

type PageProps = {
  searchParams: { cat?: string; autor?: string }
}

export default function AcademiaPage({ searchParams }: PageProps) {
  const { cat, autor } = searchParams
  const posts = getAllPostsCombined({ cat, autor })
  const allCategories = getAllCategories()
  const isFiltered = !!(cat || autor)

  return (
    <main className="min-h-screen bg-[#F8F9FA]">

      {/* Header */}
      <section className="border-b border-primary/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-accent">Olate & Soto</p>
          <h1 className="font-heading text-4xl font-semibold text-primary sm:text-5xl">Academia</h1>
          <div className="mt-3 h-0.5 w-12 bg-accent" />
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-gray">
            La Academia es el espacio editorial de Olate & Soto. Analizamos sentencias relevantes,
            comentamos proyectos de ley, publicamos guías prácticas para entender los procesos más
            comunes, y reflexionamos sobre filosofía y ética del derecho. No es divulgación académica:
            es el derecho bien explicado, para quienes toman decisiones reales.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="border-b border-primary/10 bg-white px-6 py-6">
        <div className="mx-auto max-w-3xl space-y-4">

          {allCategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs uppercase tracking-[0.2em] text-primary/40">Categoría</span>
              {allCategories.map((c) => (
                <Link
                  key={c}
                  href={filterUrl('cat', c, cat, autor)}
                  className={`border px-3 py-1 text-xs uppercase tracking-[0.15em] transition-colors ${
                    cat === c
                      ? 'border-accent bg-accent font-medium text-primary'
                      : 'border-primary/20 text-primary/60 hover:border-accent hover:text-accent'
                  }`}
                >
                  {c}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.2em] text-primary/40">Autor</span>
            {AUTORES.map((a) => (
              <Link
                key={a.value}
                href={filterUrl('autor', a.value, cat, autor)}
                className={`border px-3 py-1 text-xs uppercase tracking-[0.15em] transition-colors ${
                  autor === a.value
                    ? 'border-accent bg-accent font-medium text-primary'
                    : 'border-primary/20 text-primary/60 hover:border-accent hover:text-accent'
                }`}
              >
                {a.label}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Artículos */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-1 flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold text-primary">
              {isFiltered ? 'Resultados' : 'Últimos artículos'}
            </h2>
            {isFiltered && (
              <Link href="/academia" className="text-xs uppercase tracking-[0.15em] text-accent hover:underline">
                Ver todos
              </Link>
            )}
          </div>
          <div className="mb-8 h-0.5 w-12 bg-accent" />

          {posts.length === 0 ? (
            <p className="py-8 text-sm text-neutral-gray">
              No hay artículos para esta selección todavía.
            </p>
          ) : (
            <ul className="divide-y divide-primary/8">
              {posts.map((post) => (
                <li key={`${post.autorSlug}-${post.slug}`}>
                  <Link
                    href={`${post.autorPath}/${post.slug}`}
                    className="group block py-8 transition-opacity hover:opacity-75"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                        {post.categoria}
                      </span>
                      <span className="text-neutral-gray/40">·</span>
                      <time className="text-xs text-neutral-gray/70">{formatDate(post.date)}</time>
                      <span className="text-neutral-gray/40">·</span>
                      <span className="text-xs text-neutral-gray/70">{post.autor}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold leading-snug text-primary group-hover:text-primary/80">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-gray">
                      {post.description}
                    </p>
                    <span className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      Leer artículo →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Academias individuales */}
      <section className="border-t border-primary/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-xl font-semibold text-primary mb-1">Academias personales</h2>
          <div className="mb-10 h-0.5 w-12 bg-accent" />
          <div className="grid gap-6 sm:grid-cols-2">

            <Link
              href="/johnny_olate"
              className="group border border-primary/10 p-8 hover:border-accent/40 transition-colors"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary/5">
                <span className="font-heading text-sm font-semibold text-primary">JO</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary">Johnny Olate</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-accent">Academia</p>
              <p className="mt-4 text-sm leading-6 text-neutral-gray">
                Estoicismo, filosofía jurídica, análisis de derecho civil y comercial,
                y reflexiones sobre la práctica legal.
              </p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-primary/40 transition-colors group-hover:text-accent">
                Ver artículos →
              </span>
            </Link>

            <Link
              href="/constanza_soto"
              className="group border border-primary/10 p-8 hover:border-accent/40 transition-colors"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary/5">
                <span className="font-heading text-sm font-semibold text-primary">CS</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary">Constanza Soto</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-accent">Academia</p>
              <p className="mt-4 text-sm leading-6 text-neutral-gray">
                Derecho de familia, interés superior del niño, mediación familiar
                y análisis de sentencias en materia de familia.
              </p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-primary/40 transition-colors group-hover:text-accent">
                Ver artículos →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="border-t border-primary/10 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-lg font-semibold text-primary mb-1">En LinkedIn</h2>
          <div className="mb-8 h-0.5 w-12 bg-accent" />
          <div className="grid gap-4 sm:grid-cols-2">
            {LINKEDIN.map((l) => (
              <a
                key={l.nombre}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-primary/10 p-6 transition-colors hover:border-accent/40"
              >
                <span className="text-primary/30 transition-colors group-hover:text-[#0077B5]">
                  <LinkedInIcon />
                </span>
                <div>
                  <p className="text-sm font-medium text-primary">{l.nombre}</p>
                  <p className="mt-0.5 text-xs text-neutral-gray/60">Ver perfil en LinkedIn</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-white px-6 py-8 text-center">
        <p className="text-xs text-neutral-gray/60">
          Academia Olate & Soto ·{' '}
          <Link href="/" className="text-accent hover:underline">
            Volver al sitio principal
          </Link>
        </p>
      </footer>

    </main>
  )
}
