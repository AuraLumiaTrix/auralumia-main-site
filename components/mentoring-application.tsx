"use client";

import type { FormEvent } from "react";

export function MentoringApplication() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = encodeURIComponent("Persönliche Anfrage zu Aura Luminess");
    const body = encodeURIComponent(`Hallo Jennifer Olivia,\n\nmein Vorname ist ${firstName}. Ich interessiere mich für eine persönliche Begleitung bei Aura Luminess.\n\nDu erreichst mich unter: ${email}\n\nHerzliche Grüße\n${firstName}`);
    window.location.href = `mailto:kontakt@auralumia.de?subject=${subject}&body=${body}`;
  }

  return (
    <form className="application-form" onSubmit={prepareEmail}>
      <label><span>Vorname</span><input name="firstName" type="text" autoComplete="given-name" required /></label>
      <label><span>E-Mail-Adresse</span><input name="email" type="email" autoComplete="email" required /></label>
      <button className="button button-outline" type="submit">Anfrage vorbereiten</button>
      <p>Beim Klick öffnet sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an <strong>kontakt@auralumia.de</strong>. Hinweise zur Verarbeitung deiner Angaben findest du in der <a href="/datenschutz">Datenschutzerklärung</a>.</p>
    </form>
  );
}
