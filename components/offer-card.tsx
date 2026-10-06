import type { Offer } from "@/lib/site-content";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="catalog-card">
      {offer.href ? <a className="catalog-image" href={offer.href} target="_blank" rel="noopener noreferrer" aria-label={`${offer.name} ansehen`}><img src={offer.image} alt={offer.name} loading="lazy" /></a> : <div className="catalog-image"><img src={offer.image} alt={offer.name} loading="lazy" /></div>}
      <div className="catalog-copy">
        <div className="catalog-title"><h3>{offer.name}</h3><span>{offer.price}</span></div>
        <p>{offer.description}</p>
        {offer.href ? <a className="text-link" href={offer.href} target="_blank" rel="noopener noreferrer">Details ansehen</a> : <span className="catalog-note">{offer.status ?? "In der AuraLumia Angebotswelt"}</span>}
      </div>
    </article>
  );
}
