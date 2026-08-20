import { timingSafeEqual } from 'crypto'

const HONEYPOT_FIELDS = ['_gotcha', 'fax', 'honeypot'] as const

export function bearerTokenMatches(header: string | null, secret: string): boolean {
  const provided = header?.startsWith('Bearer ') ? header.slice('Bearer '.length) : ''
  const providedBuffer = Buffer.from(provided)
  const expectedBuffer = Buffer.from(secret)

  if (providedBuffer.length !== expectedBuffer.length) {
    timingSafeEqual(expectedBuffer, expectedBuffer)
    return false
  }

  return timingSafeEqual(providedBuffer, expectedBuffer)
}

export function isHoneypotTriggered(body: unknown): boolean {
  if (!body || typeof body !== 'object') {
    return false
  }

  const record = body as Record<string, unknown>
  return HONEYPOT_FIELDS.some((field) => {
    const value = record[field]
    return typeof value === 'string' && value.trim() !== ''
  })
}

export function isJsonContentType(headers: Headers): boolean {
  const contentType = headers.get('content-type')
  if (!contentType) {
    return false
  }
  return contentType.toLowerCase().includes('application/json')
}
