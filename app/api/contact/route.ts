import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isValidEmail } from '@/lib/security/email'
import { containsHeaderBreak, escapeHtml } from '@/lib/security/html'
import { clientIpFromHeaders, consumeRateLimit } from '@/lib/security/rate-limit'

const MAX_NAME_LENGTH = 200
const MAX_COMPANY_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

export async function POST(req: Request) {
  try {
    const ip = clientIpFromHeaders(req.headers)
    const rate = consumeRateLimit(`contact:${ip}`, { limit: 5, windowMs: 15 * 60 * 1000 })
    if (!rate.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(rate.retryAfterSeconds) } }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Contact API is not configured')
      return NextResponse.json({ error: 'Unable to send message' }, { status: 503 })
    }

    const body: unknown = await req.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const { name, email, company, message } = body as Record<string, unknown>
    const nameValue = asBoundedString(name, MAX_NAME_LENGTH)
    const emailValue = typeof email === 'string' ? email.trim() : ''
    const companyValue = asBoundedString(company, MAX_COMPANY_LENGTH)
    const messageValue = asBoundedString(message, MAX_MESSAGE_LENGTH)

    if (!nameValue || !emailValue || !messageValue) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    if (
      containsHeaderBreak(nameValue) ||
      containsHeaderBreak(emailValue) ||
      containsHeaderBreak(companyValue)
    ) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    if (!isValidEmail(emailValue)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const safeName = escapeHtml(nameValue)
    const safeEmail = escapeHtml(emailValue)
    const safeCompany = escapeHtml(companyValue)
    const safeMessage = escapeHtml(messageValue)

    const { error } = await resend.emails.send({
      from: 'BrandGate Contact <onboarding@resend.dev>',
      to: 'albin.holmgren@brandgate.dev',
      subject: 'New contact form submission',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003822;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 100px;"><strong>Name</strong></td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 0;">${safeEmail}</td>
            </tr>
            ${safeCompany ? `<tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company</strong></td>
              <td style="padding: 8px 0;">${safeCompany}</td>
            </tr>` : ''}
          </table>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #003822;">Message</h3>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Contact API delivery failed')
      return NextResponse.json({ error: 'Unable to send message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Unable to send message' }, { status: 500 })
  }
}

function asBoundedString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') {
    return ''
  }
  const trimmed = value.trim()
  if (trimmed.length > maxLength) {
    return ''
  }
  return trimmed
}
