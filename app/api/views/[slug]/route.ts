import { NextRequest } from 'next/server'

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

async function redis(command: string[]) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null
  const res = await fetch(`${UPSTASH_URL}/${command.map(encodeURIComponent).join('/')}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    cache: 'no-store',
  })
  const data = await res.json()
  return data.result
}

export async function POST(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const count = await redis(['INCR', `views:${slug}`])
  return Response.json({ count: count ?? 0 })
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const count = await redis(['GET', `views:${slug}`])
  return Response.json({ count: count ? Number(count) : 0 })
}
