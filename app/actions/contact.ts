'use server'

import { createTransport } from 'nodemailer'

const esc = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const contacto = formData.get('contacto') as string
  const message = formData.get('message') as string

  if (!name || !contacto || !message) {
    return { ok: false, error: 'Por favor completa todos los campos.' }
  }

  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Olate & Soto Web" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      ...(contacto.includes('@') ? { replyTo: contacto.trim() } : {}),
      subject: `Consulta de ${name.slice(0, 80)} — Olate & Soto`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb;">
          <h2 style="color: #192A4D; font-size: 20px; margin-bottom: 4px;">Nueva consulta desde el sitio web</h2>
          <div style="height: 2px; width: 40px; background: #B5A05F; margin-bottom: 24px;"></div>
          <p style="color: #555; font-size: 14px; margin: 0 0 8px;"><strong style="color: #192A4D;">Nombre:</strong> ${esc(name)}</p>
          <p style="color: #555; font-size: 14px; margin: 0 0 8px;"><strong style="color: #192A4D;">WhatsApp o correo:</strong> ${esc(contacto)}</p>
          <p style="color: #555; font-size: 14px; margin: 16px 0 8px;"><strong style="color: #192A4D;">Mensaje:</strong></p>
          <p style="color: #333; font-size: 15px; line-height: 1.7; background: #f9f9f9; padding: 16px; border-left: 3px solid #B5A05F;">${esc(message)}</p>
          <p style="color: #aaa; font-size: 12px; margin-top: 32px;">Olate & Soto Asesores Jurídicos · Talca</p>
        </div>
      `,
    })
    return { ok: true }
  } catch (err) {
    console.error(err)
    return { ok: false, error: 'Error al enviar. Intenta más tarde.' }
  }
}
