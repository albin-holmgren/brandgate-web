import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// SEO BEST PRACTICES FOR LANGUAGE HANDLING:
// 1. DON'T auto-redirect based on IP (Googlebot gets confused)
// 2. DO use hreflang tags to indicate language versions
// 3. DO show language banner/switcher for user choice
// 4. DO use subdirectories (/sv/) not subdomains
// 5. DO let users override with cookie preference

const locales = ['en', 'sv']
const defaultLocale = 'en'

// Paths that should skip locale handling (static files, API, etc)
const ignorePaths = [
  '/api/', 
  '/_next/', 
  '/favicon.ico', 
  '/robots.txt', 
  '/sitemap',
  '/blog/',  // Blog is static HTML, don't interfere
  '/tools/',
  '/images/',
  '/fonts/'
]

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip API routes, static files, and blog posts
  if (ignorePaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // NOTE: We DON'T auto-redirect based on country/IP
  // This is bad for SEO - Googlebot gets confused
  // Instead, we let users choose via language switcher
  // Or use the cookie preference if they've chosen before

  // Check for user language preference cookie
  const userLocale = request.cookies.get('NEXT_LOCALE')?.value
  
  // Only redirect if user has explicitly set a preference
  if (userLocale && userLocale !== 'en' && !pathname.startsWith(`/${userLocale}`)) {
    const newUrl = new URL(`/${userLocale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  // Otherwise, stay on current URL (no redirect)
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap|blog|tools|images|fonts).*)',
  ],
}
