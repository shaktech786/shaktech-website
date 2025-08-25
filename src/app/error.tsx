'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-900/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-400" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Something went wrong!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We encountered an unexpected error. Don&apos;t worry, our team has been notified and is working on it.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-gray-900 border border-gray-700 rounded-lg text-left">
            <p className="text-sm font-mono text-gray-400 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() => reset()}
            className="inline-flex items-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-gray-700 hover:bg-gray-800"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-gray-700 hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Support Message */}
        <div className="mt-12 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">
            Need immediate assistance?
          </h3>
          <p className="text-gray-400 mb-4">
            If this issue persists, please contact us directly:
          </p>
          <a
            href="mailto:hi@shak-tech.com"
            className="text-accent-400 hover:text-accent-300 underline transition-colors"
          >
            hi@shak-tech.com
          </a>
        </div>
      </div>
    </div>
  );
}