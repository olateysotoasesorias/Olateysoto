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

        {/* Center: logos */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/#inicio">
            <Image
              src="/logo.png"
              alt="Olate & Soto"
              width={40}
              height={40}
              className="object-contain"
            />
          </a>
          <div className="h-7 w-px bg-gray-200" />
          <a href="https://elcriterio.cl" target="_blank" rel="noopener noreferrer" aria-label="El Criterio">
            <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4"  y="4"  width="40" height="40" stroke="rgba(13,27,62,0.25)"  strokeWidth="2"/>
              <rect x="20" y="4"  width="40" height="40" stroke="rgba(13,27,62,0.50)"  strokeWidth="2"/>
              <rect x="4"  y="20" width="40" height="40" stroke="rgba(13,27,62,0.50)"  strokeWidth="2"/>
              <rect x="20" y="20" width="40" height="40" stroke="#b5924c"               strokeWidth="2.5"/>
              <rect x="12" y="12" width="40" height="40" stroke="rgba(13,27,62,0.12)"  strokeWidth="1.5"/>
            </svg>
          </a>
        </div>

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
