// Números de WhatsApp por fundador. Johnny: civil, cobranzas, empresas y redacción
// para abogados. Constanza: familia y herencias.
export const WA = {
  johnny: '56957688199',
  constanza: '56967866353',
} as const

export type Fundador = keyof typeof WA

export function waLink(fundador: Fundador, mensaje?: string) {
  const base = `https://wa.me/${WA[fundador]}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}

export const AVISO_PATROCINIO =
  'Las causas judiciales, que así lo requieran, se tramitan bajo el patrocinio de abogados habilitados.'
