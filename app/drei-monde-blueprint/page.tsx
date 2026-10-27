import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Drei Monde Blueprint",
  description: "Deine persönliche Roadmap für drei Monate – mit Somatic Karma, Astrologie, Meditationen und Journaling.",
};

const included = [
  {
    number: "01",
    symbol: "☾",
    title: "Persönlicher Call",
    text: "Wir betrachten deine aktuelle Situation, das Thema, das dich bewegt, und die nächsten Schritte, die sich für dich stimmig anfühlen.",
    tone: "rose",
  },
  {
    number: "02",
    symbol: "✦",
    title: "Karma Code Analyse",
    text: "Deine wiederkehrenden Muster werden im Zusammenspiel von Somatic Karma und astrologischen Zusammenhängen verständlich eingeordnet.",
    tone: "lilac",
  },
  {
    number: "03",
    symbol: "◌",
    title: "3-Monats-Plan",
    text: "Du erhältst eine persönliche Roadmap mit klaren Impulsen und einer ruhigen Struktur für die kommenden drei Monate.",
    tone: "cream",
  },
  {
    number: "04",
    symbol: "◇",
    title: "Meditationen",
    text: "Ausgewählte Meditationen begleiten dich dabei, deine Erkenntnisse in deinem eigenen Tempo nachwirken zu lassen.",
    tone: "lilac",
  },
  {
    number: "05",
    symbol: "✎",
    title: "Journaling",
    text: "Sanfte Journaling-Impulse unterstützen dich dabei, Beobachtungen festzuhalten und deinen persönlichen Prozess bewusst zu reflektieren.",
    tone: "cream",
  },
  {
    number: "06",
    symbol: "✺",
    title: "Passender Zeitpunkt",
    text: "Die Zeitqualität deines Jahreshoroskops wird spirituell-astrologisch betrachtet, um einen stimmigen Zeitraum für deinen nächsten Schritt zu erkennen.",
    tone: "rose",
  },
];

const audience = [
  { symbol: "◇", text: "du dich in einer Übergangsphase befindest" },
  { symbol: "☾", text: "du Klarheit über deine nächsten Schritte suchst" },
  { symbol: "✦", text: "du deine karmischen Muster besser verstehen möchtest" },
  { symbol: "◌", text: "du dich drei Monate bewusst begleiten lassen willst" },
];

const months = [
  {
    number: "1",
    title: "Monat 1 – Erkennen",
    text: "Wir schaffen einen Überblick, betrachten deine Karma Code Analyse und geben deinem persönlichen Thema eine klare Orientierung.",
    symbol: "✦",
  },
  {
    number: "2",
    title: "Monat 2 – Integrieren",
    text: "Meditationen und Journaling begleiten dich dabei, Erkenntnisse in deinem Alltag zu beobachten und bewusst zu verankern.",
    symbol: "☾",
  },
  {
    number: "3",
    title: "Monat 3 – Manifestieren",
    text: "Du richtest deinen Blick auf die Umsetzung, die aktuelle Zeitqualität und deinen stimmigen nächsten Schritt.",
    symbol: "◌",
  },
];

const faqs = [
  {
    question: "Wie läuft der persönliche Call ab?",
    answer: "Im persönlichen Gespräch betrachten wir deine aktuelle Situation und klären, welches Thema im Mittelpunkt deiner Drei-Monats-Roadmap stehen soll. Daraus entsteht die Ausrichtung für deinen individuellen Blueprint.",
  },
  {
    question: "Was ist die Karma Code Analyse?",
    answer: "Die Karma Code Analyse verbindet Somatic Karma mit astrologischen Zusammenhängen. Sie dient der spirituellen Selbsterkenntnis und hilft dir, wiederkehrende Themen und persönliche Bedürfnisse bewusster einzuordnen.",
  },
  {
    question: "Wie wird der passende Zeitpunkt berechnet?",
    answer: "Dafür wird die astrologische Zeitqualität deines Jahreshoroskops betrachtet. Die Deutung bietet eine spirituelle Orientierung für einen stimmigen Zeitraum, ohne ein bestimmtes Ergebnis zu garantieren.",
  },
  {
    question: "Ist der Blueprint auch für Einsteigerinnen geeignet?",
    answer: "Du benötigst keine Vorkenntnisse in Somatic Karma oder Astrologie. Die Inhalte werden so aufbereitet, dass du deine persönliche Roadmap gut nachvollziehen und in deinem eigenen Tempo nutzen kannst.",
  },
  {
    question: "Wie erhalte ich die Meditationen und Journaling-Impulse?",
    answer: "Die für deinen Blueprint ausgewählten Meditationen und Journaling-Impulse werden dir persönlich bereitgestellt. Die genaue Form und Übergabe klären wir zu Beginn gemeinsam.",
  },
  {
    question: "Was passiert nach den drei Monaten?",
    answer: "Dein Blueprint ist als in sich abgeschlossene Begleitung für drei Monate angelegt. Danach entscheidest du frei, ob du deinen Weg selbstständig fortsetzt oder dich über Aura Luminess beziehungsweise High Touch 1:1 weiter begleiten lassen möchtest.",
  },
];

const requestHref = "/mentoring#blueprint-verfuegbarkeit";

export default function DreiMondeBlueprintPage() {
  return <div className="blueprint-page">
    <section className="blueprint-hero">
      <div className="shell blueprint-hero-grid">
        <div className="blueprint-hero-copy">
          <p className="blueprint-kicker">SOMATIC KARMA · ASTROLOGIE · PERSÖNLICHE BEGLEITUNG</p>
          <h1>Drei Monde<br />Blueprint</h1>
          <strong className="blueprint-price">890 €</strong>
          <p className="blueprint-lede">Deine persönliche Roadmap für die nächsten drei Monate – mit persönlichem Call, Karma Code Analyse, 3-Monats-Plan, Meditationen, Journaling und der astrologischen Betrachtung eines passenden Zeitpunkts.</p>
          <Link className="blueprint-button blueprint-button-primary" href={requestHref}>Blueprint anfragen <span aria-hidden="true">→</span></Link>
        </div>
        <div className="blueprint-hero-art" aria-hidden="true">
          <div className="blueprint-orbit blueprint-orbit-one" />
          <div className="blueprint-orbit blueprint-orbit-two" />
          <Image src="/hero-somatic-taupe-mobile.png" alt="" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
        </div>
      </div>
      <div className="shell blueprint-values" aria-label="Die Ausrichtung des Drei Monde Blueprints">
        <div><span aria-hidden="true">☾</span><p>Individuell auf dich abgestimmt</p></div>
        <div><span aria-hidden="true">✦</span><p>Astrologie &amp; Somatic Karma</p></div>
        <div><span aria-hidden="true">◇</span><p>Klarheit für deinen nächsten Schritt</p></div>
      </div>
    </section>

    <section className="blueprint-included shell" aria-labelledby="blueprint-included-title">
      <header className="blueprint-heading blueprint-heading-centered">
        <p className="blueprint-kicker">DEIN PERSÖNLICHER BLUEPRINT</p>
        <h2 id="blueprint-included-title">Was du erhältst</h2>
        <p>Sechs sorgfältig aufeinander abgestimmte Elemente geben deinem persönlichen Thema Struktur, Tiefe und einen klaren Rahmen.</p>
      </header>
      <div className="blueprint-included-grid">
        {included.map((item) => <article className={`blueprint-included-card blueprint-tone-${item.tone}`} key={item.title}>
          <div className="blueprint-card-visual"><span>{item.symbol}</span><small>{item.number}</small></div>
          <div className="blueprint-card-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
      </div>
    </section>

    <section className="blueprint-audience" aria-labelledby="blueprint-audience-title">
      <div className="shell">
        <header className="blueprint-heading blueprint-heading-centered">
          <p className="blueprint-kicker">DEIN AKTUELLER MOMENT</p>
          <h2 id="blueprint-audience-title">Für wen ist der Blueprint?</h2>
          <p>Der Drei Monde Blueprint kann zu dir passen, wenn du dir für deine nächste Etappe einen persönlichen, klaren Rahmen wünschst.</p>
        </header>
        <div className="blueprint-audience-grid">{audience.map((item) => <article key={item.text}><span aria-hidden="true">{item.symbol}</span><p>{item.text}</p></article>)}</div>
      </div>
    </section>

    <section className="blueprint-months shell" aria-labelledby="blueprint-months-title">
      <header className="blueprint-heading blueprint-heading-centered">
        <p className="blueprint-kicker">SO ENTFALTET SICH DEIN WEG</p>
        <h2 id="blueprint-months-title">Drei Monate – Drei Schritte</h2>
        <p>Jeder Monat hat einen eigenen Fokus und bleibt zugleich Teil deiner persönlichen Roadmap.</p>
      </header>
      <div className="blueprint-month-grid">{months.map((month, index) => <article key={month.number}>
        <div className="blueprint-month-visual"><span>{month.symbol}</span><b>{month.number}</b></div>
        <div className="blueprint-month-copy"><h3>{month.title}</h3><p>{month.text}</p></div>
        {index < months.length - 1 && <span className="blueprint-month-arrow" aria-hidden="true">→</span>}
      </article>)}</div>
    </section>

    <section className="blueprint-next" aria-labelledby="blueprint-next-title">
      <div className="shell">
        <header className="blueprint-heading blueprint-heading-centered">
          <p className="blueprint-kicker">DEIN MÖGLICHER WEG DANACH</p>
          <h2 id="blueprint-next-title">Deine Reise geht weiter</h2>
          <p>Wenn du nach deinem Blueprint tiefer in Somatic Karma eintauchen möchtest, stehen dir zwei weiterführende Möglichkeiten offen.</p>
        </header>
        <div className="blueprint-next-grid">
          <article><div className="blueprint-next-image blueprint-next-image-contain"><Image src="/products/product-aura-luminess.jpg" alt="Aura Luminess" fill sizes="(max-width: 700px) 100vw, 44vw" /></div><div><p className="blueprint-kicker">AUSBILDUNG · NEUN MONDE</p><h3>Aura Luminess</h3><p>Die fundierte Ausbildung, wenn du Somatic Karma als zusammenhängende Methode kennenlernen und vertiefen möchtest.</p><Link href="/mentoring#circle-programm">Mehr erfahren <span aria-hidden="true">→</span></Link></div></article>
          <article><div className="blueprint-next-image blueprint-next-image-contain"><Image src="/products/product-high-touch-1-1.jpg" alt="High Touch 1:1" fill sizes="(max-width: 700px) 100vw, 44vw" /></div><div><p className="blueprint-kicker">ALL-INCLUSIVE · NEUN MONDE</p><h3>High Touch 1:1</h3><p>Persönliche Begleitung und die vollständige AuraLumia-Ausbildungswelt in einem umfassenden Gesamtprogramm.</p><Link href="/mentoring#high-touch">Mehr erfahren <span aria-hidden="true">→</span></Link></div></article>
        </div>
      </div>
    </section>

    <section className="blueprint-faq shell" aria-labelledby="blueprint-faq-title">
      <header className="blueprint-heading blueprint-heading-centered">
        <p className="blueprint-kicker">HÄUFIGE FRAGEN</p>
        <h2 id="blueprint-faq-title">Deine Fragen, meine Antworten</h2>
      </header>
      <Accordion className="blueprint-accordion" type="single" collapsible>
        {faqs.map((faq, index) => <AccordionItem value={`faq-${index + 1}`} key={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </section>

    <section className="blueprint-closing">
      <Image src="/hero-somatic-dark-mobile.png" alt="Atmosphärische Illustration unter Sternen und Mond" fill sizes="100vw" />
      <div className="blueprint-closing-shade" aria-hidden="true" />
      <div className="shell blueprint-closing-copy"><p className="blueprint-kicker">DEIN NÄCHSTES KAPITEL</p><h2>Bereit für deinen Drei Monde Blueprint?</h2><p>Gemeinsam richten wir den Blick auf deine kommenden drei Monate und entwickeln eine persönliche Roadmap, die dich Schritt für Schritt begleitet.</p><Link className="blueprint-button blueprint-button-light" href={requestHref}>Blueprint anfragen <span aria-hidden="true">→</span></Link></div>
    </section>
  </div>;
}
