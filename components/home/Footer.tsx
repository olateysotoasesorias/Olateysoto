import { AVISO_PATROCINIO, waLink } from '../../lib/contacto'
import { EQUIPO } from '../../lib/equipo'

const linkClass = 'text-sm text-white/75 transition-colors hover:text-[#B5A05F]'

export default function Footer() {
  return (
    <footer className="bg-[#192A4D] px-6 pt-16 pb-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-semibold">
            Olate <span className="text-[#B5A05F]">&</span> Soto
          </p>
          <p className="mt-2 text-sm text-white/75">Asesoría jurídica · Talca y el Maule · En línea en todo Chile</p>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/75">{AVISO_PATROCINIO}</p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Pie de página">
          {EQUIPO.map((p) => (
            <a key={p.id} href={p.perfil} className={linkClass}>{p.nombre}</a>
          ))}
          <a href="/academia" className={linkClass}>Academia</a>
          <a href="/abogados" className={linkClass}>Para abogados: redacción jurídica</a>
          <a href="https://elcriterio.cl" target="_blank" rel="noopener noreferrer" className={linkClass}>El Criterio</a>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">WhatsApp</p>
          <a href={waLink('johnny')} target="_blank" rel="noopener noreferrer" className={linkClass}>Johnny Olate · +56 9 5768 8199</a>
          <a href={waLink('constanza')} target="_blank" rel="noopener noreferrer" className={linkClass}>Constanza Soto · +56 9 6786 6353</a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl items-center justify-between border-t border-white/10 pt-6">
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Olate & Soto Asesores Jurídicos</p>
        {/* Enlace de acceso al panel — invisible */}
        <a href="/admin" className="text-[#192A4D] text-[1px] select-none" tabIndex={-1} aria-hidden="true">·</a>
      </div>
    </footer>
  )
}
