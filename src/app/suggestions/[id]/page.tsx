import { getSuggestionById, getSuggestions } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type SuggestionPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const suggestions = getSuggestions();
  return suggestions.map((suggestion) => ({
    id: suggestion.id,
  }));
}

export default function SuggestionPage({ params }: SuggestionPageProps) {
  const suggestion = getSuggestionById(params.id);

  if (!suggestion) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to all suggestions
            </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-lg shadow-sm">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-6">
          <Image
            src={suggestion.imageUrl}
            alt={suggestion.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
            data-ai-hint={suggestion.aiHint}
          />
        </div>
        <Badge variant="secondary" className="mb-2">{suggestion.category}</Badge>
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-accent mb-4">
          {suggestion.title}
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p>{suggestion.description}</p>
        </div>
        <div className="mt-8 pt-6 border-t">
          <h2 className="text-lg font-semibold mb-3">Enjoyed this?</h2>
          <p className="text-muted-foreground mb-4">Keep the village library growing by sharing something you love.</p>
          <Button asChild>
            <Link href="/submit">Share Your Own Suggestion</Link>
          </Button>
        </div>
      </article>
    </main>
  );
}
