import { SubmissionForm } from '@/components/suggestions/SubmissionForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Share a Suggestion | Human Village',
    description: 'Add your recommendation to the village library.',
};

export default function SubmitPage() {
  return (
    <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold font-headline text-accent">
                Share a Suggestion
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                You discovered something wonderful and want to share it. Add your suggestion to the village library for others to find.
            </p>
        </div>
        <div className="mt-12">
            <SubmissionForm />
        </div>
    </main>
  );
}
