import Image from 'next/image'
import { waLink } from '../../lib/contacto'
import { EQUIPO } from '../../lib/equipo'

// Materias que se muestran bajo cada botón (más cortas que la lista completa).
const BAJO_BOTON: Record<string, string> = {
  johnny: 'Fraude bancario, daños, propiedades, deudas y empresas',
  constanza: 'Pensión de alimentos, divorcio, violencia intrafamiliar y adulto mayor',
}

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#f7f6f3] px-6 pt-8 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Retratos individuales: arriba en móvil, a la derecha en escritorio */}
        <div className="order-first md:order-last">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {EQUIPO.map((p) => (
              <figure key={p.id}>
                <div className="relative aspect-square overflow-hidden bg-[#ebe9e4] md:aspect-[3/4]">
                  <Image
                    src={p.retrato}
                    alt={`${p.nombre}, ${p.cargo.toLowerCase()} en Talca`}
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 22vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-5">
                  <span className="font-heading block text-base font-semibold text-[#192A4D]">{p.nombre}</span>
                  <span className="block text-[#192A4D]/70">{p.cargo}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Asesoría jurídica · Talca y el Maule</p>
          <h1 className="font-heading mt-6 text-[2rem] font-semibold leading-[1.15] text-[#192A4D] sm:text-5xl">
            ¿Una herencia, una pensión de alimentos o una deuda que no le pagan?
          </h1>
          <p className="font-heading mt-5 text-xl leading-snug text-[#192A4D]/80 sm:text-3xl">
            Le explicamos qué hacer y cuánto cuesta, antes de empezar.
          </p>
          <div className="mt-8 hidden h-px w-16 bg-[#B5A05F] md:block" />
          <p className="order-last mt-6 max-w-xl text-lg leading-8 text-gray-600 md:order-none md:mt-8">
            Lo atienden personalmente Johnny Olate y Constanza Soto. La primera consulta es gratuita: revisamos si su caso es viable. Si lo es, le entregamos un presupuesto cerrado y por escrito. Respondemos el mismo día hábil.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
            {EQUIPO.map((p) => (
              <div key={p.id}>
                <a
                  href={waLink(p.id, p.mensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#192A4D] px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-[#1e3460]"
                >
                  Escribir a {p.nombre.split(' ')[0]} por WhatsApp
                </a>
                <p className="mt-2 text-xs leading-5 text-[#192A4D]/70">{BAJO_BOTON[p.id]}</p>
              </div>
            ))}
          </div>
          <p className="order-last mt-4 text-sm text-[#192A4D]/70 md:mt-6">
            ¿Herencia o posesión efectiva? Cualquiera de los dos puede atenderle.{' '}
            <a href="#fundadores" className="underline decoration-[#B5A05F]/60 underline-offset-4 hover:text-[#192A4D]">Conózcanos</a>
          </p>
        </div>
      </div>
    </section>
  )
}
