import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

test('leads route does not export a public GET handler', () => {
  const here = dirname(fileURLToPath(import.meta.url))
  const source = readFileSync(join(here, '../../app/api/leads/route.ts'), 'utf8')
  assert.equal(/export async function GET/.test(source), false)
  assert.equal(/export async function POST/.test(source), true)
})
