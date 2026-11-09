import type { Metadata } from "next";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Neun Monde Aura Luminess",
  description: "Die neunmonatige Live-Ausbildung in der Somatic-Karma-Methode von AuraLumia.",
};

const learningAreas: Array<{
  title: string;
  text: string;
  image?: string;
  images?: string[];
  contain?: boolean;
}> = [
  { title: "Grundbedürfnisse", image: "/offers/symbol-navigator.png", contain: true, text: "Du lernst die vier menschlichen Grundbedürfnisse als Ausgangspunkt der Methode kennen." },
  { title: "Karmische Narben", image: "/products/meditationspaket-schuldnarbe.jpg", text: "Du vertiefst die vier karmischen Narben und ihre Bedeutung als spirituelle Reflexionsfelder." },
  { title: "Tarot & archetypische Deutung", image: "/products/product-tarot-app-mockup.png", contain: true, text: "Du erschließt dir die Bildsprache des Tarot innerhalb der Somatic-Karma-Methode." },
  { title: "Planetengruppen", image: "/somatic-karma/triad-mutternarbe-popup-transparent.png", contain: true, text: "Du lernst die vier Zentren und ihre jeweiligen planetarischen Triaden kennen." },
  {
    title: "Elementelehre",
    images: [
      "/somatic-karma/element-fire-gold-transparent.png",
      "/somatic-karma/element-earth-gold-transparent.png",
      "/somatic-karma/element-air-gold-transparent.png",
      "/somatic-karma/element-water-gold-transparent.png",
    ],
    text: "Du differenzierst die Qualitäten von Feuer, Erde, Luft und Wasser in der Deutung.",
  },
  { title: "Deutungsintegration", image: "/hero-somatic.jpg", text: "Du verbindest die einzelnen Ebenen zu einer klaren, zusammenhängenden Betrachtung." },
];

const planetGroups = [
  { title: "Schuldnarbe", image: "/somatic-karma/triad-schuldnarbe-gold.jpg", description: "Ceres im Zentrum; Neptun, Pluto und Pholus als Triade." },
  { title: "Geschwisternarbe", image: "/somatic-karma/triad-geschwisternarbe-gold.jpg", description: "Mars im Zentrum; Pallas Athene, Eris und Merkur als Triade." },
  { title: "Mutternarbe", image: "/somatic-karma/triad-mutternarbe-gold.jpg", description: "Mond im Zentrum; Venus, Juno und Lilith als Triade." },
  { title: "Vaternarbe", image: "/somatic-karma/triad-vaternarbe-gold.jpg", description: "Saturn im Zentrum; Vesta, Chiron und Sonne als Triade." },
];

const tools = [
  {
    title: "Astrologie-Software",
    image: "/karma-code.webp",
    text: "Meine eigene Software visualisiert die vier Planetengruppen im individuellen Geburtshoroskop und macht ihre Anordnung übersichtlich nachvollziehbar.",
  },
  {
    title: "Physisches Tarotkartendeck mit Energiegrid",
    image: "/products/product-tarot-app-mockup.png",
    contain: true,
    text: "Mein eigenes Tarotdeck verbindet symbolische Gestaltung und Energiegrid mit der Bildsprache der Somatic-Karma-Methode.",
  },
];

const deepDives = [
  { title: "Ausführliches intuitives Tarot", image: "/tarot.webp", text: "Eine optionale Vertiefung für die intuitive Tarotarbeit im Kontext von Somatic Karma." },
  { title: "Astrologie mit Transiten & Co.", image: "/transit-orakel.webp", text: "Eine optionale Vertiefung zur astrologischen Betrachtung von Transiten und Zeitqualitäten." },
  { title: "Energieanwendung im Rahmen von Somatic Karma", image: "/hero-somatic-taupe-mobile.png", text: "Eine optionale Vertiefung für die energetische Ebene innerhalb der Somatic-Karma-Methode." },
];

const audience = [
  { symbol: "☾", title: "Vertiefung", text: "Du möchtest Somatic Karma in seiner ganzen methodischen Tiefe kennenlernen." },
  { symbol: "✦", title: "Verknüpfung", text: "Du interessierst dich für das Zusammenspiel von Bedürfnissen, Astrologie, Tarot und Elementen." },
  { symbol: "◇", title: "Anwendung", text: "Du möchtest das Gelernte sorgfältig üben und in deine persönliche Praxis integrieren." },
  { symbol: "◌", title: "Beruflicher Kontext", text: "Du möchtest Somatic Karma gegebenenfalls ergänzend in deine bestehende Tätigkeit einfließen lassen." },
];

const moonModules = [
  {
    number: "01",
    title: "Mond der Leere",
    subtitle: "Der Ursprung im stillen Raum",
    topics: [
      "Einführung in die buddhistische Philosophie der Leere und das Prinzip des leeren Raumes",
      "Somatische Zentrierungs- und Atemtechniken vor Klientensitzungen",
      "Techniken zur bewussten Leerung des Geistes und Verankerung im neutralen Beobachterzustand",
      "Freimachen von eigenen Urteilen, Projektionen und Erwartungen als Raumhalterin",
    ],
  },
  {
    number: "02",
    title: "Mond der Ahnen",
    subtitle: "Erbe, Herkunft und Ahnenlinien",
    topics: [
      "Grundlagen der systemischen und energetischen Ahnenarbeit",
      "Erkennen und Bergen des „Ahnengolds“ – ureigene Gaben, Ressourcen und Stärken der Linie",
      "Aufdecken über Generationen weitergegebener Lasten, Verstrickungen und energetischer Verträge",
      "Symbolische Rückgaberituale im geschützten Raum und Etablierung stabiler energetischer Schutzräume",
    ],
  },
  {
    number: "03",
    title: "Mond der Narben",
    subtitle: "Ahnenarchitektur, Typisierung und die Sprache der Narben",
    topics: [
      "Das System der Somatic Karma Archetypes® und Typologie der Ahnenwunden",
      "Selbstdurchlauf des diagnostischen Tests und Verstehen der didaktischen Hintergründe der Fragestellungen",
      "Entschlüsselung körperlicher Schutzhaltungen und somatischer Manifestationen emotionaler Prägungen",
      "Auswertung und Erstellung des individuellen Klienten-Charts / Archetypen-Prints",
    ],
  },
  {
    number: "04",
    title: "Mond der Tarologie",
    subtitle: "Die fünf Kartenwelten als Spiegel der Narbenarchitektur",
    topics: [
      "Tarot als tiefenpsychologischer und energetischer Spiegel der Seele",
      "Spezifische Legemuster für Ahnen- und Karmathemen",
      "Symbolik, Bildsprache und archetypische Bedeutungen der 78 Tore",
      "Energetische Raumhygiene: Rituelle Raumöffnung und Raumschließung beim Kartenlegen",
    ],
  },
  {
    number: "05",
    title: "Mond der Astrologie",
    subtitle: "Astrologie verstehen und die vier Narben in Triaden lesen",
    topics: [
      "Astrologie leicht erklärt: Himmelskarte, Planeten, Zeichen, Häuser und Aspekte als symbolische Sprache",
      "Mutternarbe, Vaternarbe, Geschwisternarbe und Schuldnarbe: Welche planetaren Funktionen sichtbar werden und warum genau diese Zuordnung gewählt ist",
      "Das Aura-Lumia-Triadensystem: ein Zentrumsplanet und drei Satellitenplaneten bilden für jede Narbe ein Vier-Elemente-Lösungssystem",
      "Urelement und tatsächliches Geburtselement unterscheiden, Abweichungen deuten sowie Mondknoten, D9-/D12-Chart und Synthese einbeziehen",
    ],
  },
  {
    number: "06",
    title: "Mond der Transformation",
    subtitle: "Wandlung, Integration und Neuverkörperung",
    topics: [
      "Die Synthese: Verknüpfung der vier Diagnosesäulen (Ahnen, Narben, Tarologie, Astrologie) zu einem ganzheitlichen Gesamtbild",
      "Entwicklung maßgeschneiderter Klienten-Prozesse, körperorientierter Anker und ritueller Wandlungsschritte",
      "Somatische Alchemie zur Transformation identifizierter Wunden, Glaubenssätze und Blockaden in Lebenskraft",
    ],
  },
  {
    number: "07",
    title: "Mond des Raumhaltens",
    subtitle: "Präsenz, Co-Regulation und sichere Räume",
    topics: [
      "Professionelle Gesprächsführung und Sitzungsleitung in 1:1-Formaten – Struktur einer 60- bis 90-minütigen Sitzung",
      "Grenzen und Ethik der spirituellen Lebensberatung sowie strikte Abgrenzung zur heilkundlichen Psychotherapie",
      "Gezielte Fragetechniken, Empathie und emotionale Erste Hilfe / Deeskalation bei Kliententriggern",
      "Energetische Hygiene und Raumreinigung vor, während und nach Klientenkontakten",
    ],
  },
  {
    number: "08",
    title: "Mond des Wirkens",
    subtitle: "Verkörperung, Sichtbarkeit und Wirksamkeit",
    topics: [
      "Formaler Einstieg in die Selbstständigkeit: Gewerbeanmeldung, steuerliche Erfassung (ELSTER), Kleinunternehmerregelung vs. Regelbesteuerung",
      "Preisfindung, Kalkulation und Strukturierung von lukrativen Beratungspaketen",
      "Rechtssichere Außendarstellung: Impressumspflicht, Pflichtangaben auf Rechnungen und Vorgaben des Heilmittelwerbegesetzes (HWG)",
      "Markennutzungsrechte: Richtlinien zur Führung der offiziellen Titel und Bezeichnungen für das eigene Marketing",
    ],
  },
  {
    number: "09",
    title: "Mond der Weihung",
    subtitle: "Abschluss, Initiation und innere Weihe",
    topics: [
      "Feierlicher Abschluss des 9-monatigen Zyklus im synchronen Live-Kreis",
      "Feierliche Einweihung und Initiation in den Stand der Aura Luminess Ahnenhüterin",
      "Geführte energetische Meditation und rituelle Raumöffnung",
      "Würdigung des gemeinsamen Transformationswegs und Verankerung im energetischen Kreis",
    ],
  },
];

const faqs = [
  {
    question: "Welche Voraussetzungen brauche ich?",
    answer: "Auf der Website sind derzeit keine formalen Vorkenntnisse als Voraussetzung festgelegt. Im Bewerbungsprozess wird gemeinsam geklärt, ob die Ausbildung und ihre Ausrichtung zu deinem aktuellen Weg passen.",
  },
  {
    question: "Wie läuft die Ausbildung ab?",
    answer: "Aura Luminess ist als live geführte Ausbildung über neun Monde angelegt. Die Themen der einzelnen Monde findest du in der Modulübersicht auf dieser Seite; die genauen Termine werden vor dem jeweiligen Ausbildungsbeginn verbindlich mitgeteilt.",
  },
  {
    question: "Welche Werkzeuge gehören zur Ausbildung?",
    answer: "Zur Ausbildung gehören die AuraLumia-Software zur Visualisierung der vier Planetengruppen und ein physisches Tarotkartendeck mit symbolischer Gestaltung und Energiegrid. Weitere Funktionen oder Nutzungsrechte werden hier nicht zugesagt.",
  },
  {
    question: "Sind die vertiefenden Monde verpflichtend?",
    answer: "Nein. Die drei vertiefenden Monde sind eigenständige, optionale Angebote nach der Hauptausbildung und kosten jeweils 890 €.",
  },
  {
    question: "Wann kann ich mich bewerben?",
    answer: "Aura Luminess beginnt zweimal im Jahr als Samhain Circle und als Walpurgis Circle. Die nächste Bewerbungsphase ist für Oktober 2026 zum Samhain Circle angekündigt; die Plätze werden bewusst begrenzt vergeben.",
  },
];

const applicationHref = "#bewerbung";

export default function NeunMondeAuraLuminessPage() {
  return <div className="luminess-page">
    <section className="luminess-hero">
      <div className="shell luminess-hero-grid">
        <div className="luminess-hero-copy">
          <p className="luminess-kicker">AURALUMIA AUSBILDUNG · SOMATIC KARMA</p>
          <h1>Neun Monde<br />Aura Luminess</h1>
          <p className="luminess-subtitle">Live-Ausbildung in der Somatic-Karma-Methode</p>
          <p className="luminess-lede">In neun gemeinsam getragenen Monden lernst du Somatic Karma als verbundene Methode kennen – mit ihren psychologischen Ausgangspunkten, astrologischen Planetengruppen, der archetypischen Sprache des Tarot und der Elementelehre.</p>
          <div className="luminess-hero-offer"><a className="luminess-button luminess-button-primary" href={applicationHref}>Zur Bewerbung</a><strong>3.333 €</strong></div>
        </div>
        <div className="luminess-hero-image">
          <Image src="/products/product-aura-luminess.jpg" alt="Neun Monde Aura Luminess Ausbildung mit Kompendium, Tarotdeck, Supervision und Ausbildungsunterlagen" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
      </div>
      <div className="shell luminess-hero-values" aria-label="Ausrichtung und enthaltene Werkzeuge der Ausbildung">
        <span><i aria-hidden="true">◌</i>Live &amp; persönlich im digitalen Raum</span>
        <span><i aria-hidden="true">✦</i>Physisches Tarotdeck mit persönlichem Energiegrid</span>
        <span><i aria-hidden="true">◇</i>AuraLumia Astrologie-Software inklusive</span>
        <span><i aria-hidden="true">☾</i>Zwei Circles im Jahr</span>
      </div>
    </section>

    <section className="luminess-timeline" aria-labelledby="luminess-timeline-title">
      <div className="shell">
        <header className="luminess-heading luminess-heading-centered"><p className="luminess-kicker">DEIN WEG DURCH DIE AUSBILDUNG</p><h2 id="luminess-timeline-title">So ist die Ausbildung aufgebaut</h2><p>Neun Monde geben der Ausbildung ihren zeitlichen Rahmen. Jeder Mond trägt ein eigenes Thema und führt dich Schritt für Schritt tiefer in die Methode.</p></header>
        <Accordion className="luminess-module-accordion" type="single" collapsible>
          {moonModules.map((module) => <AccordionItem value={`moon-${module.number}`} key={module.number}>
            <AccordionTrigger>
              <span className="luminess-module-trigger">
                <span className="luminess-module-number">{module.number}</span>
                <span><small>Mond {Number(module.number)}</small><strong>{module.title}</strong><em>{module.subtitle}</em></span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="luminess-module-topics">{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </AccordionContent>
          </AccordionItem>)}
        </Accordion>
      </div>
    </section>

    <section className="luminess-tools shell" aria-labelledby="luminess-tools-title">
      <header className="luminess-heading luminess-heading-centered"><p className="luminess-kicker">BEGLEITER DEINER AUSBILDUNG</p><h2 id="luminess-tools-title">Deine Werkzeuge</h2><p>Zwei eigens für die Methode entwickelte Werkzeuge unterstützen die anschauliche Arbeit mit den Deutungsebenen.</p></header>
      <div className="luminess-tools-grid">{tools.map((tool) => <article key={tool.title}>
        <div className={`luminess-tool-image${tool.contain ? " luminess-tool-image-contain" : ""}`}><Image src={tool.image} alt={tool.title} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div><p className="luminess-kicker">AURALUMIA ORIGINAL</p><h3>{tool.title}</h3><p>{tool.text}</p></div>
      </article>)}</div>
    </section>

    <section className="luminess-learning shell" aria-labelledby="luminess-learning-title">
      <header className="luminess-heading luminess-heading-centered"><p className="luminess-kicker">DEIN METHODISCHES FUNDAMENT</p><h2 id="luminess-learning-title">Was du lernst</h2><p>Du lernst die Ebenen von Somatic Karma kennen und übst, sie zu einer nachvollziehbaren Deutung zusammenzuführen.</p></header>
      <div className="luminess-learning-grid">{learningAreas.map((item) => <article key={item.title}>
        {item.images ? (
          <div className="luminess-learning-image luminess-learning-image-multiple">
            {item.images.map((image, index) => <span key={image}><Image src={image} alt={["Feuer", "Erde", "Luft", "Wasser"][index]} fill sizes="(max-width: 760px) 20vw, 7vw" /></span>)}
          </div>
        ) : (
          <div className={`luminess-learning-image${item.contain ? " luminess-learning-image-contain" : ""}`}><Image src={item.image!} alt={item.title} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
        )}
        <div><h3>{item.title}</h3><p>{item.text}</p></div>
      </article>)}</div>
    </section>

    <section className="luminess-planets" aria-labelledby="luminess-planets-title">
      <div className="shell">
        <header className="luminess-heading luminess-heading-centered"><p className="luminess-kicker">DIE SOMATIC-KARMA-MATRIX</p><h2 id="luminess-planets-title">Die vier Planetengruppen</h2><p>Jede karmische Narbe wird durch einen Zentralkörper und eine Triade ergänzender Planetenkraftfelder gespiegelt.</p></header>
        <div className="luminess-planet-grid">{planetGroups.map((group) => <article key={group.title}>
          <div className="luminess-planet-image"><Image src={group.image} alt={`${group.title}: ${group.description}`} fill loading="eager" sizes="(max-width: 760px) 88vw, (max-width: 1100px) 44vw, 22vw" /></div>
          <h3>Die Triade deiner {group.title}</h3><p>{group.description}</p>
        </article>)}</div>
      </div>
    </section>

    <section className="luminess-deep-dives shell" aria-labelledby="luminess-deep-dives-title">
      <header className="luminess-heading luminess-heading-split"><div><p className="luminess-kicker">OPTIONAL NACH DER HAUPTAUSBILDUNG</p><h2 id="luminess-deep-dives-title">Vertiefende Monde</h2></div><p>Jede Vertiefung steht für sich und ist kein verpflichtender Bestandteil der neunmonatigen Ausbildung.</p></header>
      <div className="luminess-deep-grid">{deepDives.map((item) => <article key={item.title}>
        <div className="luminess-deep-image"><Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 31vw" /></div>
        <div><span>OPTIONALE VERTIEFUNG</span><h3>{item.title}</h3><p>{item.text}</p><strong>890 €</strong></div>
      </article>)}</div>
    </section>

    <section className="luminess-audience" aria-labelledby="luminess-audience-title"><div className="shell">
      <header className="luminess-heading luminess-heading-centered"><p className="luminess-kicker">DEIN WEG IN DIE TIEFE</p><h2 id="luminess-audience-title">Für wen ist die Ausbildung?</h2><p>Aura Luminess richtet sich an spirituell interessierte Menschen, die die Methode fundiert kennenlernen und verantwortungsvoll in ihren eigenen Kontext übersetzen möchten.</p></header>
      <div className="luminess-audience-grid">{audience.map((item) => <article key={item.title}><span aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div></section>

    <section className="luminess-voices shell" aria-labelledby="luminess-voices-title">
      <div className="luminess-voices-inner"><span aria-hidden="true">✦</span><div><p className="luminess-kicker">STIMMEN DER TEILNEHMERINNEN</p><h2 id="luminess-voices-title">Erfahrungen, die aus der Ausbildung sprechen</h2><p>Dieser Bereich ist für echte, freigegebene Erfahrungsberichte aus der Aura-Luminess-Ausbildung vorbereitet und wird später ergänzt.</p></div></div>
    </section>

    <section className="luminess-faq shell" aria-labelledby="luminess-faq-title">
      <header className="luminess-heading luminess-heading-centered"><p className="luminess-kicker">HÄUFIGE FRAGEN</p><h2 id="luminess-faq-title">Was du vor deiner Bewerbung wissen möchtest</h2></header>
      <Accordion className="luminess-accordion" type="single" collapsible>{faqs.map((faq, index) => <AccordionItem value={`faq-${index + 1}`} key={faq.question}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion>
    </section>

    <section className="luminess-application" id="bewerbung" aria-labelledby="luminess-application-title"><div className="shell luminess-application-grid">
      <div><p className="luminess-kicker">AURA LUMINESS · ZWEI CIRCLES IM JAHR</p><h2 id="luminess-application-title">Samhain &amp; Walpurgis</h2><p>Die Ausbildung beginnt zweimal im Jahr: als Samhain Circle und als Walpurgis Circle. Die nächste Bewerbungsphase öffnet im Oktober 2026 für den Samhain Circle.</p></div>
      <div><span>Bewerbung ab Oktober 2026</span><strong>Wenige, bewusst vergebene Plätze</strong><p>3.333 €</p></div>
    </div></section>

    <section className="luminess-closing">
      <Image src="/hero-somatic-dark-mobile.png" alt="Atmosphärische Landschaft unter Mond und Sternen" fill sizes="100vw" />
      <div className="luminess-closing-shade" aria-hidden="true" />
      <div className="shell luminess-closing-copy"><p className="luminess-kicker">DEIN NÄCHSTER KREIS</p><h2>Bereit für deine neun Monde?</h2><p>Spüre in Ruhe, ob dieser Weg dich ruft, und entdecke im Bewerbungsabschnitt den nächsten möglichen Einstieg.</p><a className="luminess-button luminess-button-light" href={applicationHref}>Zur Bewerbung</a></div>
    </section>
  </div>;
}
