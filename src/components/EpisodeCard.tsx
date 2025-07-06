import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Episode } from '@/data/episodes';
import clsx from 'clsx';

interface Props {
  episode: Episode;
  index?: number;
}

export default function EpisodeCard({ episode, index }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 transition hover:border-brand-500 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={episode.thumbnail}
          alt={episode.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 flex items-center gap-1 text-xs font-bold">
          {typeof index !== 'undefined' && (
            <span className="rounded bg-black/70 px-1.5 py-0.5">#{index + 1}</span>
          )}
          <span
            className={clsx(
              'rounded px-1.5 py-0.5',
              episode.isFree ? 'bg-brand-500' : 'bg-yellow-500'
            )}
          >
            {episode.isFree ? 'FREE' : 'PAID'}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold leading-tight">
          {episode.title}
        </h3>
        <p className="line-clamp-3 text-sm text-neutral-300">
          {episode.description}
        </p>
        <Link
          href={`/watch/${episode.id}`}
          className="btn mt-auto w-max border border-brand-500 text-brand-500 hover:bg-brand-500/10"
        >
          {episode.isFree ? 'Watch Free' : 'Unlock for ₹99'}
        </Link>
      </div>
    </div>
  );
}