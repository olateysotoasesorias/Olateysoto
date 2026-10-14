import type { Metadata } from 'next'
import { waLink } from '../../lib/contacto'

export const metadata: Metadata = {
  title: 'Redacción jurídica para abogados',
  description:
    'Escritos, recursos, minutas, informes en derecho y estudios de títulos para abogados de todo Chile. Usted patrocina y firma; nosotros redactamos y verificamos cada cita.',
  alternates: { canonical: 'https://olateysoto.cl/abogados' },
}

const SERVICIOS = [
  'Escritos de fondo y de mero trámite',
  'Recursos: reposición, apelación y casación',
  'Minutas de alegato y de puntos de prueba',
  'Informes en derecho',
  'Escrituras societarias e inmobiliarias',
  'Estudios de títulos y posesiones efectivas',
]

const CONDICIONES = [
  { t: 'Tarifa', d: 'Por encargo, acordada antes de empezar.' },
  { t: 'Plazo', d: 'Respuesta inmediata y redacción en el menor tiempo posible.' },
  { t: 'Experiencia', d: 'Trabajamos con abogados del Maule, la Araucanía, la Región Metropolitana y otras regiones.' },
]

export default function AbogadosPage() {
  return (
    <main className="bg-white text-[#192A4D]">
      <section className="bg-[#f7f6f3] px-6 pt-14 pb-16 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Para abogados</p>
          <h1 className="font-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Redacción jurídica para abogados</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Usted patrocina y firma. Nosotros redactamos, revisamos cada cita contra la norma y la jurisprudencia, y entregamos a tiempo.
          </p>
          <a
            href={waLink('johnny', 'Hola, soy abogado/a y me interesa el servicio de redacción.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#192A4D] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-heading text-3xl font-semibold">Qué redactamos</h2>
            <ul className="mt-8 space-y-4">
              {SERVICIOS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-lg leading-8">
                  <span className="mt-4 h-px w-4 flex-shrink-0 bg-[#B5A05F]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-semibold">Condiciones</h2>
            <div className="mt-8 space-y-5">
              {CONDICIONES.map((c) => (
                <div key={c.t} className="border-l-2 border-[#B5A05F] bg-[#f7f6f3] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#776532]">{c.t}</p>
                  <p className="mt-1 text-base leading-7 text-gray-700">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-[#192A4D]/10 pt-8">
          <p className="max-w-3xl text-sm leading-6 text-gray-600">
            Servicio de apoyo profesional a abogados. No constituye patrocinio ni ejercicio de la profesión de abogado.
          </p>
        </div>
      </section>
    </main>
  )
}
