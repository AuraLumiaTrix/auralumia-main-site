"use client";

import { useEffect, useRef, useState } from "react";

const HIGH_TOUCH_EMAIL = "high-touch@auralumia.de";

export function HighTouchInfoDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggerButton = triggerRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerButton?.focus();
    };
  }, [isOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(HIGH_TOUCH_EMAIL);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = HIGH_TOUCH_EMAIL;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 2200);
  };

  return (
    <>
      <button
        ref={triggerRef}
        className="mentoring-v2-button mentoring-v2-button-light mentoring-v2-premium-info-button"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Mehr Informationen
      </button>

      {isOpen && (
        <div
          className="mentoring-v2-dialog-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="mentoring-v2-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="high-touch-dialog-title"
            aria-describedby="high-touch-dialog-description"
          >
            <button
              ref={closeRef}
              className="mentoring-v2-dialog-close"
              type="button"
              aria-label="Informationsfenster schließen"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <p className="mentoring-v2-kicker">NEUN MONDE HIGH TOUCH 1:1</p>
            <h2 id="high-touch-dialog-title">Mehr Informationen</h2>
            <div id="high-touch-dialog-description" className="mentoring-v2-dialog-copy">
              <p>Wenn du mehr über die High-Touch-Ausbildung erfahren möchtest, kannst du dich mit einer persönlichen Bewerbung direkt bei AuraLumia melden.</p>
              <p>Erzähl darin gern ein wenig über dich: Was berührt dich an diesem Weg? Warum möchtest du diese intensive Begleitung und Ausbildung jetzt beginnen? Welche bisherigen Erfahrungen bringst du mit – und weshalb fühlt sich High Touch für dich stimmig an?</p>
              <p>Auf dieser Grundlage erhältst du weitere Informationen zur Ausbildung, zu den Preisen und zu einem möglichen gemeinsamen Weg.</p>
            </div>
            <div className="mentoring-v2-dialog-email">
              <span>{HIGH_TOUCH_EMAIL}</span>
              <button type="button" onClick={copyEmail}>{isCopied ? "Adresse kopiert" : "Adresse kopieren"}</button>
            </div>
            <p className="mentoring-v2-dialog-note" aria-live="polite">
              {isCopied ? "Die E-Mail-Adresse wurde in deine Zwischenablage kopiert." : "Kopiere die Adresse und füge sie anschließend in dein eigenes E-Mail-Programm ein."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
