import Link from 'next/link';
import Image from 'next/image';
import type { Suggestion } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface SuggestionCardProps {
  suggestion: Suggestion;
  index: number;
}

export function SuggestionCard({ suggestion, index }: SuggestionCardProps) {
  const animationDelay = `${index * 100}ms`;

  return (
    <Link href={`/suggestions/${suggestion.id}`} className="group block">
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{ animationDelay }}>
        <CardHeader>
          <div className="aspect-[3/2] relative overflow-hidden rounded-t-lg">
            <Image
              src={suggestion.imageUrl}
              alt={suggestion.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={suggestion.aiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="font-headline text-xl leading-snug">
            {suggestion.title}
          </CardTitle>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge variant="secondary">{suggestion.category}</Badge>
          <div className="flex items-center text-sm text-primary group-hover:underline">
            View
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
