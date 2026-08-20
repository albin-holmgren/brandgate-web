import assert from 'node:assert/strict'
import { test } from 'node:test'
import { bearerTokenMatches, isHoneypotTriggered, isJsonContentType } from './request-auth'

test('bearerTokenMatches requires equal-length secrets', () => {
  assert.equal(bearerTokenMatches('Bearer correct-token', 'correct-token'), true)
  assert.equal(bearerTokenMatches('Bearer short', 'correct-token'), false)
  assert.equal(bearerTokenMatches(null, 'correct-token'), false)
})

test('isHoneypotTriggered treats filled trap fields as bots', () => {
  assert.equal(isHoneypotTriggered({ email: 'user@example.com' }), false)
  assert.equal(isHoneypotTriggered({ email: 'user@example.com', _gotcha: 'http://spam.example' }), true)
})

test('isJsonContentType requires application/json', () => {
  assert.equal(isJsonContentType(new Headers({ 'content-type': 'application/json' })), true)
  assert.equal(isJsonContentType(new Headers({ 'content-type': 'text/plain' })), false)
  assert.equal(isJsonContentType(new Headers()), false)
})
