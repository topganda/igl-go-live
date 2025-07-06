import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center gap-8 py-16 text-center">
      <h1 className="text-4xl font-extrabold sm:text-6xl">
        Welcome to <span className="text-brand-500">India's Got Latent</span>
      </h1>
      <p className="max-w-2xl text-lg text-neutral-300">
        Stream the funniest talent show in the country – discover hidden gems,
        vote for your favourites and binge-watch exclusive episodes.
      </p>
      <Link
        href="/episodes"
        className="btn bg-brand-500 text-white hover:bg-brand-600"
      >
        Browse Episodes →
      </Link>
    </section>
  );
}