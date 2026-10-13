'use client'

import { useState } from 'react'
import { EQUIPO } from '../lib/equipo'
import WhatsAppChooser from './WhatsAppChooser'

const LINKS = [
  ...EQUIPO.map((p) => ({ href: p.perfil, label: p.nombre })),
  { href: '/#asesorias', label: 'Asesorías' },
  { href: '/academia', label: 'Academia' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#192A4D]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-heading text-xl font-semibold tracking-wide text-[#192A4D]">
          Olate <span className="text-[#B5A05F]">&</span> Soto
        </a>

        <nav className="hidden items-center gap-7 whitespace-nowrap text-sm text-[#192A4D]/80 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[#192A4D]">{l.label}</a>
          ))}
          <WhatsAppChooser
            label="Escríbanos"
            buttonClass="flex items-center gap-2 border border-[#192A4D] px-4 py-2 text-sm text-[#192A4D] transition-colors hover:bg-[#192A4D] hover:text-white"
            iconClass="h-4 w-4 flex-shrink-0"
            menuClass="absolute right-0 top-full mt-3 whitespace-normal"
          />
        </nav>

        <button className="text-[#192A4D] lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú" aria-expanded={open}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-5 border-t border-[#192A4D]/10 bg-white px-6 py-6 text-base text-[#192A4D] lg:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
