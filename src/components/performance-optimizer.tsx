'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    const prefetchResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/shaktech_logo.png',
        '/api/chat',
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = resource
        document.head.appendChild(link)
      })
    }

    const optimizeImages = () => {
      const images = document.querySelectorAll('img:not([loading])')
      images.forEach((img, index) => {
        if (index < 3) {
          img.setAttribute('loading', 'eager')
          img.setAttribute('fetchpriority', 'high')
        } else {
          img.setAttribute('loading', 'lazy')
        }
        
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async')
        }
      })
    }

    const preconnectToExternalDomains = () => {
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ]

      externalDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    const optimizeAnimations = () => {
      const preferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      if (preferReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0ms')
        document.documentElement.style.setProperty('--transition-duration', '0ms')
      }

      preferReducedMotion.addEventListener('change', (e) => {
        if (e.matches) {
          document.documentElement.style.setProperty('--animation-duration', '0ms')
          document.documentElement.style.setProperty('--transition-duration', '0ms')
        } else {
          document.documentElement.style.removeProperty('--animation-duration')
          document.documentElement.style.removeProperty('--transition-duration')
        }
      })
    }

    const setupIdleCallback = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          prefetchResources()
        }, { timeout: 3000 })
      } else {
        setTimeout(prefetchResources, 1000)
      }
    }

    const observeLayoutShifts = () => {
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'layout-shift') {
                const shift = entry as PerformanceEntry & { value: number; hadRecentInput?: boolean; sources?: Array<{ node?: Element; currentRect: DOMRect }> }
                if (shift.hadRecentInput) continue
                if (shift.value > 0.1) {
                  console.warn('Large layout shift detected:', {
                    value: shift.value,
                    sources: shift.sources?.map(s => ({
                      node: s.node?.tagName,
                      rect: s.currentRect
                    }))
                  })
                }
              }
            }
          })

          observer.observe({ entryTypes: ['layout-shift'] })
          
          return () => observer.disconnect()
        } catch (error) {
          console.error('Failed to observe layout shifts:', error)
        }
      }
    }

    const setupIntersectionObserver = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]')
      
      if (lazyElements.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              const src = element.dataset.src
              if (src) {
                if (element.tagName === 'IMG') {
                  (element as HTMLImageElement).src = src
                } else {
                  element.style.backgroundImage = `url(${src})`
                }
                element.removeAttribute('data-lazy')
                observer.unobserve(element)
              }
            }
          })
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        })

        lazyElements.forEach(el => observer.observe(el))
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImages()
        preconnectToExternalDomains()
        optimizeAnimations()
        setupIntersectionObserver()
        observeLayoutShifts()
      })
    } else {
      optimizeImages()
      preconnectToExternalDomains()
      optimizeAnimations()
      setupIntersectionObserver()
      observeLayoutShifts()
    }

    setupIdleCallback()

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        navigator.sendBeacon?.('/api/analytics', JSON.stringify({
          event: 'page_hidden',
          timestamp: Date.now(),
          url: window.location.href
        }))
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return null
}

export default PerformanceOptimizer