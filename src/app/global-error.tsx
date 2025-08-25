'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#030712',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center',
            color: 'white',
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}>
              Critical Error
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              marginBottom: '2rem',
            }}>
              Something went seriously wrong. We apologize for the inconvenience.
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: '#6366f1',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                marginRight: '1rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#4f46e5';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#6366f1';
              }}
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                backgroundColor: 'transparent',
                color: '#6366f1',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '1px solid #6366f1',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#6366f1';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6366f1';
              }}
            >
              Go Home
            </button>
            {process.env.NODE_ENV === 'development' && (
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#1f2937',
                borderRadius: '0.5rem',
                textAlign: 'left',
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontFamily: 'monospace',
                  color: '#9ca3af',
                  wordBreak: 'break-all',
                }}>
                  {error.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}