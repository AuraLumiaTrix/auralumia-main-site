import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { links } from "@/lib/site-content";

export const metadata: Metadata = { title: "Über Jennifer", description: "Jennifer Olivia Kindereit – Gründerin von AuraLumia und Somatic Karma." };

export default function JenniferPage() {
  return <>
    <PageHero eyebrow="JENNIFER OLIVIA KINDEREIT" title="Ich übersetze zwischen Sternenwissen und dem, was dein Körper längst weiß."><p>Meine Arbeit beginnt dort, wo reine Information nicht mehr weiterführt. Ich verbinde analytische Präzision mit intuitiver Wahrnehmung – damit Erkenntnis nicht nur verstanden, sondern gelebt werden kann.</p><Link className="button button-dark" href="/angebote">Mit mir arbeiten <span>↗</span></Link></PageHero>
    <section className="jennifer-film shell"><video controls playsInline preload="metadata" poster="/jennifer.webp" aria-label="Jennifer Kindereit – persönliches Video"><source src={links.video} type="video/mp4" /></video><p>Ein Blick in meine Welt</p></section>
    <section className="jennifer-story shell"><div><p className="eyebrow">MEIN BLICK AUF DEINE GESCHICHTE</p><h2>Du bist nicht falsch. Dein System war intelligent.</h2></div><div><p>Viele Muster, für die wir uns verurteilen, waren einmal eine Form von Schutz, Zugehörigkeit oder Überleben. Mich interessiert nicht, wie wir sie möglichst schnell loswerden. Mich interessiert, was sie erzählen – und welche neue Wahl möglich wird, wenn wir sie wirklich verstehen.</p><p>In AuraLumia treffen vedische Astrologie, archetypisches Körperwissen, Ahnenarbeit und Tarot aufeinander. Nicht als Sammlung spiritueller Methoden, sondern als zusammenhängende Sprache für dein Leben.</p></div></section>
    <section className="jennifer-portrait"><div className="shell portrait-grid"><img src="/jennifer.webp" alt="Jennifer Olivia Kindereit" /><div><p className="eyebrow">AURALUMIA IST EINE EINLADUNG</p><blockquote>„Heilung beginnt, wenn du dich erinnerst, wer du bist.“</blockquote><p>Ich möchte dir nicht sagen, wer du werden sollst. Ich möchte einen Raum schaffen, in dem du dich selbst wieder klarer hören kannst.</p></div></div></section>
    <section className="principles shell"><p className="eyebrow">WIE ICH ARBEITE</p><div className="principles-grid"><article><span>01</span><h3>Präzise</h3><p>Astrologische Zusammenhänge werden konkret, verständlich und auf dein Leben bezogen.</p></article><article><span>02</span><h3>Intuitiv</h3><p>Ich höre auf das, was zwischen Daten, Bildern und deiner Geschichte sichtbar wird.</p></article><article><span>03</span><h3>Körpernah</h3><p>Erkenntnis wird erst wertvoll, wenn sie in deinem Erleben eine neue Möglichkeit öffnet.</p></article></div></section>
    <section className="closing-cta shell"><p className="eyebrow">DEIN WEG MIT MIR</p><h2>Beginne mit dem Raum, der zu deiner jetzigen Tiefe passt.</h2><Link className="button button-dark" href="/angebote">Angebote entdecken <span>↗</span></Link></section>
  </>;
}
