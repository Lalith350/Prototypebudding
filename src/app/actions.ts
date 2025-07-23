'use server';

import { suggestionSchema } from '@/lib/schemas';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function submitSuggestion(prevState: any, formData: FormData) {
  const validatedFields = suggestionSchema.safeParse({
    title: formData.get('title'),
    category: formData.get('category'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would save this data to your database.
  // e.g., db.suggestions.create({ data: validatedFields.data, status: 'pending' });
  console.log('New suggestion submitted:', validatedFields.data);

  // Revalidate the home page to show new data if it were being displayed.
  revalidatePath('/');
  
  // Redirect to a success page or the homepage.
  redirect('/');
  
  // This part is for form state management, but redirect will happen first.
  return { message: 'Suggestion submitted successfully!' };
}
