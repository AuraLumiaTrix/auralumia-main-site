import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { OfferCard } from "@/components/offer-card";
import { offerGroups } from "@/lib/site-content";

export const metadata: Metadata = { title: "Audiokurse & App", description: "Somatic Karma Starter-Kits, Frequenzräume und Tarot-Werkzeuge für deine selbstbestimmte Praxis." };

export default function AngebotePage() {
  return <>
    <div className="offers-hero">
      <img className="offers-hero-portrait" src="/somatic-karma-line-art-white.png" alt="" aria-hidden="true" />
      <PageHero eyebrow="SELF-PRACTICE · AUDIOKURSE & APP" title="Wähle die Praxis, die dich jetzt wirklich weiterträgt."><p>Beginne mit deinem kostenfreien Archetypen-Check. Danach findest du hier genau die Audios, Frequenzräume und Tarot-Werkzeuge, die zu deinem nächsten Schritt passen.</p></PageHero>
    </div>
    <nav className="category-nav shell" aria-label="Angebotsbereiche"><a href="#orientierung">Orientierung</a><a href="#starter-kits">Starter-Kits</a><a href="#frequenzraeume">Frequenzräume</a><a href="#tarot-werkzeuge">Tarot-Werkzeuge</a><a href="/mentoring">Begleitung</a></nav>
    {offerGroups.map((group)=><section className="catalog-section shell" id={group.id} key={group.id}><div className="catalog-intro"><p className="eyebrow">{group.kicker}</p><h2>{group.title}</h2><p>{group.intro}</p></div><div className="catalog-grid">{group.offers.map(offer=><OfferCard offer={offer} key={offer.name} />)}</div></section>)}
    <section className="premium-band" id="mentoring"><div className="shell premium-band-grid"><div><p className="eyebrow">DEIN WEG IN DIE PERSÖNLICHE TIEFE</p><h2>Erhalte eine Maßanfertigung, die deine Geschichte und dein Ziel verbindet.</h2></div><div><p>Der Bespoke Blueprint und die Somatic Karma Academy führen dich persönlich, verbindlich und mit einem klaren Fahrplan durch deine nächste Schwelle.</p><a className="button button-light" href="/mentoring">Begleitung & Ausbildung entdecken</a></div></div></section>
  </>;
}
