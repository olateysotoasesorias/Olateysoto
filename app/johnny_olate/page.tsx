import type { Metadata } from 'next'
import PerfilAutor from '../../components/PerfilAutor'
import { getAllPostsByAuthor } from '../../lib/blog'
import { EQUIPO } from '../../lib/equipo'

export const metadata: Metadata = {
  title: { absolute: 'Johnny Olate — Asesor jurídico en Talca: fraude bancario, propiedades, herencias y deudas' },
  description:
    'Johnny Olate, licenciado en Ciencias Jurídicas y Sociales (U. de Talca), asesor jurídico en Talca: fraude bancario, accidentes y daños, casas ocupadas, herencias, cobranzas y empresas. Fundador de El Criterio. Primera consulta gratuita.',
  alternates: { canonical: 'https://olateysoto.cl/johnny_olate' },
  openGraph: {
    title: 'Johnny Olate — Asesor jurídico en Talca: fraude bancario, propiedades, herencias y deudas',
    description: 'Johnny Olate, licenciado en Ciencias Jurídicas y Sociales (U. de Talca), asesor jurídico en Talca: fraude bancario, accidentes y daños, casas ocupadas, herencias, cobranzas y empresas. Fundador de El Criterio. Primera consulta gratuita.',
    siteName: 'Olate & Soto',
    locale: 'es_CL',
    url: 'https://olateysoto.cl/johnny_olate',
    type: 'profile',
    images: [{ url: '/og/johnny.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  const p = EQUIPO.find((x) => x.id === 'johnny')!
  const posts = getAllPostsByAuthor('johnny_olate')

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Johnny Olate',
    alternateName: 'Johnny Olate Rojas',
    jobTitle: 'Asesor Jurídico',
    description: 'Asesor jurídico en derecho civil y sucesorio. Fundador de Olate & Soto Asesores Jurídicos (Talca) y de El Criterio, monitor diario de jurisprudencia de la Corte Suprema.',
    url: 'https://olateysoto.cl/johnny_olate',
    image: 'https://olateysoto.cl/equipo/olate.jpg',
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidad de Talca' },
      { '@type': 'CollegeOrUniversity', name: 'Pontificia Universidad Católica de Chile' },
    ],
    sameAs: [
      'https://www.linkedin.com/in/johnny-olate-rojas-b16313237/',
      'https://olateysoto.cl/johnny_olate',
    ],
    worksFor: {
      '@type': 'LegalService',
      name: 'Olate & Soto Asesores Jurídicos',
      url: 'https://olateysoto.cl',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Talca',
      addressRegion: 'Región del Maule',
      addressCountry: 'CL',
    },
    knowsAbout: ['Derecho Civil', 'Derecho Sucesorio', 'Redacción jurídica', 'Filosofía del Derecho', 'Estoicismo', 'Derecho Patrimonial'],
  }


  const extra = (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 border-y border-[#192A4D]/10 py-14 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">El Criterio</p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Johnny fundó El Criterio, un monitor diario de la jurisprudencia de la Corte Suprema. Lo que la Corte resuelve cada día llega a su trabajo.
          </p>
          <a href="https://elcriterio.cl" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm underline decoration-[#B5A05F] underline-offset-4">Conocer El Criterio →</a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">¿Es abogado o abogada?</p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Redactamos escritos, recursos, minutas e informes en derecho para colegas de todo Chile. Usted patrocina y firma.
          </p>
          <a href="/abogados" className="mt-4 inline-block text-sm underline decoration-[#B5A05F] underline-offset-4">Redacción jurídica para abogados →</a>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <PerfilAutor p={p} posts={posts} extra={extra} />
    </>
  )
}
