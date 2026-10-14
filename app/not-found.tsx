import type { Metadata } from 'next'
import { LANDINGS } from '../lib/landings'

export const metadata: Metadata = { title: 'Página no encontrada', robots: { index: false } }

export default function NotFound() {
  return (
    <main className="bg-[#f7f6f3] px-6 py-24 text-[#192A4D] md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Error 404</p>
        <h1 className="font-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">No encontramos esa página.</h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Puede que el enlace haya cambiado. Estas son las páginas donde más podemos ayudarle:
        </p>
        <ul className="mt-8 space-y-3 text-lg">
          {LANDINGS.map((l) => (
            <li key={l.slug}>
              <a href={`/asesoria/${l.slug}`} className="underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]">{l.h1}</a>
            </li>
          ))}
          <li>
            <a href="/academia" className="underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]">Academia: guías y análisis jurídico</a>
          </li>
        </ul>
        <a href="/" className="mt-10 inline-block bg-[#192A4D] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]">
          Volver al inicio
        </a>
      </div>
    </main>
  )
}
