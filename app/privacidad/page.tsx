import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo Olate & Soto trata los datos personales que usted nos entrega al consultarnos: qué datos, para qué, quién los recibe y cuáles son sus derechos.',
  alternates: { canonical: 'https://olateysoto.cl/privacidad' },
}

const SECCIONES: { h: string; p: string[] }[] = [
  {
    h: 'Quién es responsable',
    p: ['Olate & Soto Asesores Jurídicos, con domicilio en Talca, Chile. Para consultas sobre sus datos, escríbanos a olateysotoasesorias@gmail.com.'],
  },
  {
    h: 'Qué datos recogemos',
    p: [
      'Cuando usted nos escribe por el formulario, recogemos su nombre, su WhatsApp o correo electrónico, y el mensaje que nos envía. Cuando nos escribe por WhatsApp, recibimos su número y el contenido de la conversación.',
      'Usamos una herramienta de estadísticas de visitas (Vercel Web Analytics) que mide cuántas personas visitan cada página, sin cookies y sin identificar a nadie.',
    ],
  },
  {
    h: 'Para qué los usamos',
    p: [
      'Para responder su consulta, evaluar si su caso es viable, prepararle un presupuesto y, si usted decide contratarnos, prestarle el servicio. También usamos las estadísticas agregadas para mejorar el sitio.',
      'No vendemos ni cedemos sus datos a terceros con fines comerciales.',
    ],
  },
  {
    h: 'Por qué podemos tratarlos',
    p: ['Porque usted nos los entrega voluntariamente al escribirnos, para que le respondamos, y porque son necesarios para atender su solicitud antes de contratar.'],
  },
  {
    h: 'Quién más los recibe',
    p: [
      'Para funcionar, usamos servicios de terceros: Google (correo electrónico), Meta (WhatsApp) y Vercel (alojamiento del sitio). Esos proveedores pueden almacenar datos fuera de Chile.',
      'Si su caso lo requiere, compartiremos la información necesaria con la abogada habilitada que patrocina las causas judiciales, solo para tramitar su caso.',
    ],
  },
  {
    h: 'Cuánto tiempo los conservamos',
    p: ['Solo el tiempo necesario para atender su consulta y, si contrata nuestros servicios, durante el tiempo que exija la relación y la ley. Puede pedirnos que eliminemos su consulta en cualquier momento.'],
  },
  {
    h: 'Confidencialidad',
    p: ['Lo que usted nos cuenta se trata con reserva y solo lo conocen quienes participan en la atención de su caso.'],
  },
  {
    h: 'Sus derechos',
    p: [
      'Usted puede pedirnos acceso a sus datos, su rectificación, su supresión, oponerse a su tratamiento, su portabilidad y el bloqueo temporal, conforme a la Ley N° 19.628 y a la Ley N° 21.719 sobre protección de datos personales, una vez que esta entre en vigencia.',
      'Para ejercer estos derechos, escríbanos a olateysotoasesorias@gmail.com indicando su nombre y qué solicita. Le responderemos dentro de los plazos legales.',
    ],
  },
  {
    h: 'Cambios',
    p: ['Si cambiamos la forma en que tratamos sus datos, actualizaremos esta página. Última actualización: 13 de octubre de 2026.'],
  },
]

export default function PrivacidadPage() {
  return (
    <main className="bg-white px-6 py-16 text-[#192A4D] md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Privacidad</p>
        <h1 className="font-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Política de privacidad</h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Así tratamos los datos personales que usted nos entrega al consultarnos, escrito en simple.
        </p>
        <div className="mt-12 space-y-10">
          {SECCIONES.map((s) => (
            <section key={s.h}>
              <h2 className="font-heading text-2xl font-semibold">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="mt-3 text-base leading-7 text-gray-700">{t}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
