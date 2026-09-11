"use client";

import { useEffect, useMemo, useState } from "react";
import { tarotData, type TarotCard } from "@/lib/tarot-data";

type Suit = "major" | "coins" | "wands" | "cups" | "swords";
type CardItem = { card: TarotCard; suit: Suit; index: number };

const collections: Array<{ key: Suit; label: string; note: string; scar: string }> = [
  { key: "major", label: "Große Arkana", note: "Die Reise der Seele", scar: "22 Meistersäulen" },
  { key: "coins", label: "Münzen", note: "Erde · Verkörperung", scar: "Schuldnarbe" },
  { key: "wands", label: "Stäbe", note: "Feuer · Schöpferkraft", scar: "Schwester-/Brudernarbe" },
  { key: "cups", label: "Kelche", note: "Wasser · Gefühlswelt", scar: "Mutternarbe" },
  { key: "swords", label: "Schwerter", note: "Luft · Erkenntnis", scar: "Vaternarbe" },
];

const cardImage = (suit: Suit, index: number) => `/tarot-cards/${suit}-${index + 1}.webp`;
const cardNumber = (suit: Suit, index: number) => suit === "major" ? (index === 0 ? "0" : String(index)) : String(index + 1).padStart(2, "0");

export function TarotLibrary() {
  const [activeSuit, setActiveSuit] = useState<Suit>("major");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<CardItem | null>(null);

  const allCards = useMemo<CardItem[]>(
    () => collections.flatMap((collection) => tarotData[collection.key].cards.map((card, index) => ({ card, suit: collection.key, index }))),
    [],
  );

  const visibleCards = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("de");
    return allCards.filter((item) => {
      if (item.suit !== activeSuit) return false;
      if (!normalized) return true;
      return [item.card.name, item.card.architecture, item.card.light, item.card.shadow]
        .join(" ")
        .toLocaleLowerCase("de")
        .includes(normalized);
    });
  }, [activeSuit, allCards, query]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const selectedCollection = selected ? collections.find((collection) => collection.key === selected.suit) : null;

  return (
    <section className="tarot-library shell" id="kartenbedeutungen">
      <div className="tarot-library-heading">
        <div><p className="eyebrow">DAS ARCHIV DER 78 SPIEGEL</p><h2>Öffne die Bedeutung, die dich ruft.</h2></div>
        <label className="tarot-search">Karte suchen<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="z. B. Herrscherin" /></label>
      </div>
      <div className="tarot-filters" aria-label="Tarot-Arkana filtern">
        {collections.map((collection) => <button className={activeSuit === collection.key ? "active" : ""} onClick={() => setActiveSuit(collection.key)} type="button" key={collection.key}>{collection.label}</button>)}
      </div>
      <div className="tarot-card-grid">
        {visibleCards.map((item) => {
          const collection = collections.find((entry) => entry.key === item.suit)!;
          return <button className="tarot-card-tile" type="button" onClick={() => setSelected(item)} key={item.card.id}>
            <img src={cardImage(item.suit, item.index)} alt={item.card.name} loading="lazy" />
            <span>{collection.label} · {cardNumber(item.suit, item.index)}</span>
            <strong>{item.card.name}</strong>
            <small>{item.card.architecture}</small>
          </button>;
        })}
      </div>
      {visibleCards.length === 0 && <p className="tarot-empty">Zu dieser Suche wurde keine Karte gefunden.</p>}

      {selected && selectedCollection && <div className="tarot-modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
        <section className="tarot-modal" role="dialog" aria-modal="true" aria-labelledby="tarot-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="tarot-modal-close" type="button" aria-label="Kartenbedeutung schließen" onClick={() => setSelected(null)}>×</button>
          <div className="tarot-modal-art">
            <img src={cardImage(selected.suit, selected.index)} alt={selected.card.name} />
            <p>{selectedCollection.label} · {selectedCollection.scar}</p>
          </div>
          <div className="tarot-modal-copy">
            <p className="eyebrow">{selectedCollection.note} · {cardNumber(selected.suit, selected.index)}</p>
            <h2 id="tarot-dialog-title">{selected.card.name}</h2>
            <p className="tarot-architecture">{selected.card.architecture}</p>
            <div className="tarot-meaning-pair"><article><span>LICHT · FREIE BEWEGUNG</span><p>{selected.card.light}</p></article><article><span>SCHATTEN · SCHUTZBEWEGUNG</span><p>{selected.card.shadow}</p></article></div>
            <article className="tarot-meaning"><span>BOTSCHAFT</span><p>{selected.card.message}</p></article>
            <article className="tarot-meaning"><span>KÖRPERKOMPASS</span><p>{selected.card.mantra}</p></article>
            <article className="tarot-meaning tarot-wound"><span>{selectedCollection.scar.toUpperCase()} · NARBENPRÄGUNG</span><p>{selected.card.wound}</p></article>
            <article className="tarot-meaning tarot-healing"><span>LICHT · SOMATISCHE INTEGRATION</span><p>{selected.card.healing}</p></article>
            <blockquote><small>INTEGRATIONSSATZ</small>„{selected.card.ancestralMantra}“</blockquote>
          </div>
        </section>
      </div>}
    </section>
  );
}
