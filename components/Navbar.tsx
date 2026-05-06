'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Left: wordmark */}
        <a href="/#inicio" className="font-heading text-lg font-semibold tracking-wide text-[#192A4D] leading-none w-1/3">
          Olate <span className="text-[#B5A05F]">&</span> Soto
        </a>

        {/* Center: logo */}
        <a href="/#inicio" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="Olate & Soto"
            width={44}
            height={44}
            className="object-contain"
          />
        </a>

        {/* Right: nav */}
        <nav className="hidden md:flex items-center justify-end gap-8 text-sm font-medium text-[#4a4a4a] w-1/3">
          <a href="/#equipo" className="hover:text-[#192A4D] transition-colors">La Firma</a>
          <a href="/#areas" className="hover:text-[#192A4D] transition-colors">Asesorías</a>
          <a href="/#academia" className="hover:text-[#192A4D] transition-colors">Academia</a>
          <a href="/#contacto" className="hover:text-[#192A4D] transition-colors">Contacto</a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#192A4D]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#4a4a4a]">
          <a href="/#equipo" onClick={() => setOpen(false)}>La Firma</a>
          <a href="/#areas" onClick={() => setOpen(false)}>Asesorías</a>
          <a href="/#academia" onClick={() => setOpen(false)}>Academia</a>
          <a href="/#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  )
}
