import { ArrowDown, ArrowUpRight, AudioLines, Compass, Menu, MoonStar, Orbit, Sparkles } from "lucide-react";

const links = {
  navigator: "https://somatic-karma-navigator.vercel.app/",
  transit: "https://somatic-karma-transit.vercel.app/",
  tarot: "https://somatic-karma-tarot.vercel.app/",
  audio: "https://somatic-karma-navigator.vercel.app/audio-bundle/",
  code: "https://somatic-karma-navigator.vercel.app/somatic-karma-code/",
  shop: "https://auralumia.shop.copecart.com/",
};

const appCards = [
  { number: "01", kicker: "Dein Anfang", title: "Archetype Navigator", text: "Finde heraus, welcher Somatic Karma Archetyp deine innere Schutzarchitektur prägt – und welche Narbe darunter gesehen werden möchte.", link: links.navigator, cta: "Archetypen bestimmen", image: "/hero-somatic.jpg", imageAlt: "Feine Illustration einer meditierenden Frau im Sternenkreis", className: "app-card app-card--navigator" },
  { number: "02", kicker: "Dein Jetzt", title: "Transit Orakel", text: "Lies die Berührungspunkte zwischen deinem Geburtsbild und dem gegenwärtigen Himmel – als Einladung zum Nachspüren, nicht als starre Vorhersage.", link: links.transit, cta: "Transite befragen", image: "/transit-orakel.webp", imageAlt: "Kosmische Mondsphären mit goldenen Umlaufbahnen", className: "app-card app-card--transit" },
  { number: "03", kicker: "Dein Spiegel", title: "Somatic Karma Tarot", text: "78 archetypische Spiegel verbinden klassische Tarot-Weisheit mit Licht, Schatten und deiner Somatic-Karma-Narbenarchitektur.", link: links.tarot, cta: "Tarot entdecken", image: "/tarot.webp", imageAlt: "Aura Lumia Somatic Karma Tarot – das Archiv der 78 Spiegel", className: "app-card app-card--tarot" },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.6} /></a>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aura Lumia – zurück nach oben"><img src="/aura-lumia-logo.png" alt="" /><span>AURA<em>✦</em>LUMIA</span></a>
        <nav className="desktop-nav" aria-label="Hauptnavigation"><a href="#methode">Methode</a><a href="#apps">Apps</a><a href="#angebote">Angebote</a><a href="#podcast">Podcast</a><a href="#jennifer">Jennifer</a></nav>
        <ExternalLink href={links.navigator} className="header-cta">Navigator starten</ExternalLink>
        <details className="mobile-nav"><summary aria-label="Menü öffnen"><Menu aria-hidden="true" size={22} /></summary><nav aria-label="Mobile Navigation"><a href="#methode">Methode</a><a href="#apps">Apps</a><a href="#angebote">Angebote</a><a href="#podcast">Podcast</a><a href="#jennifer">Jennifer</a><ExternalLink href={links.navigator}>Navigator starten</ExternalLink></nav></details>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SOMATIC KARMA · BY JENNIFER KINDEREIT</p>
          <h1 id="hero-title">Dein Körper erinnert sich.<br /><em>Deine Sterne zeigen, warum.</em></h1>
          <p className="hero-lede">AuraLumia verbindet vedische Astrologie, archetypische Körperweisheit und intuitive Symbolarbeit zu einer neuen Sprache für das, was in dir längst spürbar ist.</p>
          <div className="hero-actions"><ExternalLink href={links.navigator} className="button button--primary">Meinen Archetypen finden</ExternalLink><a className="text-link" href="#apps">Das Universum entdecken <ArrowDown aria-hidden="true" size={16} /></a></div>
          <p className="hero-note">Kostenlos · intuitiv · in wenigen Minuten</p>
        </div>
        <div className="hero-art" aria-label="Somatic Karma Illustration"><div className="orbit orbit--one" /><div className="orbit orbit--two" /><img src="/hero-somatic.jpg" alt="Meditierende Frau in einem feinen kosmischen Sternenkreis" /><div className="hero-seal"><Sparkles aria-hidden="true" size={18} /><span>Wissen, das<br />im Körper landet</span></div></div>
      </section>

      <div className="signal-strip" aria-label="AuraLumia Themen"><span>ASTROLOGIE</span><i>✦</i><span>ARCHETYPEN</span><i>✦</i><span>KÖRPERWISSEN</span><i>✦</i><span>INTUITION</span></div>

      <section className="method section-shell" id="methode" aria-labelledby="method-title">
        <div className="section-intro"><p className="eyebrow"><span /> DIE SOMATIC KARMA METHODE</p><h2 id="method-title">Nicht noch mehr über dich wissen.<br /><em>Dich tiefer verstehen.</em></h2></div>
        <div className="method-grid">
          <div className="method-statement"><p>Manche Muster beginnen nicht im Kopf. Sie zeigen sich in Beziehungen, Entscheidungen, im Körper – und in dem Gefühl, immer wieder an derselben unsichtbaren Schwelle zu stehen.</p><p>Somatic Karma macht diese Architektur lesbar. Präzise genug, um dich zu erkennen. Sanft genug, damit Erkenntnis nicht zur nächsten Forderung an dich wird.</p></div>
          <div className="archetype-list" aria-label="Die vier Somatic Karma Archetypen"><div><span>01</span><p><b>Resonanztyp</b><small>Mutternarbe</small></p></div><div><span>02</span><p><b>Rebell-Typ</b><small>Vaternarbe</small></p></div><div><span>03</span><p><b>Einzelkämpfer-Typ</b><small>Schwesternarbe</small></p></div><div><span>04</span><p><b>Schuldtyp</b><small>Schuldnarbe</small></p></div></div>
        </div>
      </section>

      <section className="apps-section" id="apps" aria-labelledby="apps-title"><div className="section-shell">
        <div className="section-intro section-intro--split"><div><p className="eyebrow"><span /> DEINE DIGITALEN RITUALRÄUME</p><h2 id="apps-title">Drei Zugänge.<br /><em>Eine innere Landkarte.</em></h2></div><p>Beginne dort, wo du gerade stehst. Jeder Raum ist eigenständig – und zugleich Teil eines Systems, das deine Geschichte aus mehreren Blickwinkeln sichtbar macht.</p></div>
        <div className="apps-grid">{appCards.map((app) => <article className={app.className} key={app.title}><div className="app-image"><img src={app.image} alt={app.imageAlt} /></div><div className="app-copy"><div className="card-meta"><span>{app.number}</span><p>{app.kicker}</p></div><h3>{app.title}</h3><p>{app.text}</p><ExternalLink href={app.link} className="card-link">{app.cta}</ExternalLink></div></article>)}</div>
      </div></section>

      <section className="offers section-shell" id="angebote" aria-labelledby="offers-title">
        <div className="section-intro section-intro--split"><div><p className="eyebrow"><span /> DEINE VERTIEFUNG</p><h2 id="offers-title">Erkenntnis darf<br /><em>Erfahrung werden.</em></h2></div><p>Wenn du deinen Archetypen kennst, beginnt die eigentliche Reise: hören, nachspüren, neu einordnen – in deinem Tempo und auf deiner Ebene.</p></div>
        <div className="offers-grid">
          <article className="offer-card"><div className="offer-image"><img src="/audio-bundle.webp" alt="Somatic Karma Audio Bundle mit Kopfhörern" /></div><div className="offer-content"><p className="offer-type"><AudioLines aria-hidden="true" size={18} /> DER SANFTE EINSTIEG</p><h3>Somatic Karma<br />Audio Bundle</h3><p>Drei aufeinander abgestimmte Audios – Meditation, Affirmation und Transformationsritual – passend zu deinem Hauptarchetypen.</p><div className="offer-bottom"><span>47 €</span><ExternalLink href={links.audio} className="button button--soft">Bundle ansehen</ExternalLink></div></div></article>
          <article className="offer-card offer-card--signature"><div className="offer-image"><img src="/karma-code.webp" alt="Somatic Karma Code – persönliche astrologische Audioanalyse" /></div><div className="offer-content"><p className="offer-type"><Orbit aria-hidden="true" size={18} /> DEINE PERSÖNLICHE SIGNATUR</p><h3>Somatic Karma<br />Code</h3><p>Dein Geburtshoroskop und dein Archetyp werden zu einer individuellen Audioanalyse – als Essential Audio oder persönlich eingesprochene Signature Podcast Edition.</p><div className="price-pills"><span>Essential · 97 €</span><span>Signature · 333 €</span></div><ExternalLink href={links.code} className="button button--primary">Code entdecken</ExternalLink></div></article>
        </div>
        <div className="shop-line"><span>Astrologische Analysen · Tarot · Meditationen · Begleitung</span><ExternalLink href={links.shop} className="text-link">Alle Angebote im Shop</ExternalLink></div>
      </section>

      <section className="podcast" id="podcast" aria-labelledby="podcast-title"><div className="section-shell podcast-inner"><div className="podcast-art"><div className="podcast-glow" /><img src="/podcast-placeholder.webp" alt="Vorläufiges Podcast-Motiv auf einem Smartphone" /><span>Neues Cover folgt</span></div><div className="podcast-copy"><p className="eyebrow"><span /> DER PODCAST</p><h2 id="podcast-title">Karma mit<br /><em>Zimt &amp; Zucker</em></h2><p>Spirituelles Wissen, das nicht über dir schwebt, sondern mit dir am Küchentisch sitzt. Für die süßen Erkenntnisse, die würzigen Wahrheiten – und alles, was dazwischen im Körper nachklingt.</p><p className="coming-soon"><MoonStar aria-hidden="true" size={18} /> Neuer Auftritt in Vorbereitung</p></div></div></section>

      <section className="about section-shell" id="jennifer" aria-labelledby="about-title"><div className="about-image"><img src="/jennifer.webp" alt="Jennifer Olivia Kindereit" /></div><div className="about-copy"><p className="eyebrow"><span /> DIE FRAU HINTER AURALUMIA</p><h2 id="about-title">Ich bin Jennifer.<br /><em>Ich übersetze zwischen den Welten.</em></h2><p>Zwischen Sternenwissen und Körpergedächtnis. Zwischen dem, was du längst ahnst, und dem, was endlich Worte bekommen darf.</p><p>In AuraLumia verbinde ich präzise astrologische Analyse, intuitive Bildsprache und körperorientierte Reflexion. Nicht, um dir zu sagen, wer du sein sollst – sondern damit du dich selbst klarer hören kannst.</p><ExternalLink href={links.navigator} className="button button--outline"><Compass aria-hidden="true" size={17} /> Meine Reise beginnen</ExternalLink></div></section>

      <section className="closing section-shell"><Sparkles aria-hidden="true" size={26} strokeWidth={1.3} /><p>Du musst nicht erst jemand anderes werden,<br /><em>um bei dir anzukommen.</em></p><ExternalLink href={links.navigator} className="button button--primary">Archetype Navigator öffnen</ExternalLink></section>

      <footer><div className="footer-main section-shell"><div className="footer-brand"><img src="/aura-lumia-logo.png" alt="Aura Lumia" /><p>Astrologie · Archetypen · Körperweisheit</p></div><div><p className="footer-label">Entdecken</p><a href="#methode">Methode</a><a href="#apps">Apps</a><a href="#angebote">Angebote</a><a href="#podcast">Podcast</a></div><div><p className="footer-label">Räume</p><a href={links.navigator} target="_blank" rel="noreferrer">Navigator</a><a href={links.transit} target="_blank" rel="noreferrer">Transit Orakel</a><a href={links.tarot} target="_blank" rel="noreferrer">Somatic Karma Tarot</a><a href={links.shop} target="_blank" rel="noreferrer">Shop</a></div><div><p className="footer-label">Rechtliches</p><a href="https://jenniferkindereit.wixsite.com/auralumia/impressum" target="_blank" rel="noreferrer">Impressum</a><a href="https://jenniferkindereit.wixsite.com/auralumia/datenschutzerkl%C3%A4rung" target="_blank" rel="noreferrer">Datenschutz</a><a href="https://jenniferkindereit.wixsite.com/auralumia/agbs" target="_blank" rel="noreferrer">AGB</a></div></div><div className="footer-bottom section-shell"><p>© 2026 AuraLumia · Jennifer Olivia Kindereit</p><p>Spirituelle Reflexion und Coaching ersetzen keine medizinische, psychologische oder therapeutische Diagnose oder Behandlung.</p></div></footer>
    </main>
  );
}
