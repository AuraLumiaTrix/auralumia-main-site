import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { links } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Naru Hikari · Musik",
  description: "Naru Hikari – Musik von Jennifer Olivia Kindereit für weibliche Erinnerung, Verkörperung und innere Freiheit.",
};

const tracks = ["Loving Is Devotion", "No Shame", "In Japan", "Goddess", "Come What May"];

export default function MusikPage() {
  return <>
    <PageHero eyebrow="NARU HIKARI · ARTIST PROJECT" title="Musik für die weibliche Linie."><p>Unter ihrem Künstlernamen Naru Hikari lässt Jennifer Olivia Stimme, Sinnlichkeit und spirituelle Erinnerung zu einem eigenen Klangraum werden.</p><a className="button button-outline" href={links.music}>Album hören</a></PageHero>

    <section className="music-stage"><div className="shell music-stage-grid"><div className="music-art"><img src="/naru-hikari-album.png" alt="Naru Hikari – Rising of the Womb Album-Mockup" /></div><div><p className="eyebrow">RISING OF THE WOMB</p><h2>Sounds of Healing, Sensuality, Femininity and Power.</h2><p>Fünf Songs bewegen sich zwischen Hingabe und Selbstbefreiung, Weichheit und Kraft. Musik nicht als Hintergrund – sondern als Erinnerung daran, dass der Körper seine eigene Sprache kennt.</p><a className="button button-light" href={links.music}>Auf Amazon Music hören</a></div></div></section>

    <section className="tracklist shell"><div><p className="eyebrow">DAS ALBUM</p><h2>Fünf Wege zurück in die eigene Stimme.</h2></div><ol>{tracks.map((track, index) => <li key={track}><span>{String(index + 1).padStart(2, "0")}</span><h3>{track}</h3><b>NARU HIKARI</b></li>)}</ol></section>

    <section className="music-origin"><div className="shell music-origin-grid"><div><p className="eyebrow">DIE STIMME HINTER NARU HIKARI</p><h2>Wenn Klang zu Erinnerung wird.</h2></div><div><p>Jennifers Ausbildung im mystischen und rituellen Folkloregesang verbindet sich mit ihrer Kundalini-Yoga-Einweihung unter dem Namen Chandra Sangita – Mondgesang.</p><p>Naru Hikari ist die künstlerische Seite derselben Arbeit, die AuraLumia prägt: weibliche Verkörperung, Ahnenlinie, innere Freiheit und die Rückkehr zur eigenen schöpferischen Kraft.</p></div></div></section>

    <section className="closing-cta shell"><p className="eyebrow">STIMME · KÖRPER · ERINNERUNG</p><h2>Manche Wahrheiten werden nicht erklärt. Sie werden gehört.</h2><div className="actions"><a className="button button-outline" href={links.music}>Rising of the Womb hören</a><Link className="text-link" href="/ueber-jennifer">Jennifer kennenlernen</Link></div></section>
  </>;
}
