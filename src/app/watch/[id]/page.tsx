import React from 'react';
import { notFound } from 'next/navigation';
import { episodes } from '@/data/episodes';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

interface Props {
  params: {
    id: string;
  };
}

export default function WatchPage({ params }: Props) {
  const episode = episodes.find((e) => e.id === params.id);
  if (!episode) return notFound();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-4 text-2xl font-bold">{episode.title}</h1>
      <div className="aspect-video overflow-hidden rounded-lg border border-neutral-800">
        <Player src={episode.videoUrl} poster={episode.thumbnail} />
      </div>
      <p className="mt-6 text-neutral-300">{episode.description}</p>
    </div>
  );
}