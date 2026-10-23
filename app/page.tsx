import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site-content";

const wounds = [
  { symbol: "/somatic-karma/symbol-schuldnarbe.png", title: "Schuldnarbe", text: "Wenn du dich schuldig fühlst, sobald du empfängst oder es dir leicht machst." },
  { symbol: "/somatic-karma/symbol-geschwisternarbe.png", title: "Geschwisternarbe", text: "Wenn Vergleich und Konkurrenz dich davon abhalten, deinen Platz einzunehmen." },
  { symbol: "/somatic-karma/symbol-mutternarbe.png", title: "Mutternarbe", text: "Wenn du emotional viel trägst und deine eigenen Bedürfnisse aus dem Blick geraten." },
  { symbol: "/somatic-karma/symbol-vaternarbe.png", title: "Vaternarbe", text: "Wenn Anerkennung im Außen wichtiger wird als deine eigene innere Führung." },
];

const journey = [
  { no: "01", label: "Kostenfrei", title: "Kostenloser Navigator", text: "Erkenne, welche der vier karmischen Narben gerade am stärksten wirkt.", href: links.navigator, external: true, image: "/products/produktbild-karma-navigator.png", action: "Navigator starten" },
  { no: "02", label: "Ab 49 €", title: "Selbstlernangebote", text: "Wähle Audios, App oder Vertiefungen passend zu deinem eigenen Rhythmus.", href: "/angebote", image: "/products/produktbild-audio-bundle.png", action: "Angebote ansehen" },
  { no: "03", label: "890 €", title: "Drei Monde Blueprint", text: "Erhalte einen persönlichen 12-Wochen-Weg mit Analyse und Integrationsplan.", href: "/mentoring#blueprint", image: "/products/high-touch-3-month-blueprint.png", action: "Blueprint entdecken" },
  { no: "04", label: "Ausbildung & High Touch", title: "Aura Luminess", text: "Vertiefe deine Arbeit im Circle Programm oder in persönlicher Begleitung.", href: "/mentoring#circle-programm", image: "/products/aura-luminess-premium.png", action: "Wege vergleichen" },
];

const testimonials = [
  { quote: "Ich bin so begeistert von der App. Sie ist intuitiv, wunderschön gestaltet und lässt sich ganz einfach in meinen Tagesablauf integrieren.", name: "Marie-Lena B.", context: "Somatic Karma Tarot App", image: "/testimonial-marie-lena-b.png" },
  { quote: "Ich war auf der Suche nach Unterstützung, Halt und einem sicheren Raum. Genau das habe ich bei Jennifer Olivia gefunden.", name: "Elena M.", context: "Persönliche Begleitung", image: "/testimonial-elena-m-avatar.jpg" },
  { quote: "Diese persönliche Meditation ist für mich eines der schönsten Geschenke, die ich je bekommen habe. Sie gibt mir Kraft und innere Ruhe.", name: "Elena M.", context: "Individuelle Ankermeditation", image: "/testimonial-elena-m-avatar.jpg" },
];

export default function Home() {
  return (
    <div className="landing-home">
      <section className="landing-hero">
        <div className="landing-hero-inner shell">
          <div className="landing-hero-copy">
            <p className="landing-kicker">SOMATIC KARMA · ASTROLOGIE · TAROT · KÖRPERWISSEN</p>
            <h1>Erkenne deine Muster.<br />Entdecke deine Bedürfnisse.<br />Gehe deinen Weg.</h1>
            <p className="landing-lede">Somatic Karma verbindet Körperwissen, Ahnenarbeit, vedische Astrologie und Tarot zu einer sanften Methode für mehr Selbstkenntnis, Klarheit und innere Freiheit.</p>
            <div className="landing-actions">
              <a className="landing-button landing-button-primary" href={links.navigator} target="_blank" rel="noopener noreferrer">Kostenlosen Navigator starten <span aria-hidden="true">→</span></a>
              <Link className="landing-button landing-button-secondary" href="/mentoring#circle-programm">Zur Ausbildung</Link>
            </div>
            <div className="landing-promises" aria-label="Was dich bei AuraLumia erwartet">
              <span><i aria-hidden="true">✧</i>Tiefere Selbsterkenntnis</span>
              <span><i aria-hidden="true">☾</i>Bewusste neue Entscheidungen</span>
              <span><i aria-hidden="true">✦</i>Ein Weg in Authentizität</span>
            </div>
          </div>
          <div className="landing-hero-visual" aria-hidden="true">
            <span className="landing-orbit landing-orbit-one"></span>
            <span className="landing-orbit landing-orbit-two"></span>
            <Image src="/hero-womens-circle.jpg" alt="" width={1024} height={1536} priority sizes="(max-width: 760px) 92vw, 46vw" />
            <p>Deine Seele kennt<br />den Weg <span>♡</span></p>
          </div>
        </div>
      </section>

      <section className="wounds-section" aria-labelledby="somatic-karma-title">
        <div className="shell">
          <div className="landing-section-heading landing-section-heading-centered">
            <p className="landing-kicker">SOMATIC KARMA</p>
            <h2 id="somatic-karma-title">Was ist Somatic Karma?</h2>
            <p>Vier karmische Narben prägen unbewusst, wie wir Sicherheit, Zugehörigkeit, Empfangen und Selbstbestimmung erleben. Wenn du sie erkennst, kannst du deinen Bedürfnissen mit neuer Klarheit begegnen.</p>
          </div>
          <div className="wounds-grid">
            {wounds.map((wound) => <article key={wound.title}><Image className="wound-symbol-image" src={wound.symbol} alt="" width={1122} height={1402} sizes="130px" /><h3>{wound.title}</h3><p>{wound.text}</p></article>)}
          </div>
          <Link className="landing-text-link" href="/somatic-karma">Die Methode kennenlernen <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="shell">
          <div className="landing-section-heading landing-section-heading-centered">
            <p className="landing-kicker">DEINE MÖGLICHKEITEN</p>
            <h2 id="journey-title">Dein Weg mit AuraLumia</h2>
            <p>Du musst keinem festen Ablauf folgen. Wähle den Raum, der zu deinem heutigen Bedürfnis und deiner gewünschten Tiefe passt.</p>
          </div>
          <div className="journey-grid">
            {journey.map((item) => {
              const content = <><span className="journey-number">{item.no}</span><div className="journey-image"><Image src={item.image} alt="" fill sizes="(max-width: 760px) 88vw, 24vw" /></div><p className="journey-label">{item.label}</p><h3>{item.title}</h3><p className="journey-copy">{item.text}</p><b>{item.action} <span aria-hidden="true">→</span></b></>;
              return item.external ? <a className="journey-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.no}>{content}</a> : <Link className="journey-card" href={item.href} key={item.no}>{content}</Link>;
            })}
          </div>
        </div>
      </section>

      <section className="podcast-home" aria-labelledby="podcast-home-title">
        <div className="podcast-home-inner shell">
          <div className="podcast-home-copy">
            <p className="landing-kicker">PODCAST</p>
            <h2 id="podcast-home-title">Karma mit Zimt und Zucker</h2>
            <p>Persönliche Gespräche über Spiritualität, Selbstliebe und die süßen wie herausfordernden Seiten des Lebens.</p>
            <div className="landing-actions"><a className="landing-button landing-button-primary" href={links.podcast} target="_blank" rel="noopener noreferrer">Jetzt reinhören <span aria-hidden="true">▶</span></a><Link className="landing-text-link" href="/podcast">Zur Podcast-Seite</Link></div>
          </div>
          <Link className="podcast-home-art" href="/podcast" aria-label="Podcast-Seite öffnen"><Image src="/podcast-auralumia.png" alt="Karma mit Zimt und Zucker – Podcast von AuraLumia" fill sizes="(max-width: 760px) 100vw, 47vw" /></Link>
        </div>
      </section>

      <section className="about-home" aria-labelledby="about-home-title">
        <div className="about-home-inner shell">
          <div className="about-home-portrait"><Image src="/about/jennifer-olivia-portrait-home.jpg" alt="Jennifer Olivia Kindereit, Gründerin von AuraLumia" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div className="about-home-copy"><p className="landing-kicker">ÜBER MICH</p><h2 id="about-home-title">Hallo, ich bin Jennifer.</h2><p>Ich habe AuraLumia gegründet, um Frauen auf ihrem Weg zu mehr Selbstkenntnis und authentischer Selbstentfaltung zu begleiten. Somatic Karma ist aus meiner eigenen Erfahrung und aus der tiefen Verbindung von Körperwissen, Ahnenlinie und spiritueller Symbolarbeit entstanden.</p><ul><li>Entwicklerin von Somatic Karma</li><li>Mentorin für Körperwissen & Ahnenarbeit</li><li>Tarot- und Astrologie-Expertin</li><li>Host von „Karma mit Zimt und Zucker“</li></ul><Link className="landing-button landing-button-primary" href="/ueber-jennifer">Mehr über mich <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="voices-home" aria-labelledby="voices-home-title">
        <div className="shell">
          <div className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">STIMMEN AUS DER COMMUNITY</p><h2 id="voices-home-title">Das sagen unsere Kundinnen</h2></div>
          <div className="voices-grid">
            {testimonials.map((testimonial, index) => <article key={`${testimonial.name}-${testimonial.context}`}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{testimonial.quote}</blockquote><div className="voice-person"><Image src={testimonial.image} alt={testimonial.name} width={56} height={56} /><p><strong>{testimonial.name}</strong><span>{testimonial.context}</span></p></div><div className="voice-stars" aria-label="5 von 5 Sternen">★★★★★</div><span className="voice-index">0{index + 1}</span></article>)}
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="home-final-cta-bg" aria-hidden="true"><Image src="/hero-somatic-dark-mobile.png" alt="" fill sizes="100vw" /></div>
        <div className="shell home-final-cta-copy"><p className="landing-kicker">DEIN NÄCHSTER SCHRITT</p><h2>Bereit für deinen nächsten Schritt?</h2><p>Deine Seele kennt den Weg. Starte jetzt deinen kostenlosen Navigator und entdecke, welches Thema dich gerade ruft.</p><a className="landing-button landing-button-light" href={links.navigator} target="_blank" rel="noopener noreferrer">Kostenlosen Navigator starten <span aria-hidden="true">→</span></a></div>
      </section>
    </div>
  );
}
