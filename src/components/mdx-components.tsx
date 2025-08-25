'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import { CodeBlock } from './code-block';

type MDXComponentProps = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

// Custom components for MDX
export const mdxComponents = {
  // Headings
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-4xl font-bold text-white mb-6 mt-8" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl font-bold text-white mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-2xl font-bold text-white mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: MDXComponentProps) => (
    <h4 className="text-xl font-bold text-white mb-2 mt-4" {...props}>
      {children}
    </h4>
  ),
  
  // Paragraphs and text
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="text-gray-300 mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  
  // Lists
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 ml-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2 ml-4" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="text-gray-300" {...props}>
      {children}
    </li>
  ),
  
  // Links
  a: ({ href, children, ...props }: MDXComponentProps & { href?: string }) => {
    const isExternal = href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-1 transition-colors"
          {...props}
        >
          {children}
          <ExternalLink className="w-3 h-3" />
        </a>
      );
    }
    
    return (
      <Link
        href={href || '#'}
        className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },
  
  // Code blocks
  pre: CodeBlock,
  code: ({ children, ...props }: MDXComponentProps) => (
    <code className="bg-gray-800 text-cyan-300 px-1.5 py-0.5 rounded text-sm" {...props}>
      {children}
    </code>
  ),
  
  // Blockquotes
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-cyan-500 pl-4 my-4 italic text-gray-400" {...props}>
      {children}
    </blockquote>
  ),
  
  // Horizontal rule
  hr: (props: MDXComponentProps) => (
    <hr className="border-gray-700 my-8" {...props} />
  ),
  
  // Tables
  table: ({ children, ...props }: MDXComponentProps) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-700" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: MDXComponentProps) => (
    <th className="border border-gray-700 px-4 py-2 bg-gray-800 text-white font-bold text-left" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: MDXComponentProps) => (
    <td className="border border-gray-700 px-4 py-2 text-gray-300" {...props}>
      {children}
    </td>
  ),
  
  // Images
  img: ({ src, alt, ...props }: MDXComponentProps & { src?: string; alt?: string }) => {
    if (!src) return null;
    
    return (
      <div className="my-6">
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg border border-gray-700"
          {...props}
        />
        {alt && (
          <p className="text-sm text-gray-500 text-center mt-2">{alt}</p>
        )}
      </div>
    );
  },
  
  // Custom components
  Button,
  Card,
  
  // Strong/Bold
  strong: ({ children, ...props }: MDXComponentProps) => (
    <strong className="font-bold text-white" {...props}>
      {children}
    </strong>
  ),
  
  // Emphasis/Italic
  em: ({ children, ...props }: MDXComponentProps) => (
    <em className="italic text-gray-300" {...props}>
      {children}
    </em>
  ),
};