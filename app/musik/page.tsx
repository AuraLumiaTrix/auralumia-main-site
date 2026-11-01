import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PodcastAudioPlayer } from "@/components/podcast-audio-player";

export const metadata: Metadata = {
  title: "Naru Hikari · Musik",
  description: "Naru Hikari – Musik von Jennifer Olivia Kindereit für weibliche Erinnerung, Verkörperung und innere Freiheit.",
};

const tracks = [
  { label: "Loving Is Devotion", src: "/audio/naru-hikari/loving-is-devotion.mp3", duration: "4:02" },
  { label: "No Shame", src: "/audio/naru-hikari/no-shame.mp3", duration: "3:20" },
  { label: "In Japan", src: "/audio/naru-hikari/in-japan.mp3", duration: "4:21" },
  { label: "Goddess", src: "/audio/naru-hikari/goddess.mp3", duration: "3:33" },
  { label: "Come What May", src: "/audio/naru-hikari/come-what-may.mp3", duration: "4:08" },
];

const spotifyUrl = "https://open.spotify.com/search/Naru%20Hikari%20Rising%20of%20the%20Womb";
const youtubeChannelUrl = "https://www.youtube.com/channel/UCajW31610owH4bouU_JM8bQ?sub_confirmation=1";

export default function MusikPage() {
  return <div className="music-page">
    <div className="music-hero">
      <img className="music-hero-portrait" src="/naru-hikari-seeria.png" alt="" aria-hidden="true" />
      <PageHero eyebrow="NARU HIKARI · ARTIST PROJECT" title="Musik für die weibliche Linie."><p>Unter ihrem Künstlernamen Naru Hikari lässt Jennifer Olivia Stimme, Sinnlichkeit und spirituelle Erinnerung zu einem eigenen Klangraum werden.</p><a className="button button-outline" href="#naru-player">Album hier hören</a></PageHero>
    </div>

    <section className="music-stage"><div className="shell music-stage-grid"><div className="music-art"><img src="/naru-hikari-album.png" alt="Naru Hikari – Rising of the Womb Album-Mockup" /></div><div><p className="eyebrow">RISING OF THE WOMB</p><h2>Sounds of Healing, Sensuality, Femininity and Power.</h2><p>Fünf Songs bewegen sich zwischen Hingabe und Selbstbefreiung, Weichheit und Kraft. Musik nicht als Hintergrund – sondern als Erinnerung daran, dass der Körper seine eigene Sprache kennt.</p><a className="button button-light" href="#naru-player">Auf AuraLumia hören</a></div></div></section>

    <section className="music-player-section shell" id="naru-player">
      <div className="embedded-media-heading"><p className="eyebrow">RISING OF THE WOMB · PLAYER</p><h2>Wähle deinen Song.</h2></div>
      <div className="music-track-grid">
        {tracks.map((track, index) => <article className="music-track-card" key={track.src}><div><span>{String(index + 1).padStart(2, "0")}</span><span>NARU HIKARI</span></div><h3>{track.label}</h3><PodcastAudioPlayer src={track.src} title={`${track.label} von Naru Hikari`} durationLabel={track.duration} /></article>)}
      </div>
      <div className="music-platform-links" aria-label="Naru Hikari auf Musikplattformen">
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer"><Image src="/podcast/spotify-logo-gold.png" alt="" width={1254} height={1254} sizes="56px" /><span>Auf Spotify hören</span></a>
        <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer"><Image src="/podcast/youtube-logo-gold.png" alt="" width={1254} height={1254} sizes="56px" /><span>Auf YouTube hören</span></a>
      </div>
    </section>

    <section className="testimonial-section music-testimonials shell" aria-labelledby="musik-stimmen"><div className="testimonial-heading"><p className="eyebrow">STIMMEN ZU RISING OF THE WOMB</p><h2 id="musik-stimmen">Was die Musik im Inneren berührt.</h2></div><div className="testimonial-grid"><article className="testimonial-card"><blockquote>„Deine Songs und deine Stimme haben eine intensive Wirkung auf mich – erdend, sinnlich und tief.“</blockquote><p className="testimonial-attribution testimonial-attribution-with-avatar"><Image className="testimonial-avatar-elena" src="/testimonial-elena-m-avatar.jpg" alt="Elena M." width={1200} height={1600} sizes="64px" /><span><strong>Elena M.</strong><small>Hörerin</small></span></p></article><article className="testimonial-card"><blockquote>„Das Warten hat sich gelohnt. Danke für dieses schöne Geschenk zum 1. Advent – und dann auch noch mein Lieblingssong ‚Loving Is Devotion‘ an erster Stelle.“</blockquote><p className="testimonial-attribution"><strong>Heike L.</strong><span>Hörerin</span></p></article><article className="testimonial-card"><blockquote>„Ich hatte beim Hören richtige Gänsehaut. Man spürt, wie viel Gefühl und Herz in deinen Songs steckt.“</blockquote><p className="testimonial-attribution"><strong>Aneta D.</strong><span>Hörerin</span></p></article></div></section>

    <section className="music-origin"><div className="shell music-origin-grid"><div><p className="eyebrow">DIE STIMME HINTER NARU HIKARI</p><h2>Erinnere dich durch Klang.</h2></div><div><p>Jennifer Olivias Ausbildung im mystischen und rituellen Folkloregesang verbindet sich mit ihrer Kundalini-Yoga-Einweihung unter dem Namen Chandra Sangeeta – Mondgesang.</p><p>Naru Hikari ist die künstlerische Seite derselben Arbeit, die AuraLumia prägt: weibliche Verkörperung, Ahnenlinie, innere Freiheit und die Rückkehr zur eigenen schöpferischen Kraft.</p></div></div></section>

    <section className="closing-cta shell"><p className="eyebrow">STIMME · KÖRPER · ERINNERUNG</p><h2>Höre, was sich nicht erklären lässt.</h2><div className="actions"><a className="button button-outline" href="#naru-player">Rising of the Womb hören</a><Link className="text-link" href="/ueber-jennifer">Jennifer Olivia kennenlernen</Link></div></section>
  </div>;
}
