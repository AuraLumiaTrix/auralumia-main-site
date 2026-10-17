import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Audiokurse, App & Selbstlernangebote",
  description: "Entdecke die AuraLumia Selbstlernangebote – vom kostenlosen Somatic Karma Navigator über Meditationspakete bis zur Tarot App und vertiefenden Kursen.",
};

type Offer = {
  title: string;
  description: string;
  price: string;
  image: string;
  href?: string;
  external?: boolean;
  status?: string;
};

const navigatorOffers: Offer[] = [
  {
    title: "Kostenloser Navigator",
    description: "Erkenne, welche der vier karmischen Narben gerade besonders deutlich wirkt, und finde einen stimmigen nächsten Schritt.",
    price: "Kostenlos",
    image: "/products/produktbild-karma-navigator.png",
    href: links.navigator,
    external: true,
  },
];

const meditationOffers: Offer[] = [
  {
    title: "Schuldnarbe · Meditationspaket",
    description: "Geführte Audios rund um Empfangen, Genuss und einen bewussten Umgang mit inneren Schuldgefühlen.",
    price: "49 €",
    image: "/products/somatic-audio-bundle.png",
    status: "Coming soon",
  },
  {
    title: "Geschwisternarbe · Meditationspaket",
    description: "Geführte Audios für Selbstwert, Gleichrangigkeit und den Mut, deinen eigenen Platz einzunehmen.",
    price: "49 €",
    image: "/products/produktbild-narben-transformationskurs.png",
    status: "Coming soon",
  },
  {
    title: "Mutternarbe · Meditationspaket",
    description: "Geführte Audios für Bindung, emotionale Sicherheit und die Rückkehr in deinen eigenen inneren Rhythmus.",
    price: "49 €",
    image: "/products/anker-meditation.png",
    status: "Coming soon",
  },
  {
    title: "Vaternarbe · Meditationspaket",
    description: "Geführte Audios für Orientierung, Selbstbestimmung und eine klarere Verbindung zu deiner inneren Führung.",
    price: "49 €",
    image: "/products/produktbild-audio-bundle.png",
    status: "Coming soon",
  },
];

const tarotOffers: Offer[] = [
  {
    title: "Karma Tarot App",
    description: "Dein digitaler Begleiter für Tarot, tägliche Impulse und achtsame Reflexion – auf Smartphone, Tablet oder Desktop.",
    price: "7,49 € / Monat",
    image: "/products/somatic-tarot-access.png",
    href: links.tarot,
    external: true,
  },
  {
    title: "Karma Tarot Onlinekurs",
    description: "Lerne die Karten als fundiertes System für Selbsterkenntnis, Symbolarbeit und eine eigenständige Deutungspraxis kennen.",
    price: "249 €",
    image: "/products/tarot-kurs.png",
    status: "Release Dezember 2026",
  },
];

const depthOffers: Offer[] = [
  {
    title: "Venus Selbstliebe",
    description: "Ein vertiefender Raum für Selbstannahme, Empfangen und die bewusste Verbindung mit deiner weiblichen Essenz.",
    price: "149 €",
    image: "/products/kinderwunsch-lumia.png",
    status: "Coming soon",
  },
  {
    title: "Lilith Sinnlichkeit",
    description: "Ein intensiver Raum für Sinnlichkeit, Lebenskraft und den authentischen Ausdruck deiner eigenen Wahrheit.",
    price: "149 €",
    image: "/products/schossraum-clearing.png",
    status: "Coming soon",
  },
];

function OfferAction({ offer }: { offer: Offer }) {
  if (!offer.href) return <span className="offers-v2-status">{offer.status}</span>;

  const label = offer.title === "Kostenloser Navigator" ? "Jetzt starten" : "Mehr erfahren";
  if (offer.external) {
    return <a className="offers-v2-card-link" href={offer.href} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">→</span></a>;
  }

  return <Link className="offers-v2-card-link" href={offer.href}>{label} <span aria-hidden="true">→</span></Link>;
}

function CompactOfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="offers-v2-card">
      <div className="offers-v2-card-image">
        <Image src={offer.image} alt={offer.title} fill sizes="(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw" />
      </div>
      <div className="offers-v2-card-copy">
        <h3>{offer.title}</h3>
        <p>{offer.description}</p>
        <div className="offers-v2-card-footer"><strong>{offer.price}</strong><OfferAction offer={offer} /></div>
      </div>
    </article>
  );
}

export default function AngebotePage() {
  return (
    <div className="offers-v2-page" id="alle-angebote">
      <section className="offers-v2-hero">
        <div className="offers-v2-hero-grid shell">
          <div className="offers-v2-hero-copy">
            <p className="offers-v2-kicker">DEIN WEG · UNSERE ANGEBOTE</p>
            <h1>Finde das Angebot,<br />das zu deinem Weg passt.</h1>
            <p className="offers-v2-hero-intro">Ob du AuraLumia erst kennenlernen, mit einer Meditation beginnen oder Tarot als täglichen Reflexionsraum nutzen möchtest: Hier findest du selbstständig nutzbare Angebote für deinen eigenen Rhythmus.</p>
            <a className="offers-v2-button offers-v2-button-primary" href={links.navigator} target="_blank" rel="noopener noreferrer">Kostenlosen Navigator starten <span aria-hidden="true">→</span></a>
          </div>
          <div className="offers-v2-hero-art">
            <Image src="/hero-womens-circle.jpg" alt="Frauen in einem ruhigen, modernen Kreis" fill priority sizes="(max-width: 760px) 100vw, 52vw" />
            <p>Dein nächster Schritt<br />darf sich stimmig anfühlen.</p>
          </div>
        </div>
        <div className="offers-v2-promises shell" aria-label="Was die AuraLumia Angebote auszeichnet">
          <span><i aria-hidden="true">♧</i>Tiefes Wissen &amp; Selbsterkenntnis</span>
          <span><i aria-hidden="true">☾</i>Von Herz zu Herz</span>
          <span><i aria-hidden="true">✦</i>Spirituell fundiert &amp; alltagstauglich</span>
          <span><i aria-hidden="true">♡</i>In deinem eigenen Tempo</span>
        </div>
      </section>

      <nav className="offers-v2-filter" aria-label="Angebotsbereiche">
        <div className="shell">
          <a className="is-active" href="#alle-angebote">✧ <span>Alle Angebote</span></a>
          <a href="#navigator">✦ <span>Navigator</span></a>
          <a href="#meditationspakete">☾ <span>Meditationspakete</span></a>
          <a href="#tarot">◇ <span>Tarot</span></a>
          <a href="#vertiefung">♡ <span>Vertiefung</span></a>
        </div>
      </nav>

      <section className="offers-v2-section offers-v2-entry" id="navigator" aria-labelledby="offers-entry-title">
        <div className="shell">
          <header className="offers-v2-heading">
            <span className="offers-v2-heading-icon" aria-hidden="true">☾</span>
            <div><p className="offers-v2-kicker">SANFT BEGINNEN</p><h2 id="offers-entry-title">Kostenloser Navigator</h2></div>
            <p>Für deine erste Orientierung: Erkenne, welches Thema sich gerade besonders deutlich zeigt, und wähle danach frei deinen nächsten Schritt.</p>
          </header>
          <div className="offers-v2-card-grid offers-v2-card-grid-single">{navigatorOffers.map((offer) => <CompactOfferCard offer={offer} key={offer.title} />)}</div>
        </div>
      </section>

      <section className="offers-v2-section offers-v2-meditations" id="meditationspakete" aria-labelledby="offers-meditations-title">
        <div className="shell">
          <header className="offers-v2-heading">
            <span className="offers-v2-heading-icon" aria-hidden="true">☾</span>
            <div><p className="offers-v2-kicker">VIER NARBEN · VIER WEGE</p><h2 id="offers-meditations-title">Meditationspakete</h2></div>
            <p>Wähle das Paket, das zu deinem aktuellen Thema passt. Jede Meditation begleitet dich in einer ruhigen Praxis, die du selbstständig nutzen kannst.</p>
          </header>
          <div className="offers-v2-card-grid offers-v2-card-grid-four">{meditationOffers.map((offer) => <CompactOfferCard offer={offer} key={offer.title} />)}</div>
        </div>
      </section>

      <section className="offers-v2-section offers-v2-tarot" id="tarot" aria-labelledby="offers-tarot-title">
        <div className="shell">
          <header className="offers-v2-heading">
            <span className="offers-v2-heading-icon" aria-hidden="true">◇</span>
            <div><p className="offers-v2-kicker">SYMBOLISCHE SELBSTREFLEXION</p><h2 id="offers-tarot-title">Tarot</h2></div>
            <p>Nutze die App als täglichen Begleiter oder lerne die Somatic-Karma-Tarotkarten im Onlinekurs fundiert kennen.</p>
          </header>
          <div className="offers-v2-card-grid offers-v2-card-grid-two">{tarotOffers.map((offer) => <CompactOfferCard offer={offer} key={offer.title} />)}</div>
        </div>
      </section>

      <section className="offers-v2-section offers-v2-depth" id="vertiefung" aria-labelledby="offers-depth-title">
        <div className="shell">
          <header className="offers-v2-heading">
            <span className="offers-v2-heading-icon" aria-hidden="true">♡</span>
            <div><p className="offers-v2-kicker">BEWUSST VERTIEFEN</p><h2 id="offers-depth-title">Vertiefung</h2></div>
            <p>Für alle, die Selbstliebe oder Sinnlichkeit in ihrem eigenen Tempo mit neuen Impulsen und Ritualen erkunden möchten.</p>
          </header>
          <div className="offers-v2-card-grid offers-v2-card-grid-two">{depthOffers.map((offer) => <CompactOfferCard offer={offer} key={offer.title} />)}</div>
        </div>
      </section>

      <section className="offers-v2-mentoring-note" aria-labelledby="offers-mentoring-title">
        <div className="shell">
          <div><p className="offers-v2-kicker">DU WÜNSCHST DIR PERSÖNLICHE BEGLEITUNG?</p><h2 id="offers-mentoring-title">Begleitung &amp; Ausbildung findest du in einem eigenen Raum.</h2></div>
          <div><p>Entdecke den Drei Monde Blueprint, High Touch 1:1, Neun Monde Aura Luminess und die vertiefenden Monde auf der bestehenden Seite für Begleitung und Ausbildung.</p><Link className="offers-v2-button offers-v2-button-primary" href="/mentoring">Zu Begleitung &amp; Ausbildung <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="offers-v2-final">
        <div className="offers-v2-final-image" aria-hidden="true"><Image src="/hero-somatic-dark-mobile.png" alt="" fill sizes="100vw" /></div>
        <div className="offers-v2-final-copy shell">
          <p className="offers-v2-kicker">DEINE ORIENTIERUNG</p>
          <h2>Nicht sicher, was zu dir passt?</h2>
          <p>Der kostenlose Navigator hilft dir, deine aktuelle Situation zu reflektieren und einen stimmigen nächsten Schritt zu finden.</p>
          <a className="offers-v2-button offers-v2-button-light" href={links.navigator} target="_blank" rel="noopener noreferrer">Zum kostenlosen Navigator <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </div>
  );
}
