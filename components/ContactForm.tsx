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
          Pronto nos pondremos en contacto<br />contigo para ayudarte.
        </p>
        <p className="text-sm text-gray-400 uppercase tracking-[0.2em]">Olate & Soto · Talca</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-xs uppercase tracking-[0.25em] text-[#B5A05F] hover:underline underline-offset-4"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.15em] text-[#192A4D]/80">Nombre completo</span>
        <input
          name="name"
          type="text"
          placeholder="Sofía Pérez"
          required
          className="mt-2 w-full border-b border-[#192A4D]/20 bg-transparent py-3 text-sm text-[#192A4D] placeholder-[#192A4D]/40 outline-none focus:border-[#B5A05F] transition-colors"
        />
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.15em] text-[#192A4D]/80">Correo electrónico</span>
        <input
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          required
          className="mt-2 w-full border-b border-[#192A4D]/20 bg-transparent py-3 text-sm text-[#192A4D] placeholder-[#192A4D]/40 outline-none focus:border-[#B5A05F] transition-colors"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-[0.15em] text-[#192A4D]/80">Número de contacto</span>
        <div className="mt-2 flex items-end border-b border-[#192A4D]/20 focus-within:border-[#B5A05F] transition-colors">
          <span className="pb-3 pr-2 text-sm text-[#192A4D]/60 select-none">+569</span>
          <input
            name="phone"
            type="tel"
            placeholder="XXXX XXXX"
            maxLength={8}
            onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 8) }}
            className="flex-1 bg-transparent py-3 text-sm text-[#192A4D] placeholder-[#192A4D]/40 outline-none"
          />
        </div>
      </label>

      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-[0.15em] text-[#192A4D]/80">Mensaje</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Cuéntanos brevemente tu caso..."
          required
          className="mt-2 w-full border-b border-[#192A4D]/20 bg-transparent py-3 text-sm text-[#192A4D] placeholder-[#192A4D]/40 outline-none focus:border-[#B5A05F] transition-colors resize-none"
        />
      </label>

      <div className="sm:col-span-2 mt-2 flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-fit border border-[#B5A05F] px-10 py-3 text-xs uppercase tracking-[0.25em] text-[#B5A05F] hover:bg-[#B5A05F] hover:text-[#192A4D] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Enviando...' : 'Solicitar evaluación'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-red-400">{errorMsg}</p>
        )}
      </div>
    </form>
  )
}
