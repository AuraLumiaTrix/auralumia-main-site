import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Begleitung & Ausbildung", description: "Somatic Karma Bespoke Blueprint, Academy und Master-Spezialisierungen mit Jennifer Olivia Kindereit." };

const formats = [
  { label: "DREI MONDE · 1:1 MAßANFERTIGUNG", title: "Bespoke Blueprint", price: "890–1.190 €", image: "/products/aura-luminess-vip.png", text: "Dein persönlicher 12-Wochen-Weg: Orientierungscall, individuelle Triaden- und Radix-Analyse, Somatic Karma Code Audio sowie ein klarer Integrationsplan für deine Selbstarbeit.", detail: "MotherLumia für Kinderwunsch, weibliche Linie und Cycle-Breaking · SisterLumia für Berufung, Sichtbarkeit und Schwestern-Dynamiken" },
  { label: "NEUN MONDE · LIVE-AUSBILDUNG", title: "Somatic Karma Academy", price: "3.333 € · 9 Raten à 390 €", image: "/products/aura-luminess-premium.png", text: "Die fundierte Ausbildung zur Somatic Karma Mentorin mit neun Live-Modulen, neun Supervisionen und insgesamt 54 Live-Stunden in einer bewusst kleinen Gruppe.", detail: "Methode, Matrix, Astrologie und Tarot in der traumasensitiven Anwendung für Klientinnen" },
];

const tracks = [
  ["A", "Cosmic Karma", "Archetypische Astrologie & Transite"],
  ["B", "The Living Mirror", "Intuitive Tarologie & Feldlesen"],
  ["C", "Somatic Energy", "Energetische Ahnenarbeit & Sacred Grids"],
];

export default function MentoringPage() {
  return <>
    <div className="mentoring-hero">
      <img className="mentoring-hero-portrait" src="/aura-luminess-hero.png" alt="" aria-hidden="true" />
      <PageHero eyebrow="HIGH-TOUCH · BEGLEITUNG & AUSBILDUNG" title="Wähle einen Weg, der deine Geschichte versteht und für dich gebaut ist."><p>Von der persönlichen Drei-Monde-Maßanfertigung bis zur neunmonatigen Ausbildung: Hier wird deine Erkenntnis zu einem klaren, verbindlichen Transformationsweg.</p></PageHero>
    </div>
    <section className="mentoring-manifesto"><div className="shell"><p>Du wirst persönlich gesehen.</p><p>Du erhältst einen klaren nächsten Schritt.</p><h2>Eine sanfte, präzise Architektur für deine persönliche Entwicklung oder deine Arbeit mit anderen Frauen.</h2></div></section>
    <section className="mentoring-formats shell"><div className="section-heading"><div><p className="eyebrow">ZWEI WEGE IN DIE TIEFE</p><h2>Wähle Maßanfertigung oder fundierte Ausbildung.</h2></div></div>{formats.map((format)=><article className="mentoring-card" key={format.title}><div className="mentoring-image"><img src={format.image} alt={format.title} /></div><div className="mentoring-copy"><span>{format.label}</span><h2>{format.title}</h2><p>{format.text}</p><small>{format.detail}</small><strong>{format.price}</strong><a className="text-link" href="#bewerbung">Verfügbarkeit ansehen</a></div></article>)}</section>
    <section className="testimonial-section shell" aria-labelledby="blueprint-stimme"><div className="testimonial-heading"><p className="eyebrow">STIMME ZUR PERSÖNLICHEN BEGLEITUNG</p><h2 id="blueprint-stimme">Was ein sicher gehaltener Weg verändern kann.</h2></div><article className="testimonial-feature"><Image src="/testimonial-elena-m.jpg" alt="Elena M." width={1338} height={1600} sizes="(max-width: 760px) 100vw, 38vw" /><div><blockquote>„Ich war auf der Suche nach Unterstützung, Halt und einem sicheren Raum für meine persönlichen Themen. Genau das habe ich bei Jennifer Olivia gefunden. Sie hat mich mit genau den richtigen Impulsen durch meinen Prozess geleitet und einen Raum für echte Transformation geschaffen.“</blockquote><p className="testimonial-attribution"><strong>Elena M.</strong><span>Persönliche Begleitung</span></p></div></article></section>
    <section className="fit-section shell"><div><p className="eyebrow">DER BESPOKE BLUEPRINT</p><h2>Erhalte einen Fahrplan, der deine Geschichte nicht verallgemeinert.</h2></div><ol className="guided-steps"><li><b>01</b><span><strong>Orientierung</strong>Im persönlichen Call klären wir Ziel, Narbe und aktuellen Knotenpunkt.</span></li><li><b>02</b><span><strong>Diagnostik</strong>Jennifer Olivia verbindet Geburtsradix, Planeten-Triaden und Somatic-Karma-Matrix.</span></li><li><b>03</b><span><strong>Integration</strong>Du erhältst deinen Drei-Monde-Plan, eine persönliche Audioanalyse und konkrete Werkzeuge.</span></li></ol></section>
    <section className="master-tracks shell"><div className="section-heading"><div><p className="eyebrow">NACH DER ACADEMY</p><h2>Drei Master-Tracks für deine Spezialisierung.</h2></div><p>Die Aufbau-Tracks öffnen exklusiv für Absolventinnen der Somatic Karma Academy. Preisrahmen je Intensiv-Track: 990–1.111 €.</p></div><div className="master-track-grid">{tracks.map(([no,title,text])=><article key={no}><span>TRACK {no}</span><h3>{title}</h3><p>{text}</p><b>Coming soon</b></article>)}</div></section>
    <section className="mentoring-application" id="bewerbung"><div className="shell mentoring-application-grid"><div><p className="eyebrow">ZWEI CIRCLES IM JAHRESKREIS</p><h2>Neun Monde. Zwei Portale. Ein tiefgreifender Weg.</h2><p>Die Academy öffnet zweimal im Jahr: als Samhain Circle und als Walpurgis Circle. Jeder Durchgang begleitet dich über neun Monde in einem bewusst kleinen, persönlich geführten Raum. Die nächste Bewerbungsphase öffnet im Oktober für den Samhain Circle.</p></div><aside className="application-notice"><span>NÄCHSTE BEWERBUNGSPHASE</span><h3>Oktober 2026</h3><p>Somatic Karma Academy · Samhain Circle · neun Monde</p><strong>Wenige, bewusst vergebene Plätze</strong></aside></div></section>
  </>;
}
