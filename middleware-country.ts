import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// i18n configuration for BrandGate
// Root (/) = English (default)
// /sv/* = Swedish

const locales = ['en', 'sv']
const defaultLocale = 'en'

// Paths that should skip locale handling
const ignorePaths = ['/api/', '/_next/', '/favicon.ico', '/robots.txt', '/sitemap', '/blog/']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip API routes, static files, and blog posts (static HTML)
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

  // Check for country (Vercel provides this header)
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') ||
                  request.geo?.country || 
                  'US'
  
  // Check for Swedish preference
  const swedishCookie = request.cookies.get('NEXT_LOCALE')?.value
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // Redirect to Swedish if:
  // 1. User is in Sweden (SE)
  // 2. User has Swedish cookie preference
  // 3. Browser language is Swedish
  const shouldRedirectToSwedish = 
    country === 'SE' ||
    swedishCookie === 'sv' || 
    acceptLanguage.includes('sv') ||
    acceptLanguage.includes('Swedish')

  // Redirect to Swedish if preferred and not already on Swedish
  if (shouldRedirectToSwedish && !pathname.startsWith('/sv')) {
    const newUrl = new URL(`/sv${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  // Otherwise, keep on root (English)
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap|blog).*)',
  ],
}
