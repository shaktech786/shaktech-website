'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    
    if (newTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 absolute transition-all ${
        theme === 'light' 
          ? 'rotate-0 scale-100 text-yellow-500' 
          : 'rotate-90 scale-0 text-gray-400'
      }`} />
      <Moon className={`h-5 w-5 absolute transition-all ${
        theme === 'light' 
          ? '-rotate-90 scale-0 text-gray-400' 
          : 'rotate-0 scale-100 text-blue-400'
      }`} />
    </Button>
  );
}