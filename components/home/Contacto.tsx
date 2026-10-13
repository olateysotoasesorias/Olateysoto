import Image from 'next/image'
import ContactForm from '../ContactForm'
import { waLink } from '../../lib/contacto'
import { EQUIPO } from '../../lib/equipo'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-[#f7f6f3] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Contacto</p>
        <h2 className="font-heading mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#192A4D]">
          Cuéntenos su caso. La primera consulta es gratuita.
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">Le respondemos el mismo día hábil.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {EQUIPO.map((p) => (
            <div key={p.id} className="flex gap-6 bg-white p-6">
              <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden">
                <Image src={p.retrato} alt="" fill sizes="80px" className="object-cover object-top" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">{p.nombre}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{p.atiende.slice(0, 3).join(' · ')}</p>
                <a
                  href={waLink(p.id, p.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#192A4D] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e3460]"
                >
                  Escribir a {p.nombre.split(' ')[0]} por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white p-8 md:p-10">
          <p className="text-sm text-[#192A4D]/70">¿Prefiere que lo contactemos nosotros? Déjenos sus datos:</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
