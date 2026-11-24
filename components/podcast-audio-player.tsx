"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const waveformHeights = [
  42, 66, 76, 52, 36, 57, 83, 61, 44, 68, 96, 78,
  49, 60, 82, 61, 41, 56, 85, 72, 48, 58, 76, 93,
  64, 43, 70, 88, 56, 74, 48, 59, 79, 47, 63, 38,
];
const playbackRates = [1, 1.25, 1.5, 1.75, 2];

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function PodcastAudioPlayer({ src, title, durationLabel, waveform = false }: {
  src: string;
  title: string;
  durationLabel: string;
  waveform?: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [playbackError, setPlaybackError] = useState(false);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const elapsed = formatTime(currentTime);
  const total = duration > 0 ? formatTime(duration) : durationLabel;

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setPlaybackError(false);
      try {
        await audio.play();
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setPlaybackError(true);
        }
      }
    } else {
      audio.pause();
    }
  }

  function seek(value: string) {
    const audio = audioRef.current;
    if (!audio || duration <= 0) return;

    const nextTime = Number(value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function changePlaybackRate() {
    const audio = audioRef.current;
    if (!audio) return;

    const nextRate = playbackRates[(playbackRates.indexOf(playbackRate) + 1) % playbackRates.length];
    audio.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  }

  const seekControl = (
    <input
      type="range"
      min="0"
      max={duration}
      step="0.1"
      value={currentTime}
      disabled={duration <= 0}
      onChange={(event) => seek(event.target.value)}
      aria-label={`Wiedergabeposition für ${title}`}
      aria-valuetext={`${elapsed} von ${total}`}
      style={{ "--podcast-progress": `${progress}%` } as CSSProperties}
    />
  );

  return (
    <div className={waveform ? "podcast-player-control podcast-player-control--waveform" : "podcast-player-control"}>
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={(event) => {
          const audioDuration = event.currentTarget.duration;
          setDuration(Number.isFinite(audioDuration) ? audioDuration : 0);
        }}
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
      {waveform ? (
        <div className="podcast-player-timeline">
          <div className="podcast-player-seek">
            <div className="podcast-player-waveform" aria-hidden="true">
              {waveformHeights.map((height, index) => (
                <span
                  key={index}
                  data-played={progress >= ((index + 1) / waveformHeights.length) * 100}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            {seekControl}
          </div>
          <div className="podcast-player-times">
            <span>{elapsed}</span>
            <button
              className="podcast-player-speed"
              type="button"
              onClick={changePlaybackRate}
              aria-label={`Wiedergabegeschwindigkeit für ${title} ändern, aktuell ${playbackRate.toLocaleString("de-DE")}-fach`}
            >
              {playbackRate.toLocaleString("de-DE")}×
            </button>
            <span>{total}</span>
          </div>
        </div>
      ) : (
        <>{seekControl}<span>{elapsed} / {total}</span></>
      )}
      {waveform && playbackError && <p className="podcast-player-error" role="status">Die Folge konnte gerade nicht abgespielt werden. Versuche es erneut.</p>}
    </div>
  );
}
