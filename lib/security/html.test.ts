import assert from 'node:assert/strict'
import { test } from 'node:test'
import { containsHeaderBreak, escapeHtml } from './html.ts'

test('escapeHtml encodes markup and quotes', () => {
  assert.equal(
    escapeHtml(`<img src=x onerror=alert(1) foo="'">`),
    '&lt;img src=x onerror=alert(1) foo=&quot;&#39;&quot;&gt;'
  )
})

test('containsHeaderBreak detects CR and LF', () => {
  assert.equal(containsHeaderBreak('safe'), false)
  assert.equal(containsHeaderBreak('bad\ninjected'), true)
  assert.equal(containsHeaderBreak('bad\rinjected'), true)
})
