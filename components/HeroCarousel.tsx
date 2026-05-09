'use client'

import { useState, useEffect } from 'react'

const slides = [
  { src: '/hero.jpg', position: 'center' },
  { src: '/equipo/Johnny y Coni IA.jpg', position: 'center 25%' },
]

export default function HeroCarousel({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slide.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: slide.position,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[#192A4D]/80" />

      {children}

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === current ? 'bg-[#B5A05F]' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
