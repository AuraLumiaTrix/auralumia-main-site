import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { YouTubeListener } from "@/components/youtube-listener";
import { links } from "@/lib/site-content";

export const metadata: Metadata = { title: "Karma mit Zimt & Zucker", description: "Der neue AuraLumia Podcast mit Jennifer Olivia Kindereit." };

const podcastEpisodes = [
  { id: "dgENyvmt4IU", label: "Die Schuldnarbe", meta: "Folge 9" },
  { id: "T2QZH93ubLE", label: "Die Mutternarbe", meta: "Folge 11" },
  { id: "39cDG-QaYfI", label: "Die Vaternarbe", meta: "Folge 12" },
];

export default function PodcastPage() {
  return <>
    <figure className="podcast-editorial"><img src="/podcast-auralumia.png" alt="Podcast AuraLumia – Karma mit Zimt und Zucker" /></figure>
    <PageHero eyebrow="PODCAST · JENNIFER OLIVIA KINDEREIT" title="Karma mit Zimt & Zucker"><p>Ein Podcast für die heilende Kraft deiner spirituellen Freiheit: Ahnenwissen, vedische Astrologie, Tarot und Mentalcoaching – nahbar erzählt und in den Alltag übersetzt.</p><a className="button button-outline" href="#podcast-player">Alle Folgen hier hören</a></PageHero>
    <section className="podcast-showcase"><div className="shell podcast-art"><img src="/karma-mit-zimt-und-zucker.png" alt="Karma mit Zimt und Zucker – Podcast von Jennifer Olivia Kindereit" /></div></section>
    <section className="podcast-stage"><div className="shell podcast-copy"><p className="eyebrow">VOM SCHATTEN INS LICHT</p><h2>Lass auch schwere Wege wieder Süße tragen.</h2><p>Jennifer Olivia lädt dich ein, übernommene Regeln, familiäre Verstrickungen und karmische Muster bewusst zu betrachten – ohne dich auf deine Vergangenheit zu reduzieren.</p><p>Zwischen kosmischen Bildern, Ahnenwissen und einfachen Ritualen entsteht ein persönlicher Reflexionsraum für Selbstbestimmung, Mitgefühl und innere Freiheit.</p><div className="actions"><a className="button button-light" href="#podcast-player">Podcast auf AuraLumia hören</a></div></div></section>
    <section className="embedded-media shell" id="podcast-player"><div className="embedded-media-heading"><p className="eyebrow">KARMA MIT ZIMT & ZUCKER · PLAYER</p><h2>Ausgewählte Folgen. Direkt hier.</h2></div><YouTubeListener items={podcastEpisodes} initialId="ER2vq1-lTPY" initialItem={{ id: "ER2vq1-lTPY", label: "Cycle-Breaking", meta: "Aktuelle Folge" }} title="Karma mit Zimt und Zucker" ariaLabel="Podcastfolge auswählen" posterSrc="/karma-mit-zimt-und-zucker.png" posterAlt="Cover des Podcasts Karma mit Zimt und Zucker" /><div className="music-platform-actions" aria-label="Karma mit Zimt und Zucker auf Podcast-Plattformen"><a className="platform-button platform-button-podcast" href={links.podcast} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#fff"/><circle cx="12" cy="10" r="2.2" fill="#8f6a8f"/><path d="M8.5 9.7a3.5 3.5 0 0 1 7 0M6.2 9.7a5.8 5.8 0 0 1 11.6 0M10.2 14.2h3.6l-.6 4.2h-2.4z" fill="none" stroke="#8f6a8f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"/></svg><span>Alle Podcast-Plattformen</span></a><a className="platform-button platform-button-youtube" href={links.podcastYoutube} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="#fff"/><path d="m10 9 6 3-6 3z" fill="#d92929"/></svg><span>Podcast auf YouTube</span></a></div></section>
    <section className="episode-preview shell"><p className="eyebrow">THEMENWELTEN</p><div className="episode-row"><span>01</span><div><h3>Die vier Ahnen-Typen</h3><p>Schuldnarbe, Schwesternarbe, Mutternarbe und Vaternarbe als spirituelle Landkarten für vertraute Muster.</p></div><b>SOMATIC KARMA</b></div><div className="episode-row"><span>02</span><div><h3>Cycle Breaking</h3><p>Wie aus der kleinen Pause zwischen Aktivierung und Reaktion ein neuer Kreislauf entstehen kann.</p></div><b>INNERE FREIHEIT</b></div><div className="episode-row"><span>03</span><div><h3>Schoßraum & weibliche Linie</h3><p>Ausdruck, Kreativität, Körperwahrnehmung und Kinderwunsch in einem behutsamen spirituellen Raum.</p></div><b>VERKÖRPERUNG</b></div></section>
    <section className="closing-cta shell"><p className="eyebrow">WEITER ENTDECKEN</p><h2>Beginne bei deiner eigenen inneren Landkarte.</h2><Link className="button button-outline" href="/somatic-karma">Somatic Karma entdecken</Link></section>
  </>;
}
