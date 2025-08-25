'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type CodeBlockProps = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    const codeElement = React.Children.toArray(children)[0] as React.ReactElement<{children?: string}>;
    const code = codeElement?.props?.children;
    if (code && typeof code === 'string') {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <div className="relative group mb-4">
      <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto" {...props}>
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}