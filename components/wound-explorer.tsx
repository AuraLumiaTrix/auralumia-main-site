"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { links } from "@/lib/site-content";

type WoundExplorerProps = {
  variant: "home" | "method";
};

const wounds = [
  {
    id: "schuldnarbe",
    title: "Schuldnarbe",
    need: "Lustgewinn / Unlustvermeidung",
    subtitle: "Vom verbotenen Genuss zur wahren Fülle",
    symbol: "/somatic-karma/symbol-schuldnarbe.png",
    triad: "/somatic-karma/triad-schuldnarbe-popup-transparent.png",
    element: "/somatic-karma/element-earth-gold-transparent.png",
    elementLabel: "Erde",
    ace: "/tarot-cards/coins-1.webp",
    arcanaLabel: "Münzen",
    triadLabel: "Ceres · Neptun · Pluto · Pholus",
    cardText: "Wenn du dich schuldig fühlst, sobald du empfängst oder es dir leicht machst.",
    methodText: "Sie berührt die Frage, ob Genuss, Entlastung und Empfangen innerlich erlaubt sind oder unbewusst mit Schuld verbunden werden.",
    intro: "Die Schuldnarbe kann spürbar werden, wenn Genuss, Empfangen oder Entlastung sofort ein schlechtes Gewissen auslösen. Dahinter steht das Bedürfnis nach Lustgewinn und dem Vermeiden von Unlust.",
    origin: "Wurden Freude und Sinnlichkeit früh an Bedingungen, Scham oder subtile Verbote geknüpft, kann sich Genuss innerlich wie etwas Unerlaubtes anfühlen.",
    signs: [
      "Wohlstand, Unterstützung oder Geschenke lassen sich nur schwer annehmen.",
      "Ruhe und Freude werden schnell von Pflichten oder einem inneren Zensor unterbrochen.",
      "Der eigene Wert soll durch Leistung, Verzicht oder Aufopferung bewiesen werden.",
    ],
    potential: "Ihr Potenzial liegt darin, Fülle anzunehmen und das Leben mit allen Sinnen zu genießen, ohne den eigenen Wert erst beweisen zu müssen.",
  },
  {
    id: "geschwisternarbe",
    title: "Geschwisternarbe",
    need: "Selbstwerterhöhung / Selbstwertschutz",
    subtitle: "Vom Konkurrenzdruck zur eigenen Strahlkraft",
    symbol: "/somatic-karma/symbol-geschwisternarbe.png",
    triad: "/somatic-karma/triad-geschwisternarbe-popup-transparent.png",
    element: "/somatic-karma/element-fire-gold-transparent.png",
    elementLabel: "Feuer",
    ace: "/tarot-cards/wands-1.webp",
    arcanaLabel: "Stäbe",
    triadLabel: "Mars · Pallas Athene · Eris · Merkur",
    cardText: "Wenn Vergleich und Konkurrenz dich davon abhalten, deinen Platz einzunehmen.",
    methodText: "Sie macht sichtbar, wie Vergleich, Gleichrangigkeit und das Einnehmen des eigenen Platzes erlebt werden.",
    intro: "Die Geschwisternarbe zeigt sich häufig im Vergleichen oder im Zurückhalten des eigenen Lichts, um dazuzugehören. Im Zentrum steht das Bedürfnis nach Selbstwertschutz und stimmiger Zugehörigkeit.",
    origin: "Wenn Aufmerksamkeit oder Anerkennung wie eine knappe Ressource erlebt wurden, kann Verbindung unbewusst mit Konkurrenz, Anpassung oder dem Drang nach Besonderheit verbunden sein.",
    signs: [
      "Zwischen dem Wunsch nach Sichtbarkeit und der Angst, zu viel zu sein, entsteht Spannung.",
      "Gemeinschaft wird ersehnt und zugleich von Misstrauen oder Konkurrenz begleitet.",
      "Der Blick nach links und rechts lässt den eigenen Wert schwanken.",
    ],
    potential: "Ihr Potenzial führt vom Gegeneinander in ein echtes Miteinander – mit dem Mut, die eigene Strahlkraft sichtbar werden zu lassen.",
  },
  {
    id: "mutternarbe",
    title: "Mutternarbe",
    need: "Bindung",
    subtitle: "Von der Bindungsangst zur nährenden Selbstliebe",
    symbol: "/somatic-karma/symbol-mutternarbe.png",
    triad: "/somatic-karma/triad-mutternarbe-popup-transparent.png",
    element: "/somatic-karma/element-water-gold-transparent.png",
    elementLabel: "Wasser",
    ace: "/tarot-cards/cups-1.webp",
    arcanaLabel: "Kelche",
    triadLabel: "Mond · Venus · Juno · Lilith",
    cardText: "Wenn du emotional viel trägst und deine eigenen Bedürfnisse aus dem Blick geraten.",
    methodText: "Sie richtet den Blick auf emotionale Nähe, Zugehörigkeit und die Balance zwischen Verbundenheit und eigenem Rhythmus.",
    intro: "Die Mutternarbe berührt die Sehnsucht nach Nähe und zugleich die Unruhe, die in enger Bindung entstehen kann. Im Mittelpunkt steht das Bedürfnis nach emotionaler Sicherheit und nährendem Vertrauen.",
    origin: "Wurde Nähe früh als unsicher, überwältigend oder kühl erlebt, kann das innere Erleben lernen, Verbindung gleichzeitig zu suchen und auf Abstand zu halten.",
    signs: [
      "Selbstfürsorge wird auf später verschoben, während für andere viel getragen wird.",
      "Nähe wird ersehnt, kann aber Fluchtimpulse oder Angst vor Abhängigkeit auslösen.",
      "Stimmungen anderer werden stark aufgenommen und eigene Grenzen schwerer spürbar.",
    ],
    potential: "Ihr Potenzial liegt in einer Nähe, die nicht einengt: in warmer Selbstliebe, klaren Grenzen und verlässlicher Verbundenheit.",
  },
  {
    id: "vaternarbe",
    title: "Vaternarbe",
    need: "Orientierung / Kontrolle",
    subtitle: "Vom inneren Rebell zur gelebten Selbstbestimmung",
    symbol: "/somatic-karma/symbol-vaternarbe.png",
    triad: "/somatic-karma/triad-vaternarbe-popup-transparent.png",
    element: "/somatic-karma/element-air-gold-transparent.png",
    elementLabel: "Luft",
    ace: "/tarot-cards/swords-1.webp",
    arcanaLabel: "Schwerter",
    triadLabel: "Saturn · Vesta · Chiron · Sonne",
    cardText: "Wenn Anerkennung im Außen wichtiger wird als deine eigene innere Führung.",
    methodText: "Sie beleuchtet den Umgang mit Richtung, Verlässlichkeit und der Frage, worauf die eigene innere Führung vertraut.",
    intro: "Die Vaternarbe kann sich im Widerstand gegen Regeln und Autoritäten oder im starken Wunsch nach äußerer Orientierung zeigen. Dahinter steht das Bedürfnis nach Struktur, Schutz und gesunder Autonomie.",
    origin: "Starre Kontrolle, Dogmen oder ein Mangel an verlässlicher Führung können die innere Ordnung verunsichern und den Wechsel zwischen Anpassung und Rebellion verstärken.",
    signs: [
      "Vorgaben werden rasch als Einengung erlebt und grundsätzlich infrage gestellt.",
      "Äußere Anerkennung wird gesucht, obwohl dabei eigene Überzeugungen zurücktreten.",
      "Eigene Werte entstehen zunächst als Gegenbewegung statt aus innerer Klarheit.",
    ],
    potential: "Ihr Potenzial ist eine innere Struktur, die Halt gibt: Widerstand wird zu Souveränität und Orientierung wächst aus den eigenen Werten.",
  },
] as const;

export function WoundExplorer({ variant }: WoundExplorerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = activeIndex !== null;

  const changeWound = (direction: -1 | 1) => {
    setActiveIndex((current) => current === null ? null : (current + direction + wounds.length) % wounds.length);
  };

  const closeModal = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setActiveIndex(null);
    window.requestAnimationFrame(() => returnFocusRef.current?.focus());
  }, []);

  const playOpeningCue = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.12;
      audio.currentTime = 0;
      void audio.play().catch(() => undefined);
    }

    const prefersLessMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (!prefersLessMotion && hasCoarsePointer && "vibrate" in navigator) {
      navigator.vibrate([28, 48, 24]);
    }
  };

  const openModal = (index: number, event: MouseEvent<HTMLButtonElement>) => {
    returnFocusRef.current = event.currentTarget;
    playOpeningCue();
    setActiveIndex(index);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined || Math.abs(end - start) < 48) return;
    changeWound(end < start ? 1 : -1);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => current === null ? null : (current + 1) % wounds.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => current === null ? null : (current - 1 + wounds.length) % wounds.length);
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, isOpen]);

  useEffect(() => {
    if (activeIndex !== null && copyRef.current) copyRef.current.scrollTop = 0;
  }, [activeIndex]);

  const activeWound = activeIndex === null ? null : wounds[activeIndex];

  return (
    <>
      {variant === "home" ? (
        <div className="wounds-grid">
          {wounds.map((wound, index) => (
            <article key={wound.id}>
              <button className="wound-home-trigger" type="button" onClick={(event) => openModal(index, event)} aria-haspopup="dialog" aria-label={`${wound.title} öffnen`}>
                <Image className="wound-symbol-image" src={wound.symbol} alt="" width={1122} height={1402} sizes="130px" />
                <h3>{wound.title}</h3>
                <p>{wound.cardText}</p>
                <span className="wound-home-play" aria-hidden="true">Narbe ansehen</span>
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="sk-wound-grid">
          {wounds.map((wound, index) => (
            <article className="sk-wound-card" id={wound.id} key={wound.id}>
              <Image className="sk-wound-symbol" src={wound.symbol} alt="" width={1122} height={1402} sizes="150px" />
              <h3>{wound.title}</h3>
              <strong>{wound.need}</strong>
              <p>{wound.methodText}</p>
              <button className="sk-wound-more" type="button" onClick={(event) => openModal(index, event)} aria-haspopup="dialog">
                Mehr erfahren
              </button>
            </article>
          ))}
        </div>
      )}

      <audio ref={audioRef} src="/audio/dreamy-bells-wound-opening.mp3" preload="auto" aria-hidden="true" />

      {activeWound && activeIndex !== null && (
        <div className="wound-dialog-backdrop" role="presentation" onMouseDown={closeModal}>
          <section
            ref={dialogRef}
            className="wound-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wound-dialog-title"
            aria-describedby="wound-dialog-intro"
            onMouseDown={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button ref={closeButtonRef} className="wound-dialog-close" type="button" aria-label="Erklärung schließen" onClick={closeModal}>×</button>

            <div className="wound-dialog-visual" aria-hidden="true">
              <span className="wound-dialog-orbit wound-dialog-orbit-one" />
              <span className="wound-dialog-orbit wound-dialog-orbit-two" />
              <p>{String(activeIndex + 1).padStart(2, "0")} / {String(wounds.length).padStart(2, "0")}</p>
              <div className="wound-dialog-symbol-map" key={activeWound.id}>
                <Image className="wound-dialog-wound-symbol" src={activeWound.symbol} alt="" width={1122} height={1402} sizes="(max-width: 760px) 95px, 150px" />
              </div>
            </div>

            <div ref={copyRef} className="wound-dialog-copy" aria-live="polite">
              <p className="wound-dialog-kicker">GRUNDBEDÜRFNIS · {activeWound.need}</p>
              <h2 id="wound-dialog-title">Die {activeWound.title}</h2>
              <p className="wound-dialog-subtitle">{activeWound.subtitle}</p>
              <p className="wound-dialog-intro" id="wound-dialog-intro">{activeWound.intro}</p>

              <div className="wound-dialog-details">
                <article>
                  <span>WORUM ES GEHT</span>
                  <p>{activeWound.origin}</p>
                </article>
                <article>
                  <span>SO KANN SIE SICH ZEIGEN</span>
                  <ul>{activeWound.signs.map((sign) => <li key={sign}>{sign}</li>)}</ul>
                </article>
              </div>

              <section className="wound-dialog-symbolic" aria-label="Symbolische Spiegel" key={`mirrors-${activeWound.id}`}>
                <p className="wound-dialog-symbolic-title">SYMBOLISCHE SPIEGEL</p>
                <div className="wound-dialog-symbolic-grid">
                  <article>
                    <div className="wound-dialog-symbolic-image wound-dialog-symbolic-element">
                      <Image src={activeWound.element} alt="" fill sizes="(max-width: 760px) 64px, 90px" />
                    </div>
                    <span>ELEMENT</span>
                    <strong>{activeWound.elementLabel}</strong>
                  </article>
                  <article>
                    <div className="wound-dialog-tarot-scene" aria-hidden="true">
                      <div className="wound-dialog-tarot-card">
                        <div className="wound-dialog-tarot-back">
                          <Image src="/tarot-cards/card-back-light.png" alt="" fill sizes="(max-width: 760px) 58px, 78px" />
                        </div>
                        <div className="wound-dialog-tarot-front">
                          <Image src={activeWound.ace} alt="" fill sizes="(max-width: 760px) 58px, 78px" />
                        </div>
                      </div>
                    </div>
                    <span>ARKANA</span>
                    <strong>{activeWound.arcanaLabel}</strong>
                  </article>
                  <article className="wound-dialog-symbolic-triad-card">
                    <div className="wound-dialog-symbolic-image wound-dialog-symbolic-triad">
                      <Image src={activeWound.triad} alt="" fill sizes="(max-width: 760px) 150px, 180px" />
                    </div>
                    <span>TRIADE</span>
                    <strong>{activeWound.triadLabel}</strong>
                  </article>
                </div>
              </section>
              <blockquote>{activeWound.potential}</blockquote>

              <aside className="wound-dialog-navigator">
                <div>
                  <span>DEINE EIGENE RESONANZ</span>
                  <p>Möchtest du behutsam entdecken, welche Narbe dich gerade besonders berührt? Der kostenfreie Somatic Karma Navigator schenkt dir eine erste persönliche Orientierung.</p>
                </div>
                <a href={links.navigator} target="_blank" rel="noopener noreferrer">Meine Narbenresonanz entdecken</a>
              </aside>

              <nav className="wound-dialog-navigation" aria-label="Zwischen den Narben wechseln">
                <button type="button" onClick={() => changeWound(-1)} aria-label="Vorherige Narbe">Zurück</button>
                <div className="wound-dialog-dots" aria-label={`${activeWound.title}, ${activeIndex + 1} von ${wounds.length}`}>
                  {wounds.map((wound, index) => (
                    <button
                      className={index === activeIndex ? "active" : ""}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`${wound.title} anzeigen`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      key={wound.id}
                    />
                  ))}
                </div>
                <button type="button" onClick={() => changeWound(1)} aria-label="Nächste Narbe">Weiter</button>
              </nav>
              <p className="wound-dialog-swipe-hint">Auf dem Smartphone kannst du nach links oder rechts wischen.</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
