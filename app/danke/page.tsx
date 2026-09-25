import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danke für dein Vertrauen",
  description: "Deine Bestellung im AuraLumia-Universum ist abgeschlossen. Hier erfährst du, wie es weitergeht.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    number: "01",
    title: "Deine Kaufbestätigung",
    text: "CopeCart sendet die Bestätigung an die E-Mail-Adresse, die du bei deiner Bestellung angegeben hast.",
  },
  {
    number: "02",
    title: "Dein direkter Zugang",
    text: "Bei einem Sofort-Download-Produkt erhältst du deinen Zugang unmittelbar mit den entsprechenden Bestellinformationen.",
  },
  {
    number: "03",
    title: "Meine persönliche Rückmeldung",
    text: "Bei individuell erstellten Produkten melde ich mich innerhalb der nächsten 72 Stunden persönlich per E-Mail – mit allen Informationen oder Fragen, die ich für deine Erstellung benötige.",
  },
];

export default function ThankYouPage() {
  return <>
    <section className="thank-hero">
      <div className="shell thank-hero-grid">
        <div className="thank-hero-copy">
          <p className="eyebrow">DEINE BESTELLUNG IST ABGESCHLOSSEN</p>
          <h1>Danke für dein Vertrauen.</h1>
          <p>Du darfst dich jetzt zurücklehnen. Alles Weitere findet seinen Weg zu dir.</p>
        </div>
        <div className="thank-seal" aria-hidden="true">
          <Image src="/aura-lumia-kupferlogo-footer.png" alt="" width={512} height={512} priority />
        </div>
      </div>
    </section>

    <section className="thank-next shell" aria-labelledby="thank-next-heading">
      <div className="thank-intro">
        <p className="eyebrow">WIE ES NUN WEITERGEHT</p>
        <h2 id="thank-next-heading">Du liebe Schwester, deine Bestellung ist bei mir angekommen.</h2>
        <p>Vielen Dank für deine Bestellung im AuraLumia-Universum. Je nachdem, welches Produkt du gewählt hast, geht es nun auf einem dieser Wege weiter:</p>
      </div>
      <div className="thank-steps">
        {nextSteps.map((step) => <article key={step.number}>
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>)}
      </div>
      <p className="thank-note">Solltest du nach 72 Stunden noch keine Nachricht sehen, prüfe bitte auch deinen Spam-Ordner.</p>
    </section>

    <section className="thank-mantra">
      <div className="shell thank-mantra-inner">
        <p className="eyebrow">DEIN PERSÖNLICHES MANTRA</p>
        <blockquote>„Ich bin frei, meine eigene Geschichte zu beginnen, ohne um Erlaubnis zu fragen.“</blockquote>
        <p>Von Herzen,<br /><strong>Jennifer Olivia</strong></p>
        <Link className="button button-outline" href="/">Zurück zu AuraLumia</Link>
      </div>
    </section>
  </>;
}
