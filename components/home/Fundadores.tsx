import Image from 'next/image'
import { waLink } from '../../lib/contacto'
import { EQUIPO } from '../../lib/equipo'

export default function Fundadores() {
  return (
    <section id="fundadores" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Quiénes lo atienden</p>
        <h2 className="font-heading mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#192A4D]">
          Su caso lo lleva una persona con nombre y apellido.
        </h2>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
          {EQUIPO.map((p) => (
            <article key={p.id}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f7f6f3]">
                <Image
                  src={p.retrato}
                  alt={`${p.nombre}, ${p.cargo.toLowerCase()} en Talca`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-heading mt-8 text-3xl font-semibold text-[#192A4D]">{p.nombre}</h3>
              <p className="mt-2 text-sm leading-6 text-[#776532]">{p.credencial}</p>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#192A4D]/70">Atiende</p>
              <ul className="mt-3 space-y-2">
                {p.atiende.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-base text-[#192A4D]">
                    <span className="mt-3 h-px w-4 flex-shrink-0 bg-[#B5A05F]" />
                    {a}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-7 text-gray-600">{p.bio}</p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={waLink(p.id, p.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#192A4D] px-6 py-3 text-sm font-medium text-[#192A4D] transition-colors hover:bg-[#192A4D] hover:text-white"
                >
                  Escribirle a {p.nombre.split(' ')[0]}
                </a>
                <a href={p.perfil} className="text-sm text-[#192A4D]/70 underline decoration-[#B5A05F]/60 underline-offset-4 hover:text-[#192A4D]">
                  Ver perfil y artículos
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
