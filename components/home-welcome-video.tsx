"use client";

import { useRef } from "react";

export function HomeWelcomeVideo({ src }: { src: string }) {
  const started = useRef(false);

  const startAtSecondTwo = (video: HTMLVideoElement) => {
    if (started.current) return;
    started.current = true;
    const latestStart = Number.isFinite(video.duration) ? Math.max(0, video.duration - 0.1) : 2;
    video.currentTime = Math.min(2, latestStart);
    void video.play().catch(() => undefined);
  };

  return (
    <video
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-label="AuraLumia Willkommensvideo"
      onLoadedMetadata={(event) => startAtSecondTwo(event.currentTarget)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
