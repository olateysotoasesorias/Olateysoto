import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import HeroCarousel from '../components/HeroCarousel'

export default function HomePage() {
  return (
    <main className="bg-white text-[#1a1a2e]">

      {/* HERO */}
      <HeroCarousel>
        <div className="relative z-10 px-6 text-center max-w-3xl mx-auto">
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-[#B5A05F]">
            Talca · Región del Maule
          </p>
          <h1 className="font-heading text-6xl font-semibold tracking-[0.1em] text-white sm:text-7xl">
            OLATE <span className="text-[#B5A05F]">&</span> SOTO
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50">
            Asesores Jurídicos
          </p>
          <div className="mt-8 h-px w-16 bg-[#B5A05F] mx-auto" />
          <p className="mt-8 text-base leading-7 text-white/70 max-w-lg mx-auto">
            Asesoría legal con rigor, experiencia y cercanía para personas y empresas de la Región del Maule.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="bg-[#B5A05F] px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#192A4D] font-semibold hover:bg-[#c9b472] transition-colors"
            >
              Primera consulta
            </a>
            <a
              href="#areas"
              className="border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white/80 hover:border-[#B5A05F] hover:text-[#B5A05F] transition-colors"
            >
              Áreas de práctica
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-5 h-5 text-white/30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </HeroCarousel>

      {/* PILARES */}
      <section className="bg-[#f7f6f3] px-6 py-20">
        <div className="mx-auto max-w-5xl grid grid-cols-2 gap-px bg-gray-200 md:grid-cols-4">
          {[
            { titulo: 'Excelencia', desc: 'Formación jurídica de alto nivel aplicada a cada caso.' },
            { titulo: 'Confianza', desc: 'Estándares éticos que guían cada asesoría.' },
            { titulo: 'Cercanía', desc: 'Trato directo, claro y humano con nuestros clientes.' },
            { titulo: 'Resultados', desc: 'Enfoque estratégico orientado a soluciones concretas.' },
          ].map((p) => (
            <div key={p.titulo} className="bg-white px-8 py-10">
              <div className="mb-4 h-0.5 w-8 bg-[#B5A05F]" />
              <h3 className="font-heading text-lg font-semibold text-[#192A4D]">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B5A05F]">Especialidades</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Áreas de práctica</h2>
          <div className="mt-px mb-12 h-0.5 w-12 bg-[#B5A05F]" />

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                area: 'Derecho de Familia',
                desc: 'Asesoría empática y profesional en divorcios, pensiones de alimentos, cuidado personal y mediación. Acompañamos a las familias con claridad y metas de protección duradera.',
                items: ['Divorcios y separaciones', 'Pensiones de alimentos', 'Cuidado personal y tuición', 'Mediación familiar'],
              },
              {
                area: 'Asesoría Pyme, Tributaria y Civil',
                desc: 'Consultoría estratégica para empresas que buscan minimizar riesgos y fortalecer su posición legal. Redacción de contratos, cobranza judicial y constitución de sociedades.',
                items: ['Redacción de contratos', 'Constitución de sociedades', 'Cobranza judicial', 'Protección al consumidor'],
              },
            ].map((a) => (
              <div key={a.area} className="border border-gray-100 p-8 hover:border-[#B5A05F]/40 transition-colors">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">{a.area}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-500">{a.desc}</p>
                <ul className="mt-6 space-y-2">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="h-px w-4 bg-[#B5A05F] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="bg-[#f7f6f3] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B5A05F]">Quiénes somos</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Los socios</h2>
          <div className="mt-px mb-12 h-0.5 w-12 bg-[#B5A05F]" />

          <div className="grid gap-12 md:grid-cols-2">

            {/* Johnny Olate */}
            <div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/equipo/olate.jpg"
                  alt="Johnny Olate, asesor jurídico"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">Johnny Olate</h3>
                <a
                  href="https://www.linkedin.com/in/johnny-olate-rojas-b16313237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Johnny Olate"
                  className="text-[#192A4D]/40 hover:text-[#0077B5] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="/johnnyolate"
                  aria-label="Blog de Johnny Olate"
                  className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#192A4D]/40 hover:text-[#B5A05F] transition-colors"
                >
                  <span>Blog</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </a>
              </div>
              <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#B5A05F]">Socio Fundador</p>
              <div className="mt-3 h-px w-8 bg-[#B5A05F]" />
              <p className="mt-4 text-sm leading-7 text-gray-500">
                Asesor jurídico y director del área civil y comercial. Estudió Derecho en la Pontificia Universidad Católica de Chile y actualmente es egresado por la Universidad de Talca. Cuenta con una sólida trayectoria práctica en la tramitación de causas y la asesoría estratégica a personas, pequeñas y medianas empresas. Su práctica se caracteriza por el rigor técnico, la eficiencia procesal y la aplicación de LegalTech para optimizar la gestión legal. Se enfoca en la redacción de contratos, estructuración de sociedades y litigación civil, aportando una visión resolutiva orientada a la protección del patrimonio de sus clientes.
              </p>
            </div>

            {/* Constanza Soto */}
            <div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <Image
                  src="/equipo/soto.png"
                  alt="Constanza Soto, asesora jurídica"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-semibold text-[#192A4D]">Constanza Soto</h3>
                <a
                  href="https://www.linkedin.com/in/constanza-soto-guti%C3%A9rrez-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Constanza Soto"
                  className="text-[#192A4D]/40 hover:text-[#0077B5] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#B5A05F]">Socia Fundadora</p>
              <div className="mt-3 h-px w-8 bg-[#B5A05F]" />
              <p className="mt-4 text-sm leading-7 text-gray-500">
                Asesora jurídica y directora del área de familia. Egresada en Derecho por la Universidad de Talca. Con marcada vocación por la resolución de conflictos, centra su práctica en brindar un acompañamiento legal riguroso y profundamente humano. Su especialización comprende procesos complejos de divorcio, pensiones de alimentos, cuidado personal y medidas de protección. Destaca por su capacidad para comunicar escenarios jurídicos con claridad y empatía, priorizando la estabilidad emocional de sus representados y el interés superior de la infancia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B5A05F]">Recursos digitales</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Herramientas para su caso</h2>
          <div className="mt-px mb-12 h-0.5 w-12 bg-[#B5A05F]" />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-gray-100 p-8 hover:border-[#B5A05F]/40 transition-colors">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B5A05F] font-medium">Guía gratuita</span>
              <h3 className="font-heading mt-4 text-lg font-semibold text-[#192A4D]">
                Kit para el divorcio
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Los pasos esenciales, documentación necesaria y derechos que debe conocer antes de iniciar un proceso de divorcio en Chile.
              </p>
              <a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#192A4D] font-medium hover:text-[#B5A05F] transition-colors">
                Solicitar <span>→</span>
              </a>
            </div>
            <div className="border border-dashed border-gray-200 p-8 flex items-center justify-center">
              <p className="text-sm text-gray-300 text-center">Próximamente más recursos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="group bg-[#192A4D] px-6 py-24 transition-colors duration-700 hover:bg-[#1e3460]">
        <div className="mx-auto max-w-3xl bg-white p-10 border-l-2 border-transparent group-hover:border-[#B5A05F] group-hover:pl-14 transition-all duration-500">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8a7640]">Contacto</p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-[#192A4D]">Primera consulta</h2>
          <div className="mt-px mb-10 h-0.5 w-12 bg-[#B5A05F] group-hover:w-24 transition-all duration-500" />

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111827] px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-lg font-semibold text-white/80">
            Olate <span className="text-[#B5A05F]">&</span> Soto
          </span>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Olate & Soto Asesores Jurídicos · Talca, Chile</p>
          <a href="/johnnyolate" className="text-xs text-[#B5A05F]/60 hover:text-[#B5A05F] transition-colors uppercase tracking-widest">
            Blog
          </a>
        </div>
      </footer>

    </main>
  )
}
