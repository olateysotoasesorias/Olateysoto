import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1584px',
          height: '396px',
          background: '#0a1322',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Corner accents top-left */}
        <div style={{ position: 'absolute', top: 32, left: 56, width: 36, height: 1, background: '#B5A05F', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: 32, left: 56, width: 1, height: 36, background: '#B5A05F', opacity: 0.6 }} />

        {/* Corner accents bottom-left */}
        <div style={{ position: 'absolute', bottom: 32, left: 56, width: 36, height: 1, background: '#B5A05F', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: 32, left: 56, width: 1, height: 36, background: '#B5A05F', opacity: 0.6 }} />

        {/* Corner accents top-right */}
        <div style={{ position: 'absolute', top: 32, right: 56, width: 36, height: 1, background: '#B5A05F', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: 32, right: 56, width: 1, height: 36, background: '#B5A05F', opacity: 0.6 }} />

        {/* Corner accents bottom-right */}
        <div style={{ position: 'absolute', bottom: 32, right: 56, width: 36, height: 1, background: '#B5A05F', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: 32, right: 56, width: 1, height: 36, background: '#B5A05F', opacity: 0.6 }} />

        {/* Left — nombre y cargo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>

          <div style={{
            fontSize: 13,
            color: '#B5A05F',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            fontFamily: 'system-ui, sans-serif',
            marginBottom: 16,
          }}>
            Talca · Región del Maule
          </div>

          <div style={{ width: 40, height: 1, background: '#B5A05F', marginBottom: 20 }} />

          <div style={{
            fontSize: 72,
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '0.1em',
            lineHeight: 1,
          }}>
            JOHNNY OLATE
          </div>

          <div style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontFamily: 'system-ui, sans-serif',
            marginTop: 18,
          }}>
            Asesor Jurídico · Socio Fundador
          </div>

        </div>

        {/* Separador vertical */}
        <div style={{
          width: 1,
          height: 160,
          background: '#B5A05F',
          opacity: 0.25,
          flexShrink: 0,
          margin: '0 60px',
        }} />

        {/* Right — estudio y especialidades */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>

          <div style={{
            fontSize: 22,
            color: '#B5A05F',
            letterSpacing: '0.08em',
            fontFamily: 'Georgia, serif',
            fontWeight: 600,
          }}>
            Olate &amp; Soto
          </div>

          <div style={{ width: 32, height: 1, background: '#B5A05F', opacity: 0.5 }} />

          {['Litigación Civil', 'Derecho de Familia', 'Asesoría Corporativa'].map((area) => (
            <div key={area} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'system-ui, sans-serif',
            }}>
              <div style={{ width: 16, height: 1, background: '#B5A05F', opacity: 0.6, flexShrink: 0 }} />
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>
                {area}
              </div>
            </div>
          ))}

          <div style={{
            marginTop: 8,
            fontSize: 13,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.15em',
            fontFamily: 'system-ui, sans-serif',
          }}>
            olateysoto.cl
          </div>

        </div>
      </div>
    ),
    { width: 1584, height: 396 }
  )
}
