import type { Metadata } from 'next'
import PerfilAutor from '../../components/PerfilAutor'
import { getAllPostsByAuthor } from '../../lib/blog'
import { EQUIPO } from '../../lib/equipo'

export const metadata: Metadata = {
  title: { absolute: 'Constanza Soto — Asesora jurídica en Talca: pensión de alimentos, divorcio y familia' },
  description:
    'Constanza Soto, egresada de Derecho (U. de Talca), asesora jurídica en Talca: pensión de alimentos, divorcio, cuidado personal, violencia intrafamiliar, interdicción y protección del adulto mayor. Primera consulta gratuita.',
  alternates: { canonical: 'https://olateysoto.cl/constanza_soto' },
  openGraph: {
    title: 'Constanza Soto — Asesora jurídica en Talca: pensión de alimentos, divorcio y familia',
    description: 'Constanza Soto, egresada de Derecho (U. de Talca), asesora jurídica en Talca: pensión de alimentos, divorcio, cuidado personal, violencia intrafamiliar, interdicción y protección del adulto mayor. Primera consulta gratuita.',
    siteName: 'Olate & Soto',
    locale: 'es_CL',
    url: 'https://olateysoto.cl/constanza_soto',
    type: 'profile',
    images: [{ url: '/og/constanza.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  const p = EQUIPO.find((x) => x.id === 'constanza')!
  const posts = getAllPostsByAuthor('constanza_soto')

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Constanza Soto',
    alternateName: 'Constanza Soto Gutiérrez',
    jobTitle: 'Asesora Jurídica',
    description: 'Asesora jurídica en derecho de familia. Fundadora de Olate & Soto Asesores Jurídicos en Talca, Región del Maule.',
    url: 'https://olateysoto.cl/constanza_soto',
    image: 'https://olateysoto.cl/equipo/constanza.png',
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de Talca' },
    sameAs: [
      'https://www.linkedin.com/in/constanza-soto-guti%C3%A9rrez-/',
      'https://olateysoto.cl/constanza_soto',
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
    knowsAbout: ['Derecho de Familia', 'Derecho de Infancia', 'Filiación', 'Derecho Sucesorio', 'Teoría del Derecho'],
  }


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <PerfilAutor p={p} posts={posts} />
    </>
  )
}
