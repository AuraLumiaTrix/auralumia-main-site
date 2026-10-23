"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function PodcastAudioPlayer({ src, title, durationLabel }: { src: string; title: string; durationLabel: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  }

  function seek(value: string) {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  return (
    <div className="podcast-player-control">
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      >
        <source src={src} type="audio/mpeg" />
        Dein Browser unterstützt die Audiowiedergabe leider nicht.
      </audio>
      <button type="button" onClick={togglePlayback} aria-label={isPlaying ? `${title} pausieren` : `${title} abspielen`}>
        {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </button>
      <input
        type="range"
        min="0"
        max={duration || 0}
        step="0.1"
        value={currentTime}
        onChange={(event) => seek(event.target.value)}
        aria-label={`Wiedergabeposition für ${title}`}
        style={{ "--podcast-progress": `${progress}%` } as CSSProperties}
      />
      <span>{formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : durationLabel}</span>
    </div>
  );
}
