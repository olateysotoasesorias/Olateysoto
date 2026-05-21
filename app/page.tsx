import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import HeroCarousel from '../components/HeroCarousel'
import BioExpandable from '../components/BioExpandable'
import { getAllPostsCombined } from '../lib/blog'

export default function HomePage() {
  const latestPosts = getAllPostsCombined().slice(0, 3)

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Olate & Soto Asesores Jurídicos',
    url: 'https://olateysoto.cl',
    description: 'Estudio jurídico en Talca especializado en litigación civil, derecho de familia y asesoría corporativa.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Talca',
      addressRegion: 'Región del Maule',
      addressCountry: 'CL',
    },
    areaServed: { '@type': 'Place', name: 'Región del Maule, Chile' },
    employee: [
      {
        '@type': 'Person',
        name: 'Johnny Olate',
        jobTitle: 'Socio Fundador',
        url: 'https://olateysoto.cl/johnny_olate',
        sameAs: 'https://www.linkedin.com/in/johnny-olate-rojas-b16313237/',
      },
      {
        '@type': 'Person',
        name: 'Constanza Soto',
        jobTitle: 'Socia Fundadora',
        url: 'https://olateysoto.cl/constanza_soto',
        sameAs: 'https://www.linkedin.com/in/constanza-soto-guti%C3%A9rrez-/',
      },
    ],
  }

  return (
    <main className="bg-white text-[#1a1a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />

      {/* HERO */}
      <HeroCarousel>
        <div className="relative z-10 px-6 text-center max-w-3xl mx-auto">
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-[#B5A05F]">
            Talca · Región del Maule
          </p>
          <h1 className="font-heading text-6xl font-semibold tracking-[0.1em] text-white sm:text-7xl">
            OLATE <span className="text-[#B5A05F]">&</span> SOTO
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50">
            Asesores Jurídicos
          </p>
          <div className="mt-8 h-px w-16 bg-[#B5A05F] mx-auto" />
          <p className="mt-8 text-base leading-7 text-white/70 max-w-lg mx-auto">
            Asesoría legal con rigor, experiencia y cercanía para personas y empresas de la Región del Maule.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="bg-[#B5A05F] px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#192A4D] font-semibold hover:bg-[#c9b472] transition-colors"
            >
              Solicitar asesoría
            </a>
            <a
              href="#academia"
              className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white/80 hover:border-[#B5A05F] hover:text-[#B5A05F] transition-colors"
            >
              Explorar academia
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-5 h-5 text-white/30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </HeroCarousel>

      {/* EQUIPO */}
      <section id="equipo" className="bg-[#f7f6f3] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B5A05F]">Quiénes somos</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Los socios</h2>
          <div className="mt-px mb-12 h-0.5 w-12 bg-[#B5A05F]" />

          <div className="grid gap-12 md:grid-cols-2">

            {/* Johnny Olate */}
            <div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/equipo/olate.jpg"
                  alt="Johnny Olate, asesor jurídico y egresado de derecho en Talca"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">Johnny Olate</h3>
                <a
                  href="https://www.linkedin.com/in/johnny-olate-rojas-b16313237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Johnny Olate"
                  className="text-[#192A4D]/40 hover:text-[#0077B5] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="/johnny_olate"
                  aria-label="Blog de Johnny Olate"
                  className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#192A4D]/40 hover:text-[#B5A05F] transition-colors"
                >
                  <span>Blog</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </a>
              </div>
              <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#B5A05F]">Socio Fundador</p>
              <div className="mt-3 h-px w-8 bg-[#B5A05F]" />
              <BioExpandable
                preview={
                  <p className="text-sm leading-7 text-gray-500 text-justify">
                    Socio fundador, director y encargado de la estrategia legal en el área civil-comercial. Es egresado de Derecho de la Universidad de Talca, tras iniciar su formación académica en la Pontificia Universidad Católica de Chile (PUC). Su perfil combina una sólida base académica como ayudante de cátedra con la experiencia práctica obtenida como pasante en la Ilustrísima Corte de Apelaciones de Talca y en litigación privada.
                  </p>
                }
              >
                <p className="mt-4 text-sm leading-7 text-gray-500 text-justify">
                  Forjado en la resiliencia y los principios de la filosofía estoica, aborda el ejercicio jurídico como un sistema de control estratégico y disciplina técnica. Se especializa en litigación estratégica y derecho civil, integrando herramientas de inteligencia artificial y LegalTech para optimizar la estructuración de sociedades y la redacción de contratos complejos. Su enfoque se orienta a transformar la incertidumbre procesal en resultados concretos, garantizando la protección patrimonial y la paz mental de sus clientes mediante una representación implacable y de alto rigor doctrinal.
                </p>
              </BioExpandable>
            </div>

            {/* Constanza Soto */}
            <div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/equipo/soto.png"
                  alt="Constanza Soto, asesora jurídica y egresada de derecho en Talca"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">Constanza Soto</h3>
                <a
                  href="https://www.linkedin.com/in/constanza-soto-guti%C3%A9rrez-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Constanza Soto"
                  className="text-[#192A4D]/40 hover:text-[#0077B5] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="/constanza_soto"
                  aria-label="Blog de Constanza Soto"
                  className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#192A4D]/40 hover:text-[#B5A05F] transition-colors"
                >
                  <span>Blog</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </a>
              </div>
              <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#B5A05F]">Socia Fundadora</p>
              <div className="mt-3 h-px w-8 bg-[#B5A05F]" />
              <BioExpandable
                preview={
                  <p className="text-sm leading-7 text-gray-500 text-justify">
                    Socia fundadora y directora del área de familia. Egresada de Derecho de la Universidad de Talca. Su trayectoria se distingue por un sólido perfil académico, habiendo ejercido como ayudante de cátedra en múltiples disciplinas, con especial énfasis en el Derecho de Familia, Teoría del Derecho y un enfoque ético-humano.
                  </p>
                }
              >
                <p className="mt-4 text-sm leading-7 text-gray-500 text-justify">
                  Forjada bajo una perspectiva ética intachable y un rigor técnico innegociable, concibe su práctica como un acompañamiento legal donde convergen la precisión doctrinaria y una profunda sensibilidad humana. Su especialización comprende la dirección estratégica de procesos complejos de divorcio, pensiones de alimentos, cuidado personal y medidas de protección.
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-500 text-justify">
                  Impulsada por un férreo compromiso con el derecho de infancia y la defensa de los más vulnerables, destaca por su destreza para traducir escenarios jurídicos adversos con absoluta claridad y empatía. Su labor no se limita a la ejecución procesal, sino que se orienta a resguardar la estabilidad emocional de sus representados y garantizar, de manera implacable, el interés superior del niño, ofreciendo contención y seguridad en las esferas más sensibles del derecho.
                </p>
              </BioExpandable>
            </div>

          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="px-6 py-24 bg-[#0a1322]">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B5A05F]">Consultoría y litigación</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-white">Áreas de práctica</h2>
          <div className="mt-px mb-12 h-0.5 w-12 bg-[#B5A05F]" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: 'Litigación Civil y Patrimonial',
                desc: 'Diseño de estrategias procesales orientadas a la defensa, recuperación y escalabilidad del patrimonio frente a conflictos de alta complejidad.',
                items: ['Cobranza judicial y defensa ejecutiva.', 'Responsabilidad civil e indemnizaciones.', 'Juicios de arrendamiento y precario.'],
                href: '/academia?cat=Análisis Jurídico',
                img: '/areas/litigacion.jpg',
              },
              {
                titulo: 'Familia y Sucesorio',
                desc: 'Dirección técnica en procesos judiciales para el resguardo del patrimonio familiar y la protección implacable del interés superior.',
                items: ['Divorcios y compensación económica.', 'Pensiones de alimentos y cuidado personal.', 'Posesiones efectivas y partición de bienes.'],
                href: '/academia?cat=Derecho de Familia',
                img: '/areas/familia.jpg',
              },
              {
                titulo: 'Corporativo y Tributario',
                desc: 'Consultoría preventiva y estructuración societaria para blindar operaciones empresariales frente a las nuevas exigencias normativas.',
                items: ['Constitución y reorganización de sociedades.', 'Contratación comercial y compliance.'],
                href: '/academia?cat=Guías prácticas',
                img: '/areas/corporativo.jpg',
              },
            ].map((area) => (
              <div
                key={area.titulo}
                className="group/card relative flex flex-col overflow-hidden bg-[#07101e] min-h-[300px]"
              >
                {/* Imagen de fondo */}
                <Image
                  src={area.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-[0.22] scale-105 transition-all duration-700 group-hover/card:opacity-[0.32] group-hover/card:scale-100"
                />

                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101e] via-[#07101e]/80 to-[#07101e]/60 transition-opacity duration-500 group-hover/card:via-[#07101e]/70" />

                {/* Borde dorado en hover */}
                <div className="absolute inset-0 border border-white/5 transition-colors duration-500 group-hover/card:border-[#B5A05F]/40" />

                {/* Contenido */}
                <div className="relative z-10 flex flex-col flex-1 p-8">
                  <div className="h-px w-8 bg-[#B5A05F]/60 transition-all duration-500 group-hover/card:w-14 group-hover/card:bg-[#B5A05F]" />

                  <h3 className="font-heading text-2xl font-semibold leading-snug text-white mt-14 transition-all duration-500 group-hover/card:mt-6 group-hover/card:text-xl">
                    {area.titulo}
                  </h3>

                  {/* Descripción y lista — se revelan en hover */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100">
                    <div className="overflow-hidden">
                      <p className="mt-4 text-sm leading-7 text-white/55 text-justify">
                        {area.desc}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                            <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-[#B5A05F]/60" />
                            {item}
                          </li>
                        ))}
                        <li className="pl-7 pt-1 text-xs italic text-white/25">y más...</li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href={area.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 border border-white/10 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-white/40 opacity-0 transition-all duration-500 group-hover/card:opacity-100 hover:border-[#B5A05F]/60 hover:text-[#B5A05F]"
                  >
                    Explorar área
                    <span className="transition-transform duration-300 group-hover/card:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIA */}
      <section id="academia" className="bg-[#f7f6f3] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B5A05F]">Conocimiento jurídico</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Academia — Artículos más recientes</h2>
          <div className="mt-px mb-12 h-0.5 w-12 bg-[#B5A05F]" />

          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <a
                key={post.slug}
                href={`${post.autorPath}/${post.slug}`}
                className="group/card relative flex flex-col bg-white overflow-hidden shadow-[0_2px_20px_rgba(25,42,77,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_44px_rgba(25,42,77,0.13)]"
              >
                {/* Franja superior */}
                <div className={`h-[3px] w-full flex-shrink-0 transition-colors duration-500 ${i === 0 ? 'bg-[#B5A05F]' : 'bg-[#eceae6] group-hover/card:bg-[#B5A05F]'}`} />

                <div className="relative flex flex-col flex-1 p-7">
                  {/* Número watermark */}
                  <span className="absolute right-5 top-5 font-heading text-[6.5rem] font-bold leading-none text-[#192A4D]/[0.05] group-hover/card:text-[#192A4D]/[0.09] select-none pointer-events-none transition-all duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Categoría badge */}
                  <span className="mb-5 inline-flex w-fit items-center bg-[#192A4D]/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B5A05F]">
                    {post.categoria}
                  </span>

                  {/* Título */}
                  <h3 className="font-heading text-lg font-semibold leading-snug text-[#192A4D] transition-colors duration-300 group-hover/card:text-[#192A4D]/80">
                    {post.title}
                  </h3>

                  {/* Descripción — se despliega en hover */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100">
                    <div className="overflow-hidden">
                      <p className="mt-4 text-sm leading-7 text-gray-500">{post.description}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-xs text-gray-400">{post.autor}</span>
                    <span className="flex translate-x-2 items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#B5A05F] opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100">
                      Leer <span>→</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/academia"
              className="inline-block border border-[#192A4D]/20 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#192A4D]/60 hover:border-[#B5A05F] hover:text-[#B5A05F] transition-colors"
            >
              Ver todos los artículos
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="group bg-[#192A4D] px-6 py-24 transition-colors duration-700 hover:bg-[#1e3460]">
        <div className="mx-auto max-w-3xl bg-white p-10 border-l-2 border-transparent group-hover:border-[#B5A05F] group-hover:pl-14 transition-all duration-500">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8a7640]">Contacto</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Primera consulta</h2>
          <div className="mt-px mb-10 h-0.5 w-12 bg-[#B5A05F] group-hover:w-24 transition-all duration-500" />

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-lg font-semibold text-white/80">
            Olate <span className="text-[#B5A05F]">&</span> Soto
          </span>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Olate & Soto Asesores Jurídicos · Talca, Chile</p>
          <a href="/academia" className="text-xs text-[#B5A05F]/60 hover:text-[#B5A05F] transition-colors uppercase tracking-widest">
            Academia
          </a>
          {/* Enlace de acceso al panel — invisible */}
          <a href="/admin" className="text-[#111827] text-[1px] select-none" tabIndex={-1} aria-hidden="true">·</a>
        </div>
      </footer>

    </main>
  )
}
