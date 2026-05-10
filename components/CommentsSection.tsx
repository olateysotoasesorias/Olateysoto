'use client'
import { useEffect, useState } from 'react'

interface Comment {
  name: string
  text: string
  date: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function CommentsSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`/api/comments/${slug}`)
      .then((r) => r.json())
      .then(setComments)
      .catch(() => {})
  }, [slug])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !text.trim()) return
    setSending(true)
    try {
      const res = await fetch(`/api/comments/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text }),
      })
      if (!res.ok) throw new Error()
      const comment = await res.json()
      setComments((prev) => [comment, ...prev])
      setName('')
      setText('')
      setSent(true)
      setTimeout(() => setSent(false), 3000)
    } catch {
      setError('No se pudo enviar. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="mt-14 border-t border-primary/10 pt-10">
      <h2 className="mb-1 font-heading text-lg font-semibold text-primary">Reflexiones</h2>
      <div className="mb-8 h-0.5 w-8 bg-accent" />

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={60}
          required
          className="w-full border border-primary/15 bg-white px-4 py-2.5 text-sm text-primary placeholder-neutral-gray/40 outline-none focus:border-accent"
        />
        <textarea
          placeholder="Escribe tu reflexión o comentario…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={800}
          required
          rows={4}
          className="w-full border border-primary/15 bg-white px-4 py-2.5 text-sm text-primary placeholder-neutral-gray/40 outline-none focus:border-accent resize-none"
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={sending}
            className="border border-primary/20 px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
          >
            {sending ? 'Enviando…' : 'Publicar'}
          </button>
          {sent && <span className="text-xs text-accent">¡Reflexión publicada!</span>}
        </div>
      </form>

      {/* Lista de comentarios */}
      {comments.length > 0 && (
        <ul className="space-y-6">
          {comments.map((c, i) => (
            <li key={i} className="border-l-2 border-accent/30 pl-4">
              <div className="mb-1 flex items-center gap-3">
                <span className="font-heading text-sm font-semibold text-primary">{c.name}</span>
                <span className="text-xs text-neutral-gray/40">{formatDate(c.date)}</span>
              </div>
              <p className="text-sm leading-6 text-neutral-gray">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
