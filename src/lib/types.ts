export type SuggestionCategory = 'Book' | 'Movie' | 'Music' | 'Place' | 'Other';

export type Suggestion = {
  id: string;
  title: string;
  category: SuggestionCategory;
  description: string;
  imageUrl: string;
  aiHint: string;
  status: 'approved';
};
