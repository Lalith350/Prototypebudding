import { SuggestionGrid } from '@/components/suggestions/SuggestionGrid';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-accent tracking-tight">
          Human Village
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Tired of algorithms? Explore a curated collection of favorites from
          real people. Find something new to love, and share a gem of your own.
        </p>
      </div>
      <div className="mt-12 sm:mt-16">
        <SuggestionGrid />
      </div>
    </main>
  );
}
