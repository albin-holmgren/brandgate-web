const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

export function isValidEmail(value: string): boolean {
  if (value.length > 254 || value.length < 3) {
    return false
  }
  if (/[\r\n\0\s]/.test(value)) {
    return false
  }
  if (value.includes('..')) {
    return false
  }
  return EMAIL_PATTERN.test(value)
}
