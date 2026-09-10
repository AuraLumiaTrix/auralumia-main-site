import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Karma mit Zimt & Zucker", description: "Der neue AuraLumia Podcast mit Jennifer Kindereit." };

export default function PodcastPage() {
  return <>
    <PageHero eyebrow="DER NEUE AURALUMIA PODCAST" title="Karma mit Zimt & Zucker"><p>Spirituelles Wissen, das nicht über dir schwebt, sondern mit dir am Küchentisch sitzt. Für süße Erkenntnisse, würzige Wahrheiten – und alles, was dazwischen im Körper nachklingt.</p><span className="status-pill">Neuer Auftritt in Vorbereitung</span></PageHero>
    <section className="podcast-stage"><div className="shell podcast-stage-grid"><div className="podcast-art"><img src="/podcast-placeholder.webp" alt="Vorläufiges Podcast-Motiv" /><span>NEUES COVER FOLGT</span></div><div><p className="eyebrow">WORUM ES GEHT</p><h2>Die großen Fragen. Ohne steife Antworten.</h2><p>Karma mit Zimt & Zucker verbindet Astrologie, Beziehungsmuster, Körperwissen und Jennifers unverwechselbaren Blick auf das spirituelle Leben – nahbar, klar und mit Raum für Widersprüche.</p><p>Diese Seite wächst mit dem neuen Podcast. Cover, Trailer und Episoden folgen.</p></div></div></section>
    <section className="episode-preview shell"><p className="eyebrow">BALD HIER</p><div className="episode-row"><span>01</span><div><h3>Der neue Trailer</h3><p>Eine Einladung in die neue Welt von Karma mit Zimt & Zucker.</p></div><b>IN VORBEREITUNG</b></div><div className="episode-row"><span>02</span><div><h3>Die erste neue Folge</h3><p>Zwischen kosmischer Perspektive und dem echten Leben.</p></div><b>IN VORBEREITUNG</b></div></section>
    <section className="closing-cta shell"><p className="eyebrow">BIS DER PODCAST STARTET</p><h2>Entdecke die Welt, aus der diese Gespräche entstehen.</h2><Link className="button button-dark" href="/somatic-karma">Somatic Karma entdecken <span>↗</span></Link></section>
  </>;
}
