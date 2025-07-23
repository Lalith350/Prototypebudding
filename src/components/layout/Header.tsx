'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <BookOpenText className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline text-accent">
            Human Village
          </span>
        </Link>
        <nav>
          <Button asChild>
            <Link href="/submit">Share a Suggestion</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
