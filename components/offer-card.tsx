import type { Offer } from "@/lib/site-content";

export function OfferCard({ offer }: { offer: Offer }) {
  const href = offer.href ?? "https://auralumia.shop.copecart.com/";
  return (
    <article className="catalog-card">
      <a className="catalog-image" href={href} aria-label={`${offer.name} ansehen`}>
        <img src={offer.image} alt={offer.name} loading="lazy" />
      </a>
      <div className="catalog-copy">
        <div className="catalog-title"><h3>{offer.name}</h3><span>{offer.price}</span></div>
        <p>{offer.description}</p>
        <a className="text-link" href={href}>Details ansehen <span>↗</span></a>
      </div>
    </article>
  );
}
