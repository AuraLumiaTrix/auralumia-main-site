"use client";

import { useState } from "react";

type YouTubeItem = {
  id: string;
  label: string;
  meta: string;
};

export function YouTubeListener({
  items,
  initialId,
  initialItem,
  title,
  ariaLabel,
}: {
  items: YouTubeItem[];
  initialId: string;
  initialItem?: YouTubeItem;
  title: string;
  ariaLabel: string;
}) {
  const [selectedId, setSelectedId] = useState(initialId);
  const [youtubeEnabled, setYoutubeEnabled] = useState(false);
  const selected = items.find((item) => item.id === selectedId) ?? initialItem ?? items[0];

  return (
    <>
      <div className="youtube-frame">
        {youtubeEnabled ? (
          <iframe
            key={selected.id}
            src={`https://www.youtube-nocookie.com/embed/${selected.id}`}
            title={`${title}: ${selected.label}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="youtube-consent">
            <p className="eyebrow">EXTERNER INHALT</p>
            <strong>YouTube erst nach deiner Zustimmung laden</strong>
            <span>Beim Laden des Players werden Daten an YouTube übermittelt. Du kannst deine Auswahl danach direkt hier anhören.</span>
            <button type="button" className="button button-outline" onClick={() => setYoutubeEnabled(true)}>YouTube-Inhalt laden</button>
            <a href="/datenschutz#youtube">Datenschutzhinweise</a>
          </div>
        )}
      </div>
      <div className="media-choices" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <button
            type="button"
            className={`media-choice${item.id === selected.id ? " active" : ""}`}
            aria-pressed={item.id === selected.id}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
            <small>{item.meta}</small>
          </button>
        ))}
      </div>
    </>
  );
}
