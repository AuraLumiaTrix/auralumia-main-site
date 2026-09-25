export const links = {
  navigator: "https://somatic-karma-navigator.vercel.app/",
  tarot: "https://somatic-karma-navigator.vercel.app/somatic-karma-tarot/",
  tarotCheckout: "https://somatic-karma-navigator.vercel.app/somatic-karma-tarot/",
  audio: "https://somatic-karma-navigator.vercel.app/audio-bundle/",
  code: "https://somatic-karma-navigator.vercel.app/somatic-karma-code/",
  cardDeckBlessing: "https://navigator.auralumia.de/card-deck-blessing/",
  podcast: "https://letscast.fm/sites/karma-mit-zimt-und-zucker-27a97918",
  podcastYoutube: "https://www.youtube.com/@Karma_mit_Zimt_und_Zucker",
  music: "https://music.youtube.com/search?q=Naru%20Hikari%20Rising%20of%20the%20Womb",
  welcomeVideo: "/aura-lumia-logo-intro-weiss.mp4",
  somaticWelcomeVideo: "/somatic-karma-welcome.mp4",
  portraitVideo: "/jennifer-portrait-collage-sepia-v2.mp4",
};

export type Offer = {
  name: string;
  price: string;
  image: string;
  description: string;
  href?: string;
  status?: string;
};

export type OfferGroup = {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  offers: Offer[];
};

export const offerGroups: OfferGroup[] = [
  {
    id: "kostenfreier-einstieg",
    kicker: "STUFE 0 · KOSTENFREIER EINSTIEG",
    title: "Erkenne, was gerade wirkt",
    intro: "Eine klare erste Standortbestimmung, bevor du dich für den Somatic-Karma-Raum entscheidest, der jetzt zu dir passt.",
    offers: [
      { name: "Somatic Karma Navigator-Test", price: "Kostenfrei", image: "/products/produktbild-karma-navigator.png", description: "Das interaktive Online-Tool macht sichtbar, welche der vier Somatic-Karma-Narben gegenwärtig am stärksten wirkt. Du erhältst eine erste Einordnung und einen passenden Themenpfad für deinen nächsten Schritt.", href: links.navigator },
    ],
  },
  {
    id: "selbstregulation",
    kicker: "STUFE 1 · SELBSTREGULATION",
    title: "Begleite deinen Archetyp im Alltag",
    intro: "Digitale Somatic-Karma-Räume, die dir jederzeit zur Verfügung stehen und Erkenntnis in eine wiederholbare persönliche Praxis übersetzen.",
    offers: [
      { name: "Somatic Karma Audio Bundle", price: "47 €", image: "/products/produktbild-audio-bundle.png", description: "Audio-Reisen, Affirmationen und ein Transformationsritual für deinen Somatic-Karma-Archetypen – als körperorientierte Begleitung für Regulation, Rückverbindung und deinen Alltag.", href: links.audio },
      { name: "Somatic Karma Tarot App", price: "27 €", image: "/products/somatic-tarot-access.png", description: "Dein digitaler Kartenraum für die vier Narben. Die 78 archetypischen Spiegel verbinden Tarot-Symbolik, Körperwahrnehmung und Ahnenarchitektur.", href: links.tarot },
    ],
  },
  {
    id: "online-kurswelt",
    kicker: "STUFE 2 · ONLINE-KURSWELT",
    title: "Verstehe deine Muster. Vertiefe dein Wissen. Wende es selbst an.",
    intro: "Fundierte Selbstlernprogramme für Frauen, die das Somatic-Karma-System und seine vier Narben in ihrem eigenen Tempo tiefer durchdringen möchten.",
    offers: [
      { name: "Somatic Karma Tarot lernen", price: "Selbstlernkurs", image: "/products/tarot-kurs.png", description: "Ein modularer Online-Kurs, in dem du das symbolische System des Decks, seine Ahnenarchitektur und das eigenständige Legen und Deuten Schritt für Schritt fundiert erlernst.", status: "Release Dezember 2026" },
      { name: "Die vier Narben · Vertiefungskurse", price: "Coming soon", image: "/products/produktbild-narben-transformationskurs.png", description: "Vier eigenständige Online-Kurse zu Schuldnarbe, Schwesternarbe, Mutternarbe und Vaternarbe. Videos, Audios und Journaling-Prozesse begleiten dich durch die jeweilige Prägung und ihre Verkörperung im Alltag.", status: "Coming soon · Release-Termin folgt" },
    ],
  },
  {
    id: "individuelle-raeume",
    kicker: "STUFE 3 · INDIVIDUELLE RÄUME",
    title: "Gib deinem persönlichen Feld einen eigenen Raum",
    intro: "Individuell für dich geschaffene Somatic-Karma-Räume: energetische Schutzarbeit, fokussierte Kartenimpulse, vedische Sternenanalysen und persönliche Blessings.",
    offers: [
      { name: "Somatic Karma Archetypen-Schutzgrid", price: "101,01 €", image: "/products/schutzgrid.png", description: "Ein persönlicher Gegenstand wird energetisch in einen Schutzgrid eingebunden, der auf deine gegenwärtig aktivste Somatic-Karma-Narbe und ihre typische Grenze ausgerichtet ist." },
      { name: "Somatic Karma Tarot-Impuls", price: "99,99 €", image: "/products/tarot-legung.png", description: "Ein fokussiertes persönliches Reading zu deiner konkreten Frage. Du erhältst einen klaren Kartenimpuls für das, was jetzt gesehen und bewusst bewegt werden möchte." },
      { name: "Somatic Karma Sternenanalyse Kinderwunsch & weibliche Linie", price: "101,01 € · 303,03 €", image: "/products/kinderwunsch-lumia.png", description: "Eine vedische Chart-Dekodierung zu Mutternarbe, Kinderwunsch, Schoßraum-Dynamik und weiblicher Ahnenlinie – als kuratierte Basic-Audiofassung oder als von Jennifer Olivia persönlich eingesprochene Lumia Podcast-Edition." },
      { name: "Somatic Karma Sternenanalyse Berufung & Dharma", price: "101,01 € · 303,03 €", image: "/products/berufung-lumia.png", description: "Eine vedische Chart-Dekodierung zu Vaternarbe, Autorität, Berufung und Seelenauftrag – als kuratierte Basic-Audiofassung oder als von Jennifer Olivia persönlich eingesprochene Lumia Podcast-Edition." },
      { name: "Somatic Karma Card Deck Blessing", price: "101,11 €", image: "/products/card-deck-blessing.png", description: "Eine persönliche energetische Aktivierung für dein Karten- oder Orakeldeck, verbunden mit deinem Somatic-Karma-Archetypen und deiner intuitiven Praxis.", href: links.cardDeckBlessing },
    ],
  },
];
