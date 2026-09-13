import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/aura-lumia-logo-delicate.png" alt="AuraLumia" />
          <p>Vedische Astrologie, Körperwissen und intuitive Symbolarbeit – verbunden zu einer Sprache für das, was in dir längst spürbar ist.</p>
        </div>
        <div><p className="footer-label">ENTDECKEN</p><Link href="/somatic-karma">Somatic Karma</Link><Link href="/tarot">Tarot</Link><Link href="/angebote">Alle Angebote</Link><Link href="/mentoring">Mentoring</Link></div>
        <div><p className="footer-label">AURALUMIA</p><Link href="/ueber-jennifer">Über Jennifer Olivia</Link><Link href="/podcast">Podcast</Link><Link href="/musik">Musik · Naru Hikari</Link></div>
        <div><p className="footer-label">RECHTLICHES</p><a href="https://jenniferkindereit.wixsite.com/auralumia/impressum">Impressum</a><a href="https://jenniferkindereit.wixsite.com/auralumia/datenschutzerkl%C3%A4rung">Datenschutz</a><a href="https://jenniferkindereit.wixsite.com/auralumia/agbs">AGB</a></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 AuraLumia · Jennifer Olivia Kindereit</span><span>Spirituelle Reflexion und Coaching ersetzen keine medizinische, psychologische oder therapeutische Diagnose oder Behandlung.</span></div>
    </footer>
  );
}
