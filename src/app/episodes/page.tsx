import React from 'react';
import { episodes } from '@/data/episodes';
import EpisodeCard from '@/components/EpisodeCard';
import Tabs from '@/components/Tabs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Episodes | India\'s Got Latent',
};

interface Props {
  searchParams: {
    type?: string;
  };
}

export default function EpisodesPage({ searchParams }: Props) {
  const type = searchParams.type ?? 'free';

  let filtered = episodes;
  if (type === 'free') filtered = episodes.filter((e) => e.isFree);
  else if (type === 'paid') filtered = episodes.filter((e) => !e.isFree);
  // history would require auth; placeholder same as free for now

  return (
    <div>
      <Tabs />
      <h2 className="mb-6 text-center text-3xl font-bold">
        ⭐ {type.charAt(0).toUpperCase() + type.slice(1)} Episodes
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ep, idx) => (
          <EpisodeCard key={ep.id} episode={ep} index={idx} />
        ))}
      </div>
    </div>
  );
}