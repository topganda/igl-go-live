"use client";

import React from 'react';
import {
  Player,
  Hls,
  DefaultUi,
  Ui,
  Poster,
  Video,
} from '@vime/react';
import '@vime/core/themes/default.css';

interface Props {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: Props) {
  return (
    <Player theme="dark" controls>
      <Hls version="latest">
        <source data-src={src} type="application/x-mpegURL" />
      </Hls>
      {poster && <Poster crossOrigin="anonymous" data-src={poster} />}
      <DefaultUi />
    </Player>
  );
}