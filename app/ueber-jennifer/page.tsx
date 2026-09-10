import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PortraitVideo } from "@/components/portrait-video";
import { links } from "@/lib/site-content";

export const metadata: Metadata = { title: "Über Jennifer Olivia", description: "Jennifer Olivia Kindereit – Gründerin von AuraLumia und Somatic Karma." };

export default function JenniferPage() {
  return <>
    <PageHero eyebrow="JENNIFER OLIVIA KINDEREIT" title="Ich lese und verwebe die Fäden der Zeit, des Körpers und des Blutes."><p>Als kosmische Weberin, zertifizierter Mentalcoach und Medium verbinde ich die fundierte Arbeit des modernen Verstandes mit der initiatischen Erinnerung alter Linien.</p><Link className="button button-outline" href="/angebote">Mit mir arbeiten</Link></PageHero>
    <section className="jennifer-film shell"><PortraitVideo src={links.portraitVideo} /></section>
    <section className="jennifer-story shell"><div><p className="eyebrow">MEINE WURZEL</p><h2>Zwischen Harz, Sternenwissen und weiblicher Erinnerung.</h2></div><div><p>Geboren im Harz und verwurzelt in einer Familie mit feiner Wahrnehmung, begleitet mich das Wissen um unsichtbare Zusammenhänge seit meiner Kindheit. Heute verbinde ich diese intuitive Gabe mit klaren, erlernten Werkzeugen.</p><p>In AuraLumia treffen vedische Astrologie, archetypisches Körperwissen, Ahnenarbeit, Tarot und Stimme aufeinander. Nicht als lose Sammlung spiritueller Methoden, sondern als zusammenhängende Sprache für Prägung, Schutz und neue Wahl.</p></div></section>
    <section className="jennifer-portrait"><div className="shell portrait-grid"><img src="/jennifer-olivia.jpg" alt="Jennifer Olivia Kindereit" /><div><p className="eyebrow">AURALUMIA IST EINE EINLADUNG</p><blockquote>„Heilung beginnt, wenn du dich erinnerst, wer du bist.“</blockquote><p>Ich möchte dir nicht sagen, wer du werden sollst. Ich möchte einen Raum schaffen, in dem du dich selbst wieder klarer hören kannst.</p></div></div></section>
    <section className="principles shell"><p className="eyebrow">DAS FUNDAMENT MEINER ARBEIT</p><div className="principles-grid"><article><span>01</span><h3>Verstand</h3><p>Zertifiziertes Mentalcoaching gibt Bewusstseinsarbeit, psychologischer Transformation und neuro-mentaler Verankerung eine klare Struktur.</p></article><article><span>02</span><h3>Körper</h3><p>Die Ausbildung als Essence of Belly Dance-Trainerin verbindet Beckenbodenwissen, weibliche Ur-Energie und gelebtes Embodiment.</p></article><article><span>03</span><h3>Stimme</h3><p>Mystischer Folkloregesang und die Kundalini-Yoga-Einweihung Chandra Sangita machen Klang zu einem Raum für Erinnerung und Öffnung.</p></article></div></section>
    <section className="vita-band"><div className="shell vita-grid"><div><p className="eyebrow">SCHÖPFUNGEN & WERKE</p><h2>Eine Arbeit, die viele Formen kennt.</h2></div><ul><li>Gründerin von AuraLumia und Entwicklerin der Somatic-Karma-Archetypen</li><li>Schöpferin eines eigenen Tarotdecks und Autorin des „Buchs der Ahnenstruktur“</li><li>Host von „Karma mit Zimt & Zucker“</li><li>Künstlerin hinter dem Musikprojekt Naru Hikari</li></ul></div></section>
    <section className="closing-cta shell"><p className="eyebrow">DEIN WEG MIT MIR</p><h2>Beginne mit dem Raum, der zu deiner jetzigen Tiefe passt.</h2><Link className="button button-outline" href="/angebote">Angebote entdecken</Link></section>
  </>;
}
