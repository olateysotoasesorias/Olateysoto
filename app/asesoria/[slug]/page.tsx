import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { AVISO_PATROCINIO, waLink } from '../../../lib/contacto'
import { CASOS, EQUIPO, TESTIMONIOS } from '../../../lib/equipo'
import { LANDINGS, landingPorSlug } from '../../../lib/landings'

const BASE = 'https://olateysoto.cl'

export function generateStaticParams() {
  return LANDINGS.map((l) => ({ slug: l.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = landingPorSlug(params.slug)
  if (!l) return {}
  return {
    title: { absolute: `${l.seoTitle} | Olate & Soto` },
    description: l.metaDesc,
    alternates: { canonical: `${BASE}/asesoria/${l.slug}` },
    openGraph: {
      title: l.seoTitle,
      description: l.metaDesc,
      url: `${BASE}/asesoria/${l.slug}`,
      type: 'article',
      siteName: 'Olate & Soto',
      locale: 'es_CL',
      images: [{ url: `/og/${l.slug}.png`, width: 1200, height: 630 }],
    },
  }
}

const eyebrow = 'text-xs uppercase tracking-[0.35em] text-[#776532]'
const h2 = 'font-heading text-3xl font-semibold leading-tight text-[#192A4D]'

export default function LandingPage({ params }: { params: { slug: string } }) {
  const l = landingPorSlug(params.slug)
  if (!l) notFound()

  const autor = EQUIPO.find((p) => p.id === l.autor)!
  const caso = CASOS.find((c) => c.materia === l.casoMateria)
  const testimonio = TESTIMONIOS.find((t) => t.materia === l.testimonioMateria)
  const otras = LANDINGS.filter((x) => x.slug !== l.slug)
  const wa = waLink(l.autor, l.mensaje)

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: l.h1,
      description: l.metaDesc,
      url: `${BASE}/asesoria/${l.slug}`,
      areaServed: ['Talca', 'Región del Maule', 'Chile'],
      provider: { '@type': 'LegalService', name: 'Olate & Soto Asesores Jurídicos', url: BASE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: l.faq.map((f) => ({ '@type': 'Question', name: f.p, acceptedAnswer: { '@type': 'Answer', text: f.r } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Asesorías', item: `${BASE}/#asesorias` },
        { '@type': 'ListItem', position: 3, name: l.h1, item: `${BASE}/asesoria/${l.slug}` },
      ],
    },
  ]

  return (
    <main className="bg-white text-[#192A4D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Encabezado: respuesta directa y CTA */}
      <section className="bg-[#f7f6f3] px-6 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Ruta" className="text-sm text-[#192A4D]/70">
            <a href="/" className="hover:text-[#192A4D]">Inicio</a> · <a href="/#asesorias" className="hover:text-[#192A4D]">Asesorías</a>
          </nav>
          <p className={`${eyebrow} mt-8`}>{l.eyebrow}</p>
          <h1 className="font-heading mt-5 text-[2rem] font-semibold leading-[1.15] sm:text-5xl">{l.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">{l.intro}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bg-[#192A4D] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]">
              Consulta gratuita con {autor.nombre.split(' ')[0]} por WhatsApp
            </a>
            <span className="text-sm text-[#192A4D]/70">Respondemos el mismo día hábil.</span>
          </div>
          <p className="mt-8 text-sm text-[#192A4D]/70">
            Por <a href={autor.perfil} className="underline decoration-[#B5A05F] underline-offset-4">{autor.nombre}</a> · Actualizado el {l.actualizado}
          </p>
        </div>
      </section>

      {/* Datos clave */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl border-l-2 border-[#B5A05F] bg-[#f7f6f3] p-8 md:p-10">
          <h2 className="font-heading text-2xl font-semibold">Lo esencial</h2>
          <dl className="mt-6 space-y-5">
            {l.datos.map((d) => (
              <div key={d.k} className="grid gap-1 md:grid-cols-[12rem_1fr] md:gap-8">
                <dt className="font-semibold">{d.k}</dt>
                <dd className="text-base leading-7 text-gray-700">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Secciones */}
      <div className="px-6">
        <div className="mx-auto max-w-4xl space-y-20 pb-8">
          {l.secciones.map((s) => (
            <section key={s.h2}>
              <h2 className={h2}>{s.h2}</h2>
              {s.parrafos?.map((p) => (
                <p key={p} className="mt-5 text-lg leading-8 text-gray-700">{p}</p>
              ))}
              {s.tabla && (
                <div className="mt-8 border-t border-[#192A4D]/10">
                  {s.tabla.map((t) => (
                    <div key={t.situacion} className="grid gap-2 border-b border-[#192A4D]/10 py-5 md:grid-cols-2 md:gap-10">
                      <p className="font-semibold">{t.situacion}</p>
                      <p className="text-base leading-7 text-gray-700">{t.via}</p>
                    </div>
                  ))}
                </div>
              )}
              {s.pasos && (
                <ol className="mt-8 space-y-6">
                  {s.pasos.map((p, i) => (
                    <li key={p.t} className="grid grid-cols-[2.5rem_1fr] gap-4">
                      <span className="font-heading text-3xl font-semibold leading-none text-[#B5A05F]">{i + 1}</span>
                      <div>
                        <h3 className="font-heading text-xl font-semibold">{p.t}</h3>
                        <p className="mt-1 text-base leading-7 text-gray-700">{p.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {s.lista && (
                <ul className="mt-6 space-y-3">
                  {s.lista.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-lg leading-8 text-gray-700">
                      <span className="mt-4 h-px w-4 flex-shrink-0 bg-[#B5A05F]" />
                      {x}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="border-l-2 border-[#B5A05F] pl-5 text-base leading-7">{AVISO_PATROCINIO}</p>
        </div>
      </div>

      {/* Prueba: caso y testimonio */}
      {(caso || testimonio) && (
        <section className="mt-16 bg-[#f7f6f3] px-6 py-16">
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            {caso && (
              <div>
                <p className={eyebrow}>Un caso que acompañamos</p>
                <p className="mt-4 text-base leading-7 text-gray-700">{caso.situacion}</p>
                <p className="font-heading mt-3 text-lg leading-snug">{caso.resultado}</p>
              </div>
            )}
            {testimonio && (
              <div className="border-l-2 border-[#B5A05F] pl-6">
                <blockquote className="font-heading text-xl leading-snug">“{testimonio.texto}”</blockquote>
                <p className="mt-4 text-sm text-gray-600">{testimonio.autor}</p>
              </div>
            )}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-sm text-gray-600">Cada caso es distinto: un resultado anterior no asegura el mismo resultado en otro.</p>
        </section>
      )}

      {/* Preguntas frecuentes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className={h2}>Preguntas frecuentes</h2>
          <div className="mt-8 border-t border-[#192A4D]/10">
            {l.faq.map((f) => (
              <details key={f.p} className="group border-b border-[#192A4D]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.p}
                  <span className="text-2xl font-normal text-[#B5A05F] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-base leading-7 text-gray-700">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Autor y CTA final */}
      <section className="bg-[#192A4D] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 md:flex-row md:items-center">
          <div className="relative h-32 w-28 flex-shrink-0 overflow-hidden">
            <Image src={autor.retrato} alt={autor.nombre} fill sizes="112px" className="object-cover object-top" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#B5A05F]">Lo atiende</p>
            <p className="font-heading mt-2 text-2xl font-semibold">{autor.nombre}</p>
            <p className="mt-1 text-sm leading-6 text-white/75">{autor.credencial}</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border border-white px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-[#192A4D]">
              Consulta gratuita por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fuentes y otras guías */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold">Fuentes</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {l.fuentes.map((f) => (
                <li key={f.url}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4">{f.label}</a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-gray-600">Información general, no reemplaza la revisión de su caso concreto.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold">Otras guías</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {otras.map((o) => (
                <li key={o.slug}>
                  <a href={`/asesoria/${o.slug}`} className="text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4">{o.h1}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
