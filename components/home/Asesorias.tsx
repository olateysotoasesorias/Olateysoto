import { waLink } from '../../lib/contacto'
import { ASESORIAS, EQUIPO } from '../../lib/equipo'

const nombreDe = (id: string) => EQUIPO.find((p) => p.id === id)?.nombre ?? ''

export default function Asesorias() {
  return (
    <section id="asesorias" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Asesorías</p>
        <h2 className="font-heading mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#192A4D]">
          En qué podemos ayudarle.
        </h2>

        <ul className="mt-10 grid border-t md:mt-16 border-[#192A4D]/10 md:grid-cols-2 md:gap-x-16">
          {ASESORIAS.map((a) => {
            const unico = a.responsables.length === 1 ? a.responsables[0] : null
            return (
              <li key={a.titulo} className="border-b border-[#192A4D]/10 py-5 md:py-8">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">
                  {a.guia ? <a href={a.guia} className="hover:text-[#776532]">{a.titulo}</a> : a.titulo}
                </h3>
                <p className="mt-2 line-clamp-2 text-base leading-7 text-gray-600 md:line-clamp-none">{a.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="text-[#192A4D]/70">
                    Lo atiende {a.responsables.map(nombreDe).join(' o ')}
                  </span>
                  {unico ? (
                    <a
                      href={waLink(unico, a.mensaje)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]"
                    >
                      Consultar gratis →
                    </a>
                  ) : (
                    a.responsables.map((id) => (
                      <a
                        key={id}
                        href={waLink(id, a.mensaje)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]"
                      >
                        Consultar a {nombreDe(id).split(' ')[0]} →
                      </a>
                    ))
                  )}
                  {a.guia && (
                    <a href={a.guia} className="text-[#192A4D]/70 underline decoration-[#192A4D]/30 underline-offset-4 hover:text-[#192A4D]">
                      Leer la guía
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
