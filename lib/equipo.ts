import type { Fundador } from './contacto'

// Fuente única de los datos de cada fundador: portada, perfiles, landings y schema.
export type Persona = {
  id: Fundador
  nombre: string
  nombreCompleto: string
  cargo: string
  credencial: string
  atiende: string[]
  bio: string
  retrato: string
  perfil: string
  linkedin: string
  mensaje: string
}

export const EQUIPO: Persona[] = [
  {
    id: 'johnny',
    nombre: 'Johnny Olate',
    nombreCompleto: 'Johnny Olate Rojas',
    cargo: 'Asesor jurídico',
    credencial: 'Licenciado en Ciencias Jurídicas y Sociales, Universidad de Talca. Inició sus estudios en la Pontificia Universidad Católica de Chile.',
    atiende: ['Fraude bancario y cobros no reconocidos', 'Accidentes de tránsito, negligencia médica y daños', 'Casas ocupadas y arriendos impagos', 'Herencias y posesiones efectivas', 'Cobranza, juicio ejecutivo y prescripción de deudas', 'Sociedades, contratos y registro de marcas'],
    bio: 'Fue pasante en la Ilustrísima Corte de Apelaciones de Talca y fundó El Criterio, un monitor diario de la jurisprudencia de la Corte Suprema. Revisa cada caso contra la norma y los fallos vigentes.',
    retrato: '/equipo/olate.jpg',
    perfil: '/johnny_olate',
    linkedin: 'https://www.linkedin.com/in/johnny-olate-rojas-b16313237/',
    mensaje: 'Hola Johnny, necesito orientación sobre un tema legal.',
  },
  {
    id: 'constanza',
    nombre: 'Constanza Soto',
    nombreCompleto: 'Constanza Soto Gutiérrez',
    cargo: 'Asesora jurídica',
    credencial: 'Egresada de Derecho, Universidad de Talca.',
    atiende: ['Pensión de alimentos', 'Divorcio y cuidado personal', 'Violencia intrafamiliar y medidas de protección', 'Interdicción y protección del adulto mayor y personas vulnerables', 'Herencias y posesiones efectivas'],
    bio: 'Fue ayudante de cátedra en Derecho de Familia y Teoría del Derecho. Acompaña a cada familia para que entienda su situación y sus opciones antes de decidir, con el interés de los niños en el centro.',
    retrato: '/equipo/soto.png',
    perfil: '/constanza_soto',
    linkedin: 'https://www.linkedin.com/in/constanza-soto-guti%C3%A9rrez-/',
    mensaje: 'Hola Constanza, necesito orientación sobre un tema de familia.',
  },
]

export type Asesoria = {
  titulo: string
  desc: string
  responsables: Fundador[]
  mensaje: string
}

export const ASESORIAS: Asesoria[] = [
  {
    titulo: 'Fraude bancario y cobros no reconocidos',
    desc: 'Tarjetas clonadas, transferencias o cheques que usted no hizo y que el banco no le devuelve.',
    responsables: ['johnny'],
    mensaje: 'Hola Johnny, tengo un problema de fraude bancario o cobros que no reconozco.',
  },
  {
    titulo: 'Accidentes, negligencia médica y daños',
    desc: 'Indemnización por accidentes de tránsito, errores médicos y otros daños causados por terceros.',
    responsables: ['johnny'],
    mensaje: 'Hola Johnny, quiero consultar por una indemnización (accidente, negligencia médica o daños).',
  },
  {
    titulo: 'Casa ocupada o arrendatario que no paga',
    desc: 'Recuperamos su propiedad: desalojo de ocupantes y restitución cuando el arrendatario no paga.',
    responsables: ['johnny'],
    mensaje: 'Hola Johnny, necesito recuperar una propiedad (ocupada o con arriendo impago).',
  },
  {
    titulo: 'Herencias y posesiones efectivas',
    desc: 'Tramitación de la posesión efectiva, partición de bienes y conflictos entre herederos.',
    responsables: ['johnny', 'constanza'],
    mensaje: 'Hola, quiero consultar por una herencia o posesión efectiva.',
  },
  {
    titulo: 'Pensión de alimentos',
    desc: 'Demanda, aumento, rebaja o cobro de una pensión de alimentos impaga.',
    responsables: ['constanza'],
    mensaje: 'Hola Constanza, quiero consultar por una pensión de alimentos.',
  },
  {
    titulo: 'Divorcio y cuidado personal',
    desc: 'Divorcio de común acuerdo o unilateral, cuidado personal y relación directa y regular con los hijos.',
    responsables: ['constanza'],
    mensaje: 'Hola Constanza, quiero consultar por un divorcio o cuidado personal.',
  },
  {
    titulo: 'Violencia intrafamiliar y medidas de protección',
    desc: 'Protección para usted y sus hijos, con ajuste de la pensión y de la relación directa y regular cuando corresponde.',
    responsables: ['constanza'],
    mensaje: 'Hola Constanza, necesito orientación por violencia intrafamiliar o una medida de protección.',
  },
  {
    titulo: 'Interdicción y protección del adulto mayor',
    desc: 'Interdicción, curaduría y administración de bienes, y protección de adultos mayores y personas vulnerables.',
    responsables: ['constanza'],
    mensaje: 'Hola Constanza, quiero consultar por una interdicción o la protección de un adulto mayor.',
  },
  {
    titulo: 'Cobranza y juicio ejecutivo',
    desc: 'Cobro de pagarés, cheques, facturas y otras deudas, y tramitación del juicio ejecutivo.',
    responsables: ['johnny'],
    mensaje: 'Hola Johnny, quiero cobrar una deuda.',
  },
  {
    titulo: 'Prescripción de deudas',
    desc: 'Deudas antiguas con bancos, casas comerciales, permisos de circulación y otras: revisamos si están prescritas y pedimos que se declare.',
    responsables: ['johnny'],
    mensaje: 'Hola Johnny, quiero saber si una deuda antigua está prescrita.',
  },
  {
    titulo: 'Sociedades, contratos y marcas',
    desc: 'Constitución y modificación de sociedades, contratos comerciales y registro de marcas ante INAPI.',
    responsables: ['johnny'],
    mensaje: 'Hola Johnny, necesito asesoría para mi empresa (sociedad, contratos o marca).',
  },
]

// Casos reales anonimizados: sin rol, carátula ni datos que identifiquen a las personas.
export const CASOS: { materia: string; situacion: string; resultado: string }[] = [
  {
    materia: 'Fraude bancario',
    situacion: 'A nuestro cliente le robaron cheques y el banco se negó a responder por los cobros que él no había hecho.',
    resultado: 'Demandamos ante el Juzgado de Policía Local de Talca. En primera instancia, el banco fue condenado a indemnizarlo y a pagar una multa.',
  },
  {
    materia: 'Casa ocupada',
    situacion: 'Una mujer llevaba años sin poder vivir en su casa, ocupada por personas sin ningún derecho.',
    resultado: 'Obtuvimos la orden judicial y la propiedad fue desalojada con auxilio de la fuerza pública. Hoy está de vuelta en su casa.',
  },
  {
    materia: 'Violencia intrafamiliar',
    situacion: 'Una madre necesitaba protegerse a ella y a sus hijos tras episodios de violencia.',
    resultado: 'Obtuvo medidas de resguardo, un aumento de la pensión de alimentos y límites a la relación directa y regular.',
  },
  {
    materia: 'Interdicción',
    situacion: 'Una familia necesitaba proteger a un familiar que ya no podía administrar sus bienes.',
    resultado: 'Se declaró la interdicción y se nombró a quien administra hoy sus bienes.',
  },
  {
    materia: 'Registro de marcas',
    situacion: 'Emprendedores que necesitaban proteger el nombre de su proyecto.',
    resultado: 'Registramos marcas ante INAPI, entre ellas la de El Criterio.',
  },
  {
    materia: 'Trámites civiles',
    situacion: 'Constitución de sociedades, posesiones efectivas y otros trámites del día a día.',
    resultado: 'Más de 100 causas y trámites civiles acompañados.',
  },
]

export const FAQ: { p: string; r: string }[] = [
  {
    p: '¿Son abogados?',
    r: 'Johnny Olate es licenciado en Ciencias Jurídicas y Sociales y Constanza Soto es egresada de Derecho, ambos de la Universidad de Talca. Estudiamos, preparamos y acompañamos su caso de principio a fin. Cuando hay que ir a tribunales, la causa se tramita bajo el patrocinio de una abogada habilitada con quien trabajamos.',
  },
  {
    p: '¿Cuánto cuesta la primera consulta?',
    r: 'Nada. En la primera consulta revisamos si su caso es viable y qué camino conviene. Si decide seguir, le entregamos un presupuesto.',
  },
  {
    p: '¿Cómo cobran?',
    r: 'Con un presupuesto cerrado y por escrito, acordado antes de empezar. No cobramos por hora ni agregamos cobros sorpresa.',
  },
  {
    p: '¿En cuánto tiempo responden?',
    r: 'El mismo día hábil en que nos escribe.',
  },
  {
    p: '¿Atienden fuera de Talca?',
    r: 'Sí. Atendemos en línea en todo Chile y a domicilio en Talca y alrededores: Maule, San Clemente, Pelarco, San Rafael, Curicó, Linares, San Javier y Constitución.',
  },
  {
    p: '¿Qué pasa si mi caso termina en juicio?',
    r: 'Lo seguimos acompañando. Preparamos cada escrito, la causa se tramita con el patrocinio de una abogada habilitada y le informamos cada avance hasta el final.',
  },
]

// Agregar aquí solo testimonios con el texto exacto aprobado por el cliente.
export const TESTIMONIOS: { texto: string; autor: string; materia: string }[] = [
  {
    texto: 'Le robaron los cheques a mi negocio y el banco no quería hacerse cargo. Johnny me explicó desde el principio qué podíamos hacer y cuánto me iba a costar, y me mantuvo al tanto de cada paso. Sentí que alguien estaba de mi lado.',
    autor: 'Cliente de Talca',
    materia: 'Fraude bancario',
  },
  {
    texto: 'Llevaba años sin poder entrar a mi propia casa. Pensé que no había nada que hacer. Johnny tomó mi caso, me explicó cada paso y hoy estoy de vuelta en mi casa.',
    autor: 'Clienta de Talca',
    materia: 'Recuperación de propiedad',
  },
  {
    texto: 'Acudí a Constanza por problemas con la pensión de alimentos y la relación con mi ex. Me escuchó y me ayudó.',
    autor: 'Clienta',
    materia: 'Familia',
  },
  {
    texto: 'No sabíamos cómo proteger a nuestro papá cuando ya no podía manejar sus cosas. Constanza nos explicó el trámite con mucha claridad y paciencia, y nos acompañó hasta el final.',
    autor: 'Familia de Talca',
    materia: 'Interdicción',
  },
]
