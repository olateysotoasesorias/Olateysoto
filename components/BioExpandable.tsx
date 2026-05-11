'use client'
import { useState } from 'react'

export default function BioExpandable({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative mt-4">
      {/* Texto con altura controlada */}
      <div
        style={{ maxHeight: expanded ? '800px' : '5.6rem' }}
        className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
      >
        {children}
      </div>

      {/* Degradado — pointer-events-none para no bloquear el botón */}
      {!expanded && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to top, #f7f6f3 30%, transparent 100%)' }}
        />
      )}

      {/* Botón "ver más / ver menos" */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="relative mt-3 flex w-full flex-col items-center gap-1 overflow-hidden py-1 bio-shimmer"
      >
        <span
          style={{ letterSpacing: '0.28em' }}
          className="text-[9px] uppercase text-[#B5A05F]/60 transition-colors duration-300 hover:text-[#B5A05F]"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </span>

        {/* Flecha amplia */}
        <svg
          viewBox="0 0 56 14"
          fill="none"
          className={`w-14 text-[#B5A05F] transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`}
        >
          <path
            d="M2 2 L28 12 L54 2"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
