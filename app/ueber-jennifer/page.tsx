import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, Flower2, GraduationCap, HandHeart, Headphones, Mail, Moon, Music2, Podcast, Sparkles, Sprout } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { YouTubeListener } from "@/components/youtube-listener";
import { links } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Über Jennifer Olivia",
  description: "Lerne Jennifer Olivia Kindereit kennen – Gründerin von AuraLumia, Entwicklerin von Somatic Karma, Mentorin, Podcasterin und Ausbilderin.",
};

const podcastEpisodes = [
  { id: "dgENyvmt4IU", label: "Die Schuldnarbe", meta: "Folge 9" },
  { id: "T2QZH93ubLE", label: "Die Mutternarbe", meta: "Folge 11" },
  { id: "39cDG-QaYfI", label: "Die Vaternarbe", meta: "Folge 12" },
];

const faqs = [
  { question: "Wie kann ich mit dir zusammenarbeiten?", answer: "Du kannst mit einem Selbstlernangebot beginnen, den Drei Monde Blueprint anfragen oder dich über die Aura-Luminess-Ausbildung informieren. Für Kooperationen und allgemeine Fragen erreichst du mich direkt per E-Mail." },
  { question: "Für wen ist die Ausbildung geeignet?", answer: "Die Aura-Luminess-Ausbildung richtet sich an Frauen, die Somatic Karma fundiert erlernen, in die eigene Praxis integrieren oder später verantwortungsvoll weitergeben möchten. Alle Einzelheiten findest du auf der Ausbildungsseite." },
  { question: "Wie erhalte ich eine Antwort auf meine Anfrage?", answer: "Deine Nachricht wird persönlich gelesen. Da noch kein sicherer Formularversand angebunden ist, nutze bitte den E-Mail-Link im Kontaktbereich – so erreicht deine Anfrage AuraLumia zuverlässig." },
  { question: "Wie erfahre ich von freien Plätzen in der persönlichen Begleitung?", answer: "Die aktuelle Verfügbarkeit findest du beim Drei Monde Blueprint und im Bereich Begleitung & Ausbildung. Falls dort noch eine Frage offenbleibt, kannst du dich direkt per E-Mail melden." },
];

export default function JenniferPage() {
  return (
    <main className="about-v2">
      <section className="about-v2-hero">
        <div className="about-v2-hero-glow" aria-hidden="true" />
        <div className="shell about-v2-hero-grid">
          <div className="about-v2-hero-copy">
            <p className="landing-kicker">ÜBER MICH · PODCAST · MUSIK</p>
            <h1>Hallo, ich bin Jennifer.</h1>
            <p className="about-v2-lead">Gründerin von AuraLumia, Entwicklerin von Somatic Karma, spirituelle Mentorin, Podcasterin und Ausbilderin.</p>
            <p>Ich verbinde intuitive Wahrnehmung mit klaren, erlernten Werkzeugen. So entstehen Räume, in denen du deine Muster besser verstehen, dich selbst wieder deutlicher hören und deinen eigenen Weg bewusster wählen kannst.</p>
            <div className="landing-actions">
              <Link className="landing-button landing-button-primary" href="#meine-geschichte">Meine Geschichte entdecken <span aria-hidden="true">→</span></Link>
              <Link className="landing-button landing-button-secondary" href="#podcast"><Headphones size={17} aria-hidden="true" /> Podcast anhören</Link>
            </div>
            <ul className="about-v2-hero-facts" aria-label="Jennifers Arbeit">
              <li><Sparkles aria-hidden="true" /><span>Somatic Karma<br />entwickelt</span></li>
              <li><Podcast aria-hidden="true" /><span>Podcast Host<br />Karma mit Zimt &amp; Zucker</span></li>
              <li><GraduationCap aria-hidden="true" /><span>Ausbilderin für<br />spirituelle Praxis</span></li>
              <li><Music2 aria-hidden="true" /><span>Musik als<br />Naru Hikari</span></li>
            </ul>
          </div>
          <figure className="about-v2-hero-portrait">
            <Image src="/jennifer-olivia.jpg" alt="Jennifer Olivia Kindereit" fill priority sizes="(max-width: 860px) 100vw, 48vw" />
            <figcaption>„Freiheit beginnt, wenn du dich erinnerst, wer du bist.“</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-v2-story" id="meine-geschichte">
        <div className="shell">
          <header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">MEIN WEG</p><h2>Meine Geschichte</h2><p>Mein Weg verbindet Herkunft, intuitive Wahrnehmung und fundierte Werkzeuge – genau daraus sind AuraLumia und Somatic Karma gewachsen.</p></header>
          <div className="about-v2-story-grid">
            <article><div className="about-v2-story-media"><Image src="/jennifer.webp" alt="Jennifer Olivia Kindereit" fill sizes="(max-width: 760px) 100vw, 30vw" /></div><div><span>01</span><h3>Der Ruf in die Tiefe</h3><p>Geboren im Harz und verwurzelt in einer Familie mit feiner Wahrnehmung, begleitet mich das Wissen um unsichtbare Zusammenhänge seit meiner Kindheit.</p></div></article>
            <article><div className="about-v2-story-media"><Image src="/jennifer-olivia.jpg" alt="Porträt von Jennifer Olivia Kindereit" fill sizes="(max-width: 760px) 100vw, 30vw" /></div><div><span>02</span><h3>Die Geburt von AuraLumia</h3><p>Aus intuitiver Gabe und erlernten Werkzeugen entstand AuraLumia: ein Raum, in dem vedische Astrologie, Körperwissen, Ahnenarbeit, Tarot und Stimme zusammenfinden.</p></div></article>
            <article><div className="about-v2-story-media about-v2-story-media-light"><Image src="/naru-hikari-seeria.png" alt="Jennifer als Künstlerin Naru Hikari" fill sizes="(max-width: 760px) 100vw, 30vw" /></div><div><span>03</span><h3>Heute</h3><p>Heute entwickle ich Somatic Karma weiter, begleite Frauen, bilde aus und öffne mit Podcast und Musik zusätzliche Wege zu bewusster Selbsterkenntnis.</p></div></article>
          </div>
        </div>
      </section>

      <section className="about-v2-values"><div className="shell">
        <header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">MEIN FUNDAMENT</p><h2>Meine Werte</h2><p>Diese Haltung trägt meine Arbeit, meine Angebote und die Community von AuraLumia.</p></header>
        <div className="about-v2-values-grid">
          <article><Moon aria-hidden="true" /><h3>Tiefe</h3><p>Ich gehe unter die Oberfläche und gebe Erkenntnissen den Raum, den sie brauchen.</p></article>
          <article><Sprout aria-hidden="true" /><h3>Eigenverantwortung</h3><p>Du behältst deine innere Autorität und bestimmst Tempo und Richtung.</p></article>
          <article><Eye aria-hidden="true" /><h3>Intuition</h3><p>Feine Wahrnehmung und klare Reflexion dürfen einander ergänzen.</p></article>
          <article><Compass aria-hidden="true" /><h3>Struktur</h3><p>Spirituelle Praxis wird durch verständliche Schritte und fundierte Werkzeuge greifbar.</p></article>
          <article><Flower2 aria-hidden="true" /><h3>Sanfte Transformation</h3><p>Veränderung darf klar, mitfühlend und in deinem eigenen Rhythmus geschehen.</p></article>
        </div>
      </div></section>

      <section className="about-v2-podcast" id="podcast">
        <div className="shell about-v2-podcast-intro">
          <div className="about-v2-podcast-art"><Image src="/podcast-auralumia.png" alt="Karma mit Zimt und Zucker – der AuraLumia Podcast" fill sizes="(max-width: 860px) 100vw, 44vw" /></div>
          <div className="about-v2-podcast-copy"><p className="landing-kicker">PODCAST</p><h2>Karma mit Zimt und Zucker</h2><p className="about-v2-podcast-subtitle">Ehrliche Gespräche über Spiritualität, Selbstliebe und die süßen und herausfordernden Seiten des Lebens.</p><ul><li><Headphones aria-hidden="true" /> Inspiration für deinen Alltag</li><li><HandHeart aria-hidden="true" /> Persönliche, nahbare Impulse</li><li><Sparkles aria-hidden="true" /> Spiritualität zum Anfassen</li></ul><div className="landing-actions"><a className="landing-button landing-button-primary" href={links.podcast} target="_blank" rel="noreferrer">Alle Folgen hören <span aria-hidden="true">↗</span></a><a className="landing-button landing-button-secondary" href={links.podcastYoutube} target="_blank" rel="noreferrer">Auf YouTube <span aria-hidden="true">↗</span></a><Link className="landing-text-link" href="/podcast">Zur Podcast-Seite →</Link></div></div>
        </div>
        <div className="shell about-v2-podcast-player"><header className="landing-section-heading"><p className="landing-kicker">AUSGEWÄHLTE FOLGEN</p><h2>Direkt reinhören</h2></header><YouTubeListener items={podcastEpisodes} initialId={podcastEpisodes[0].id} title="Karma mit Zimt und Zucker" ariaLabel="Podcastfolge auswählen" posterSrc="/karma-mit-zimt-und-zucker.png" posterAlt="Cover des Podcasts Karma mit Zimt und Zucker" /></div>
      </section>

      <section className="about-v2-music">
        <div className="shell about-v2-music-grid"><div className="about-v2-music-art"><Image src="/naru-hikari-album.png" alt="Naru Hikari – Rising of the Womb" fill sizes="(max-width: 760px) 100vw, 38vw" /></div><div><p className="landing-kicker">NARU HIKARI · MUSIK</p><h2>Meine Stimme ist ein weiterer Weg nach innen.</h2><p>Unter meinem Künstlernamen Naru Hikari verbinde ich Stimme, Sinnlichkeit und weibliche Ahnenlinie zu einem eigenen Klangraum. Auch meine Einweihung im Kundalini Yoga als Chandra Sangeeta fließt in diese Arbeit ein.</p><Link className="landing-button landing-button-light" href="/musik">Meine Musik entdecken <span aria-hidden="true">→</span></Link></div></div>
        <div className="shell about-v2-music-voices" aria-label="Stimmen zur Musik">
          <article><div className="about-v2-avatar about-v2-avatar-photo"><Image src="/testimonial-elena-m-avatar.jpg" alt="Elena M." fill sizes="58px" /></div><blockquote>„Deine Songs und deine Stimme wirken auf mich erdend, sinnlich und tief.“</blockquote><p><strong>Elena M.</strong><span>Hörerin</span></p></article>
          <article><div className="about-v2-avatar" aria-hidden="true">HL</div><blockquote>„Das Warten hat sich gelohnt. Und dann auch noch mein Lieblingssong ‚Loving Is Devotion‘ an erster Stelle.“</blockquote><p><strong>Heike L.</strong><span>Hörerin</span></p></article>
          <article><div className="about-v2-avatar" aria-hidden="true">AD</div><blockquote>„Man spürt, wie viel Gefühl in deinen Songs steckt.“</blockquote><p><strong>Aneta D.</strong><span>Hörerin</span></p></article>
        </div>
      </section>

      <section className="about-v2-work"><div className="shell">
        <header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">DEIN NÄCHSTER SCHRITT</p><h2>So kannst du mit mir arbeiten</h2><p>Ob du Somatic Karma lernen, deinen persönlichen Weg vertiefen oder mit mir zusammenarbeiten möchtest – hier findest du den passenden Einstieg.</p></header>
        <div className="about-v2-work-grid">
          <article><GraduationCap aria-hidden="true" /><h3>Ausbildung</h3><p>Werde Teil der Aura-Luminess-Ausbildung und lerne Somatic Karma fundiert.</p><Link href="/neun-monde-aura-luminess">Mehr erfahren →</Link></article>
          <article><Moon aria-hidden="true" /><h3>Blueprint-Fragen</h3><p>Erfahre mehr über deinen persönlichen Drei Monde Blueprint.</p><Link href="/drei-monde-blueprint">Blueprint ansehen →</Link></article>
          <article><HandHeart aria-hidden="true" /><h3>Kooperationen</h3><p>Du möchtest mit mir zusammenarbeiten oder mich für dein Projekt anfragen?</p><a href="#kontakt">Kontakt aufnehmen →</a></article>
          <article><Mail aria-hidden="true" /><h3>Allgemeine Anfrage</h3><p>Du hast eine andere Frage oder möchtest mir persönlich schreiben?</p><a href="#kontakt">Nachricht vorbereiten →</a></article>
        </div>
        <article className="about-v2-guidance-voice"><Sparkles aria-hidden="true" /><blockquote>„Die Begleitung war klar und strukturiert und gleichzeitig weich, warm, weiblich, nährend und fließend. Die wertvollen Inspirationen und Impulse haben mir geholfen, alte Denkmuster zu durchbrechen.“</blockquote><p><strong>Kundinnenstimme</strong><span>Anonymisiert · persönliche Begleitung</span></p></article>
      </div></section>

      <section className="about-v2-contact" id="kontakt"><div className="shell about-v2-contact-grid">
        <div className="about-v2-contact-copy"><p className="landing-kicker">KONTAKT</p><h2>Ich freue mich, von dir zu hören.</h2><p>Ob Ausbildung, Blueprint, Podcast, Kooperation oder eine persönliche Frage – wähle den Weg, der sich für dich stimmig anfühlt.</p><a className="landing-button landing-button-primary" href="mailto:kontakt@auralumia.de?subject=Anfrage%20%C3%BCber%20auralumia.de"><Mail size={17} aria-hidden="true" /> kontakt@auralumia.de</a><small>Falls sich kein E-Mail-Programm öffnet, kopiere die Adresse bitte direkt in dein gewohntes Postfach: kontakt@auralumia.de</small></div>
        <div className="about-v2-contact-panel"><div className="about-v2-form-status" role="status"><Sparkles aria-hidden="true" /><p><strong>Kontaktformular in Vorbereitung</strong><span>Bis ein sicherer Versanddienst angebunden ist, nutze bitte den E-Mail-Button. So zeigen wir keine irreführende Versandbestätigung.</span></p></div><form aria-label="Vorschau des künftigen Kontaktformulars"><fieldset disabled><div className="about-v2-form-row"><label>Dein Name<input type="text" placeholder="z. B. Anna" /></label><label>Deine E-Mail<input type="email" placeholder="z. B. anna@mail.de" /></label></div><label>Dein Thema<select defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Ausbildung</option><option>Drei Monde Blueprint</option><option>Podcast und Kooperationen</option><option>Allgemeine Anfrage</option></select></label><label>Deine Nachricht<textarea rows={4} placeholder="Erzähl mir, was dich bewegt …" /></label><label className="about-v2-consent"><input type="checkbox" /> <span>Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen.</span></label><button className="landing-button landing-button-primary" type="submit">Nachricht senden</button></fieldset></form></div>
      </div></section>

      <section className="about-v2-faq"><div className="shell"><header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">HÄUFIGE FRAGEN</p><h2>Deine Fragen, meine Antworten</h2></header><Accordion className="about-v2-accordion" type="single" collapsible>{faqs.map((faq, index) => <AccordionItem value={`faq-${index + 1}`} key={faq.question}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="about-v2-closing"><div className="shell"><p className="landing-kicker">BEREIT FÜR DEINEN NÄCHSTEN SCHRITT?</p><h2>Folge deiner Neugier – in deinem eigenen Tempo.</h2><p>Höre tiefer in die Themen von AuraLumia hinein oder beginne mit dem kostenfreien Somatic Karma Navigator.</p><div className="landing-actions"><Link className="landing-button landing-button-light" href="/podcast"><Headphones size={17} aria-hidden="true" /> Zum Podcast</Link><a className="landing-button landing-button-light" href={links.navigator} target="_blank" rel="noreferrer">Kostenlosen Navigator starten <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
  );
}
