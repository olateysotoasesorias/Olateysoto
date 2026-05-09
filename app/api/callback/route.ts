import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const code = new URL(request.url).searchParams.get('code')

  if (!code) {
    return new Response('Código de autorización no recibido.', { status: 400 })
  }

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await res.json()

  if (data.error) {
    return new Response(`Error de autenticación: ${data.error_description}`, { status: 401 })
  }

  // Devuelve el token al CMS via postMessage (protocolo estándar de Decap CMS)
  const token = JSON.stringify(String(data.access_token))
  const html = `<!DOCTYPE html>
<html><body><script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify({ token: ${token}, provider: 'github' }),
      e.origin
    );
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script></body></html>`

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
