import Link from "next/link";
import { HomeWelcomeVideo } from "@/components/home-welcome-video";
import { links } from "@/lib/site-content";

const paths = [
  { no: "01", title: "Erkenne, was wirkt", text: "Der kostenfreie Navigator zeigt dir, welches Grundbedürfnis und welche karmische Narbe gerade im Vordergrund stehen.", href: links.navigator, external: true, linkLabel: "Navigator starten" },
  { no: "02", title: "Begleite dich selbst", text: "Wähle Audios, Frequenzräume oder den digitalen Tarot-Spiegel für eine sichere Praxis in deinem eigenen Tempo.", href: "/angebote", linkLabel: "Self-Practice entdecken" },
  { no: "03", title: "Lass dich persönlich führen", text: "Wenn du eine klare Maßanfertigung brauchst, führen dich der Bespoke Blueprint oder die Academy verbindlich weiter.", href: "/mentoring", linkLabel: "Begleitung entdecken" },
];

const benefits = [
  ["Grundbedürfnisse & vier Narben", "Punktgenauigkeit statt Rätselraten: Du erkennst, ob Sicherheit, Autonomie, Empfangen oder Gleichrangigkeit im Verborgenen nach Klärung ruft."],
  ["Somatic Karma Navigator", "Dein persönlicher Kompass: Du erhältst eine klare Landkarte deiner aktuellen Resonanz und weißt, wo dein nächster Schritt beginnen darf."],
  ["Astrologie & Tarot als Spiegel", "Verborgene Dynamiken werden verständlich, ohne dich festzulegen. Du kannst Zusammenhänge sehen und neue Entscheidungen verkörpern."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero shell">
        <div className="home-hero-copy">
          <p className="eyebrow">SOMATISCHE AHNENKLÄRUNG · AURALUMIA</p>
          <h1>Manche Muster beginnen nicht bei dir. Aber sie können bei dir enden.</h1>
          <p className="hero-lede">Spürst du Lasten, Zweifel oder Ängste, die sich nicht ganz nach deinen eigenen anfühlen? Erkenne die unsichtbaren Verstrickungen deiner Linie, verstehe deine tiefsten Grundbedürfnisse und schaffe Raum für dein eigenes Leben.</p>
          <div className="actions"><a className="button button-outline" href={links.navigator}>Jetzt dein Muster erkennen</a><Link className="text-link" href="/somatic-karma">Die Methode verstehen</Link></div>
        </div>
        <div className="home-hero-media"><HomeWelcomeVideo src={links.welcomeVideo} /></div>
      </section>

      <div className="discipline-strip" aria-label="Das AuraLumia Fundament"><span>TRAUMASENSITIV</span><i></i><span>SOMATISCH</span><i></i><span>AHNENBEWUSST</span><i></i><span>KLAR GEFÜHRT</span></div>

      <section className="home-relief shell">
        <p className="eyebrow">DU BIST NICHT FALSCH</p>
        <div><h2>Dein System wiederholt, was einmal Sicherheit versprochen hat.</h2><p>Wiederkehrende Beziehungsmuster, innere Unruhe oder das Gefühl, trotz allen Verstehens nicht wirklich frei zu sein, sind keine persönliche Unzulänglichkeit. Somatic Karma macht die darunterliegende Architektur sichtbar – sanft, präzise und ohne dich auf deine Geschichte zu reduzieren.</p></div>
      </section>

      <section className="statement shell">
        <p className="eyebrow">DEIN WEG DURCH AURALUMIA</p>
        <h2>Beginne klein. Gehe nur so tief, wie es für dich stimmig ist.</h2>
        <div className="path-grid">
          {paths.map(path => path.external ? <a className="path-card" href={path.href} key={path.no}><span>{path.no}</span><h3>{path.title}</h3><p>{path.text}</p><b>{path.linkLabel}</b></a> : <Link className="path-card" href={path.href} key={path.no}><span>{path.no}</span><h3>{path.title}</h3><p>{path.text}</p><b>{path.linkLabel}</b></Link>)}
        </div>
      </section>

      <section className="feature feature-somatic">
        <div className="shell feature-grid">
          <div className="feature-image"><picture><source media="(max-width: 760px)" srcSet="/hero-somatic-taupe-mobile.png" /><img src="/hero-somatic.jpg" alt="Somatic Karma – Körperwissen und Sternenarchitektur" /></picture></div>
          <div className="feature-copy"><p className="eyebrow">DIE SIGNATURE-METHODE</p><h2>Somatic Karma</h2><p>Vier karmische Narben verbinden dein heutiges Schutzsystem mit deinen Grundbedürfnissen und deiner Ahnenlinie. Körperwissen, vedische Astrologie und Tarot dienen dabei nicht als einzelne Angebote, sondern als ein gemeinsames Spiegelsystem.</p><Link className="button button-light" href="/somatic-karma">Die Methode entdecken</Link></div>
        </div>
      </section>

      <section className="benefit-section shell">
        <div className="section-heading"><div><p className="eyebrow">WAS DU DAVON HAST</p><h2>Verstehen wird zu Orientierung. Orientierung wird zu neuer Wahl.</h2></div></div>
        <div className="benefit-grid">{benefits.map(([title,text], index)=><article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="selected-offers shell">
        <div className="section-heading"><div><p className="eyebrow">DEINE NÄCHSTEN SCHRITTE</p><h2>Wähle nicht mehr. Lass dich führen.</h2></div><Link className="text-link" href="/angebote">Alle Self-Practice-Räume</Link></div>
        <div className="selected-grid">
          <a className="selected-card selected-card-wide selected-card-product" href={links.navigator}><img src="/products/produktbild-karma-navigator.png" alt="Somatic Karma Navigator" /><div><span>KOSTENFREI</span><h3>Navigator</h3><p>Erkenne deine primäre karmische Narbe und erhalte deinen persönlichen Themenpfad.</p></div></a>
          <Link className="selected-card selected-card-product" href="/angebote#starter-kits"><img src="/products/produktbild-audio-bundle.png" alt="Somatic Karma Starter-Kits" /><div><span>COMING SOON · JE 47 €</span><h3>Starter-Kits</h3><p>Drei gezielte Audios für die Narbe, die jetzt nach Entlastung ruft.</p></div></Link>
          <Link className="selected-card selected-card-product" href="/mentoring"><img src="/products/aura-luminess-premium.png" alt="Somatic Karma Begleitung und Ausbildung" /><div><span>1:1 · ACADEMY</span><h3>Begleitung</h3><p>Maßgeschneiderte Transformation und fundierte Ausbildung über drei oder neun Monde.</p></div></Link>
        </div>
      </section>

      <section className="mentoring-teaser"><div className="shell mentoring-teaser-grid"><div><p className="eyebrow">BESPOKE BLUEPRINT · SOMATIC KARMA ACADEMY</p><h2>Wenn du nicht noch mehr Wissen, sondern einen klaren Weg brauchst.</h2></div><div><p>Dein persönlicher Drei-Monde-Plan oder die neunmonatige Ausbildung verbinden Diagnostik, Integration und echte Verkörperung zu einem verbindlichen nächsten Schritt.</p><Link className="button button-light" href="/mentoring">Begleitung & Ausbildung</Link></div></div></section>

      <section className="founder shell">
        <div className="founder-copy"><p className="eyebrow">DIE GRÜNDERIN & DER RAUM</p><h2>Ich bin Jennifer Olivia. Ich übersetze zwischen Körper, Kosmos und Linie.</h2><p>Fundierte Struktur und intuitive Wahrnehmung gehören in meiner Arbeit zusammen. So entsteht ein Raum, in dem du dich verstanden fühlen und zugleich klar orientieren kannst.</p><Link className="text-link" href="/ueber-jennifer">Jennifer Olivia kennenlernen</Link></div>
        <div className="founder-image"><img src="/jennifer-olivia.jpg" alt="Jennifer Olivia Kindereit" /><blockquote>„Du bist nicht dein Muster. Du bist die, die es neu wählen kann.“</blockquote></div>
      </section>

      <section className="artistry-teaser"><div className="shell artistry-grid"><div><p className="eyebrow">KLANG & SEELE · NARU HIKARI</p><h2>Tauche ein in die Frequenz hinter der Arbeit.</h2><p>In Jennifer Olivias Musik berühren Stimme und Klang jene Schichten, für die Worte allein nicht ausreichen.</p><Link className="button button-light" href="/musik">Musik entdecken</Link></div><img src="/naru-hikari-album.png" alt="Naru Hikari – Rising of the Womb Album-Mockup" /></div></section>

      <section className="closing-cta shell"><p className="eyebrow">DEIN ERSTER SCHRITT</p><h2>Finde heraus, welches Muster dich gerade leitet.</h2><div className="actions"><a className="button button-outline" href={links.navigator}>Kostenfreien Navigator starten</a><Link className="text-link" href="/somatic-karma">Somatic Karma verstehen</Link></div></section>
    </>
  );
}
