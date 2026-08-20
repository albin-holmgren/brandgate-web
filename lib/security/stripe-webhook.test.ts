import assert from 'node:assert/strict'
import { createHmac } from 'node:crypto'
import { test } from 'node:test'
import {
  verifyStripeAnalyticsWebhook,
  verifyStripeSignedPayload,
} from './stripe-webhook'

const secret = 'whsec_test_secret'
const payload = '{"id":"evt_test","object":"event","type":"ping"}'

function signedHeader(body: string, timestamp: number, hmacBody?: string) {
  const digest = createHmac('sha256', secret)
    .update(hmacBody ?? `${timestamp}.${body}`, 'utf8')
    .digest('hex')
  return `t=${timestamp},v1=${digest}`
}

test('accepts HMAC over timestamp + "." + raw body within tolerance', () => {
  const nowSeconds = 1_700_000_000
  const header = signedHeader(payload, nowSeconds)
  const event = verifyStripeSignedPayload({
    payload,
    signatureHeader: header,
    secret,
    nowSeconds,
  }) as { id: string }

  assert.equal(event.id, 'evt_test')
})

test('rejects HMAC computed over the raw body only', () => {
  const nowSeconds = 1_700_000_000
  const header = signedHeader(payload, nowSeconds, payload)

  assert.throws(
    () =>
      verifyStripeSignedPayload({
        payload,
        signatureHeader: header,
        secret,
        nowSeconds,
      }),
    /Signature verification failed/
  )
})

test('rejects signatures whose length does not match the expected HMAC', () => {
  const nowSeconds = 1_700_000_000
  const header = signedHeader(payload, nowSeconds)
  const truncated = header.slice(0, -2)

  assert.throws(
    () =>
      verifyStripeSignedPayload({
        payload,
        signatureHeader: truncated,
        secret,
        nowSeconds,
      }),
    /Signature verification failed/
  )
})

test('rejects stale timestamps', () => {
  const nowSeconds = 1_700_000_000
  const stale = nowSeconds - 301
  const header = signedHeader(payload, stale)

  assert.throws(
    () =>
      verifyStripeSignedPayload({
        payload,
        signatureHeader: header,
        secret,
        nowSeconds,
      }),
    /Timestamp outside tolerance/
  )
})

test('fails closed when the webhook secret is missing', () => {
  const result = verifyStripeAnalyticsWebhook({
    payload,
    signatureHeader: signedHeader(payload, 1_700_000_000),
    secret: undefined,
  })

  assert.deepEqual(result, { ok: false, status: 500 })
})
