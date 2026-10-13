import { CASOS } from '../../lib/equipo'

export default function Casos() {
  return (
    <section id="casos" className="bg-[#f7f6f3] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Casos que hemos acompañado</p>
        <h2 className="font-heading mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#192A4D]">
          Personas de Talca que hoy tienen su problema resuelto.
        </h2>

        <ul className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {CASOS.map((c) => (
            <li key={c.materia} className="border-t border-[#B5A05F] pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#776532]">{c.materia}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{c.situacion}</p>
              <p className="font-heading mt-4 text-lg leading-snug text-[#192A4D]">{c.resultado}</p>
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-3xl text-sm leading-6 text-gray-600">
          Casos reales, publicados sin datos que permitan identificar a las personas. Cada caso es distinto: un resultado anterior no asegura el mismo resultado en otro.
        </p>
      </div>
    </section>
  )
}
