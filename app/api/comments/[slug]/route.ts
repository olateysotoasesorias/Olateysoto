import { Redis } from '@upstash/redis'
import { NextRequest } from 'next/server'

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN })
  : null

export interface Comment {
  name: string
  text: string
  date: string
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!redis) return Response.json([])
  const raw = await redis.lrange<string>(`comments:${slug}`, 0, 49)
  const comments = raw.map((item) => {
    try { return typeof item === 'string' ? JSON.parse(item) : item } catch { return null }
  }).filter(Boolean)
  return Response.json(comments)
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { name, text } = await req.json()

  if (!name?.trim() || !text?.trim()) return Response.json({ error: 'Faltan campos' }, { status: 400 })
  if (name.length > 60 || text.length > 800) return Response.json({ error: 'Texto muy largo' }, { status: 400 })
  if (!redis) return Response.json({ error: 'No disponible' }, { status: 503 })

  const comment: Comment = {
    name: name.trim(),
    text: text.trim(),
    date: new Date().toISOString(),
  }
  await redis.lpush(`comments:${slug}`, JSON.stringify(comment))
  return Response.json(comment, { status: 201 })
}
