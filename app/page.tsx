import Image from "next/image";
import Link from "next/link";
import { WoundExplorer } from "@/components/wound-explorer";
import { links } from "@/lib/site-content";

const journey = [
  { no: "01", title: "Kostenloser Navigator", text: "Erkenne, welche der vier karmischen Narben gerade am stärksten wirkt.", href: links.navigator, external: true, image: "/products/somatic-karma-navigator-premium-flatlay.png", action: "Navigator starten" },
  { no: "02", title: "Erfüllungspakete", text: "Wähle Audios, App oder Vertiefungen passend zu deinem eigenen Rhythmus.", href: "/angebote", image: "/products/product-lilith-sinnlichkeit.jpg", action: "Angebote ansehen" },
  { no: "03", title: "Dein Weg in die Tiefe", text: "Erhalte einen persönlichen 12-Wochen-Weg mit Analyse und Integrationsplan.", href: "/mentoring#blueprint", image: "/products/product-drei-monde-blueprint.jpg", action: "Blueprint entdecken" },
  { no: "04", title: "Ausbildung & Mentoring", text: "Vertiefe deine Arbeit im Circle Programm oder in persönlicher Begleitung.", href: "/mentoring#circle-programm", image: "/products/product-aura-luminess.jpg", action: "Wege vergleichen" },
];

const testimonials = [
  { quote: "Ich bin so begeistert von der App. Sie ist intuitiv, wunderschön gestaltet und lässt sich ganz einfach in meinen Tagesablauf integrieren.", name: "Marie-Lena B.", context: "Somatic Karma Tarot App", image: "/testimonial-marie-lena-b.png" },
  { quote: "Ich war auf der Suche nach Unterstützung, Halt und einem sicheren Raum. Genau das habe ich bei Jennifer Olivia gefunden.", name: "Elena M.", context: "Persönliche Begleitung", image: "/testimonial-elena-m-avatar.jpg" },
  { quote: "Diese persönliche Meditation ist für mich eines der schönsten Geschenke, die ich je bekommen habe. Sie gibt mir Kraft und innere Ruhe.", name: "Elena M.", context: "Individuelle Ankermeditation", image: "/testimonial-elena-m-avatar.jpg" },
];

export default function Home() {
  return (
    <div className="landing-home">
      <section className="about-home about-home-hero" aria-labelledby="about-home-title">
        <div className="about-home-inner shell">
          <div className="about-home-portrait"><Image src="/about/jennifer-olivia-portrait-ivory.jpg" alt="Jennifer Olivia Kindereit, Gründerin von AuraLumia" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div className="about-home-copy">
            <h1 id="about-home-title">Hallo, ich bin <span className="about-home-name">Jennifer Olivia.</span></h1>
            <div className="about-home-text-card">
              <p className="about-home-belief">Ich glaube zutiefst daran, dass jeder Mensch heil und ganz wird, wenn er sich selbst findet.</p>
              <p>Willkommen im geschützten Raum von AuraLumia, einem Ort für dich, für deine Seele, dein Wachstum, deine Transformation. Dein Ort um dich selbst zu finden. Mit AuraLumia möchte ich dir liebevoll meine Hand reichen, damit du deinen Weg nicht allein gehen musst.</p>
              <p>Ich habe AuraLumia gegründet, um Frauen auf ihrem Weg zu mehr Selbstkenntnis und authentischer Selbstentfaltung zu begleiten. Somatic Karma ist aus meiner eigenen Erfahrung und aus der tiefen Verbindung von Körperwissen, Ahnenlinie und spiritueller Symbolarbeit entstanden.</p>
              <ul><li>Entwicklerin von Somatic Karma</li><li>Mentorin für Körperwissen & Ahnenarbeit</li><li>Tarot- und Astrologie-Expertin</li><li>Host von „Karma mit Zimt und Zucker“</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="shell">
          <div className="landing-section-heading landing-section-heading-centered">
            <p className="landing-kicker">MEINE ANGEBOTE</p>
            <h2 id="journey-title">Folge mir in die Welt von AuraLumia</h2>
            <p>Du musst keinem festen Ablauf folgen. Wähle den Raum, der zu deinem heutigen Bedürfnis und deiner gewünschten Tiefe passt.</p>
          </div>
          <div className="journey-grid">
            {journey.map((item) => {
              const content = <><span className="journey-number">{item.no}</span><div className="journey-image"><Image src={item.image} alt="" fill sizes="(max-width: 760px) 88vw, 24vw" /></div><h3>{item.title}</h3><p className="journey-copy">{item.text}</p><b>{item.action}</b></>;
              return item.external ? <a className="journey-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.no}>{content}</a> : <Link className="journey-card" href={item.href} key={item.no}>{content}</Link>;
            })}
          </div>
        </div>
      </section>

      <section className="wounds-section" aria-labelledby="somatic-karma-title">
        <div className="shell">
          <div className="landing-section-heading landing-section-heading-centered">
            <p className="landing-kicker">MEINE METHODE</p>
            <h2 id="somatic-karma-title">Was ist Somatic Karma?</h2>
            <p>Vier karmische Narben prägen unbewusst, wie wir Sicherheit, Zugehörigkeit, Empfangen und Selbstbestimmung erleben. Wenn du sie erkennst, kannst du deinen Bedürfnissen mit neuer Klarheit begegnen.</p>
          </div>
          <WoundExplorer variant="home" />
          <Link className="landing-button landing-button-primary wounds-method-button" href="/somatic-karma">Die Methode kennenlernen</Link>
        </div>
      </section>

      <section className="podcast-home" aria-labelledby="podcast-home-title">
        <div className="podcast-home-inner shell">
          <Link className="podcast-home-art" href="/podcast" aria-label="Podcast-Seite öffnen"><Image src="/podcast-smartphone-transparent.png" alt="Karma mit Zimt und Zucker auf dem Smartphone" fill sizes="(max-width: 760px) 92vw, 520px" /></Link>
          <div className="podcast-home-copy">
            <p className="landing-kicker">PODCAST</p>
            <h2 id="podcast-home-title">Karma mit Zimt und Zucker</h2>
            <p>Persönliche Gespräche über Spiritualität, Selbstliebe und die süßen wie herausfordernden Seiten des Lebens.</p>
            <div className="landing-actions"><Link className="landing-button landing-button-primary" href="/podcast">Jetzt lauschen</Link></div>
          </div>
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
        <div className="shell home-final-cta-copy"><p className="landing-kicker">DEIN NÄCHSTER SCHRITT</p><h2>Bereit für deinen nächsten Schritt?</h2><p>Deine Seele kennt den Weg. Starte jetzt deinen kostenlosen Navigator und entdecke, welches Thema dich gerade ruft.</p><a className="landing-button landing-button-light" href={links.navigator} target="_blank" rel="noopener noreferrer">Kostenlosen Navigator starten</a></div>
      </section>
    </div>
  );
}
