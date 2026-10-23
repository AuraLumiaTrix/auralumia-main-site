import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Somatic Karma",
  description: "Somatic Karma verbindet Körperwissen, psychologische Grundbedürfnisse und spirituelle Deutung zu einer klaren Landkarte für Selbsterkenntnis.",
};

const wounds = [
  {
    id: "schuldnarbe",
    title: "Schuldnarbe",
    need: "Lustgewinn / Unlustvermeidung",
    text: "Sie berührt die Frage, ob Genuss, Entlastung und Empfangen innerlich erlaubt sind oder unbewusst mit Schuld verbunden werden.",
    symbol: "/somatic-karma/symbol-schuldnarbe.png",
  },
  {
    id: "geschwisternarbe",
    title: "Geschwisternarbe",
    need: "Selbstwerterhöhung / Selbstwertschutz",
    text: "Sie macht sichtbar, wie Vergleich, Gleichrangigkeit und das Einnehmen des eigenen Platzes erlebt werden.",
    symbol: "/somatic-karma/symbol-geschwisternarbe.png",
  },
  {
    id: "mutternarbe",
    title: "Mutternarbe",
    need: "Bindung",
    text: "Sie richtet den Blick auf emotionale Nähe, Zugehörigkeit und die Balance zwischen Verbundenheit und eigenem Rhythmus.",
    symbol: "/somatic-karma/symbol-mutternarbe.png",
  },
  {
    id: "vaternarbe",
    title: "Vaternarbe",
    need: "Orientierung / Kontrolle",
    text: "Sie beleuchtet den Umgang mit Richtung, Verlässlichkeit und der Frage, worauf die eigene innere Führung vertraut.",
    symbol: "/somatic-karma/symbol-vaternarbe.png",
  },
];

const planetGroups = [
  {
    id: "gruppe-schuldnarbe",
    no: "01",
    title: "Schuldnarbe",
    image: "/somatic-karma/triad-schuldnarbe-gold.jpg",
    center: { symbol: "⚳", name: "Ceres" },
    orbit: [
      { symbol: "♆", name: "Neptun" },
      { symbol: "♇", name: "Pluto" },
      { symbol: "Ph", name: "Pholus" },
    ],
  },
  {
    id: "gruppe-geschwisternarbe",
    no: "02",
    title: "Geschwisternarbe",
    image: "/somatic-karma/triad-geschwisternarbe-gold.jpg",
    center: { symbol: "♂", name: "Mars" },
    orbit: [
      { symbol: "⚴", name: "Pallas Athene" },
      { symbol: "Er", name: "Eris" },
      { symbol: "☿", name: "Merkur" },
    ],
  },
  {
    id: "gruppe-mutternarbe",
    no: "03",
    title: "Mutternarbe",
    image: "/somatic-karma/triad-mutternarbe-gold.jpg",
    center: { symbol: "☾", name: "Mond" },
    orbit: [
      { symbol: "♀", name: "Venus" },
      { symbol: "⚵", name: "Juno" },
      { symbol: "⚸", name: "Lilith" },
    ],
  },
  {
    id: "gruppe-vaternarbe",
    no: "04",
    title: "Vaternarbe",
    image: "/somatic-karma/triad-vaternarbe-gold.jpg",
    center: { symbol: "♄", name: "Saturn" },
    orbit: [
      { symbol: "⚶", name: "Vesta" },
      { symbol: "⚷", name: "Chiron" },
      { symbol: "☉", name: "Sonne" },
    ],
  },
];

const tarotArcana = [
  { title: "Münzen", wound: "Schuldnarbe", image: "/tarot-cards/coins-1.webp", text: "Materie, Körper, Sinnlichkeit und der bewusste Umgang mit Ressourcen." },
  { title: "Stäbe", wound: "Geschwisternarbe", image: "/tarot-cards/wands-1.webp", text: "Lebenskraft, Selbstwert, Sichtbarkeit und schöpferischer Ausdruck." },
  { title: "Kelche", wound: "Mutternarbe", image: "/tarot-cards/cups-1.webp", text: "Gefühl, Bindung, Intuition und die Erfahrung von Zugehörigkeit." },
  { title: "Schwerter", wound: "Vaternarbe", image: "/tarot-cards/swords-1.webp", text: "Gedanke, Struktur, Orientierung und bewusste Unterscheidung." },
];

const elements = [
  { name: "Feuer", image: "/somatic-karma/element-fire-gold-transparent.png", text: "Feuer beschreibt Impuls, Lebenskraft und die Richtung, in die Energie drängt." },
  { name: "Erde", image: "/somatic-karma/element-earth-gold-transparent.png", text: "Erde macht Verkörperung, Grenzen und die konkrete Erfahrung im Alltag sichtbar." },
  { name: "Luft", image: "/somatic-karma/element-air-gold-transparent.png", text: "Luft öffnet Sprache, Reflexion und das Erkennen von Zusammenhängen." },
  { name: "Wasser", image: "/somatic-karma/element-water-gold-transparent.png", text: "Wasser berührt Gefühl, Bindung und die intuitive Wahrnehmung innerer Bewegungen." },
];

function PlanetDiagram({ group }: { group: (typeof planetGroups)[number] }) {
  const description = `${group.title}: ${group.center.name} im Zentrum; ${group.orbit.map((planet) => planet.name).join(", ")} als Triade`;

  return (
    <article className="sk-planet-card" id={group.id}>
      <div className="sk-planet-heading"><span>{group.no}</span><h3>{group.title}</h3></div>
      <div className="sk-planet-art">
        <Image src={group.image} alt={description} fill sizes="(max-width: 760px) 86vw, (max-width: 1100px) 44vw, 22vw" />
      </div>
    </article>
  );
}

export default function SomaticKarmaPage() {
  return (
    <div className="sk-page">
      <section className="sk-wounds" id="was-ist-somatic-karma" aria-labelledby="sk-wounds-title">
        <div className="shell">
          <div className="sk-heading sk-heading-centered">
            <p className="sk-kicker">DIE VIER NARBEN</p>
            <h2 id="sk-wounds-title">Was ist Somatic Karma?</h2>
            <p>Die vier psychologischen Grundbedürfnisse bilden den Ausgangspunkt. Die karmischen Narben sind spirituelle Reflexionsfelder, keine medizinischen oder psychologischen Diagnosen. Sie laden dazu ein, wiederkehrende Erfahrungen bewusster wahrzunehmen und einzuordnen.</p>
          </div>
          <div className="sk-wound-grid">
            {wounds.map((wound) => (
              <article className="sk-wound-card" id={wound.id} key={wound.id}>
                <Image className="sk-wound-symbol" src={wound.symbol} alt="" width={1122} height={1402} sizes="150px" />
                <h3>{wound.title}</h3>
                <strong>{wound.need}</strong>
                <p>{wound.text}</p>
                <a href={`#gruppe-${wound.id}`}>Mehr erfahren <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-planets" id="planetengruppen" aria-labelledby="sk-planets-title">
        <div className="shell">
          <div className="sk-heading sk-heading-centered">
            <p className="sk-kicker">DIE SOMATIC-KARMA-MATRIX</p>
            <h2 id="sk-planets-title">Die vier Narben im Überblick</h2>
            <p>Jede Narbe wird in der astrologischen Deutung durch einen Zentralkörper und eine Triade ergänzender Planetenkraftfelder gespiegelt.</p>
          </div>
          <div className="sk-planet-grid">{planetGroups.map((group) => <PlanetDiagram group={group} key={group.id} />)}</div>
        </div>
      </section>

      <section className="sk-process" aria-labelledby="sk-process-title">
        <div className="shell">
          <div className="sk-heading sk-heading-centered">
            <p className="sk-kicker">DIE METHODISCHE LANDKARTE</p>
            <h2 id="sk-process-title">Von der Erfahrung zur Transformation</h2>
            <p>Somatic Karma ordnet Erfahrung in nachvollziehbare Ebenen. Nach dem Karmabedürfnistyp öffnen sich zwei gleichwertige Deutungswege.</p>
          </div>
          <div className="sk-process-flow">
            <article className="sk-process-step"><span>01</span><i aria-hidden="true">◌</i><h3>Grundbedürfnis</h3><p>Ein menschliches Bedürfnis bildet den Ausgangspunkt.</p></article>
            <article className="sk-process-step"><span>02</span><i aria-hidden="true">☾</i><h3>Karmische Narbe</h3><p>Wiederkehrende Erfahrungen werden als Reflexionsfeld sichtbar.</p></article>
            <article className="sk-process-step"><span>03</span><i aria-hidden="true">◇</i><h3>Karmabedürfnistyp</h3><p>Die individuelle Ausprägung beschreibt den persönlichen Umgang damit.</p></article>
            <div className="sk-process-branches" aria-label="Zwei gleichwertige Deutungswege">
              <p className="sk-branch-label">Zwei gleichwertige Wege</p>
              <Link href="#tarot-arcana"><span>4A</span><i aria-hidden="true">✦</i><h3>Tarot Arcana</h3><p>Symbolische Deutung über die vier Tarot-Farben.</p><b>Weg ansehen →</b></Link>
              <Link href="#planetengruppen"><span>4B</span><i aria-hidden="true">◎</i><h3>Geburtschart / Planetengruppen</h3><p>Astrologische Deutung über Zentrum und Triade.</p><b>Weg ansehen →</b></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sk-tarot" id="tarot-arcana" aria-labelledby="sk-tarot-title">
        <div className="shell">
          <div className="sk-heading sk-heading-split">
            <div><p className="sk-kicker">DIE SYMBOLISCHE EBENE</p><h2 id="sk-tarot-title">Die Zuordnung zu den Tarot Arcana</h2></div>
            <p>Die vier Tarot-Farben geben den Narben eine bildhafte Sprache. Sie ergänzen die Reflexion, ohne eine psychologische Einordnung zu ersetzen.</p>
          </div>
          <div className="sk-tarot-grid">
            {tarotArcana.map((arcana) => (
              <article className="sk-tarot-card" key={arcana.title}>
                <div><Image src={arcana.image} alt={`Ass der ${arcana.title}`} fill sizes="(max-width: 760px) 38vw, 12vw" /></div>
                <span>{arcana.wound}</span><h3>{arcana.title}</h3><p>{arcana.text}</p>
              </article>
            ))}
          </div>
          <Link className="sk-section-link" href="/tarot">Das Tarot-Archiv entdecken <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="sk-elements" aria-labelledby="sk-elements-title">
        <div className="shell">
          <div className="sk-heading sk-heading-centered">
            <p className="sk-kicker">DIE ELEMENTEBENE</p>
            <h2 id="sk-elements-title">Die Elementelehre im Somatic Karma</h2>
            <p>Die Elemente beschreiben unterschiedliche Qualitäten des Erlebens. Innerhalb der Methode helfen sie, Wahrnehmungen sprachlich zu differenzieren, ohne eine starre Zuordnung zu erzwingen.</p>
          </div>
          <div className="sk-element-grid">
            {elements.map((element) => <article key={element.name}><div className="sk-element-icon"><Image src={element.image} alt="" fill sizes="100px" /></div><h3>{element.name}</h3><p>{element.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sk-final-cta">
        <div className="sk-final-image" aria-hidden="true"><Image src="/hero-somatic-dark-mobile.png" alt="" fill sizes="100vw" /></div>
        <div className="shell sk-final-copy">
          <p className="sk-kicker">DEIN NÄCHSTER SCHRITT</p>
          <h2>Bereit, deine karmischen Narben zu entdecken?</h2>
          <p>Der kostenlose Navigator schenkt dir eine erste Orientierung und zeigt dir, welche der vier Narben gerade besonders deutlich wirkt.</p>
          <div className="sk-actions">
            <a className="sk-button sk-button-light" href={links.navigator} target="_blank" rel="noopener noreferrer">Kostenlosen Navigator starten <span aria-hidden="true">→</span></a>
            <Link className="sk-button sk-button-ghost" href="/mentoring#circle-programm">Zur Ausbildung</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
