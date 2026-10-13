import Image from 'next/image'
import WhatsAppChooser from '../WhatsAppChooser'

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#f7f6f3] px-6 pt-8 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
        {/* Retrato: arriba en móvil, a la derecha en escritorio */}
        <figure className="order-first md:order-last">
          <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden md:aspect-[4/5]">
            <Image
              src="/equipo/Johnny y Coni IA.jpg"
              alt="Johnny Olate y Constanza Soto, asesores jurídicos en Talca"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-[center_15%] md:object-top"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-center gap-3 text-sm text-[#192A4D]/70 md:justify-start">
            <span className="h-px w-6 bg-[#B5A05F]" />
            Johnny Olate · Constanza Soto
          </figcaption>
        </figure>

        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Asesoría jurídica · Talca y el Maule</p>
          <h1 className="font-heading mt-6 text-[2rem] font-semibold leading-[1.15] text-[#192A4D] sm:text-5xl">
            ¿Una herencia, una pensión de alimentos o una deuda que no le pagan?
          </h1>
          <p className="font-heading mt-5 text-xl leading-snug text-[#192A4D]/80 sm:text-3xl">
            Le explicamos qué hacer y cuánto cuesta, antes de empezar.
          </p>
          <div className="mt-8 hidden h-px w-16 bg-[#B5A05F] md:block" />
          <p className="order-last mt-8 max-w-xl text-lg leading-8 text-gray-600 md:order-none">
            Lo atienden personalmente Johnny Olate y Constanza Soto. La primera consulta es gratuita: revisamos si su caso es viable. Si lo es, le entregamos un presupuesto cerrado y por escrito. Respondemos el mismo día hábil.
          </p>
          <div className="mt-8 flex flex-col items-start md:mt-10 gap-5 sm:flex-row sm:items-center">
            <WhatsAppChooser
              label="Escríbanos por WhatsApp"
              buttonClass="flex items-center gap-3 bg-[#192A4D] px-7 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#1e3460]"
              menuClass="absolute left-0 top-full mt-3"
            />
            <a href="#fundadores" className="text-sm text-[#192A4D]/70 underline decoration-[#B5A05F]/60 underline-offset-4 hover:text-[#192A4D]">
              Conózcanos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
