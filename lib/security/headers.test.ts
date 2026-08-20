import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const source = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '../../next.config.ts'),
  'utf8'
)

test('headers() sets CSP, nosniff, referrer, and permissions policy', () => {
  assert.match(source, /async headers\(\)/)
  assert.match(source, /Content-Security-Policy/)
  assert.match(source, /frame-ancestors/)
  assert.match(source, /X-Content-Type-Options/)
  assert.match(source, /nosniff/)
  assert.match(source, /Referrer-Policy/)
  assert.match(source, /Permissions-Policy/)
})

test('/login and /signup do not send Access-Control-Allow-Origin: *', () => {
  assert.match(source, /source: "\/login"/)
  assert.match(source, /source: "\/signup"/)
  assert.equal(/Access-Control-Allow-Origin/.test(source), false)
  assert.equal(/Access-Control-Allow-Origin:\s*\*/.test(source), false)
})
