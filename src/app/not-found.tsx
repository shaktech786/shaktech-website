'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-accent-900/20 rounded-full flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-accent-400" />
          </div>
        </div>

        {/* 404 Message */}
        <h1 className="text-8xl sm:text-9xl font-bold text-gradient-accent mb-4">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="cta"
            size="lg"
            asChild
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-gray-700 hover:bg-gray-800"
          >
            <Link href="/blog">
              <Search className="w-5 h-5 mr-2" />
              Browse Blog
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-gray-700 hover:bg-gray-800"
          >
            <Link href="/" onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Popular Links */}
        <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8">
          <p className="text-gray-400">
            Still can&apos;t find what you&apos;re looking for?{' '}
            <Link
              href="/contact"
              className="text-accent-400 hover:text-accent-300 underline transition-colors"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}