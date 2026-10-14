'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { GA_ID } from '../lib/analitica'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const PERSONAS: Record<string, string> = { '56957688199': 'johnny', '56967866353': 'constanza' }

// Google Analytics 4 con eventos de contacto. Solo se carga en producción.
// Sin datos de publicidad: ad_storage, ad_user_data y ad_personalization quedan denegados.
export default function GoogleAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest('a')
      if (!a || typeof window.gtag !== 'function') return
      const href = a.getAttribute('href') ?? ''
      const params: Record<string, string> = {
        pagina: window.location.pathname,
        texto: (a.textContent ?? '').trim().slice(0, 80),
      }
      let evento = ''
      const wa = href.match(/wa\.me\/(\d+)/)
      if (wa) {
        evento = 'whatsapp_click'
        params.persona = PERSONAS[wa[1]] ?? wa[1]
      } else if (href.startsWith('tel:')) {
        evento = 'phone_click'
      } else if (href.startsWith('mailto:')) {
        evento = 'email_click'
      }
      if (evento) window.gtag('event', evento, params)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  )
}
