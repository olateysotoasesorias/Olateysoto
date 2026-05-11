import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Olate & Soto — Asesores Jurídicos Talca',
    template: '%s — Olate & Soto',
  },
  description: 'Estudio jurídico en Talca especializado en litigación civil, derecho de familia y asesoría corporativa. Rigor técnico y cercanía para personas y empresas del Maule.',
  metadataBase: new URL('https://olateysoto.cl'),
  openGraph: {
    siteName: 'Olate & Soto',
    locale: 'es_CL',
    type: 'website',
    title: 'Olate & Soto — Asesores Jurídicos Talca',
    description: 'Estudio jurídico en Talca especializado en litigación civil, derecho de familia y asesoría corporativa. Rigor técnico y cercanía para personas y empresas del Maule.',
    url: 'https://olateysoto.cl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olate & Soto — Asesores Jurídicos Talca',
    description: 'Estudio jurídico en Talca especializado en litigación civil, derecho de familia y asesoría corporativa.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background-white text-neutral-gray antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
