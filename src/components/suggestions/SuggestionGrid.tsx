import { getSuggestions } from '@/lib/data';
import { SuggestionCard } from './SuggestionCard';

export function SuggestionGrid() {
  const suggestions = getSuggestions();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {suggestions.map((suggestion, index) => (
        <SuggestionCard key={suggestion.id} suggestion={suggestion} index={index} />
      ))}
    </div>
  );
}
