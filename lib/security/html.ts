/** Escape untrusted strings before interpolating them into HTML. */
export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function containsHeaderBreak(value: string): boolean {
  return /[\r\n\0]/.test(value)
}
