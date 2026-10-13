'use client'

import { useRef, useState } from 'react'
import { sendContactEmail } from '../app/actions/contact'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    const result = await sendContactEmail(formData)
    if (result.ok) {
      setStatus('ok')
      formRef.current?.reset()
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Error desconocido.')
    }
  }

  if (status === 'ok') {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <div className="h-0.5 w-12 bg-[#B5A05F]" />
        <p className="font-heading text-2xl font-semibold text-[#192A4D] leading-snug">
          Recibimos su mensaje.<br />Le respondemos el mismo día hábil.
        </p>
        <p className="text-sm text-gray-600">Olate & Soto · Talca</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-[#776532] hover:underline underline-offset-4"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className="text-sm text-[#192A4D]/80">Nombre</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Sofía Pérez"
          required
          className="mt-2 w-full border-b border-[#192A4D]/20 bg-transparent py-3 text-base text-[#192A4D] placeholder-[#192A4D]/50 outline-none focus:border-[#B5A05F] transition-colors"
        />
      </label>

      <label className="block">
        <span className="text-sm text-[#192A4D]/80">WhatsApp o correo</span>
        <input
          name="contacto"
          type="text"
          placeholder="+56 9 1234 5678 o correo@ejemplo.com"
          required
          className="mt-2 w-full border-b border-[#192A4D]/20 bg-transparent py-3 text-base text-[#192A4D] placeholder-[#192A4D]/50 outline-none focus:border-[#B5A05F] transition-colors"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="text-sm text-[#192A4D]/80">¿En qué podemos ayudarle?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Cuéntenos brevemente su caso"
          required
          className="mt-2 w-full border-b border-[#192A4D]/20 bg-transparent py-3 text-base text-[#192A4D] placeholder-[#192A4D]/50 outline-none focus:border-[#B5A05F] transition-colors resize-none"
        />
      </label>

      <div className="sm:col-span-2 mt-2 flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-fit border border-[#192A4D] px-8 py-3 text-sm font-medium text-[#192A4D] hover:bg-[#192A4D] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Enviando...' : 'Solicitar consulta gratuita'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-red-700">{errorMsg}</p>
        )}
      </div>
    </form>
  )
}
