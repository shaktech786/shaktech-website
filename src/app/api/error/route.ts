import { NextRequest, NextResponse } from 'next/server'

interface ErrorReport {
  error: string
  stack?: string
  componentStack?: string
  timestamp: string
  userAgent: string
  url: string
  type?: string
}

export async function POST(request: NextRequest) {
  try {
    const errorReport: ErrorReport = await request.json()

    console.error('Client Error Report:', {
      error: errorReport.error,
      stack: errorReport.stack,
      url: errorReport.url,
      timestamp: errorReport.timestamp,
      userAgent: errorReport.userAgent,
      ...(errorReport.componentStack && { componentStack: errorReport.componentStack }),
      ...(errorReport.type && { type: errorReport.type }),
    })

    if (process.env.NODE_ENV === 'production') {
      try {
        const webhookUrl = process.env.ERROR_WEBHOOK_URL
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: `🚨 ShakTech Website Error\n\`\`\`\n${errorReport.error}\n\`\`\`\nURL: ${errorReport.url}\nTime: ${errorReport.timestamp}\nUser-Agent: ${errorReport.userAgent}${errorReport.stack ? `\n\nStack:\n${errorReport.stack.slice(0, 1000)}...` : ''}`,
            }),
          })
        }
      } catch (webhookError) {
        console.error('Failed to send error webhook:', webhookError)
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing error report:', error)
    return NextResponse.json({ error: 'Failed to process error report' }, { status: 500 })
  }
}