import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Aura Lumia – Jennifer Olivia Kindereit.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page shell">
      <header className="legal-header">
        <p className="eyebrow">AURA LUMIA · RECHTLICHES</p>
        <h1>Impressum</h1>
      </header>

      <div className="legal-grid">
        <section>
          <h2>Anbieterin</h2>
          <address>
            Aura Lumia<br />
            Inhaberin: Jennifer Olivia Kindereit<br />
            Im Morgartenfeld 7<br />
            29690 Schwarmstedt<br />
            Deutschland
          </address>
          <p><strong>E-Mail:</strong> <a href="mailto:jenniferkindereit@googlemail.com">jenniferkindereit@googlemail.com</a></p>
          <p><strong>Telefon:</strong> <a href="tel:+4917670339953">0176 70339953</a></p>
        </section>

        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
          <p>USt-ID: DE456470884</p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>
          <p>Jennifer Olivia Kindereit<br />gleiche Anschrift wie oben</p>
        </section>

        <section>
          <h2>Social-Media-Profile</h2>
          <p>Dieses Impressum gilt auch für folgende Social-Media-Profile:</p>
          <ul>
            <li><a href="https://www.instagram.com/jennifer_olivia_kindereit/" target="_blank" rel="noreferrer">Instagram · Jennifer Olivia Kindereit</a></li>
            <li><a href="https://www.youtube.com/@Karma_mit_Zimt_und_Zucker" target="_blank" rel="noreferrer">YouTube · Karma mit Zimt und Zucker</a></li>
            <li><a href="https://letscast.fm/sites/karma-mit-zimt-und-zucker-27a97918" target="_blank" rel="noreferrer">Podcast · Karma mit Zimt und Zucker</a></li>
          </ul>
        </section>

        <section className="legal-wide">
          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
          <h3>Haftung für Links</h3>
          <p>Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        </section>

        <section className="legal-wide">
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
      </div>
    </main>
  );
}
