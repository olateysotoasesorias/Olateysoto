'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { waLink } from '../lib/contacto'
import WhatsAppChooser, { WaIcon } from './WhatsAppChooser'

const botonClass =
  'flex items-center gap-2.5 bg-[#192A4D] border border-[#B5A05F]/20 px-4 py-3 text-xs uppercase tracking-[0.2em] font-medium text-white/90 shadow-lg hover:border-[#B5A05F] hover:bg-[#1e3460] transition-all duration-300'

// En los perfiles y artículos de cada fundador, el botón va directo a su número.
// En el resto del sitio deja elegir con quién hablar.
export default function WhatsAppButton() {
  const pathname = usePathname() ?? '/'
  // En la portada el hero ya tiene su botón: el flotante aparece al dejar el hero.
  const [visible, setVisible] = useState(pathname !== '/')

  useEffect(() => {
    if (pathname !== '/') return setVisible(true)
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const directo = pathname.startsWith('/constanza_soto')
    ? waLink('constanza')
    : pathname.startsWith('/johnny_olate')
      ? waLink('johnny')
      : null

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {directo ? (
        <a href={directo} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className={botonClass}>
          <WaIcon className="w-5 h-5 text-[#B5A05F] flex-shrink-0" />
          <span>Conversemos</span>
        </a>
      ) : (
        <WhatsAppChooser label="Conversemos" buttonClass={botonClass} menuClass="absolute bottom-full right-0 mb-3" />
      )}
    </div>
  )
}
