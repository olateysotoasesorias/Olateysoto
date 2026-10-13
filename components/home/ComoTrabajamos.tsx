import { AVISO_PATROCINIO } from '../../lib/contacto'

const PASOS = [
  { t: 'Nos escribe', d: 'Por WhatsApp o por el formulario. Le respondemos el mismo día hábil.' },
  { t: 'Consulta gratuita', d: 'Revisamos si su caso es viable y qué camino conviene. Si decide seguir, le entregamos un presupuesto cerrado y por escrito.' },
  { t: 'Lo acompañamos', d: 'Preparamos cada paso y le informamos cada avance hasta cerrar su caso.' },
]

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="bg-[#f7f6f3] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Cómo trabajamos</p>
        <h2 className="font-heading mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#192A4D]">
          Sin sorpresas: sabe qué haremos y cuánto cuesta antes de empezar.
        </h2>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {PASOS.map((p, i) => (
            <li key={p.t}>
              <span className="font-heading text-6xl font-semibold leading-none text-[#B5A05F]">{i + 1}</span>
              <h3 className="font-heading mt-6 text-2xl font-semibold text-[#192A4D]">{p.t}</h3>
              <p className="mt-3 text-base leading-7 text-gray-600">{p.d}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 max-w-3xl border-l-2 border-[#B5A05F] pl-5 text-base leading-7 text-[#192A4D]">
          {AVISO_PATROCINIO}
        </p>
      </div>
    </section>
  )
}
