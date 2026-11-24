"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["Angebote", "/angebote"],
  ["Begleitung & Ausbildung", "/mentoring"],
  ["Über mich", "/ueber-jennifer"],
  ["Methode", "/somatic-karma"],
  ["Podcast", "/podcast"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnOutsideClick(event: MouseEvent) {
      const mobileNav = mobileNavRef.current;
      if (mobileNav && event.target instanceof Node && !mobileNav.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", closeOnOutsideClick, true);
    return () => document.removeEventListener("click", closeOnOutsideClick, true);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AuraLumia Startseite">
        <img src="/aura-lumia-logo.png" alt="" />
        <span>AURA ✱ LUMIA</span>
      </Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {nav.map(([label, href]) => (
          <Link className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} key={href} href={href}>{label}</Link>
        ))}
      </nav>
      <a className="header-cta" href="https://somatic-karma-navigator.vercel.app/" target="_blank" rel="noopener noreferrer">Navigator starten</a>
      <div ref={mobileNavRef} className={`mobile-nav${menuOpen ? " is-open" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(open => !open)}>
          <span></span><span></span><span></span>
        </button>
        <nav id="mobile-menu" aria-label="Mobile Navigation" hidden={!menuOpen}>
          {nav.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)} key={href} href={href}>{label}</Link>
          ))}
          <a onClick={() => setMenuOpen(false)} href="https://somatic-karma-navigator.vercel.app/" target="_blank" rel="noopener noreferrer">Navigator starten</a>
        </nav>
      </div>
    </header>
  );
}
