'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStatus } from 'react-dom';
import { suggestionSchema, type SuggestionFormData } from '@/lib/schemas';
import { submitSuggestion } from '@/app/actions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useEffect, useActionState } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: null,
  errors: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Add to Library
        </Button>
    );
}

export function SubmissionForm() {
  const [state, formAction] = useActionState(submitSuggestion, initialState);
  const { toast } = useToast();

  const form = useForm<SuggestionFormData>({
    resolver: zodResolver(suggestionSchema),
    defaultValues: {
      title: '',
      category: undefined,
      description: '',
    },
    context: state,
  });

  useEffect(() => {
    if (state?.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle>Your Suggestion</CardTitle>
            <CardDescription>Fill out the details below to add your recommendation.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form action={formAction} className="space-y-6">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., The Midnight Library" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Book">Book</SelectItem>
                        <SelectItem value="Movie">Movie</SelectItem>
                        <SelectItem value="Music">Music</SelectItem>
                        <SelectItem value="Place">Place</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Why do you recommend it?</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Tell us what makes it special..."
                        className="min-h-[120px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <SubmitButton />
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
