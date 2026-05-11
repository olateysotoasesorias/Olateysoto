'use client'
import { useState } from 'react'

export default function BioExpandable({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative">
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          expanded ? 'max-h-[600px]' : 'max-h-[6.5rem]'
        }`}
      >
        {children}
      </div>

      {/* Fade + botón */}
      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
          <div className="h-16 w-full bg-gradient-to-t from-[#f7f6f3] to-transparent" />
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? 'Ver menos' : 'Ver más'}
        className="group mt-1 flex w-full flex-col items-center gap-0.5 pt-1"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#B5A05F]/70 transition-opacity group-hover:text-[#B5A05F]">
          {expanded ? 'Ver menos' : 'Ver más'}
        </span>
        <svg
          viewBox="0 0 40 20"
          fill="none"
          className={`w-10 text-[#B5A05F] transition-all duration-500 group-hover:text-[#c9b472] ${
            expanded ? 'rotate-180' : ''
          }`}
        >
          <path
            d="M2 4 L20 16 L38 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
