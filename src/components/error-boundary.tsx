'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    if (typeof window !== 'undefined') {
      const errorData = {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }

      try {
        fetch('/api/error', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(errorData),
        }).catch(err => console.error('Failed to report error:', err))
      } catch (reportError) {
        console.error('Error reporting failed:', reportError)
      }
    }
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} retry={this.retry} />
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 max-w-md mx-auto text-center">
            <div className="text-red-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              We encountered an unexpected error. Please try again or contact support if the problem persists.
            </p>
            <button
              onClick={this.retry}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Try Again
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-400">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-400 overflow-x-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

interface AsyncErrorBoundaryProps extends ErrorBoundaryProps {
  onError?: (error: Error, errorInfo?: React.ErrorInfo) => void
}

export function AsyncErrorBoundary({ children, onError, ...props }: AsyncErrorBoundaryProps) {
  return (
    <ErrorBoundary {...props}>
      <AsyncErrorCatcher onError={onError}>
        {children}
      </AsyncErrorCatcher>
    </ErrorBoundary>
  )
}

interface AsyncErrorCatcherProps {
  children: React.ReactNode
  onError?: (error: Error, errorInfo?: React.ErrorInfo) => void
}

function AsyncErrorCatcher({ children, onError }: AsyncErrorCatcherProps) {
  React.useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason))
      console.error('Unhandled promise rejection:', error)
      onError?.(error)
      
      if (typeof window !== 'undefined') {
        const errorData = {
          type: 'unhandled-promise-rejection',
          error: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }

        try {
          fetch('/api/error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(errorData),
          }).catch(err => console.error('Failed to report promise rejection:', err))
        } catch (reportError) {
          console.error('Error reporting failed:', reportError)
        }
      }
    }

    const handleError = (event: ErrorEvent) => {
      const error = event.error instanceof Error ? event.error : new Error(event.message)
      console.error('Unhandled error:', error)
      onError?.(error)
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [onError])

  return <>{children}</>
}

export default ErrorBoundary