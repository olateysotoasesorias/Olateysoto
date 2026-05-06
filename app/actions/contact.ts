'use server'

import nodemailer from 'nodemailer'

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { ok: false, error: 'Por favor completa todos los campos.' }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Olate & Soto Web" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Consulta de ${name} — Olate & Soto`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb;">
          <h2 style="color: #192A4D; font-size: 20px; margin-bottom: 4px;">Nueva consulta desde el sitio web</h2>
          <div style="height: 2px; width: 40px; background: #B5A05F; margin-bottom: 24px;"></div>
          <p style="color: #555; font-size: 14px; margin: 0 0 8px;"><strong style="color: #192A4D;">Nombre:</strong> ${name}</p>
          <p style="color: #555; font-size: 14px; margin: 0 0 8px;"><strong style="color: #192A4D;">Correo:</strong> ${email}</p>
          <p style="color: #555; font-size: 14px; margin: 16px 0 8px;"><strong style="color: #192A4D;">Mensaje:</strong></p>
          <p style="color: #333; font-size: 15px; line-height: 1.7; background: #f9f9f9; padding: 16px; border-left: 3px solid #B5A05F;">${message}</p>
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
