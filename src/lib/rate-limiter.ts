interface RateLimitEntry {
  count: number
  resetTime: number
}

class RateLimiter {
  private cache = new Map<string, RateLimitEntry>()
  private cleanupInterval: NodeJS.Timeout

  constructor() {
    this.cleanupInterval = setInterval(() => {
      this.cleanup()
    }, 60000) // Cleanup every minute
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.resetTime) {
        this.cache.delete(key)
      }
    }
  }

  async check(
    identifier: string,
    limit: number,
    windowMs: number = 60000
  ): Promise<{ allowed: boolean; remaining: number; resetTime: number; retryAfter?: number }> {
    const now = Date.now()
    const key = identifier
    const entry = this.cache.get(key)

    if (!entry || now > entry.resetTime) {
      // First request or window expired
      const resetTime = now + windowMs
      this.cache.set(key, { count: 1, resetTime })
      return {
        allowed: true,
        remaining: limit - 1,
        resetTime,
      }
    }

    if (entry.count >= limit) {
      // Rate limit exceeded
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime,
        retryAfter: Math.ceil((entry.resetTime - now) / 1000),
      }
    }

    // Increment count
    entry.count++
    this.cache.set(key, entry)

    return {
      allowed: true,
      remaining: limit - entry.count,
      resetTime: entry.resetTime,
    }
  }

  reset(identifier: string): void {
    this.cache.delete(identifier)
  }

  destroy(): void {
    clearInterval(this.cleanupInterval)
    this.cache.clear()
  }
}

export const rateLimiter = new RateLimiter()

export function getRateLimitKey(request: Request): string {
  const url = new URL(request.url)
  const ip = 
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    '127.0.0.1'
  
  return `${ip}:${url.pathname}`
}

export interface RateLimitConfig {
  requests: number
  window: number // in milliseconds
}

export const RATE_LIMITS: Record<string, RateLimitConfig> = {
  // API routes
  '/api/contact': { requests: 3, window: 60000 }, // 3 per minute
  '/api/newsletter': { requests: 2, window: 60000 }, // 2 per minute  
  '/api/chat': { requests: 10, window: 60000 }, // 10 per minute
  '/api/error': { requests: 20, window: 60000 }, // 20 per minute
  '/api/vitals': { requests: 100, window: 60000 }, // 100 per minute
  
  // Default fallbacks
  default: { requests: 60, window: 60000 }, // 60 per minute
  strict: { requests: 5, window: 60000 }, // 5 per minute for sensitive endpoints
}

export async function withRateLimit<T>(
  request: Request,
  handler: () => Promise<T>,
  config?: RateLimitConfig
): Promise<Response | T> {
  const url = new URL(request.url)
  const rateLimitConfig = config || RATE_LIMITS[url.pathname] || RATE_LIMITS.default
  
  const identifier = getRateLimitKey(request)
  const result = await rateLimiter.check(
    identifier,
    rateLimitConfig.requests,
    rateLimitConfig.window
  )

  if (!result.allowed) {
    return new Response(
      JSON.stringify({
        error: 'Rate limit exceeded',
        message: `Too many requests. Try again in ${result.retryAfter} seconds.`,
        retryAfter: result.retryAfter,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': rateLimitConfig.requests.toString(),
          'X-RateLimit-Remaining': result.remaining.toString(),
          'X-RateLimit-Reset': new Date(result.resetTime).toISOString(),
          'Retry-After': (result.retryAfter || 60).toString(),
        },
      }
    )
  }

  // Add rate limit headers to successful responses
  const response = await handler()
  
  if (response instanceof Response) {
    response.headers.set('X-RateLimit-Limit', rateLimitConfig.requests.toString())
    response.headers.set('X-RateLimit-Remaining', result.remaining.toString())
    response.headers.set('X-RateLimit-Reset', new Date(result.resetTime).toISOString())
  }

  return response
}