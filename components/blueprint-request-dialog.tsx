"use client";

import { useId, useRef, useState } from "react";

const blueprintEmail = "blueprint@auralumia.de";

export function BlueprintRequestDialog({ className, label = "Blueprint anfragen" }: { className: string; label?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(blueprintEmail);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }

  function openDialog() {
    setCopyStatus("idle");
    dialogRef.current?.showModal();
  }

  return (
    <>
      <button type="button" className={className} onClick={openDialog} aria-haspopup="dialog">
        {label}
      </button>
      <dialog
        ref={dialogRef}
        className="blueprint-request-dialog mentoring-v2-dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <button
          type="button"
          className="mentoring-v2-dialog-close"
          aria-label="Anfragefenster schließen"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <div className="mentoring-v2-dialog-scroll">
          <p className="blueprint-kicker">DREI MONDE BLUEPRINT</p>
          <h2 id={titleId}>Blueprint anfragen</h2>
          <div className="mentoring-v2-dialog-copy" id={descriptionId}>
            <p>Wenn du dich für den Drei Monde Blueprint interessierst, schreib mir gern eine E-Mail. Erzähl mir kurz, was dich gerade beschäftigt, was du dir für die kommenden drei Monate wünschst und wann du gern starten würdest.</p>
            <p>Ich melde mich bei dir mit weiteren Informationen und wir schauen gemeinsam, wann eine Begleitung möglich ist.</p>
          </div>
          <div className="mentoring-v2-dialog-email">
            <span>{blueprintEmail}</span>
            <button type="button" onClick={copyEmail}>
              {copyStatus === "copied" ? "Adresse kopiert" : "Adresse kopieren"}
            </button>
          </div>
          <p className="mentoring-v2-dialog-note" role="status">
            {copyStatus === "copied"
              ? "Die E-Mail-Adresse wurde in deine Zwischenablage kopiert."
              : copyStatus === "failed"
                ? "Automatisches Kopieren ist gerade nicht möglich. Du kannst die E-Mail-Adresse markieren und manuell kopieren."
                : "Kopiere die Adresse und füge sie in dein E-Mail-Programm ein."}
          </p>
        </div>
      </dialog>
    </>
  );
}
