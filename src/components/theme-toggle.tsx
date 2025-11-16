'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme, default to dark
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700" />
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 absolute transition-all duration-300 ${
        theme === 'light'
          ? 'rotate-0 scale-100 text-amber-600'
          : 'rotate-90 scale-0 text-gray-400'
      }`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-300 ${
        theme === 'light'
          ? '-rotate-90 scale-0 text-gray-400'
          : 'rotate-0 scale-100 text-indigo-400'
      }`} />
    </Button>
  );
}