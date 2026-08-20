import { createHmac, timingSafeEqual } from 'crypto'

export const STRIPE_WEBHOOK_TOLERANCE_SECONDS = 300

export class StripeWebhookVerificationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'StripeWebhookVerificationError'
  }
}

/**
 * Verify a Stripe webhook using the documented signed payload:
 * `timestamp + "." + raw body`, HMAC-SHA256, equal-length comparison, and stale `t` rejection.
 */
export function verifyStripeSignedPayload(options: {
  payload: string
  signatureHeader: string
  secret: string
  toleranceSeconds?: number
  nowSeconds?: number
}): unknown {
  const {
    payload,
    signatureHeader,
    secret,
    toleranceSeconds = STRIPE_WEBHOOK_TOLERANCE_SECONDS,
    nowSeconds = Math.floor(Date.now() / 1000),
  } = options

  const { timestamp, signatures } = parseStripeSignatureHeader(signatureHeader)
  if (!Number.isFinite(timestamp) || signatures.length === 0) {
    throw new StripeWebhookVerificationError('Invalid signature header')
  }

  const signedPayload = `${timestamp}.${payload}`
  const expected = createHmac('sha256', secret).update(signedPayload, 'utf8').digest('hex')

  let matched = false
  for (const signature of signatures) {
    if (equalLengthHmacHex(signature, expected)) {
      matched = true
    }
  }

  if (!matched) {
    throw new StripeWebhookVerificationError('Signature verification failed')
  }

  if (Math.abs(nowSeconds - timestamp) > toleranceSeconds) {
    throw new StripeWebhookVerificationError('Timestamp outside tolerance')
  }

  try {
    return JSON.parse(payload) as unknown
  } catch {
    throw new StripeWebhookVerificationError('Invalid payload')
  }
}

export type StripeWebhookVerifyResult =
  | { ok: true; event: unknown }
  | { ok: false; status: 400 | 500 }

export function verifyStripeAnalyticsWebhook(input: {
  payload: string
  signatureHeader: string | null
  secret: string | undefined
  nowSeconds?: number
}): StripeWebhookVerifyResult {
  if (!input.secret) {
    return { ok: false, status: 500 }
  }

  if (!input.signatureHeader) {
    return { ok: false, status: 400 }
  }

  try {
    const event = verifyStripeSignedPayload({
      payload: input.payload,
      signatureHeader: input.signatureHeader,
      secret: input.secret,
      nowSeconds: input.nowSeconds,
    })
    return { ok: true, event }
  } catch {
    return { ok: false, status: 400 }
  }
}

function parseStripeSignatureHeader(header: string): {
  timestamp: number
  signatures: string[]
} {
  let timestamp = Number.NaN
  const signatures: string[] = []

  for (const element of header.split(',')) {
    const separator = element.indexOf('=')
    if (separator <= 0) {
      continue
    }

    const key = element.slice(0, separator).trim()
    const value = element.slice(separator + 1).trim()

    if (key === 't') {
      timestamp = Number.parseInt(value, 10)
    } else if (key === 'v1' && value) {
      signatures.push(value)
    }
  }

  return { timestamp, signatures }
}

function equalLengthHmacHex(provided: string, expected: string): boolean {
  const providedBuffer = Buffer.from(provided, 'utf8')
  const expectedBuffer = Buffer.from(expected, 'utf8')
  if (providedBuffer.length !== expectedBuffer.length) {
    return false
  }
  return timingSafeEqual(providedBuffer, expectedBuffer)
}
