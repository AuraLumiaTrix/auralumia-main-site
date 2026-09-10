"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["Startseite", "/"],
  ["Somatic Karma", "/somatic-karma"],
  ["Angebote", "/angebote"],
  ["Mentoring", "/mentoring"],
  ["Über mich", "/ueber-jennifer"],
  ["Podcast", "/podcast"],
  ["Musik", "/musik"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AuraLumia Startseite">
        <img src="/aura-lumia-logo.png" alt="" />
        <span>AURA ✦ LUMIA</span>
      </Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {nav.filter(([, href]) => href !== "/").map(([label, href]) => (
          <Link className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} key={href} href={href}>{label}</Link>
        ))}
      </nav>
      <a className="header-cta" href="https://somatic-karma-navigator.vercel.app/">Navigator starten</a>
      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(open => !open)}>
          <span></span><span></span><span></span>
        </button>
        <nav id="mobile-menu" aria-label="Mobile Navigation" hidden={!menuOpen}>
          {nav.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)} key={href} href={href}>{label}</Link>
          ))}
          <a onClick={() => setMenuOpen(false)} href="https://somatic-karma-navigator.vercel.app/">Navigator starten</a>
        </nav>
      </div>
    </header>
  );
}
