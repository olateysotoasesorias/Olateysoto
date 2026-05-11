'use client'
import { useState } from 'react'

export default function BioExpandable({
  preview,
  children,
}: {
  preview: React.ReactNode
  children: React.ReactNode
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mt-4">
      {/* Primer párrafo — siempre visible */}
      {preview}

      {/* Resto — se expande */}
      <div
        style={{ maxHeight: expanded ? '800px' : '0px' }}
        className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
      >
        {children}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="group mt-3 flex w-full flex-col items-center gap-1 py-1"
      >
        <span
          style={{ letterSpacing: '0.28em' }}
          className="text-[9px] uppercase text-[#B5A05F]/40 transition-all duration-300 group-hover:text-[#B5A05F]"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </span>
        <svg
          viewBox="0 0 56 14"
          fill="none"
          className={`w-14 transition-all duration-500 ${
            expanded
              ? 'rotate-180 text-[#B5A05F]'
              : 'text-[#B5A05F]/30 group-hover:text-[#B5A05F] group-hover:drop-shadow-[0_0_6px_rgba(181,160,95,0.6)]'
          }`}
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
