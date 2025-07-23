import { z } from 'zod';

export const suggestionSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.').max(100, 'Title is too long.'),
  category: z.enum(['Book', 'Movie', 'Music', 'Place', 'Other'], {
    required_error: 'Please select a category.',
  }),
  description: z.string().min(10, 'Description must be at least 10 characters long.').max(1000, "Description can't be more than 1000 characters."),
});

export type SuggestionFormData = z.infer<typeof suggestionSchema>;
