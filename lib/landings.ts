import type { Fundador } from './contacto'

// Páginas por trámite. Cada una responde búsquedas reales de clientes (autocompletado
// de Google Chile) y cita fuentes oficiales. Revisar las cifras al menos cada seis meses.
export type Landing = {
  slug: string
  seoTitle: string
  metaDesc: string
  eyebrow: string
  h1: string
  intro: string
  autor: Fundador
  actualizado: string
  datos: { k: string; v: string }[]
  secciones: {
    h2: string
    parrafos?: string[]
    pasos?: { t: string; d: string }[]
    lista?: string[]
    tabla?: { situacion: string; via: string }[]
  }[]
  casoMateria?: string
  testimonioMateria?: string
  faq: { p: string; r: string }[]
  fuentes: { label: string; url: string }[]
  mensaje: string
}

export const LANDINGS: Landing[] = [
  {
    slug: 'fraude-bancario-talca',
    seoTitle: 'Fraude bancario en Talca: qué hacer y cómo recuperar su dinero',
    metaDesc:
      '¿Le clonaron la tarjeta, le robaron cheques o el banco no le devuelve una transferencia? Plazos actualizados de la Ley 20.009, la vía de la Ley del Consumidor y cómo demandar. Primera consulta gratuita.',
    eyebrow: 'Asesoría en Talca · Fraude bancario',
    h1: 'Fraude bancario: qué hacer si el banco no le devuelve su dinero',
    intro:
      'Si le clonaron la tarjeta, le hicieron transferencias que usted no autorizó o le cobraron cheques robados, la ley obliga al banco a devolverle el dinero en plazos breves. Y es el banco el que debe probar que usted autorizó la operación, no usted lo contrario.',
    autor: 'johnny',
    actualizado: '13 de octubre de 2026',
    datos: [
      { k: 'Aviso al banco', v: 'Apenas se dé cuenta, por los canales del banco (gratuitos, 24/7). Exija el número o código del aviso, con fecha y hora.' },
      { k: 'Plazo para reclamar', v: '30 días hábiles desde el aviso.' },
      { k: 'Qué puede reclamar', v: 'Las operaciones de hasta 60 días antes del aviso.' },
      { k: 'Plazo del banco', v: '10 días hábiles para devolver hasta 35 UF (15 en giros de cajero o avances). Lo que exceda de 35 UF, 7 días hábiles adicionales.' },
      { k: 'Quién prueba', v: 'El banco. El solo registro de la operación no basta.' },
      { k: 'Otra vía', v: 'La Ley de Protección al Consumidor, ante el Juzgado de Policía Local. A veces es más favorable: permite exigir indemnización y que el banco sea multado.' },
    ],
    secciones: [
      {
        h2: 'Qué hacer en las primeras horas',
        pasos: [
          { t: 'Bloquee y dé aviso al banco', d: 'Llame o use la app para bloquear la tarjeta o la cuenta. Anote el número de aviso, la fecha y la hora: es la prueba de cuándo avisó.' },
          { t: 'Reúna la evidencia', d: 'Cartolas, capturas de los mensajes o correos falsos, registro de llamadas y cualquier comprobante. No borre nada.' },
          { t: 'Presente el reclamo por escrito', d: 'Identifique cada operación que desconoce. Hágalo dentro de los 30 días hábiles siguientes al aviso.' },
          { t: 'Haga la denuncia', d: 'En Carabineros, la PDI o la Fiscalía. El banco puede pedirle el comprobante dentro de los 30 días corridos siguientes al reclamo.' },
          { t: 'Si el banco no devuelve en plazo, escríbanos', d: 'Revisamos gratis si el banco cumplió la ley y qué acción corresponde.' },
        ],
      },
      {
        h2: '¿Y si el banco dice que fue culpa suya?',
        parrafos: [
          'Es la respuesta más común, y no basta con que el banco lo diga. Si considera que usted actuó con dolo o culpa grave, debe llevar el caso ante el Juzgado de Policía Local de su domicilio y probarlo. Si el juez descarta el dolo o la culpa grave, el banco debe devolver lo que retuvo, reajustado.',
          'La Corte Suprema ha reafirmado que la ley se aplica de forma estricta también frente a engaños telefónicos y digitales. Por eso, aunque usted haya entregado un dato engañado por un supuesto ejecutivo, su caso merece revisarse.',
        ],
      },
      {
        h2: 'La Ley del Consumidor: una vía que muchos no conocen',
        parrafos: [
          'Además de la Ley 20.009, el banco es un proveedor de servicios y responde ante usted como consumidor. La Ley 19.496, de Protección de los Derechos de los Consumidores, se tramita ante el Juzgado de Policía Local y permite pedir que el banco indemnice todos los perjuicios y que sea multado.',
          'En algunos casos es la vía más favorable, por ejemplo cuando la Ley 20.009 no cubre la operación, como ocurre con los cheques robados. Así ganamos en primera instancia un caso de cheques robados contra un banco en Talca. En la primera consulta revisamos cuál le conviene a usted.',
        ],
      },
      {
        h2: 'Qué podemos hacer por usted',
        lista: [
          'Revisar si el banco cumplió los plazos y si su respuesta se ajusta a la ley.',
          'Redactar el reclamo o la insistencia ante el banco y la presentación ante la Comisión para el Mercado Financiero.',
          'Demandar ante los Juzgados de Policía Local de Talca, por la Ley 20.009 o la Ley del Consumidor según convenga, para que el banco devuelva el dinero, indemnice los perjuicios y sea multado.',
          'Evaluar, cuando corresponde, otras acciones ante la Corte de Apelaciones de Talca.',
        ],
      },
    ],
    casoMateria: 'Fraude bancario',
    testimonioMateria: 'Fraude bancario',
    faq: [
      { p: '¿El banco puede negarse a devolverme el dinero?', r: 'No por sí solo. Debe devolverlo en los plazos legales, salvo que reúna antecedentes de dolo o culpa grave de su parte, y en ese caso debe probarlo ante el Juzgado de Policía Local.' },
      { p: '¿Qué pasa si yo entregué la clave por teléfono?', r: 'Depende de cómo ocurrió. El banco tiene que probar que usted actuó con dolo o culpa grave, y los tribunales han aplicado la ley de forma estricta frente a engaños. Revisamos su caso sin costo.' },
      { p: '¿Cuánto demora?', r: 'El banco tiene 10 días hábiles (15 en giros o avances) desde el reclamo. Si hay que demandar, un juicio ante el Juzgado de Policía Local suele tomar algunos meses.' },
      { p: '¿Sirve para cheques robados, transferencias y compras por internet?', r: 'La Ley 20.009 cubre tarjetas de pago y transacciones electrónicas, como transferencias y compras por internet. Los cheques robados no están dentro de esa ley, pero la Ley de Protección al Consumidor sí puede aplicarse, y a veces es más favorable: así ganamos en primera instancia un caso de cheques robados.' },
      { p: '¿Atienden casos de cualquier banco y de otras ciudades?', r: 'Sí. Trabajamos con casos contra cualquier banco o emisor, en línea en todo Chile y a domicilio en Talca y alrededores.' },
      { p: '¿Cuánto cuesta?', r: 'La primera consulta es gratuita. Si su caso es viable, le entregamos un presupuesto cerrado y por escrito antes de empezar.' },
    ],
    fuentes: [
      { label: 'CMF Educa: Ley de Fraudes (plazos vigentes)', url: 'https://www.cmfchile.cl/educa/621/w3-article-29826.html' },
      { label: 'Ley 20.009 en la Biblioteca del Congreso Nacional', url: 'https://www.bcn.cl/leychile/navegar?idNorma=236736' },
      { label: 'Ley 19.496 de Protección de los Derechos de los Consumidores (BCN)', url: 'https://www.bcn.cl/leychile/navegar?idNorma=61438' },
    ],
    mensaje: 'Hola Johnny, tengo un problema de fraude bancario o cobros que no reconozco.',
  },
  {
    slug: 'recuperar-casa-ocupada-talca',
    seoTitle: 'Casa ocupada o arriendo impago en Talca: cómo recuperar su propiedad',
    metaDesc:
      'Cómo recuperar una casa ocupada o arrendada que no paga: desalojo por usurpación (Ley 21.633), procedimiento monitorio de arriendo (Ley 21.461) y precario. Primera consulta gratuita.',
    eyebrow: 'Asesoría en Talca · Recuperación de propiedades',
    h1: 'Casa ocupada o arrendatario que no paga: cómo recuperar su propiedad',
    intro:
      'Si su casa está ocupada por personas sin derecho, o su arrendatario dejó de pagar, existen vías judiciales rápidas para recuperarla. La clave es elegir la vía correcta según cómo empezó la ocupación, y nunca hacer justicia por mano propia.',
    autor: 'johnny',
    actualizado: '13 de octubre de 2026',
    datos: [
      { k: 'Entraron sin permiso', v: 'Es delito de usurpación. La víctima puede pedir al juez el desalojo con fuerza pública en cualquier etapa (art. 157 ter del Código Procesal Penal).' },
      { k: 'Primeras 12 horas', v: 'Cualquier persona puede detener en flagrancia. La policía puede hacerlo mientras los ocupantes sigan en el inmueble.' },
      { k: 'Arrendatario que no paga', v: 'Procedimiento monitorio: el juez le exige pagar en 10 días. Si no paga ni se opone, ordena el pago y la restitución.' },
      { k: 'Le prestó la casa y no se va', v: 'Juicio de precario ante el juzgado civil.' },
      { k: 'Nunca', v: 'Cambiar la chapa, cortar los servicios ni sacar las cosas del ocupante: puede volverse en su contra.' },
    ],
    secciones: [
      {
        h2: 'Primero: ¿cómo empezó la ocupación?',
        parrafos: ['De eso depende la vía. Elegir mal significa perder meses.'],
        tabla: [
          { situacion: 'Entraron sin su permiso', via: 'Denuncia por usurpación y solicitud de desalojo ante el Juzgado de Garantía de Talca.' },
          { situacion: 'Su arrendatario dejó de pagar', via: 'Procedimiento monitorio de cobro de rentas y restitución (Ley 21.461) ante los juzgados civiles de Talca.' },
          { situacion: 'Le prestó la casa a un familiar o conocido y no se va', via: 'Juicio de precario ante los juzgados civiles.' },
          { situacion: 'Compró o heredó una propiedad con ocupantes', via: 'Depende del título de los ocupantes. Lo revisamos caso a caso.' },
        ],
      },
      {
        h2: 'Si la ocuparon sin permiso',
        pasos: [
          { t: 'Denuncie de inmediato', d: 'En Carabineros, la PDI o la Fiscalía. Si la ocupación empezó hace menos de 12 horas, procede la detención en flagrancia.' },
          { t: 'Reúna los antecedentes', d: 'Certificado de dominio vigente del Conservador de Bienes Raíces, fotos, testigos y cuentas de servicios a su nombre.' },
          { t: 'Pida el desalojo al juez', d: 'Acreditando la inscripción del inmueble y los antecedentes de la ocupación, el juez cita a una audiencia y puede ordenar el desalojo con fuerza pública.' },
          { t: 'Recupere su propiedad', d: 'El desalojo se ejecuta con auxilio de la fuerza pública.' },
        ],
      },
      {
        h2: 'Si su arrendatario no paga',
        parrafos: [
          'Desde la Ley 21.461, conocida como "Devuélveme mi casa", existe un procedimiento monitorio: con el contrato y el detalle de las rentas, gastos comunes y consumos adeudados, el juez requiere al arrendatario para que pague dentro de 10 días.',
          'Si paga, el procedimiento termina. Si no paga ni se opone, el tribunal ordena el pago y la restitución del inmueble, y luego el lanzamiento. La misma ley permite pedir, en ciertos casos, la restitución anticipada del inmueble.',
        ],
      },
      {
        h2: 'Qué hacemos nosotros',
        lista: [
          'Revisamos el título de dominio y cómo empezó la ocupación para elegir la vía correcta.',
          'Preparamos la denuncia, la solicitud de desalojo o la demanda.',
          'Lo acompañamos a las audiencias y coordinamos el lanzamiento con el receptor y la fuerza pública.',
          'La causa se tramita bajo el patrocinio de una abogada habilitada.',
        ],
      },
    ],
    casoMateria: 'Casa ocupada',
    testimonioMateria: 'Recuperación de propiedad',
    faq: [
      { p: '¿Cuánto demora recuperar la casa?', r: 'Depende de la vía. El desalojo por usurpación y el monitorio de arriendo son los procedimientos más rápidos. Un juicio de precario suele tomar más tiempo. En la primera consulta le damos una estimación para su caso.' },
      { p: '¿Puedo cambiar la chapa si los ocupantes salen un rato?', r: 'No lo recomendamos. Hacer justicia por mano propia puede exponerlo a acciones en su contra y entorpecer el juicio. La vía segura es la judicial.' },
      { p: '¿Qué documentos necesito?', r: 'El certificado de dominio vigente del Conservador de Bienes Raíces y, si hay arriendo, el contrato y el detalle de lo adeudado. Si no tiene todo, lo ayudamos a obtenerlo.' },
      { p: '¿Y si quien ocupa la casa es un familiar o mi ex pareja?', r: 'Normalmente no es usurpación sino precario, o una materia de familia. Revisamos la vía que corresponde.' },
      { p: '¿Cuánto cuesta?', r: 'La primera consulta es gratuita. Si su caso es viable, le entregamos un presupuesto cerrado y por escrito antes de empezar.' },
    ],
    fuentes: [
      { label: 'Ley 21.633 sobre ocupación ilegal de inmuebles (BCN)', url: 'https://www.bcn.cl/leychile/navegar?idNorma=1198283' },
      { label: 'El procedimiento monitorio de la Ley 21.461 (U. Diego Portales)', url: 'https://academiaderechocivil.udp.cl/cms/wp-content/uploads/2025/12/El-procedimiento-monitorio-de-la-Ley-N%C2%B0-21.461-en-la-practica-jurisprudencial.pdf' },
    ],
    mensaje: 'Hola Johnny, necesito recuperar una propiedad (ocupada o con arriendo impago).',
  },
  {
    slug: 'pension-alimentos-talca',
    seoTitle: 'Pensión de alimentos en Talca: cuánto corresponde, cómo demandar y cobrar',
    metaDesc:
      'Pensión de alimentos en Talca: monto mínimo legal, mediación, demanda en el Juzgado de Familia y cómo cobrar si no pagan (Registro Nacional de Deudores). Primera consulta gratuita.',
    eyebrow: 'Asesoría en Talca · Familia',
    h1: 'Pensión de alimentos: cuánto corresponde, cómo demandar y cómo cobrar',
    intro:
      'Todo hijo tiene derecho a alimentos. La ley fija un monto mínimo y, si el otro padre no paga, existen herramientas concretas para cobrar, incluido el Registro Nacional de Deudores de Pensiones de Alimentos.',
    autor: 'constanza',
    actualizado: '13 de octubre de 2026',
    datos: [
      { k: 'Mínimo por un hijo', v: '40 % del ingreso mínimo remuneracional.' },
      { k: 'Dos o más hijos', v: '30 % del ingreso mínimo por cada hijo.' },
      { k: 'Tope general', v: 'No puede superar el 50 % de las rentas de quien paga, salvo casos excepcionales.' },
      { k: 'Antes de demandar', v: 'Mediación familiar obligatoria y gratuita.' },
      { k: 'Si no pagan', v: 'Con 3 cuotas consecutivas o 5 discontinuas impagas, el deudor puede ser inscrito en el Registro Nacional de Deudores.' },
    ],
    secciones: [
      {
        h2: 'Cuánto corresponde',
        parrafos: [
          'El mínimo legal es un piso, no el monto final. El tribunal considera las necesidades del hijo (alimentación, educación, salud, vivienda) y la capacidad económica de ambos padres.',
          'Mientras dura el juicio, se pueden pedir alimentos provisorios desde la presentación de la demanda.',
        ],
      },
      {
        h2: 'Cómo demandar, paso a paso',
        pasos: [
          { t: 'Mediación', d: 'Es obligatoria y gratuita. Si hay acuerdo, se aprueba en el tribunal y tiene el mismo valor que una sentencia.' },
          { t: 'Demanda', d: 'Si no hay acuerdo, se presenta la demanda en el Juzgado de Familia de Talca con los antecedentes de gastos e ingresos, y se piden alimentos provisorios.' },
          { t: 'Audiencias', d: 'Una audiencia preparatoria y, si no hay acuerdo, una de juicio, donde se rinde la prueba.' },
          { t: 'Sentencia y pago', d: 'El tribunal fija el monto y la forma de pago, normalmente por depósito en una cuenta a nombre de quien recibe la pensión.' },
        ],
      },
      {
        h2: 'Si no pagan: cómo cobrar',
        lista: [
          'Liquidación de la deuda y requerimiento de pago en el mismo tribunal.',
          'Inscripción en el Registro Nacional de Deudores de Pensiones de Alimentos, que impide renovar la licencia de conducir o el pasaporte y condiciona otros trámites.',
          'Retención de la devolución de impuestos y retenciones en el sueldo.',
          'Otras medidas de apremio que el tribunal puede decretar según el caso.',
        ],
      },
      {
        h2: 'Aumento o rebaja de la pensión',
        parrafos: [
          'Si cambian las necesidades del hijo o los ingresos de quien paga, se puede pedir un aumento o una rebaja. También pasa por mediación previa.',
        ],
      },
    ],
    casoMateria: 'Violencia intrafamiliar',
    testimonioMateria: 'Familia',
    faq: [
      { p: '¿Hasta qué edad se paga la pensión?', r: 'Por regla general, hasta los 21 años, o hasta los 28 si el hijo estudia una profesión u oficio. No hay límite de edad si tiene una incapacidad que le impida mantenerse.' },
      { p: '¿Desde cuándo se debe la pensión?', r: 'Desde la presentación de la demanda. Por eso conviene no esperar.' },
      { p: '¿Qué pasa si el otro padre no tiene trabajo formal?', r: 'La ley presume que tiene medios para pagar al menos el mínimo legal. El tribunal puede considerar otros antecedentes de su capacidad económica.' },
      { p: '¿Puedo pedir la pensión si el padre vive en otra ciudad?', r: 'Sí. La demanda puede presentarse en el Juzgado de Familia del domicilio de quien recibe la pensión.' },
      { p: '¿Cuánto cuesta?', r: 'La primera consulta es gratuita. Si decide seguir, le entregamos un presupuesto cerrado y por escrito antes de empezar.' },
    ],
    fuentes: [
      { label: 'Ley 14.908 sobre pensiones alimenticias, texto refundido en el DFL 1 de 2000 (BCN)', url: 'https://www.bcn.cl/leychile/navegar?idNorma=172986' },
      { label: 'Ley Fácil: Registro Nacional de Deudores de Pensiones de Alimentos (BCN)', url: 'https://www.bcn.cl/portal/leyfacil/recurso/registro-nacional-de-deudores-de-pensiones-de-alimentos' },
    ],
    mensaje: 'Hola Constanza, quiero consultar por una pensión de alimentos.',
  },
]

export const landingPorSlug = (slug: string) => LANDINGS.find((l) => l.slug === slug)
