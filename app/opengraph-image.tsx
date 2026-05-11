import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Olate & Soto — Asesores Jurídicos Talca'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a1322',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Subtle corner accents */}
        <div style={{ position: 'absolute', top: 40, left: 60, width: 40, height: 1, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 40, left: 60, width: 1, height: 40, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 40, right: 60, width: 40, height: 1, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 40, right: 60, width: 1, height: 40, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: 40, left: 60, width: 40, height: 1, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: 40, left: 60, width: 1, height: 40, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: 40, right: 60, width: 40, height: 1, background: '#B5A05F', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: 40, right: 60, width: 1, height: 40, background: '#B5A05F', opacity: 0.5 }} />

        {/* Supertitle */}
        <div style={{
          fontSize: 14,
          color: '#B5A05F',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          fontFamily: 'system-ui, sans-serif',
          marginBottom: 28,
        }}>
          Talca · Región del Maule
        </div>

        {/* Gold line */}
        <div style={{ width: 48, height: 1, background: '#B5A05F', marginBottom: 32 }} />

        {/* Main title */}
        <div style={{
          fontSize: 92,
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '0.12em',
          display: 'flex',
          gap: 24,
          alignItems: 'center',
        }}>
          <span>OLATE</span>
          <span style={{ color: '#B5A05F', fontWeight: 400 }}>&</span>
          <span>SOTO</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 20,
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.35em',
          marginTop: 22,
          textTransform: 'uppercase',
          fontFamily: 'system-ui, sans-serif',
        }}>
          Asesores Jurídicos
        </div>

        {/* Gold line bottom */}
        <div style={{ width: 48, height: 1, background: '#B5A05F', marginTop: 32 }} />

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: 52,
          fontSize: 15,
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.18em',
          fontFamily: 'system-ui, sans-serif',
        }}>
          olateysoto.cl
        </div>
      </div>
    ),
    { ...size }
  )
}
