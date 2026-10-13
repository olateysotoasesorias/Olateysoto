import type { Metadata } from 'next'
import { waLink } from '../../lib/contacto'

export const metadata: Metadata = {
  title: 'Redacción jurídica para abogados',
  description: 'Escritos, recursos, minutas, informes en derecho y estudios de títulos para abogados de todo Chile. Usted patrocina y firma; nosotros redactamos y verificamos cada cita.',
}

export default function AbogadosPage() {
  return (
    <main>
      <section className="bg-white px-6 pt-36 pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Para abogados</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold text-[#192A4D]">Redacción jurídica para abogados</h1>
          <div className="mt-px mb-8 h-0.5 w-12 bg-[#B5A05F]" />
          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            Usted patrocina y firma. Nosotros redactamos, revisamos cada cita contra la norma y la jurisprudencia, y entregamos a tiempo.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <ul className="space-y-4">
              {[
                'Escritos de fondo y de mero trámite',
                'Recursos: reposición, apelación y casación',
                'Minutas de alegato y de puntos de prueba',
                'Informes en derecho',
                'Escrituras societarias e inmobiliarias',
                'Estudios de títulos y posesiones efectivas',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-base text-[#192A4D]">
                  <span className="mt-3 h-px w-4 flex-shrink-0 bg-[#B5A05F]" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              {[
                { t: 'Tarifa', d: 'Por encargo, acordada antes de empezar.' },
                { t: 'Plazo', d: 'Respuesta inmediata y redacción en el menor tiempo posible.' },
                { t: 'Experiencia', d: 'Trabajamos con abogados del Maule, la Araucanía, la Región Metropolitana y otras regiones.' },
              ].map((c) => (
                <div key={c.t} className="border-l-2 border-[#B5A05F] bg-[#f7f6f3] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#776532]">{c.t}</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <a
              href={waLink('johnny', 'Hola, soy abogado/a y me interesa el servicio de redacción.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#192A4D] px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#B5A05F] hover:text-[#192A4D]"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <p className="mt-10 text-sm leading-6 text-gray-500">
            Servicio de apoyo profesional a abogados. No constituye patrocinio ni ejercicio de la profesión de abogado.
          </p>
        </div>
      </section>
    </main>
  )
}
