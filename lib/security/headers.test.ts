import assert from 'node:assert/strict'
import { test } from 'node:test'
import nextConfig from '../../next.config'

test('headers() sets CSP, nosniff, referrer, and permissions policy', async () => {
  assert.equal(typeof nextConfig.headers, 'function')
  const entries = await nextConfig.headers!()

  const globalHeaders = entries.find((entry) => entry.source === '/:path*')
  assert.ok(globalHeaders)

  const keys = new Map(globalHeaders.headers.map((header) => [header.key, header.value]))
  assert.match(keys.get('Content-Security-Policy') ?? '', /frame-ancestors/)
  assert.equal(keys.get('X-Content-Type-Options'), 'nosniff')
  assert.equal(keys.get('Referrer-Policy'), 'strict-origin-when-cross-origin')
  assert.ok(keys.get('Permissions-Policy'))
})

test('/login and /signup do not send Access-Control-Allow-Origin: *', async () => {
  const entries = await nextConfig.headers!()

  for (const entry of entries) {
    for (const header of entry.headers) {
      if (header.key.toLowerCase() === 'access-control-allow-origin') {
        assert.notEqual(header.value.trim(), '*')
      }
    }
  }

  const authSources = entries.filter(
    (entry) => entry.source === '/login' || entry.source === '/signup'
  )
  assert.equal(authSources.length, 2)

  for (const entry of authSources) {
    const allowOrigin = entry.headers.find(
      (header) => header.key.toLowerCase() === 'access-control-allow-origin'
    )
    assert.equal(allowOrigin, undefined)
  }
})
