import { Redis } from '@upstash/redis'
import { NextRequest } from 'next/server'

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null

export async function POST(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!redis) {
    console.error('[views] Redis no configurado — faltan UPSTASH_REDIS_REST_URL o UPSTASH_REDIS_REST_TOKEN')
    return Response.json({ count: 0 })
  }
  try {
    const count = await redis.incr(`views:${slug}`)
    return Response.json({ count })
  } catch (e) {
    console.error('[views] Error Upstash:', e)
    return Response.json({ count: 0 })
  }
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!redis) return Response.json({ count: 0 })
  try {
    const count = (await redis.get<number>(`views:${slug}`)) ?? 0
    return Response.json({ count })
  } catch (e) {
    console.error('[views] Error Upstash GET:', e)
    return Response.json({ count: 0 })
  }
}
