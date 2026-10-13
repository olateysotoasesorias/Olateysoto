import { FAQ } from '../../lib/equipo'

export default function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.p,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  }

  return (
    <section id="preguntas" className="bg-white px-6 py-24 md:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Preguntas frecuentes</p>
        <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight text-[#192A4D]">Antes de escribirnos.</h2>

        <div className="mt-12 border-t border-[#192A4D]/10">
          {FAQ.map((f, i) => (
            <details key={f.p} open={i === 0} className="group border-b border-[#192A4D]/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-heading text-xl font-semibold text-[#192A4D] [&::-webkit-details-marker]:hidden">
                {f.p}
                <span className="text-2xl font-normal text-[#B5A05F] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-base leading-7 text-gray-600">{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
