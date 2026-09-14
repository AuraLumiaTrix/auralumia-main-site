import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { OfferCard } from "@/components/offer-card";
import { offerGroups } from "@/lib/site-content";

export const metadata: Metadata = { title: "Angebote", description: "Die AuraLumia Angebotsstufen – vom kostenfreien Somatic Karma Navigator bis zu individuellen Räumen und Mentoring." };

export default function AngebotePage() {
  return <>
    <div className="offers-hero">
      <img className="offers-hero-portrait" src="/somatic-karma-line-art-white.png" alt="" aria-hidden="true" />
      <PageHero eyebrow="DIE AURALUMIA ANGEBOTSWELT" title="Beginne dort, wo du stehst. Vertiefe, was dich wirklich ruft."><p>Vom kostenfreien Somatic Karma Navigator über digitale Selbstregulation und fundierte Online-Kurse bis zu individuell für dich geschaffenen Räumen.</p></PageHero>
    </div>
    <nav className="category-nav shell" aria-label="Angebotsstufen"><a href="#kostenfreier-einstieg">Einstieg</a><a href="#selbstregulation">Selbstregulation</a><a href="#online-kurswelt">Online-Kurse</a><a href="#individuelle-raeume">Individuelle Räume</a><a href="/mentoring">Mentoring</a></nav>
    {offerGroups.map((group)=><section className="catalog-section shell" id={group.id} key={group.id}><div className="catalog-intro"><p className="eyebrow">{group.kicker}</p><h2>{group.title}</h2><p>{group.intro}</p></div><div className="catalog-grid">{group.offers.map(offer=><OfferCard offer={offer} key={offer.name} />)}</div></section>)}
    <section className="premium-band" id="mentoring"><div className="shell premium-band-grid"><div><p className="eyebrow">05 · AURA LUMINESS</p><h2>Wenn ein einzelner Impuls nicht mehr genug ist.</h2></div><div><p>Intensive Begleitung für Frauen, die eine tiefe persönliche oder berufliche Schwelle nicht allein gehen möchten.</p><a className="button button-light" href="/mentoring">Zum Mentoring</a></div></div></section>
  </>;
}
