import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface TabConfig {
  label: string;
  value: string;
}

const tabs: TabConfig[] = [
  { label: 'Free', value: 'free' },
  { label: 'Paid', value: 'paid' },
  { label: 'History', value: 'history' },
];

export default function Tabs() {
  const pathname = usePathname();
  const params = useSearchParams();
  const active = params.get('type') ?? 'free';

  return (
    <div className="mx-auto mb-10 flex w-max items-center rounded-full bg-neutral-800 p-1">
      {tabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <Link
            key={tab.value}
            href={`${pathname}?type=${tab.value}`}
            className={clsx(
              'rounded-full px-6 py-2 text-sm font-semibold transition',
              isActive ? 'bg-brand-500 text-white' : 'text-neutral-300 hover:text-white'
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}