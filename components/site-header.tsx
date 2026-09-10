import Link from "next/link";

const nav = [
  ["Somatic Karma", "/somatic-karma"],
  ["Angebote", "/angebote"],
  ["Mentoring", "/mentoring"],
  ["Jennifer", "/ueber-jennifer"],
  ["Podcast", "/podcast"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AuraLumia Startseite">
        <img src="/aura-lumia-logo.png" alt="" />
        <span>AURA ✦ LUMIA</span>
      </Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="header-cta" href="https://somatic-karma-navigator.vercel.app/">Navigator starten ↗</a>
      <details className="mobile-nav">
        <summary aria-label="Menü öffnen"><span></span><span></span></summary>
        <nav aria-label="Mobile Navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}<span>↗</span></Link>)}
          <a href="https://somatic-karma-navigator.vercel.app/">Navigator starten <span>↗</span></a>
        </nav>
      </details>
    </header>
  );
}
