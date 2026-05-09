import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsByAuthor, formatDate } from '../../lib/blog'

export const metadata: Metadata = {
  title: 'Constanza Soto — Derecho de Familia',
  description:
    'Análisis jurídico, sentencias y reflexiones sobre derecho de familia por Constanza Soto, asesora jurídica en Talca.',
}

export default function ConstanzaSotoPage() {
  const posts = getAllPostsByAuthor('constanza_soto')
  const categorias = [...new Set(posts.map((p) => p.categoria))]

  return (
    <main className="min-h-screen bg-[#F8F9FA]">

      {/* Hero */}
      <section className="border-b border-primary/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-accent">Academia</p>
          <h1 className="font-heading text-4xl font-semibold text-primary sm:text-5xl">
            Constanza Soto
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-gray">
            Asesora Jurídica · Talca, Región del Maule
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-gray">
            Escribo sobre derecho de familia, con especial atención al interés superior de la
            infancia, los procesos de mediación y la dimensión humana de los conflictos familiares.
            Creo que el derecho bien ejercido puede ser una herramienta de estabilidad y protección
            para quienes más lo necesitan.
          </p>
          {categorias.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {categorias.map((cat) => (
                <Link
                  key={cat}
                  href={`/academia?cat=${encodeURIComponent(cat)}&autor=constanza_soto`}
                  className="border border-primary/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artículos */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-1 font-heading text-xl font-semibold text-primary">Artículos</h2>
          <div className="mb-8 h-0.5 w-12 bg-accent" />

          {posts.length === 0 ? (
            <p className="py-8 text-sm text-neutral-gray">Próximamente.</p>
          ) : (
            <ul className="divide-y divide-primary/8">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/constanza_soto/${post.slug}`}
                    className="group block py-8 transition-opacity hover:opacity-75"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                        {post.categoria}
                      </span>
                      <span className="text-neutral-gray/40">·</span>
                      <time className="font-sans text-xs text-neutral-gray/70">
                        {formatDate(post.date)}
                      </time>
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

      {/* Footer mini */}
      <footer className="border-t border-primary/10 bg-white px-6 py-8 text-center">
        <p className="text-xs text-neutral-gray/60">
          Constanza Soto ·{' '}
          <Link href="/academia" className="text-accent hover:underline">
            Academia Olate &amp; Soto
          </Link>
          {' '}·{' '}
          <Link href="/" className="text-accent hover:underline">
            Olate &amp; Soto Asesores Jurídicos
          </Link>
        </p>
      </footer>

    </main>
  )
}
