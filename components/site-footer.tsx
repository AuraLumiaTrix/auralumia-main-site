import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/aura-lumia-kupferlogo-footer.png" alt="AuraLumia" />
          <p>Somatische Ahnenklärung, Körperwissen und symbolische Spiegel – verbunden zu einem präzisen Weg aus übernommenen Mustern.</p>
        </div>
        <div><p className="footer-label">DEIN WEG</p><Link href="/somatic-karma">Die Methode</Link><Link href="/angebote">Audiokurse & App</Link><Link href="/mentoring">Begleitung & Ausbildung</Link><a href="https://somatic-karma-navigator.vercel.app/" target="_blank" rel="noopener noreferrer">Navigator starten</a></div>
        <div><p className="footer-label">AURALUMIA</p><Link href="/ueber-jennifer">Über Jennifer Olivia</Link><Link href="/podcast">Podcast</Link><Link href="/musik">Musik · Naru Hikari</Link><Link href="/tarot">Tarot-Archiv</Link></div>
        <div><p className="footer-label">RECHTLICHES</p><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><Link href="/agb">AGB</Link></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 AuraLumia · Jennifer Olivia Kindereit</span><span>Spirituelle Reflexion und Coaching ersetzen keine medizinische, psychologische oder therapeutische Diagnose oder Behandlung.</span></div>
    </footer>
  );
}
