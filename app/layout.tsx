import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import Footer from '../components/home/Footer'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '../components/GoogleAnalytics'
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
    default: 'Olate & Soto — Asesoría jurídica en Talca | Johnny Olate · Constanza Soto',
    template: '%s — Olate & Soto',
  },
  description: 'Asesoría jurídica en Talca y el Maule con Johnny Olate y Constanza Soto: herencias, pensión de alimentos, divorcio, accidentes y daños, cobranzas y empresas. Primera consulta gratuita.',
  metadataBase: new URL('https://olateysoto.cl'),
  openGraph: {
    siteName: 'Olate & Soto',
    locale: 'es_CL',
    type: 'website',
    title: 'Olate & Soto — Asesoría jurídica en Talca | Johnny Olate · Constanza Soto',
    description: 'Asesoría jurídica en Talca y el Maule con Johnny Olate y Constanza Soto: herencias, pensión de alimentos, divorcio, accidentes y daños, cobranzas y empresas. Primera consulta gratuita.',
    url: 'https://olateysoto.cl',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Olate & Soto: asesoría jurídica en Talca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olate & Soto — Asesoría jurídica en Talca | Johnny Olate · Constanza Soto',
    description: 'Asesoría jurídica en Talca con Johnny Olate y Constanza Soto. Primera consulta gratuita.',
    images: ['/og/home.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background-white text-neutral-gray antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
