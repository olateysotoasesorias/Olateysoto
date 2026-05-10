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
  if (!redis) return Response.json({ count: 0 })
  const count = await redis.incr(`views:${slug}`)
  return Response.json({ count })
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!redis) return Response.json({ count: 0 })
  const count = (await redis.get<number>(`views:${slug}`)) ?? 0
  return Response.json({ count })
}
