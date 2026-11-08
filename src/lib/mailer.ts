import nodemailer from 'nodemailer'

export interface ContactSubmission {
  name: string
  email: string
  company?: string
  message: string
  service?: string
  budget?: string
  timeline?: string
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export const isMailerConfigured = (): boolean =>
  Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)

const createTransport = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

export async function sendContactEmail(data: ContactSubmission): Promise<void> {
  const inbox = process.env.GMAIL_USER as string
  const fields: Array<[string, string | undefined]> = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Service', data.service],
    ['Budget', data.budget],
    ['Timeline', data.timeline],
  ]
  const present = fields.filter(([, value]) => value && value.trim())

  const text = [
    ...present.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    data.message,
  ].join('\n')

  const html = `
    <h2 style="margin:0 0 16px">New inquiry from shak-tech.com</h2>
    <table cellpadding="4" style="border-collapse:collapse">
      ${present
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;padding-right:12px">${label}</td><td>${escapeHtml(value as string)}</td></tr>`
        )
        .join('')}
    </table>
    <h3 style="margin:24px 0 8px">Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `

  const subjectSuffix = data.company?.trim() ? ` (${data.company.trim()})` : ''

  await createTransport().sendMail({
    from: `"ShakTech Contact Form" <${inbox}>`,
    to: inbox,
    replyTo: `"${data.name.replace(/"/g, '')}" <${data.email}>`,
    subject: `New inquiry from ${data.name}${subjectSuffix}`,
    text,
    html,
  })
}
