import assert from 'node:assert/strict'
import { test } from 'node:test'
import { consumeRateLimit, resetRateLimitStoreForTests } from './rate-limit'

test('consumeRateLimit blocks after the configured limit', () => {
  resetRateLimitStoreForTests()
  const now = 1_000_000
  const first = consumeRateLimit('ip-1', { limit: 2, windowMs: 60_000, now })
  const second = consumeRateLimit('ip-1', { limit: 2, windowMs: 60_000, now: now + 10 })
  const third = consumeRateLimit('ip-1', { limit: 2, windowMs: 60_000, now: now + 20 })

  assert.equal(first.allowed, true)
  assert.equal(second.allowed, true)
  assert.equal(third.allowed, false)
  assert.ok(third.retryAfterSeconds >= 1)
})
