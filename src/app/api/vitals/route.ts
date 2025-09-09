import { NextRequest, NextResponse } from 'next/server'

interface WebVitalMetric {
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'
  value: number
  id: string
  label: string
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  entries: PerformanceEntry[]
  navigationType: string
  url: string
  timestamp: number
  userAgent: string
}

export async function POST(request: NextRequest) {
  try {
    const metric: WebVitalMetric = await request.json()

    console.log('Web Vital Received:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      url: metric.url,
      timestamp: new Date(metric.timestamp).toISOString(),
    })

    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FCP: { good: 1800, poor: 3000 },
      FID: { good: 100, poor: 300 },
      INP: { good: 200, poor: 500 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 }
    }

    const threshold = thresholds[metric.name]
    const isPoorPerformance = threshold && metric.value > threshold.poor

    if (isPoorPerformance) {
      const alertData = {
        metric: metric.name,
        value: metric.value,
        threshold: threshold.poor,
        url: metric.url,
        userAgent: metric.userAgent,
        timestamp: new Date(metric.timestamp).toISOString(),
      }

      const webhookUrl = process.env.PERFORMANCE_WEBHOOK_URL
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: `🐌 ShakTech Performance Alert\n**${metric.name}**: ${metric.value}${metric.name === 'CLS' ? '' : 'ms'} (threshold: ${threshold.poor}${metric.name === 'CLS' ? '' : 'ms'})\n**URL**: ${metric.url}\n**Time**: ${alertData.timestamp}`,
            }),
          })
        } catch (webhookError) {
          console.error('Failed to send performance alert:', webhookError)
        }
      }
    }

    if (process.env.ANALYTICS_API_KEY) {
      try {
        await fetch('https://api.web-vitals.dev/v1/vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ANALYTICS_API_KEY}`,
          },
          body: JSON.stringify({
            ...metric,
            site: 'shak-tech.com',
            environment: process.env.NODE_ENV,
          }),
        })
      } catch (analyticsError) {
        console.error('Failed to send to analytics:', analyticsError)
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing web vital:', error)
    return NextResponse.json({ error: 'Failed to process web vital' }, { status: 500 })
  }
}