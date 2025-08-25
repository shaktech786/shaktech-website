'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Bookmark, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const handleSave = () => {
    setSaved(!saved);
    // In a real app, this would save to a database or localStorage
  };
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-gray-400">Share this article:</span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 hover:bg-gray-800"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 hover:bg-gray-800"
            asChild
          >
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
              )}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              𝕏
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 hover:bg-gray-800"
            asChild
          >
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
          </Button>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="border-gray-700 hover:bg-gray-800"
        onClick={handleSave}
      >
        <Bookmark className={`w-4 h-4 mr-2 ${saved ? 'fill-current' : ''}`} />
        {saved ? 'Saved' : 'Save for later'}
      </Button>
    </div>
  );
}