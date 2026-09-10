import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { OfferCard } from "@/components/offer-card";
import { offerGroups, links } from "@/lib/site-content";

export const metadata: Metadata = { title: "Angebote", description: "Alle AuraLumia Angebote – Somatic Karma, Astrologie, Kinderwunsch, Berufung, Rituale und Mentoring." };

export default function AngebotePage() {
  return <>
    <PageHero eyebrow="DIE AURALUMIA ANGEBOTSWELT" title="Nicht mehr suchen. Sondern den Raum finden, der jetzt wirklich passt."><p>Vom ersten intuitiven Impuls bis zur intensiven Begleitung: Wähle nach deinem Thema und der Tiefe, die du im Moment tragen möchtest.</p><a className="button button-dark" href={links.shop}>Direkt zum Shop <span>↗</span></a></PageHero>
    <nav className="category-nav shell" aria-label="Angebotskategorien"><a href="#somatic-karma">Somatic Karma</a><a href="#klarheit-ritual">Klarheit & Ritual</a><a href="#kinderwunsch">Kinderwunsch</a><a href="#berufung">Berufung</a><a href="#mentoring">Mentoring</a></nav>
    {offerGroups.map((group,index)=><section className="catalog-section shell" id={["somatic-karma","klarheit-ritual","kinderwunsch","berufung"][index]} key={group.title}><div className="catalog-intro"><p className="eyebrow">{group.kicker}</p><h2>{group.title}</h2><p>{group.intro}</p></div><div className="catalog-grid">{group.offers.map(offer=><OfferCard offer={offer} key={offer.name} />)}</div></section>)}
    <section className="premium-band" id="mentoring"><div className="shell premium-band-grid"><div><p className="eyebrow">05 · AURA LUMINESS</p><h2>Wenn ein einzelner Impuls nicht mehr genug ist.</h2></div><div><p>Intensive Begleitung für Frauen, die eine tiefe persönliche oder berufliche Schwelle nicht allein gehen möchten.</p><a className="button button-gold" href="/mentoring">Zum Mentoring <span>↗</span></a></div></div></section>
    <section className="shop-note shell"><h2>Noch unsicher?</h2><p>Im AuraLumia Shop findest du alle Angebote gesammelt. Für eine intensive Begleitung führt dich der nächste Schritt zur Mentoring-Seite.</p><a className="text-link" href={links.shop}>Alle Produkte im Shop <span>↗</span></a></section>
  </>;
}
