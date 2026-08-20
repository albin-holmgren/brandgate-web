import { NextResponse } from 'next/server'
import { createLeadInAttio, trackLeadInMixpanel } from './attio'
import { isValidEmail } from '@/lib/security/email'
import { clientIpFromHeaders, consumeRateLimit } from '@/lib/security/rate-limit'
import {
  bearerTokenMatches,
  isHoneypotTriggered,
  isJsonContentType,
} from '@/lib/security/request-auth'

const genericError = { error: 'Unable to process request' }

export async function POST(req: Request) {
  try {
    const secret = process.env.LEADS_API_SECRET
    if (!secret) {
      console.error('Leads API is not configured')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const ip = clientIpFromHeaders(req.headers)
    const rate = consumeRateLimit(`leads:${ip}`, { limit: 10, windowMs: 10 * 60 * 1000 })
    if (!rate.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(rate.retryAfterSeconds) } }
      )
    }

    if (!isJsonContentType(req.headers)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    if (!bearerTokenMatches(req.headers.get('authorization'), secret)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!process.env.ATTIO_API_KEY) {
      console.error('Leads CRM write is not configured')
      return NextResponse.json(genericError, { status: 503 })
    }

    const data: unknown = await req.json()
    if (isHoneypotTriggered(data)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    if (!data || typeof data !== 'object') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const record = data as Record<string, unknown>
    const email = typeof record.email === 'string' ? record.email.toLowerCase().trim() : ''
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const leadData = {
      email,
      first_name: readTrimmed(record.first_name),
      last_name: readTrimmed(record.last_name),
      company: readTrimmed(record.company),
      job_title: readTrimmed(record.job_title),
      phone: readTrimmed(record.phone),
      website: readTrimmed(record.website),
      source: readTrimmed(record.source) || 'website',
      message: readTrimmed(record.message),
      company_size: readTrimmed(record.company_size),
      use_case: readTrimmed(record.use_case),
    }

    const attioResult = await createLeadInAttio(leadData)
    await trackLeadInMixpanel(leadData, attioResult)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(genericError, { status: 500 })
  }
}

function readTrimmed(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}
