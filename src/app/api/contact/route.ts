import { NextRequest, NextResponse } from 'next/server'
import { withRateLimit } from '@/lib/rate-limiter'
import { isMailerConfigured, sendContactEmail, ContactSubmission } from '@/lib/mailer'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FIELD_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

const trimField = (value: unknown, max: number): string | undefined =>
  typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : undefined

async function handleContactForm(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const name = trimField(body.name, MAX_FIELD_LENGTH)
  const email = trimField(body.email, MAX_FIELD_LENGTH)
  const message = trimField(body.message, MAX_MESSAGE_LENGTH)

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required' },
      { status: 400 }
    )
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
  }

  if (!isMailerConfigured()) {
    console.error('Contact form received but GMAIL_USER / GMAIL_APP_PASSWORD are not set')
    return NextResponse.json(
      { error: 'The contact form is temporarily unavailable. Please email directly.' },
      { status: 503 }
    )
  }

  const submission: ContactSubmission = {
    name,
    email,
    message,
    company: trimField(body.company, MAX_FIELD_LENGTH),
    service: trimField(body.service, MAX_FIELD_LENGTH),
    budget: trimField(body.budget, MAX_FIELD_LENGTH),
    timeline: trimField(body.timeline, MAX_FIELD_LENGTH),
  }

  try {
    await sendContactEmail(submission)
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json(
      { error: 'Your message could not be sent. Please try again or email directly.' },
      { status: 502 }
    )
  }

  return NextResponse.json(
    { success: true, message: "Thank you for your message! I'll reply within one business day." },
    { status: 200 }
  )
}

export async function POST(request: NextRequest) {
  return withRateLimit(request, () => handleContactForm(request))
}
