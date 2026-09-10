import Link from "next/link";
import { links } from "@/lib/site-content";

const paths = [
  { no: "01", title: "Muster erkennen", text: "Entdecke mit Somatic Karma, was unter deinen wiederkehrenden Erfahrungen wirkt.", href: "/somatic-karma" },
  { no: "02", title: "Eine Frage klären", text: "Wähle einen astrologischen, intuitiven oder körperorientierten Impuls für dein aktuelles Thema.", href: "/angebote" },
  { no: "03", title: "Eine Schwelle gehen", text: "Lass dich in einer intensiven Begleitung durch eine persönliche oder berufliche Wandlung führen.", href: "/mentoring" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero shell">
        <div className="home-hero-copy">
          <p className="eyebrow">AURALUMIA · BY JENNIFER KINDEREIT</p>
          <h1>Was du längst spürst, darf endlich <em>lesbar</em> werden.</h1>
          <p className="hero-lede">Ich verbinde vedische Astrologie, Körperwissen, Ahnenarbeit und Tarot zu einer präzisen Sprache für deine Muster, Übergänge und nächsten Entscheidungen.</p>
          <div className="actions"><Link className="button button-outline" href="/angebote">Deinen Einstieg finden</Link><Link className="text-link" href="/ueber-jennifer">Jennifer kennenlernen</Link></div>
        </div>
        <div className="home-hero-media">
          <video autoPlay muted loop playsInline preload="metadata" poster="/jennifer.webp" aria-label="Jennifer Kindereit – Video-Porträt">
            <source src={links.welcomeVideo} type="video/mp4" />
          </video>
          <p><span>Astrologie, die nicht über dir schwebt.</span><strong>Sondern in deinem Leben landet.</strong></p>
        </div>
      </section>

      <div className="discipline-strip" aria-label="AuraLumia Disziplinen"><span>VEDISCHE ASTROLOGIE</span><i></i><span>SOMATIC KARMA</span><i></i><span>TAROT</span><i></i><span>AHNENARBEIT</span></div>

      <section className="statement shell">
        <p className="eyebrow">DEIN WEG DURCH AURALUMIA</p>
        <h2>Nicht jedes Thema braucht dieselbe Tiefe. Aber jedes braucht den richtigen Raum.</h2>
        <div className="path-grid">
          {paths.map(path => <Link className="path-card" href={path.href} key={path.no}><span>{path.no}</span><h3>{path.title}</h3><p>{path.text}</p><b>Raum entdecken</b></Link>)}
        </div>
      </section>

      <section className="feature feature-somatic">
        <div className="shell feature-grid">
          <div className="feature-image"><img src="/hero-somatic.jpg" alt="Somatic Karma – Körperwissen und Sternenarchitektur" /></div>
          <div className="feature-copy"><p className="eyebrow">DIE SIGNATURE-METHODE</p><h2>Somatic Karma</h2><p>Vier Archetypen machen sichtbar, wie frühe Bindungs- und Beziehungserfahrungen in deinem heutigen Schutzsystem weiterwirken. Dein vedisches Chart gibt ihnen eine präzise Sprache.</p><Link className="button button-light" href="/somatic-karma">Die Methode entdecken</Link></div>
        </div>
      </section>

      <section className="selected-offers shell">
        <div className="section-heading"><div><p className="eyebrow">AUSGEWÄHLTE RÄUME</p><h2>Beginne dort, wo es dich ruft.</h2></div><Link className="text-link" href="/angebote">Alle Angebote ansehen</Link></div>
        <div className="selected-grid">
          <Link className="selected-card selected-card-wide" href="/somatic-karma"><img src="/audio-bundle.webp" alt="Somatic Karma Audio Bundle" /><div><span>AB 27 €</span><h3>Somatic Karma</h3><p>Navigator, Tarot, Audio Bundle und persönliche Analysen.</p></div></Link>
          <Link className="selected-card" href="/angebote#kinderwunsch"><img src="https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539289/file88997dd0d3807f35372244f0d4d5f921.png" alt="Kinderwunsch Sternenanalyse" /><div><span>AB 101,01 €</span><h3>Kinderwunsch & weibliche Linie</h3><p>Sternenwissen und Schoßraumarbeit für deinen persönlichen Weg.</p></div></Link>
          <Link className="selected-card" href="/angebote#berufung"><img src="https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539725/file3c941e3abddbd48d7f90621c404e27a4.png" alt="Berufungs-Sternenanalyse" /><div><span>AB 101,01 €</span><h3>Berufung</h3><p>Astrologische Klarheit für die Richtung, die wirklich deine ist.</p></div></Link>
        </div>
      </section>

      <section className="mentoring-teaser">
        <div className="shell mentoring-teaser-grid"><div><p className="eyebrow">AURA LUMINESS · MENTORING</p><h2>Manche Schwellen wollen nicht nur verstanden, sondern begleitet werden.</h2></div><div><p>Für Frauen, die bereit sind, ihr inneres Wissen in gelebte Veränderung zu übersetzen – in einer intensiven Gruppe oder exklusiv 1:1.</p><Link className="button button-light" href="/mentoring">Mentoring entdecken</Link></div></div>
      </section>

      <section className="founder shell">
        <div className="founder-copy"><p className="eyebrow">DIE FRAU HINTER AURALUMIA</p><h2>Ich bin Jennifer. Ich übersetze zwischen den Welten.</h2><p>Zwischen Sternenwissen und Körpergedächtnis. Zwischen dem, was du längst ahnst, und dem, was endlich Worte bekommen darf.</p><Link className="text-link" href="/ueber-jennifer">Meine Arbeit kennenlernen</Link></div>
        <div className="founder-image"><img src="/jennifer.webp" alt="Jennifer Olivia Kindereit" /><blockquote>„Heilung beginnt, wenn du dich erinnerst, wer du bist.“</blockquote></div>
      </section>

      <section className="artistry-teaser"><div className="shell artistry-grid"><div><p className="eyebrow">NARU HIKARI · MUSIC</p><h2>Manche Erinnerungen brauchen keine Erklärung. Sie brauchen Klang.</h2><p>Als Naru Hikari übersetzt Jennifer weibliche Ahnenlinie, Verkörperung und innere Freiheit in Musik.</p><Link className="button button-light" href="/musik">Musik entdecken</Link></div><img src="/naru-hikari-album.png" alt="Naru Hikari – Rising of the Womb Album-Mockup" /></div></section>

      <section className="closing-cta shell"><p className="eyebrow">DEIN ERSTER SCHRITT</p><h2>Du musst nicht erst jemand anderes werden, um bei dir anzukommen.</h2><div className="actions"><a className="button button-outline" href={links.navigator}>Archetype Navigator starten</a><Link className="text-link" href="/angebote">Alle Wege ansehen</Link></div></section>
    </>
  );
}
