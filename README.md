# India’s Got Latent – Advanced Video Streaming Platform

Welcome to the source code for **India’s Got Latent**, an advanced full-stack video-streaming web application inspired by modern OTT (Over-The-Top) services. The stack is built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Prisma** (PostgreSQL) and **Stripe** for a production-ready subscription / pay-per-view flow.

---

## 1  Features

1. **Free & Paid Episodes** – filter tabs for *Free*, *Paid* and *History* just like the reference UI.
2. **Adaptive Streaming** – delivery through HLS (HTTP Live Streaming) with multiple resolutions and a custom React video player (built on top of `@vime/react`).
3. **Authentication** – passwordless email + OAuth (Google) via **NextAuth.js**.
4. **Subscriptions & One-Time Purchases** – powered by **Stripe Checkout** and webhooks; supports recurring or single-episode unlock.
5. **Watch History & Resume Playback** – progress saved per user with resume-from-last-second capability.
6. **Search & Intelligent Recommendations** – full-text search using PostgreSQL `tsvector`; basic collaborative filtering for “You might also like”.
7. **Admin Dashboard** – upload new episodes, generate HLS renditions via FFmpeg, manage pricing and featured banners.
8. **Responsive & Accessible UI** – dark mode first, keyboard navigation, focus states & screen-reader labels.

---

## 2  Local Development

```bash
# 1. Clone the repo
$ git clone https://github.com/your-username/indias-got-latent.git && cd indias-got-latent

# 2. Install dependencies
$ npm install # or yarn

# 3. Configure environment variables
$ cp .env.example .env.local
# → Fill in DATABASE_URL, NEXTAUTH secrets, STRIPE keys, etc.

# 4. Set up the database (PostgreSQL)
$ npx prisma migrate dev --name init

# 5. Run the dev server
$ npm run dev

# 6. Open http://localhost:3000 🪄
```

### FFmpeg
For adaptive streaming you need **ffmpeg** available on `$PATH` so the upload pipeline can transcode videos into HLS renditions.

---

## 3  Project Structure

```txt
.
├── prisma/                 # Prisma schema & migrations
├── src/
│   ├── app/                # Next.js (App Router) routes
│   ├── components/         # Reusable React components
│   ├── data/               # Static JSON/TypeScript episode seeds
│   ├── lib/                # Helpers (Stripe, auth, prisma, ffmpeg, etc.)
│   └── styles/             # Tailwind global styles
├── scripts/                # CLI tools (seeder, ffmpeg pipeline)
└── public/                 # Static assets (thumbnails, poster art, fonts)
```

---

## 4  Deployment

The app is prepared for deployment on **Vercel** with a managed PostgreSQL (e.g. Neon) and **Stripe** webhooks.

```bash
# Build & start
$ npm run build && npm start
```

---

## 5  License

Licensed under the MIT License. See `LICENSE` for details.