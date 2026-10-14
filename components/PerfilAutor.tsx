import Image from 'next/image'
import type { ReactNode } from 'react'
import { AVISO_PATROCINIO, waLink } from '../lib/contacto'
import { ASESORIAS, CASOS, TESTIMONIOS, type Persona } from '../lib/equipo'
import { formatDate, type Post } from '../lib/blog'

const eyebrow = 'text-xs uppercase tracking-[0.35em] text-[#776532]'

// Página de autor premium: misma estética que la portada, centrada en una persona.
export default function PerfilAutor({ p, posts, extra }: { p: Persona; posts: Post[]; extra?: ReactNode }) {
  const nombre = p.nombre.split(' ')[0]
  const wa = waLink(p.id, p.mensaje)
  const asesorias = ASESORIAS.filter((a) => a.responsables.includes(p.id))
  const casos = CASOS.filter((c) => c.autor === p.id)
  const testimonios = TESTIMONIOS.filter((t) => t.fundador === p.id)

  return (
    <main className="bg-white text-[#192A4D]">
      {/* Retrato y presentación */}
      <section className="bg-[#f7f6f3] px-6 pt-10 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden md:max-w-none">
            <Image src={p.retrato} alt={`${p.nombre}, ${p.cargo.toLowerCase()} en Talca`} fill priority sizes="(max-width: 768px) 90vw, 40vw" className="object-cover object-top" />
          </div>
          <div>
            <p className={eyebrow}>{p.cargo} · Talca y el Maule</p>
            <h1 className="font-heading mt-5 text-5xl font-semibold leading-tight sm:text-6xl">{p.nombre}</h1>
            <p className="mt-4 text-base leading-7 text-[#776532]">{p.credencial}</p>
            <div className="mt-8 space-y-4">
              {p.bioLarga.map((b) => (
                <p key={b} className="text-lg leading-8 text-gray-700">{b}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="bg-[#192A4D] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]">
                Consulta gratuita con {nombre} por WhatsApp
              </a>
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#192A4D]/70 underline decoration-[#B5A05F]/60 underline-offset-4 hover:text-[#192A4D]">
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-sm text-[#192A4D]/70">Respuesta el mismo día hábil.</p>
          </div>
        </div>
      </section>

      {/* Qué atiende */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Qué atiende</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight">En qué le puede ayudar {nombre}.</h2>
          <ul className="mt-12 grid border-t border-[#192A4D]/10 md:grid-cols-2 md:gap-x-16">
            {asesorias.map((a) => (
              <li key={a.titulo} className="border-b border-[#192A4D]/10 py-7">
                <h3 className="font-heading text-xl font-semibold">
                  {a.guia ? <a href={a.guia} className="hover:text-[#776532]">{a.titulo}</a> : a.titulo}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{a.desc}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <a href={waLink(p.id, a.mensaje)} target="_blank" rel="noopener noreferrer" className="underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]">
                    Consultar gratis →
                  </a>
                  {a.guia && (
                    <a href={a.guia} className="text-[#192A4D]/70 underline decoration-[#192A4D]/30 underline-offset-4 hover:text-[#192A4D]">Leer la guía</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl border-l-2 border-[#B5A05F] pl-5 text-base leading-7">{AVISO_PATROCINIO}</p>
        </div>
      </section>

      {/* Casos y testimonios */}
      {(casos.length > 0 || testimonios.length > 0) && (
        <section className="bg-[#f7f6f3] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className={eyebrow}>Casos que ha acompañado</p>
            <ul className="mt-10 grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {casos.map((c) => (
                <li key={c.materia} className="border-t border-[#B5A05F] pt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#776532]">{c.materia}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600">{c.situacion}</p>
                  <p className="font-heading mt-3 text-lg leading-snug">{c.resultado}</p>
                </li>
              ))}
            </ul>
            {testimonios.length > 0 && (
              <ul className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
                {testimonios.map((t) => (
                  <li key={t.materia} className="border-l-2 border-[#B5A05F] pl-6">
                    <blockquote className="font-heading text-xl leading-snug">“{t.texto}”</blockquote>
                    <p className="mt-4 text-sm text-gray-600">{t.autor} · {t.materia}</p>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-12 text-sm text-gray-600">Casos reales, publicados sin datos que permitan identificar a las personas. Un resultado anterior no asegura el mismo resultado en otro caso.</p>
          </div>
        </section>
      )}

      {extra}

      {/* Artículos */}
      {posts.length > 0 && (
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className={eyebrow}>Artículos</p>
            <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight">Lo que escribe {nombre}.</h2>
            <ul className="mt-12 border-t border-[#192A4D]/10">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-[#192A4D]/10">
                  <a href={`${p.perfil}/${post.slug}`} className="group grid gap-2 py-7 md:grid-cols-[12rem_1fr] md:gap-10">
                    <p className="text-sm text-[#192A4D]/70">
                      {post.categoria}
                      <span className="block">{formatDate(post.date)}</span>
                    </p>
                    <div>
                      <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-[#776532]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-base leading-7 text-gray-600">{post.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-[#f7f6f3] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold leading-tight">¿Quiere que {nombre} revise su caso?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">La primera consulta es gratuita. Si su caso es viable, recibe un presupuesto cerrado y por escrito.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-[#192A4D] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]">
            Escribir a {nombre} por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
