import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Begleitung & Ausbildung",
  description: "Persönliche Begleitung, Somatic-Karma-Ausbildung und optionale Vertiefungen bei AuraLumia.",
};

const primaryOffers = [
  {
    id: "blueprint",
    eyebrow: "PERSÖNLICHE BEGLEITUNG · DREI MONDE",
    title: "Drei Monde Blueprint",
    price: "890 €",
    image: "/products/drei-monde-blueprint-transparent.png",
    description: "Ein persönlicher, klar strukturierter Raum, in dem dein aktuelles Thema aus verschiedenen Blickwinkeln betrachtet und in einen individuellen Weg für die kommenden drei Monate übersetzt wird.",
    features: ["Persönlicher Call", "Karma-Code-Analyse", "Individueller Drei-Monats-Plan", "Meditationen und Journaling", "Astrologische Zeitqualität anhand des Jahreshoroskops"],
    href: "#blueprint-verfuegbarkeit",
    action: "Mehr erfahren",
  },
  {
    id: "circle-programm",
    eyebrow: "FUNDIERTE AUSBILDUNG · NEUN MONDE",
    title: "Neun Monde Aura Luminess",
    price: "3.333 €",
    image: "/products/neun-monde-aura-luminess-transparent.png",
    description: "Eine live geführte Ausbildung, in der du Somatic Karma als zusammenhängende Methode kennenlernst und ihre symbolischen, astrologischen und körperorientierten Ebenen vertiefst.",
    features: ["Live-Ausbildung in Somatic Karma", "Die vier karmischen Narben", "Tarot Arcana und archetypische Deutung", "Planetengruppen im Geburtshoroskop", "Eigene Astrologie-Software", "Eigenes physisches Tarotdeck mit Energiegrid"],
    href: "#bewerbung",
    action: "Ausbildung entdecken",
  },
];

const deepDives = [
  { number: "01", title: "Intuitives Tarot", description: "Vertiefe deine intuitive Arbeit mit den Karten und ihre Anwendung innerhalb von Somatic Karma." },
  { number: "02", title: "Astrologie und Transite", description: "Erweitere deinen Blick auf Zeitqualität, aktuelle Transite und ihre Einordnung in der Methode." },
  { number: "03", title: "Energieanwendung im Rahmen von Somatic Karma", description: "Spezialisiere dich auf die energetische Ebene der Somatic-Karma-Arbeit." },
];

const paths = [
  { symbol: "☾", title: "Blueprint", text: "Persönliche Orientierung und Entwicklung für dein aktuelles Thema." },
  { symbol: "✦", title: "Aura Luminess", text: "Die Methode kennenlernen und vertiefend erlernen." },
  { symbol: "◇", title: "High Touch", text: "Umfassende persönliche Begleitung und Ausbildung in einem Gesamtprogramm." },
  { symbol: "◌", title: "Vertiefende Monde", text: "Optionale Spezialisierung nach der Hauptausbildung." },
];

function FeatureList({ items }: { items: string[] }) {
  return <ul className="mentoring-v2-feature-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function MentoringPage() {
  return <div className="mentoring-v2-page">
    <section className="mentoring-v2-hero">
      <Image src="/hero-womens-circle.jpg" alt="Frauen in einem warmen, modernen Kreis" fill priority sizes="100vw" />
      <div className="mentoring-v2-hero-shade" aria-hidden="true" />
      <div className="shell mentoring-v2-hero-copy">
        <p className="mentoring-v2-kicker">BEGLEITUNG · AUSBILDUNG · VERTIEFUNG</p>
        <h1>Dein Weg<br />in die Tiefe</h1>
        <p>Persönliche Begleitung, spirituelle Selbsterkenntnis und Ausbildung – in deinem eigenen Tempo.</p>
        <div className="mentoring-v2-hero-links"><a href="#blueprint">Persönliche Begleitung</a><a href="#circle-programm">Ausbildung entdecken</a></div>
      </div>
    </section>

    <section className="mentoring-v2-intro shell" aria-labelledby="mentoring-intro-title">
      <div><p className="mentoring-v2-kicker">ZWEI EINSTIEGE · EIN FUNDAMENT</p><h2 id="mentoring-intro-title">Wähle, was dich jetzt wirklich unterstützt.</h2></div>
      <p>Du kannst dich persönlich begleiten lassen oder Somatic Karma als fundierte Methode erlernen. Beide Wege stehen für sich – und dürfen genau dort beginnen, wo du gerade bist.</p>
    </section>

    <section className="mentoring-v2-primary shell" aria-label="Persönliche Begleitung und Ausbildung">
      {primaryOffers.map((offer) => <article className="mentoring-v2-offer-card" id={offer.id} key={offer.id}>
        <div className="mentoring-v2-offer-image"><Image src={offer.image} alt={offer.title} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="mentoring-v2-offer-copy">
          <p className="mentoring-v2-kicker">{offer.eyebrow}</p>
          <h2>{offer.title}</h2>
          <p className="mentoring-v2-offer-description">{offer.description}</p>
          <FeatureList items={offer.features} />
          <div className="mentoring-v2-offer-footer"><strong>{offer.price}</strong><a className="mentoring-v2-button mentoring-v2-button-primary" href={offer.href}>{offer.action}<span aria-hidden="true">→</span></a></div>
        </div>
      </article>)}
    </section>

    <section className="mentoring-v2-premium" id="high-touch" aria-labelledby="high-touch-title">
      <div className="shell mentoring-v2-premium-grid">
        <div className="mentoring-v2-premium-image"><Image src="/products/neun-monde-high-touch-1-1-premium.png" alt="Neun Monde High Touch 1:1" fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
        <div className="mentoring-v2-premium-copy">
          <p className="mentoring-v2-kicker">ALL-INCLUSIVE · PERSÖNLICH BEGLEITET</p>
          <h2 id="high-touch-title">Neun Monde<br />High Touch 1:1</h2>
          <p>Ein umfassender Raum für Frauen, die persönliche Begleitung und die vollständige AuraLumia-Ausbildungswelt in einem Gesamtprogramm verbinden möchten.</p>
          <FeatureList items={["Drei Monde Blueprint", "Vollständige Neun-Monde-Ausbildung Aura Luminess", "Alle drei vertiefenden Monde", "Zugriff auf die gesamte AuraLumia-Kurswelt", "Intensive persönliche 1:1-Begleitung"]} />
          <strong className="mentoring-v2-premium-price">9.999 €</strong>
        </div>
      </div>
    </section>

    <section className="mentoring-v2-testimonial shell" aria-labelledby="mentoring-voice-title">
      <Image src="/testimonial-elena-m-avatar.jpg" alt="Elena M." width={320} height={320} />
      <div><p className="mentoring-v2-kicker">STIMME ZUR PERSÖNLICHEN BEGLEITUNG</p><blockquote id="mentoring-voice-title">„Ich war auf der Suche nach Unterstützung, Halt und einem sicheren Raum für meine persönlichen Themen. Genau das habe ich bei Jennifer Olivia gefunden.“</blockquote><p><strong>Elena M.</strong><span>Persönliche Begleitung</span></p></div>
    </section>

    <section className="mentoring-v2-deep-dives" aria-labelledby="deep-dives-title">
      <div className="shell">
        <header className="mentoring-v2-section-heading"><div><p className="mentoring-v2-kicker">OPTIONAL NACH DER HAUPTAUSBILDUNG</p><h2 id="deep-dives-title">Drei vertiefende Monde</h2></div><p>Jede Spezialisierung ist eine eigenständige, optionale Vertiefung. Sie ist kein verpflichtender Bestandteil der Aura-Luminess-Ausbildung.</p></header>
        <div className="mentoring-v2-deep-grid">{deepDives.map((item) => <article key={item.number}><span>{item.number}</span><div aria-hidden="true">✦</div><h3>{item.title}</h3><p>{item.description}</p><strong>890 €</strong></article>)}</div>
      </div>
    </section>

    <section className="mentoring-v2-paths shell" aria-labelledby="paths-title">
      <header className="mentoring-v2-centered-heading"><p className="mentoring-v2-kicker">DEINE ORIENTIERUNG</p><h2 id="paths-title">Welcher Weg passt zu dir?</h2><p>Die Angebote sind Auswahlmöglichkeiten für unterschiedliche Bedürfnisse – keine verpflichtende Reihenfolge.</p></header>
      <div className="mentoring-v2-path-grid">{paths.map((path) => <article key={path.title}><span aria-hidden="true">{path.symbol}</span><h3>{path.title}</h3><p>{path.text}</p></article>)}</div>
    </section>

    <section className="mentoring-v2-info" aria-label="Verfügbarkeit und Bewerbung">
      <div className="shell mentoring-v2-info-grid">
        <article id="blueprint-verfuegbarkeit"><p className="mentoring-v2-kicker">BLUEPRINT · PERSÖNLICHE VERFÜGBARKEIT</p><h2>Ein bewusst gewählter Start.</h2><p>Jeder Drei Monde Blueprint wird persönlich vorbereitet. Deshalb werden nur wenige Begleitungen gleichzeitig vergeben und jeder mögliche Beginn individuell geprüft.</p><div><span>Auf Anfrage</span><strong>890 € · bewusst limitierte Plätze</strong></div></article>
        <article id="bewerbung"><p className="mentoring-v2-kicker">AURA LUMINESS · ZWEI CIRCLES IM JAHR</p><h2>Samhain &amp; Walpurgis</h2><p>Die Ausbildung beginnt zweimal im Jahr: als Samhain Circle und als Walpurgis Circle. Die nächste Bewerbungsphase öffnet im Oktober 2026 für den Samhain Circle.</p><div><span>Bewerbung ab Oktober 2026</span><strong>Wenige, bewusst vergebene Plätze</strong></div></article>
      </div>
    </section>

    <section className="mentoring-v2-closing">
      <Image src="/hero-somatic-dark-mobile.png" alt="Atmosphärische Landschaft unter dem Mond" fill sizes="100vw" />
      <div className="mentoring-v2-closing-shade" aria-hidden="true" />
      <div className="shell mentoring-v2-closing-copy"><p className="mentoring-v2-kicker">DEIN ERSTER IMPULS</p><h2>Du möchtest zunächst herausfinden, was dich gerade ruft?</h2><p>Der kostenlose Somatic Karma Navigator schenkt dir Orientierung und hilft dir, dein aktuelles Thema bewusster einzuordnen.</p><a className="mentoring-v2-button mentoring-v2-button-light" href="https://somatic-karma-navigator.vercel.app/" target="_blank" rel="noopener noreferrer">Kostenlosen Navigator starten<span aria-hidden="true">→</span></a></div>
    </section>
  </div>;
}
