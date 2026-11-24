"use client";

import type { CSSProperties } from "react";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Mic, Pause, Play } from "lucide-react";

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

function getDuration(audio: HTMLAudioElement) {
  return Number.isFinite(audio.duration) ? audio.duration : 0;
}

export function PodcastAudioPlayer({ src, title, durationLabel, episode }: {
  src: string;
  title: string;
  durationLabel: string;
  episode?: string;
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
  const trackLabel = episode ? `${title}, ${episode}` : title;

  const connectAudio = useCallback((audio: HTMLAudioElement | null) => {
    audioRef.current = audio;
    if (audio) setDuration(getDuration(audio));
  }, []);

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
      aria-label={`Wiedergabeposition für ${trackLabel}`}
      aria-valuetext={`${elapsed} von ${total}`}
      style={{ "--podcast-progress": `${progress}%` } as CSSProperties}
    />
  );

  const playButton = (
    <button type="button" onClick={togglePlayback} aria-label={isPlaying ? `${trackLabel} pausieren` : `${trackLabel} abspielen`}>
      {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
    </button>
  );

  return (
    <div className={episode ? "podcast-player-message" : "podcast-player-control"}>
      <audio
        ref={connectAudio}
        hidden
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(getDuration(event.currentTarget))}
        onDurationChange={(event) => setDuration(getDuration(event.currentTarget))}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={(event) => {
          setDuration(getDuration(event.currentTarget));
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      >
        <source src={src} type="audio/mpeg" />
        Dein Browser unterstützt die Audiowiedergabe leider nicht.
      </audio>
      {episode ? (
        <>
          <div className="podcast-player-avatar" aria-hidden="true">
            <Image src="/podcast/karma-mit-zimt-und-zucker-cover.jpg" alt="" width={180} height={180} />
            <span><Mic /></span>
          </div>
          <div className="podcast-player-control podcast-player-bubble">
            <div className="podcast-player-heading">
              <h3>{title}</h3>
              <span>{episode}</span>
            </div>
            {playButton}
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
                  aria-label={`Wiedergabegeschwindigkeit für ${trackLabel} ändern, aktuell ${playbackRate.toLocaleString("de-DE")}-fach`}
                >
                  {playbackRate.toLocaleString("de-DE")}×
                </button>
                <span>{total}</span>
              </div>
            </div>
            {playbackError && <p className="podcast-player-error" role="status">Die Folge konnte gerade nicht abgespielt werden. Versuche es erneut.</p>}
          </div>
        </>
      ) : (
        <>{playButton}{seekControl}<span>{elapsed} / {total}</span></>
      )}
    </div>
  );
}
