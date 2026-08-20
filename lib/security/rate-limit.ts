type Bucket = {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

export type RateLimitOptions = {
  limit: number
  windowMs: number
  now?: number
}

export type RateLimitResult = {
  allowed: boolean
  retryAfterSeconds: number
}

/** Best-effort per-isolate limiter. Shared storage is not required for fail-closed local throttling. */
export function consumeRateLimit(
  key: string,
  { limit, windowMs, now = Date.now() }: RateLimitOptions
): RateLimitResult {
  pruneExpired(now)

  const existing = buckets.get(key)
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSeconds: Math.ceil(windowMs / 1000) }
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  existing.count += 1
  return {
    allowed: true,
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  }
}

export function clientIpFromHeaders(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) {
      return first
    }
  }

  const realIp = headers.get('x-real-ip')?.trim()
  if (realIp) {
    return realIp
  }

  return 'unknown'
}

function pruneExpired(now: number) {
  if (buckets.size < 500) {
    return
  }

  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key)
    }
  }
}

/** Test helper. */
export function resetRateLimitStoreForTests() {
  buckets.clear()
}
