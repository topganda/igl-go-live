import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "India's Got Latent",
  description: 'Advanced video streaming platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + ' bg-black text-white'}>
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-xl font-bold text-brand-500">
              India's Got Latent
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/episodes" className="hover:text-brand-400">
                Episodes
              </Link>
              <Link href="/about" className="hover:text-brand-400">
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10 pt-8">
          {children}
        </main>
      </body>
    </html>
  );
}