import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const nonce = generateNonce()
  
  response.headers.set('X-Nonce', nonce)
  
  const requestUrl = request.nextUrl.pathname
  const isApiRoute = requestUrl.startsWith('/api')
  
  if (isApiRoute) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, nosnippet, noarchive')
    
    const origin = request.headers.get('origin')
    const allowedOrigins = [
      'https://shak-tech.com',
      'https://www.shak-tech.com',
      ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
    ]
    
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
    }
    
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Max-Age', '86400')
  }
  
  const userAgent = request.headers.get('user-agent') || ''
  
  if (isBot(userAgent) && !isAllowedBot(userAgent)) {
    if (requestUrl.includes('/api') || requestUrl.includes('/admin')) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }
  
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers })
  }
  
  return response
}

function generateNonce(): string {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64')
}

function isBot(userAgent: string): boolean {
  const botPatterns = [
    'bot', 'crawler', 'spider', 'scraper', 'curl', 'wget', 'python-requests',
    'postman', 'insomnia', 'httpie', 'java', 'php', 'ruby', 'go-http-client'
  ]
  
  return botPatterns.some(pattern => 
    userAgent.toLowerCase().includes(pattern)
  )
}

function isAllowedBot(userAgent: string): boolean {
  const allowedBots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
    'whatsapp', 'telegrambot', 'applebot', 'amazonbot', 'semrushbot'
  ]
  
  return allowedBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  )
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}