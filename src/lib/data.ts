import type { Suggestion } from '@/lib/types';

const suggestions: Suggestion[] = [
  {
    id: '1',
    title: '"Sapiens: A Brief History of Humankind" by Yuval Noah Harari',
    category: 'Book',
    description:
      'A thought-provoking look at the history of our species. It completely changed how I see the world and our place in it. A must-read for anyone curious about who we are and where we came from.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'books library',
    status: 'approved',
  },
  {
    id: '2',
    title: 'The movie "Arrival" (2016)',
    category: 'Movie',
    description:
      "This isn't just a sci-fi movie; it's a beautiful story about communication, time, and humanity. The emotional depth and clever plot will stick with you long after it's over.",
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'movie theater',
    status: 'approved',
  },
  {
    id: '3',
    title: 'Bon Iver\'s album "For Emma, Forever Ago"',
    category: 'Music',
    description:
      'Recorded in a secluded cabin, this album is the definition of raw emotion. It\'s the perfect soundtrack for a quiet, reflective evening. Justin Vernon\'s falsetto is hauntingly beautiful.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'vinyl record',
    status: 'approved',
  },
  {
    id: '4',
    title: 'Visit the Ghibli Museum in Mitaka, Tokyo',
    category: 'Place',
    description:
      "It's like stepping into one of Miyazaki's films. A whimsical and magical place that celebrates the art of animation. You need to book tickets months in advance, but it's absolutely worth it.",
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'art museum',
    status: 'approved',
  },
  {
    id: '5',
    title: 'The podcast "99% Invisible"',
    category: 'Other',
    description:
      'A podcast about the hidden designs that shape our world. Each episode is a fascinating deep dive into things we overlook every day. It makes you appreciate the thought that goes into everything.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'microphone podcast',
    status: 'approved',
  },
  {
    id: '6',
    title: '"The House in the Cerulean Sea" by T.J. Klune',
    category: 'Book',
    description:
      'This book is like a warm hug. It\'s a wonderfully charming and heartwarming story about found family and accepting others for who they are. A perfect escape from reality.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'fantasy landscape',
    status: 'approved',
  },
  {
    id: '7',
    title: 'The film "Paddington 2" (2017)',
    category: 'Movie',
    description:
      'Don\'t be fooled by the fact it\'s a "kids movie". Paddington 2 is a masterpiece of storytelling, humor, and heart. It\'s pure cinematic joy and kindness from start to finish.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'teddy bear',
    status: 'approved',
  },
  {
    id: '8',
    title: 'Hiking in the Scottish Highlands',
    category: 'Place',
    description:
      'The raw, dramatic landscapes are breathtaking. Whether you\'re climbing a Munro or just walking through a glen, the sense of peace and history is incredible. Pack for all four seasons in one day!',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'mountain landscape',
    status: 'approved',
  },
  {
    id: '9',
    title: 'Learning to bake sourdough bread',
    category: 'Other',
    description:
      "It's a challenging but incredibly rewarding hobby. The process of nurturing a starter and turning simple ingredients into a delicious, crusty loaf of bread feels like magic. Plus, your home will smell amazing.",
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'baking bread',
    status: 'approved',
  },
];

export const getSuggestions = (): Suggestion[] => {
  return suggestions.filter((s) => s.status === 'approved');
};

export const getSuggestionById = (id: string): Suggestion | undefined => {
  return suggestions.find((s) => s.id === id);
};
