export type Episode = {
  id: string;
  number: number;
  title: string;
  guest: string;
  description: string;
  thumbnail: string; // path in public/
  videoUrl: string; // HLS or mp4 placeholder
  isFree: boolean;
};

export const episodes: Episode[] = [
  {
    id: 'ep1',
    number: 1,
    title: "India's Got Latent - Episode 1 ft. Raftaar",
    guest: 'Raftaar',
    description:
      'The very first episode featuring the debut of amazing hidden talents with special guest Raftaar.',
    thumbnail: '/thumbnails/ep1.jpg',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    isFree: true,
  },
  {
    id: 'ep2',
    number: 2,
    title: "India's Got Latent - Episode 2 ft. GamerFleet, JokeSingh & more",
    guest: 'GamerFleet, JokeSingh & KaranSinghMagic',
    description:
      'Hilarious second episode with special guests GamerFleet, JokeSingh, and KaranSinghMagic.',
    thumbnail: '/thumbnails/ep2.jpg',
    videoUrl: 'https://test-streams.mux.dev/pts_shift/master.m3u8',
    isFree: true,
  },
  {
    id: 'ep3',
    number: 3,
    title: "India's Got Latent - Episode 3 ft. Urfi Javed",
    guest: 'Urfi Javed',
    description:
      'Episode 3 brings more laughter and unexpected performances with Urfi Javed.',
    thumbnail: '/thumbnails/ep3.jpg',
    videoUrl: 'https://test-streams.mux.dev/dai-discontinuity-daterange/master.m3u8',
    isFree: true,
  },
  {
    id: 'ep4',
    number: 4,
    title: "India's Got Latent - Episode 4 ft. Secret Guest",
    guest: 'Secret Guest',
    description:
      'Episode 4 is packed with surprises and the best talents from across the nation.',
    thumbnail: '/thumbnails/ep4.jpg',
    videoUrl: 'https://test-streams.mux.dev/pts_shift/master.m3u8',
    isFree: false,
  },
];