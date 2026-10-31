import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PodcastAudioPlayer } from "@/components/podcast-audio-player";
import { PodcastPlatformLinks } from "@/components/podcast-platform-links";

export const metadata: Metadata = { title: "Karma mit Zimt & Zucker", description: "Der neue AuraLumia Podcast mit Jennifer Olivia Kindereit." };

const podcastEpisodes = [
  { src: "/audio/podcast-mutternarbe.mp3", title: "Die Mutternarbe", meta: "Folge 11", duration: "25:45 Min." },
  { src: "/audio/podcast-karrierebremse.mp3", title: "Karrierebremse lösen", meta: "Folge 15", duration: "20:18 Min." },
  { src: "/audio/podcast-schuldnarbe.mp3", title: "Die Schuldnarbe", meta: "Folge 9", duration: "25:20 Min." },
];

export default function PodcastPage() {
  return <main className="podcast-page">
    <section className="podcast-hero shell">
      <p className="eyebrow">PODCAST · JENNIFER OLIVIA KINDEREIT</p>
      <h1>Karma mit Zimt & Zucker</h1>
      <figure className="podcast-hero-image">
        <Image src="/podcast-smartphone-blanket.png" alt="Karma mit Zimt und Zucker auf einem Smartphone auf einer kuscheligen Wolldecke" fill priority sizes="(max-width: 760px) calc(100vw - 36px), 960px" />
      </figure>
      <div className="podcast-hero-copy">
        <p>Ein Podcast für die heilende Kraft deiner spirituellen Freiheit: Ahnenwissen, vedische Astrologie, Tarot und Mentalcoaching – nahbar erzählt und in den Alltag übersetzt.</p>
        <a className="button button-outline" href="#podcast-player">Alle Folgen hier hören</a>
      </div>
    </section>
    <section className="podcast-showcase"><div className="shell podcast-art"><img src="/podcast-smartphone-transparent.png" alt="Karma mit Zimt und Zucker auf dem Smartphone" /></div></section>
    <section className="podcast-stage"><div className="shell podcast-copy"><p className="eyebrow">VOM SCHATTEN INS LICHT</p><h2>Lass auch schwere Wege wieder Süße tragen.</h2><p>Jennifer Olivia lädt dich ein, übernommene Regeln, familiäre Verstrickungen und karmische Muster bewusst zu betrachten – ohne dich auf deine Vergangenheit zu reduzieren.</p><p>Zwischen kosmischen Bildern, Ahnenwissen und einfachen Ritualen entsteht ein persönlicher Reflexionsraum für Selbstbestimmung, Mitgefühl und innere Freiheit.</p><div className="actions"><a className="button button-light" href="#podcast-player">Podcast auf AuraLumia hören</a></div></div></section>
    <section className="embedded-media shell" id="podcast-player"><div className="embedded-media-heading"><p className="eyebrow">KARMA MIT ZIMT & ZUCKER · PLAYER</p><h2>Ausgewählte Folgen. Direkt hier.</h2></div><div className="podcast-audio-feature"><figure className="podcast-audio-cover"><Image src="/podcast-smartphone-blanket.png" alt="Karma mit Zimt und Zucker auf einem Smartphone auf einer kuscheligen Wolldecke" fill sizes="(max-width: 760px) 100vw, 38vw" /></figure><div className="podcast-audio-list">{podcastEpisodes.map((episode) => <article className="podcast-audio-card" key={episode.src}><div><span>{episode.meta}</span><span>{episode.duration}</span></div><h3>{episode.title}</h3><PodcastAudioPlayer src={episode.src} title={`${episode.title}, ${episode.meta}`} durationLabel={episode.duration.replace(" Min.", "")} /></article>)}</div></div><PodcastPlatformLinks /></section>
    <section className="episode-preview shell"><p className="eyebrow">THEMENWELTEN</p><div className="episode-row"><span>01</span><div><h3>Die vier Ahnen-Typen</h3><p>Schuldnarbe, Schwesternarbe, Mutternarbe und Vaternarbe als spirituelle Landkarten für vertraute Muster.</p></div><b>SOMATIC KARMA</b></div><div className="episode-row"><span>02</span><div><h3>Cycle Breaking</h3><p>Wie aus der kleinen Pause zwischen Aktivierung und Reaktion ein neuer Kreislauf entstehen kann.</p></div><b>INNERE FREIHEIT</b></div><div className="episode-row"><span>03</span><div><h3>Schoßraum & weibliche Linie</h3><p>Ausdruck, Kreativität, Körperwahrnehmung und Kinderwunsch in einem behutsamen spirituellen Raum.</p></div><b>VERKÖRPERUNG</b></div></section>
    <section className="closing-cta shell"><p className="eyebrow">WEITER ENTDECKEN</p><h2>Beginne bei deiner eigenen inneren Landkarte.</h2><Link className="button button-outline" href="/somatic-karma">Somatic Karma entdecken</Link></section>
  </main>;
}
