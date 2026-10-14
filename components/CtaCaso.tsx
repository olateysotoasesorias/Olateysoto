import { waLink, type Fundador } from '../lib/contacto'
import { EQUIPO } from '../lib/equipo'
import { LANDINGS } from '../lib/landings'

// Categorías de reflexión: ahí no se pregunta por "un caso así", solo se ofrece orientación.
const REFLEXION = ['Estoicismo', 'Historia del Derecho']

export default function CtaCaso({ autor, categoria, titulo }: { autor: Fundador; categoria: string; titulo: string }) {
  const p = EQUIPO.find((x) => x.id === autor)!
  const nombre = p.nombre.split(' ')[0]
  const reflexion = REFLEXION.includes(categoria)

  return (
    <section className="mt-16 border-l-2 border-[#B5A05F] bg-[#f7f6f3] p-8 md:p-10">
      <h2 className="font-heading text-2xl font-semibold text-[#192A4D]">
        {reflexion ? '¿Necesita orientación jurídica?' : '¿Tiene un caso así?'}
      </h2>
      <p className="mt-3 text-base leading-7 text-gray-700">
        La primera consulta es gratuita: revisamos si su caso es viable y, si lo es, le entregamos un presupuesto cerrado y por escrito. Respondemos el mismo día hábil.
      </p>
      <a
        href={waLink(autor, `Hola ${nombre}, leí su artículo «${titulo}» y quiero consultar por mi caso.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-[#192A4D] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]"
      >
        Escribir a {nombre} por WhatsApp
      </a>
      <p className="mt-8 text-sm text-[#192A4D]/70">Guías prácticas</p>
      <ul className="mt-2 space-y-1.5 text-sm">
        {LANDINGS.map((l) => (
          <li key={l.slug}>
            <a href={`/asesoria/${l.slug}`} className="text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]">
              {l.h1}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
