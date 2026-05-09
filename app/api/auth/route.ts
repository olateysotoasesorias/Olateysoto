import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const origin = new URL(request.url).origin
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: `${origin}/api/callback`,
    scope: 'repo,user',
  })
  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`
  )
}
