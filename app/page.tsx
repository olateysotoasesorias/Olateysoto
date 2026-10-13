import Hero from '../components/home/Hero'
import Fundadores from '../components/home/Fundadores'
import ComoTrabajamos from '../components/home/ComoTrabajamos'
import Asesorias from '../components/home/Asesorias'
import Casos from '../components/home/Casos'
import Testimonios from '../components/home/Testimonios'
import Garantias from '../components/home/Garantias'
import AcademiaLista from '../components/home/AcademiaLista'
import Faq from '../components/home/Faq'
import Contacto from '../components/home/Contacto'
import Footer from '../components/home/Footer'
import { AVISO_PATROCINIO } from '../lib/contacto'
import { EQUIPO } from '../lib/equipo'

export default function HomePage() {
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Olate & Soto Asesores Jurídicos',
    url: 'https://olateysoto.cl',
    image: 'https://olateysoto.cl/equipo/Johnny%20y%20Coni%20IA.jpg',
    telephone: '+56957688199',
    description:
      'Asesoría jurídica en Talca y el Maule: fraude bancario, accidentes y daños, casas ocupadas y arriendos, herencias, pensión de alimentos, divorcio, violencia intrafamiliar, interdicción, cobranzas, sociedades y marcas. Primera consulta gratuita y presupuesto cerrado. ' +
      AVISO_PATROCINIO,
    address: { '@type': 'PostalAddress', addressLocality: 'Talca', addressRegion: 'Región del Maule', addressCountry: 'CL' },
    areaServed: ['Talca', 'Maule', 'San Clemente', 'Pelarco', 'San Rafael', 'Curicó', 'Linares', 'San Javier', 'Constitución'].map(
      (name) => ({ '@type': 'City', name }),
    ),
    founder: EQUIPO.map((p) => ({
      '@type': 'Person',
      name: p.nombre,
      jobTitle: p.cargo,
      url: `https://olateysoto.cl${p.perfil}`,
      sameAs: p.linkedin,
    })),
  }

  return (
    <main className="bg-white text-[#192A4D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />

      <Hero />
      <Fundadores />

      <ComoTrabajamos />
      <Asesorias />
      <Casos />
      <Testimonios />
      <Garantias />
      <AcademiaLista />
      <Faq />
      <Contacto />
      <Footer />
    </main>
  )
}
