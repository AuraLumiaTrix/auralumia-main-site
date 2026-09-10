import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { links } from "@/lib/site-content";

export const metadata: Metadata = { title: "Somatic Karma", description: "Die Somatic Karma Methode, vier Archetypen und digitale Räume von AuraLumia." };

const archetypes = [
  ["01", "Resonanztyp", "Mutternarbe", "Du spürst fein, was andere brauchen – und verlierst dabei leicht den Kontakt zu deinem eigenen Rhythmus."],
  ["02", "Rebell-Typ", "Vaternarbe", "Du schützt deine Freiheit und merkst zugleich, wie viel Kraft der permanente innere Widerstand bindet."],
  ["03", "Einzelkämpfer-Typ", "Schwesternarbe", "Du trägst viel allein, weil Verlassenkönnen sicherer geworden ist als Sich-Anlehnen."],
  ["04", "Schuldtyp", "Schuldnarbe", "Du übernimmst Verantwortung, noch bevor jemand sie ausspricht – und verwechselst Verbundenheit mit Last."],
];

const rooms = [
  { label: "DEIN ANFANG", title: "Archetype Navigator", text: "Finde in wenigen Minuten heraus, welche Schutzarchitektur dich am stärksten prägt.", image: "/hero-somatic.jpg", href: links.navigator },
  { label: "DEIN JETZT", title: "Transit Orakel", text: "Lies die Berührungspunkte zwischen deinem Geburtsbild und dem gegenwärtigen Himmel.", image: "/transit-orakel.webp", href: links.transit },
  { label: "DEIN SPIEGEL", title: "Somatic Karma Tarot", text: "78 archetypische Spiegel verbinden klassische Tarot-Weisheit mit deiner Narbenarchitektur.", image: "/tarot.webp", href: links.tarot },
];

export default function SomaticKarmaPage() {
  return <>
    <PageHero eyebrow="AURALUMIA SIGNATURE-METHODE" title="Somatic Karma"><p>Dein Körper erinnert sich an das, was dein Verstand längst erklärt hat. Somatic Karma macht diese unsichtbare Architektur lesbar – präzise, sanft und ohne dich auf deine Geschichte zu reduzieren.</p><a className="button button-dark" href={links.navigator}>Archetypen kostenfrei bestimmen <span>↗</span></a></PageHero>
    <section className="method-manifesto"><div className="shell manifesto-grid"><p>Astrologie zeigt die Anlage.</p><p>Der Körper zeigt, wie sie heute gelebt wird.</p><p>Der Archetyp zeigt, wo Veränderung beginnen kann.</p></div></section>
    <section className="archetypes shell"><div className="section-heading"><div><p className="eyebrow">DIE VIER ARCHETYPEN</p><h2>Vier Schutzsysteme. Vier Wege zurück zu dir.</h2></div><p>Kein Archetyp ist ein Etikett. Er ist eine Landkarte für das, was einmal klug war – und heute neu verhandelt werden darf.</p></div><div className="archetype-grid">{archetypes.map(([no,title,wound,text])=><article key={no}><span>{no}</span><h3>{title}</h3><b>{wound}</b><p>{text}</p></article>)}</div></section>
    <section className="rooms"><div className="shell"><div className="section-heading"><div><p className="eyebrow">DIE DIGITALEN RÄUME</p><h2>Drei Zugänge zu deiner inneren Landkarte.</h2></div></div><div className="room-grid">{rooms.map(room=><a className="room-card" href={room.href} key={room.title}><img src={room.image} alt="" /><div><span>{room.label}</span><h3>{room.title}</h3><p>{room.text}</p><b>Öffnen ↗</b></div></a>)}</div></div></section>
    <section className="depth shell"><div className="depth-card"><img src="/audio-bundle.webp" alt="Somatic Karma Audio Bundle" /><div><p className="eyebrow">DEIN ARCHETYP · DEINE PRAXIS</p><h2>Audio Bundle</h2><p>Meditation, Affirmation und Transformationsritual für deinen Hauptarchetypen.</p><strong>47 €</strong><a className="text-link" href={links.audio}>Bundle ansehen <span>↗</span></a></div></div><div className="depth-card"><img src="/karma-code.webp" alt="Somatic Karma Code" /><div><p className="eyebrow">DEINE PERSÖNLICHE SIGNATUR</p><h2>Somatic Karma Code</h2><p>Dein Geburtshoroskop und dein Archetyp als persönliche Audioanalyse – Essential oder von Jennifer eingesprochen.</p><strong>97 € · 333 €</strong><a className="text-link" href={links.code}>Code entdecken <span>↗</span></a></div></div></section>
    <section className="closing-cta shell"><p className="eyebrow">BEREIT FÜR DEINEN ERSTEN SPIEGEL?</p><h2>Erkenne das Muster. Ohne dich darin zu verlieren.</h2><a className="button button-dark" href={links.navigator}>Navigator starten <span>↗</span></a></section>
  </>;
}
