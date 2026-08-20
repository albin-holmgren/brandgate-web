import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isValidEmail } from './email.ts'

test('isValidEmail accepts a well-formed address', () => {
  assert.equal(isValidEmail('user@example.com'), true)
})

test('isValidEmail rejects empty, header breaks, and malformed values', () => {
  assert.equal(isValidEmail(''), false)
  assert.equal(isValidEmail('not-an-email'), false)
  assert.equal(isValidEmail('user@example.com\nCc:someone'), false)
  assert.equal(isValidEmail('user@@example.com'), false)
})
