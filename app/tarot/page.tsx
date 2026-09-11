import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TarotLibrary } from "@/components/tarot-library";
import { links } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Somatic Karma Tarot",
  description: "Das vollständige Archiv der 78 Somatic Karma Tarotkarten – klassische Bedeutung, Körperkompass und Ahnenarchitektur.",
};

export default function TarotPage() {
  return <>
    <PageHero eyebrow="SOMATIC KARMA TAROT · 78 ARCHETYPISCHE SPIEGEL" title="Dein inneres Wissen hat eine Sprache."><p>Entdecke alle 78 Karten mit ihrer klassischen Licht- und Schattenseite, dem Körperkompass und der Somatic-Karma-Ahnenarchitektur.</p><a className="button button-outline" href="#kartenbedeutungen">Kartenbedeutungen entdecken</a></PageHero>
    <section className="tarot-manifesto"><div className="shell tarot-manifesto-grid"><div><span>78</span><p>eigenständige<br />AuraLumia-Deutungen</p></div><div><span>5</span><p>Arkana-Welten<br />als vollständiges Archiv</p></div><div><span>2</span><p>Deutungsebenen:<br />Archetyp und Ahnenlinie</p></div></div></section>
    <TarotLibrary />
    <section className="tarot-app-band"><div className="shell tarot-app-grid"><div><p className="eyebrow">DIE SOMATIC KARMA TAROT APP</p><h2>Dein geschützter Kartenraum für jeden Tag.</h2><p>Das Archiv hier lässt dich alle Bedeutungen kennenlernen. In der App ziehst du intuitiv Karten, öffnest persönliche Reflexionsimpulse und nutzt den Raum auf Smartphone, Tablet oder Desktop.</p><div className="actions"><a className="button button-light" href={links.tarotCheckout} target="_blank" rel="noreferrer">App-Zugang wählen · 27 €</a></div><small>Einmalzahlung · kein Abonnement · der sichere Checkout öffnet sich in einem neuen Tab.</small></div><img src="/tarot.webp" alt="Somatic Karma Tarot App" /></div></section>
  </>;
}
