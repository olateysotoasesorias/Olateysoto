import { TESTIMONIOS } from '../../lib/equipo'

// Solo se publican testimonios cuyo texto exacto fue aprobado por el cliente.
export default function Testimonios() {
  if (TESTIMONIOS.length === 0) return null

  return (
    <section id="testimonios" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Lo que dicen nuestros clientes</p>
        <ul className="mt-12 grid gap-12 md:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <li key={t.autor}>
              <blockquote className="font-heading text-xl leading-snug text-[#192A4D]">“{t.texto}”</blockquote>
              <p className="mt-5 text-sm text-gray-600">
                {t.autor} · {t.materia}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
