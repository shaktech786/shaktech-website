import { NextResponse } from 'next/server'
import { envValidator } from '@/lib/env-validation'

interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: string
  uptime: number
  version: string
  environment: string
  services: {
    [key: string]: {
      status: 'up' | 'down' | 'unknown' | 'degraded'
      responseTime?: number
      error?: string
    }
  }
  config: {
    errors: string[]
    warnings: string[]
  }
}

export async function GET() {
  const startTime = Date.now()
  
  const healthCheck: HealthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'unknown',
    services: {},
    config: {
      errors: envValidator.getErrors(),
      warnings: envValidator.getWarnings(),
    }
  }

  // Check OpenAI API
  if (envValidator.isFeatureEnabled('OPENAI_API_KEY')) {
    try {
      const openaiStartTime = Date.now()
      const response = await fetch('https://api.openai.com/v1/models', {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      })
      
      healthCheck.services.openai = {
        status: response.ok ? 'up' : 'down',
        responseTime: Date.now() - openaiStartTime,
        ...(response.ok ? {} : { error: `HTTP ${response.status}` })
      }
    } catch (error) {
      healthCheck.services.openai = {
        status: 'down',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  } else {
    healthCheck.services.openai = {
      status: 'unknown',
      error: 'API key not configured'
    }
  }

  // Check external webhooks
  if (envValidator.isFeatureEnabled('ERROR_WEBHOOK_URL')) {
    try {
      const webhookStartTime = Date.now()
      const response = await fetch(process.env.ERROR_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: '🔍 ShakTech Health Check' }),
      })
      
      healthCheck.services.errorWebhook = {
        status: response.ok ? 'up' : 'down',
        responseTime: Date.now() - webhookStartTime,
      }
    } catch (error) {
      healthCheck.services.errorWebhook = {
        status: 'down',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Memory usage check
  const memUsage = process.memoryUsage()
  healthCheck.services.memory = {
    status: memUsage.heapUsed / memUsage.heapTotal < 0.9 ? 'up' : 'degraded',
    responseTime: 0,
    ...(memUsage.heapUsed / memUsage.heapTotal >= 0.9 ? { error: 'High memory usage' } : {})
  }

  // Determine overall status
  const serviceStatuses = Object.values(healthCheck.services).map(s => s.status)
  const hasDown = serviceStatuses.includes('down')
  const hasDegraded = serviceStatuses.includes('degraded')
  const hasConfigErrors = healthCheck.config.errors.length > 0

  if (hasDown || hasConfigErrors) {
    healthCheck.status = 'unhealthy'
  } else if (hasDegraded) {
    healthCheck.status = 'degraded'
  }

  const totalResponseTime = Date.now() - startTime
  
  // Return appropriate status code
  const statusCode = healthCheck.status === 'healthy' ? 200 :
                    healthCheck.status === 'degraded' ? 200 : 503

  return NextResponse.json({
    ...healthCheck,
    meta: {
      responseTime: totalResponseTime,
      checks: Object.keys(healthCheck.services).length,
    }
  }, { 
    status: statusCode,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    }
  })
}