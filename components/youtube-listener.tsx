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
  const selected = items.find((item) => item.id === selectedId) ?? initialItem ?? items[0];

  return (
    <>
      <div className="youtube-frame">
        <iframe
          key={selected.id}
          src={`https://www.youtube-nocookie.com/embed/${selected.id}`}
          title={`${title}: ${selected.label}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
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
