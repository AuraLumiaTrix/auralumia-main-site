"use client";

import { useRef, useState } from "react";

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function PortraitVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) await video.play();
    else video.pause();
  };

  return (
    <div className="portrait-player">
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        poster="/jennifer-olivia.jpg"
        aria-label="Jennifer Olivia Kindereit – persönliches Video"
        onClick={togglePlayback}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="portrait-controls">
        <button type="button" className="portrait-play" onClick={togglePlayback} aria-label={playing ? "Video pausieren" : "Video abspielen"}>
          <span className={playing ? "pause-symbol" : "play-symbol"} aria-hidden="true" />
        </button>
        <div className="portrait-progress">
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            aria-label="Videoposition"
            onChange={(event) => {
              const nextTime = Number(event.target.value);
              if (videoRef.current) videoRef.current.currentTime = nextTime;
              setCurrentTime(nextTime);
            }}
          />
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
        <p className="portrait-label">Jennifer Olivia · AuraLumia</p>
      </div>
    </div>
  );
}
