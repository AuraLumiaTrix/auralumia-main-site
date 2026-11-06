import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, HandHeart, Headphones, Mail, Moon, Music2, Podcast, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PodcastAudioPlayer } from "@/components/podcast-audio-player";
import { PodcastPlatformLinks } from "@/components/podcast-platform-links";
import { links } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Über Jennifer Olivia",
  description: "Lerne Jennifer Olivia Kindereit kennen – Gründerin von AuraLumia, Entwicklerin von Somatic Karma, Mentorin, Podcasterin und Ausbilderin.",
};

const podcastAudioEpisodes = [
  { src: "/audio/podcast-mutternarbe.mp3", title: "Die Mutternarbe", meta: "Folge 11", duration: "25:45 Min." },
  { src: "/audio/podcast-karrierebremse.mp3", title: "Karrierebremse lösen", meta: "Folge 15", duration: "20:18 Min." },
  { src: "/audio/podcast-schuldnarbe.mp3", title: "Die Schuldnarbe", meta: "Folge 9", duration: "25:20 Min." },
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
        <div className="about-v2-hero-media">
          <Image src="/about/jennifer-frauenkreis-hero-portrait.jpg" alt="Jennifer in einem Frauenkreis mit Kerzen und Blumen" fill priority sizes="100vw" />
        </div>
        <div className="about-v2-hero-shade" aria-hidden="true" />
        <div className="shell about-v2-hero-grid">
          <div className="about-v2-hero-copy">
            <p className="landing-kicker">ÜBER MICH · PODCAST · MUSIK</p>
            <h1>Hallo, ich bin Jennifer.</h1>
            <p className="about-v2-lead">Gründerin von AuraLumia, Entwicklerin von Somatic Karma, spirituelle Mentorin, Podcasterin und Ausbilderin.</p>
            <p>Ich verbinde intuitive Wahrnehmung mit klaren, erlernten Werkzeugen. So entstehen Räume, in denen du deine Muster besser verstehen, dich selbst wieder deutlicher hören und deinen eigenen Weg bewusster wählen kannst.</p>
            <div className="landing-actions">
              <Link className="landing-button landing-button-primary" href="#meine-geschichte">Meine Geschichte entdecken</Link>
              <Link className="landing-button landing-button-secondary" href="#podcast"><Headphones size={17} aria-hidden="true" /> Podcast anhören</Link>
            </div>
            <ul className="about-v2-hero-facts" aria-label="Jennifers Arbeit">
              <li><Sparkles aria-hidden="true" /><span>Entwicklerin von<br />Somatic Karma</span></li>
              <li><Podcast aria-hidden="true" /><span>Podcast Host<br />Karma mit Zimt &amp; Zucker</span></li>
              <li><GraduationCap aria-hidden="true" /><span>Ausbilderin für<br />spirituelle Praxis</span></li>
              <li><Music2 aria-hidden="true" /><span>Musik als<br />Naru Hikari</span></li>
            </ul>
            <p className="about-v2-hero-quote">„Freiheit beginnt, wenn du dich erinnerst, wer du bist.“</p>
          </div>
        </div>
      </section>

      <section className="about-v2-story" id="meine-geschichte">
        <div className="shell">
          <header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">MEIN WEG</p><h2>Meine Geschichte</h2><p>Mein Weg verbindet Herkunft, intuitive Wahrnehmung und fundierte Werkzeuge – genau daraus sind AuraLumia und Somatic Karma gewachsen.</p></header>
          <div className="about-v2-story-grid">
            <article><div className="about-v2-story-media about-v2-story-media-depth"><Image src="/about/ruf-in-die-tiefe.png" alt="Mond über einer tiefen Berglandschaft" fill sizes="(max-width: 760px) 100vw, 30vw" /></div><div><span>01</span><h3>Der Ruf in die Tiefe</h3><p>Geboren im Harz und verwurzelt in einer Familie mit feiner Wahrnehmung, begleitet mich das Wissen um unsichtbare Zusammenhänge seit meiner Kindheit. In Mythen, alten Traditionen, Tiefen der Traumwelt und des Unterbewusstseins zu wandeln ist mir seit jeher gut bekannt.</p></div></article>
            <aside className="about-v2-story-detail about-v2-story-detail-foundation" aria-labelledby="about-foundation-title">
              <div className="about-v2-story-detail-heading">
                <p className="landing-kicker">WAS MICH TRÄGT</p>
                <h3 id="about-foundation-title">Zwischen Intuition, Wissen und gelebter Erfahrung</h3>
                <p>Meine Arbeit ist aus vielen Jahren persönlicher Praxis, fundierter Weiterbildung und einem Leben gewachsen, in dem Spiritualität und Alltag untrennbar miteinander verbunden sind.</p>
              </div>
              <div className="about-v2-personal-note">
                <Sparkles aria-hidden="true" />
                <div><h4>Mein Zuhause, meine Wurzeln</h4><p>Mein Stellium im Krebs spiegelt meine tiefe Verbundenheit mit Familie, Intuition und einem schützenden Zuhause. Ich bin Mutter von vier Kindern und lebe mit meinem Mann, unseren Kindern und vier Katzen glücklich in einem Holzhaus zwischen Eichen und Haselnuss.</p></div>
              </div>
              <div className="about-v2-expertise-grid">
                <section>
                  <Sparkles aria-hidden="true" />
                  <h4>Spirituelles Wissen</h4>
                  <ul>
                    <li>Einweihung in Munay-Ki, das schamanische Wissen der Hochanden</li>
                    <li>Ausbildung in rituellem Folkloregesang</li>
                    <li>Einweihung im Kundalini Yoga als Chandra Sangeeta Kaur – „Mondgesang“</li>
                    <li>Mehrere Jahrzehnte Erfahrung als Seherin</li>
                    <li>Über 25 Jahre Meditationspraxis; ein prägender Impuls war eine persönliche Begegnung mit Shaolin-Mönchen</li>
                  </ul>
                </section>
                <section>
                  <GraduationCap aria-hidden="true" />
                  <h4>Wissenschaft &amp; Coaching</h4>
                  <ul>
                    <li>Studien in Biologie und Chemie an der Georg-August-Universität Göttingen und der Gottfried Wilhelm Leibniz Universität Hannover</li>
                    <li>Hochschulzertifizierung im Mentalcoaching an der AHAB-Akademie</li>
                    <li>Basisausbildung in Hypnose nach TherMedius®</li>
                  </ul>
                </section>
                <section>
                  <Music2 aria-hidden="true" />
                  <h4>Körper &amp; Stimme</h4>
                  <ul>
                    <li>Ausgebildete Sängerin und langjährige Erfahrung als Natural-Weiblichkeits-Vocal-Coach</li>
                    <li>Trainerzertifizierung in Essence of Bellydance™</li>
                    <li>Trainerzertifizierung in KAHA®</li>
                  </ul>
                </section>
              </div>
            </aside>
            <article><div className="about-v2-story-media about-v2-story-media-birth"><Image src="/about/geburt-auralumia.png" alt="Frauen legen ihre Hände gemeinsam in einen Kreis" fill sizes="(max-width: 760px) 100vw, 30vw" /></div><div><span>02</span><h3>Die Geburt von AuraLumia</h3><p>Aus intuitiver Gabe und erlernten Werkzeugen entstand AuraLumia: ein Raum, in dem vedische Astrologie, Körperwissen, Ahnenarbeit, Tarot und Stimme zusammenfinden.</p></div></article>
            <aside className="about-v2-story-detail about-v2-story-detail-milestones" aria-labelledby="about-milestones-title">
              <div className="about-v2-story-detail-heading">
                <p className="landing-kicker">AUS EINER VISION WIRD EIN RAUM</p>
                <h3 id="about-milestones-title">Was aus AuraLumia gewachsen ist</h3>
                <p>2025 wurden aus meiner inneren Arbeit sichtbare Räume, Werke und Werkzeuge.</p>
              </div>
              <div className="about-v2-milestone-grid">
                <article><span>2025</span><h4>Gründung von AuraLumia</h4><p>Ein geschützter Raum für Somatic Karma, spirituelle Praxis und bewusste Selbsterkenntnis entsteht.</p></article>
                <article><span>2025</span><h4>Somatic Karma Tarot</h4><p>Das physische Kartendeck verbindet archetypische Bildsprache mit der Methode von Somatic Karma.</p></article>
                <article><span>2025</span><h4>„Rising of the Womb“</h4><p>Unter meinem Künstlernamen Naru Hikari veröffentliche ich mein New-Age-Musikalbum.</p></article>
              </div>
            </aside>
            <article><div className="about-v2-story-media about-v2-story-media-today"><Image src="/about/jennifer-heute.png" alt="Jennifer im Kreis mit vier Frauen" fill sizes="(max-width: 760px) 100vw, 30vw" /></div><div><span>03</span><h3>Heute</h3><p>Heute entwickle ich Somatic Karma weiter, begleite Frauen, bilde aus und öffne mit Podcast und Musik zusätzliche Wege zu bewusster Selbsterkenntnis.</p></div></article>
            <aside className="about-v2-story-detail about-v2-story-detail-today" aria-labelledby="about-today-title">
              <div className="about-v2-story-detail-heading">
                <p className="landing-kicker">HEUTE &amp; IM WERDEN</p>
                <h3 id="about-today-title">Somatic Karma wächst weiter</h3>
                <p>Seit 2026 wird die Methode durch neue Medien und digitale Werkzeuge noch unmittelbarer erfahrbar.</p>
              </div>
              <div className="about-v2-milestone-grid">
                <article><span>SEIT 2026</span><h4>Karma mit Zimt &amp; Zucker</h4><p>Als Host meines Podcasts teile ich persönliche Impulse über Spiritualität, Selbstliebe und Transformation.</p></article>
                <article><span>2026</span><h4>Somatic Karma</h4><p>Ich entwickle Somatic Karma als eigene, verbundene Methode kontinuierlich weiter.</p></article>
                <article><span>2026</span><h4>Digitale Werkzeuge</h4><p>Die Somatic Karma Tarot App und das astrologische Online-Tool öffnen neue Zugänge zur Methode.</p></article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="about-v2-values"><div className="shell">
        <header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">MEIN FUNDAMENT</p><h2>Meine Werte</h2><p>Diese Haltung trägt meine Arbeit, meine Angebote und die Community von AuraLumia.</p></header>
        <div className="about-v2-values-grid">
          <article><Image className="about-v2-value-symbol" src="/symbols/gold-depth.png" alt="" width={1131} height={1391} sizes="96px" /><h3>Tiefe</h3><p>Ich gehe unter die Oberfläche und gebe Erkenntnissen den Raum, den sie brauchen.</p></article>
          <article><Image className="about-v2-value-symbol" src="/symbols/gold-responsibility.png" alt="" width={1312} height={1199} sizes="96px" /><h3>Eigenverantwortung</h3><p>Du behältst deine innere Autorität und bestimmst Tempo und Richtung.</p></article>
          <article><Image className="about-v2-value-symbol" src="/symbols/gold-intuition.png" alt="" width={1536} height={1024} sizes="96px" /><h3>Intuition</h3><p>Feine Wahrnehmung und klare Reflexion dürfen einander ergänzen.</p></article>
          <article><Image className="about-v2-value-symbol" src="/symbols/gold-structure.png" alt="" width={1536} height={1024} sizes="96px" /><h3>Struktur</h3><p>Spirituelle Praxis wird durch verständliche Schritte und fundierte Werkzeuge greifbar.</p></article>
          <article><Image className="about-v2-value-symbol" src="/symbols/gold-transformation.png" alt="" width={1154} height={1363} sizes="96px" /><h3>Sanfte Transformation</h3><p>Veränderung darf klar, mitfühlend und in deinem eigenen Rhythmus geschehen.</p></article>
        </div>
      </div></section>

      <section className="about-v2-podcast" id="podcast">
        <div className="shell about-v2-podcast-intro">
          <div className="about-v2-podcast-art"><Image src="/podcast-smartphone-transparent.png" alt="Karma mit Zimt und Zucker auf dem Smartphone" fill sizes="(max-width: 860px) 100vw, 44vw" /></div>
          <div className="about-v2-podcast-copy"><p className="landing-kicker">PODCAST</p><h2>Karma mit Zimt und Zucker</h2><p className="about-v2-podcast-subtitle">Ehrliche Gespräche über Spiritualität, Selbstliebe und die süßen und herausfordernden Seiten des Lebens.</p><ul><li><Headphones aria-hidden="true" /> Inspiration für deinen Alltag</li><li><HandHeart aria-hidden="true" /> Persönliche, nahbare Impulse</li><li><Sparkles aria-hidden="true" /> Spiritualität zum Anfassen</li></ul><div className="about-v2-platform-actions"><PodcastPlatformLinks /></div><Link className="landing-text-link about-v2-podcast-page-link" href="/podcast">Zur Podcast-Seite</Link></div>
        </div>
        <div className="shell about-v2-podcast-player">
          <header className="landing-section-heading"><p className="landing-kicker">AUSGEWÄHLTE FOLGEN</p><h2>Direkt reinhören</h2></header>
          <div className="about-v2-audio-grid">
            {podcastAudioEpisodes.map((episode) => (
              <article className="about-v2-audio-card" key={episode.src}>
                <div><span>{episode.meta}</span><span>{episode.duration}</span></div>
                <h3>{episode.title}</h3>
                <PodcastAudioPlayer src={episode.src} title={`${episode.title}, ${episode.meta}`} durationLabel={episode.duration.replace(" Min.", "")} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-v2-music">
        <div className="shell about-v2-music-grid"><div className="about-v2-music-art"><Image src="/naru-hikari-album.png" alt="Naru Hikari – Rising of the Womb" fill sizes="(max-width: 760px) 100vw, 38vw" /></div><div><p className="landing-kicker">NARU HIKARI · MUSIK</p><h2>Meine Songs sind ein weiterer Weg nach innen.</h2><p>Unter meinem Künstlernamen Naru Hikari verbinde ich Stimme, Sinnlichkeit und weibliche Ahnenlinie zu einem eigenen Klangraum. Auch meine Einweihung im Kundalini Yoga als Chandra Sangeeta fließt in diese Arbeit ein.</p><Link className="landing-button landing-button-light" href="/musik">Meine Musik entdecken</Link></div></div>
        <div className="shell about-v2-music-voices" aria-label="Stimmen zur Musik">
          <article><div className="about-v2-avatar about-v2-avatar-photo"><Image src="/testimonial-elena-m-avatar.jpg" alt="Elena M." fill sizes="58px" /></div><blockquote>„Deine Songs und deine Stimme wirken auf mich erdend, sinnlich und tief.“</blockquote><p><strong>Elena M.</strong><span>Hörerin</span></p></article>
          <article><div className="about-v2-avatar" aria-hidden="true">HL</div><blockquote>„Das Warten hat sich gelohnt. Und dann auch noch mein Lieblingssong ‚Loving Is Devotion‘ an erster Stelle.“</blockquote><p><strong>Heike L.</strong><span>Hörerin</span></p></article>
          <article><div className="about-v2-avatar" aria-hidden="true">AD</div><blockquote>„Man spürt, wie viel Gefühl in deinen Songs steckt.“</blockquote><p><strong>Aneta D.</strong><span>Hörerin</span></p></article>
        </div>
      </section>

      <section className="about-v2-work"><div className="shell">
        <header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">DEIN NÄCHSTER SCHRITT</p><h2>So kannst du mit mir arbeiten</h2><p>Ob du Somatic Karma lernen, deinen persönlichen Weg vertiefen oder mit mir zusammenarbeiten möchtest – hier findest du den passenden Einstieg.</p></header>
        <div className="about-v2-work-grid">
          <article><GraduationCap aria-hidden="true" /><h3>Ausbildung</h3><p>Werde Teil der Aura-Luminess-Ausbildung und lerne Somatic Karma fundiert.</p><Link href="/neun-monde-aura-luminess">Mehr erfahren</Link></article>
          <article><Moon aria-hidden="true" /><h3>Blueprint-Fragen</h3><p>Erfahre mehr über deinen persönlichen Drei Monde Blueprint.</p><Link href="/drei-monde-blueprint">Blueprint ansehen</Link></article>
          <article><HandHeart aria-hidden="true" /><h3>Kooperationen</h3><p>Du möchtest mit mir zusammenarbeiten oder mich für dein Projekt anfragen?</p><a href="#kontakt">Kontakt aufnehmen</a></article>
          <article><Mail aria-hidden="true" /><h3>Allgemeine Anfrage</h3><p>Du hast eine andere Frage oder möchtest mir persönlich schreiben?</p><a href="#kontakt">Nachricht vorbereiten</a></article>
        </div>
        <article className="about-v2-guidance-voice"><Sparkles aria-hidden="true" /><blockquote>„Die Begleitung war klar und strukturiert und gleichzeitig weich, warm, weiblich, nährend und fließend. Die wertvollen Inspirationen und Impulse haben mir geholfen, alte Denkmuster zu durchbrechen.“</blockquote><p><strong>Kundinnenstimme</strong><span>Anonymisiert · persönliche Begleitung</span></p></article>
      </div></section>

      <section className="about-v2-contact" id="kontakt"><div className="shell about-v2-contact-grid">
        <div className="about-v2-contact-copy"><p className="landing-kicker">KONTAKT</p><h2>Ich freue mich, von dir zu hören.</h2><p>Ob Ausbildung, Blueprint, Podcast, Kooperation oder eine persönliche Frage – wähle den Weg, der sich für dich stimmig anfühlt.</p><a className="landing-button landing-button-primary" href="mailto:kontakt@auralumia.de?subject=Anfrage%20%C3%BCber%20auralumia.de"><Mail size={17} aria-hidden="true" /> kontakt@auralumia.de</a><small>Falls sich kein E-Mail-Programm öffnet, kopiere die Adresse bitte direkt in dein gewohntes Postfach: kontakt@auralumia.de</small></div>
      </div></section>

      <section className="about-v2-faq"><div className="shell"><header className="landing-section-heading landing-section-heading-centered"><p className="landing-kicker">HÄUFIGE FRAGEN</p><h2>Deine Fragen, meine Antworten</h2></header><Accordion className="about-v2-accordion" type="single" collapsible>{faqs.map((faq, index) => <AccordionItem value={`faq-${index + 1}`} key={faq.question}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="about-v2-closing"><div className="shell"><p className="landing-kicker">BEREIT FÜR DEINEN NÄCHSTEN SCHRITT?</p><h2>Folge deiner Neugier – in deinem eigenen Tempo.</h2><p>Höre tiefer in die Themen von AuraLumia hinein oder beginne mit dem kostenfreien Somatic Karma Navigator.</p><div className="landing-actions"><Link className="landing-button landing-button-light" href="/podcast"><Headphones size={17} aria-hidden="true" /> Zum Podcast</Link><a className="landing-button landing-button-light" href={links.navigator} target="_blank" rel="noreferrer">Kostenlosen Navigator starten</a></div></div></section>
    </main>
  );
}
