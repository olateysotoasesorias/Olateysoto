const GARANTIAS = [
  { t: 'Primera consulta gratuita', d: 'Revisamos la viabilidad de su caso sin costo.' },
  { t: 'Presupuesto cerrado', d: 'Por escrito y antes de empezar. Sin cobros por hora.' },
  { t: 'Respuesta el mismo día hábil', d: 'Por WhatsApp, con la persona que lleva su caso.' },
  { t: 'Jurisprudencia verificada', d: 'Cada caso se revisa contra los fallos vigentes de la Corte Suprema.' },
]

export default function Garantias() {
  return (
    <section className="bg-[#192A4D] px-6 py-20">
      <ul className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {GARANTIAS.map((g) => (
          <li key={g.t} className="border-t border-[#B5A05F]/60 pt-6">
            <h3 className="font-heading text-xl font-semibold text-white">{g.t}</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">{g.d}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
