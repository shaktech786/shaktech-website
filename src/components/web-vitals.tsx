'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === 'production') {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        label: metric.label,
        rating: metric.rating,
        delta: metric.delta,
        entries: metric.entries,
        navigationType: metric.navigationType,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      })

      const url = '/api/vitals'

      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body)
      } else {
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        }).catch(console.error)
      }
    } else {
      console.log('Web Vital:', metric)
      
      const metricInfo = {
        CLS: 'Cumulative Layout Shift',
        FCP: 'First Contentful Paint', 
        FID: 'First Input Delay',
        INP: 'Interaction to Next Paint',
        LCP: 'Largest Contentful Paint',
        TTFB: 'Time to First Byte'
      }

      const thresholds = {
        CLS: { good: 0.1, poor: 0.25 },
        FCP: { good: 1800, poor: 3000 },
        FID: { good: 100, poor: 300 },
        INP: { good: 200, poor: 500 },
        LCP: { good: 2500, poor: 4000 },
        TTFB: { good: 800, poor: 1800 }
      }

      const threshold = thresholds[metric.name as keyof typeof thresholds]
      let status = '🟢 Good'
      
      if (threshold && metric.value > threshold.poor) {
        status = '🔴 Poor'
      } else if (threshold && metric.value > threshold.good) {
        status = '🟡 Needs Improvement'
      }

      console.log(`${status} ${metricInfo[metric.name as keyof typeof metricInfo] || metric.name}: ${metric.value}${metric.name === 'CLS' ? '' : 'ms'}`)
    }
  })

  return null
}

export default WebVitals