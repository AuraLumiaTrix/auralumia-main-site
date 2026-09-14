export const links = {
  navigator: "https://somatic-karma-navigator.vercel.app/",
  transit: "https://somatic-karma-transit.vercel.app/",
  tarot: "https://somatic-karma-navigator.vercel.app/somatic-karma-tarot/",
  tarotCheckout: "https://somatic-karma-navigator.vercel.app/somatic-karma-tarot/",
  audio: "https://somatic-karma-navigator.vercel.app/audio-bundle/",
  code: "https://somatic-karma-navigator.vercel.app/somatic-karma-code/",
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
    id: "standortbestimmung",
    kicker: "STUFE 0 · KOSTENFREIER EINSTIEG",
    title: "Erkennen, was gerade wirkt",
    intro: "Dein Einstieg in Somatic Karma: eine klare erste Standortbestimmung, bevor du dich für einen weiterführenden Raum entscheidest.",
    offers: [
      { name: "Somatic Karma Navigator-Test", price: "Kostenfrei", image: "/hero-somatic-taupe-mobile.png", description: "Das interaktive Online-Tool macht sichtbar, welche der vier Somatic-Karma-Narben gegenwärtig am stärksten wirkt. Du erhältst eine erste Einordnung und den Themenpfad, der jetzt zu dir passt.", href: links.navigator },
    ],
  },
  {
    id: "digitale-tools",
    kicker: "STUFE 1 · DIGITALE REGULATION",
    title: "Deinen Archetyp im Alltag begleiten",
    intro: "Skalierbare Somatic-Karma-Tools für die selbstständige Anwendung: körperorientierte Audio-Reisen und ein digitaler Kartenraum, auf den du jederzeit zurückgreifen kannst.",
    offers: [
      { name: "Somatic Karma Archetypen-Anker", price: "47 €", image: "/products/somatic-audio-bundle.png", description: "Vier spezifische Audio-Reisen zur somatischen Regulation – abgestimmt auf Schuldnarbe, Schwesternarbe, Mutternarbe und Vaternarbe. Du arbeitest nicht nur am sichtbaren Lebensthema, sondern an der Prägung, die darunter im Körper weiterwirkt.", href: links.audio },
      { name: "Somatic Karma Web-App", price: "27 €", image: "/products/somatic-tarot-access.png", description: "Dein digitaler Zugang zur Tarot-Kartierung der vier Narben. Die 78 Karten verbinden Symbolsprache, Körperwahrnehmung und Ahnenarchitektur zu einem persönlichen Reflexionsraum.", href: links.tarot },
    ],
  },
  {
    id: "online-kurse",
    kicker: "STUFE 2 · ONLINE-KURS-WELT",
    title: "Das System verstehen und selbst anwenden",
    intro: "Modulare Selbstlernprogramme für Frauen, die nicht bei einem ersten Impuls stehen bleiben, sondern Symbolik, Ahnenarchitektur und die vier Narben fundiert durchdringen möchten.",
    offers: [
      { name: "Somatic Karma Tarot lernen", price: "Selbstlernkurs", image: "/products/tarot-kurs.png", description: "Ein modularer Online-Kurs, in dem du das symbolische System des Decks, seine Ahnenarchitektur und das eigenständige Legen und Deuten Schritt für Schritt fundiert erlernst." },
      { name: "Die vier Narben · Vertiefungskurse", price: "In Vorbereitung", image: "/hero-somatic-dark-mobile.png", description: "Vier eigenständige Kursräume zu Schuldnarbe, Schwesternarbe, Mutternarbe und Vaternarbe. Videos, Audios und Journaling-Prozesse begleiten dich dabei, die jeweilige Prägung zu erkennen, körperlich zu verstehen und neue innere Antworten zu entwickeln." },
    ],
  },
  {
    id: "individuelle-raeume",
    kicker: "STUFE 3 · INDIVIDUELLE RÄUME",
    title: "Wenn deine Geschichte persönlich gelesen werden will",
    intro: "Limitierte, individuell für dich erstellte Räume: energetische Schutzarbeit, fokussierte Readings, vedische Chart-Dekodierung und rituelle Begleitung an bedeutsamen Schwellen.",
    offers: [
      { name: "Energetischer Schutzgrid", price: "101,01 €", image: "/products/schutzgrid.png", description: "Jennifer Olivia bindet einen persönlichen Gegenstand energetisch in einen Schutzgrid ein, der auf deine derzeit aktivste Somatic-Karma-Narbe ausgerichtet wird – für bewusstere Abgrenzung in sensiblen Phasen." },
      { name: "Somatic Karma Audio-Spiegel", price: "99,99 €", image: "/products/tarot-legung.png", description: "Ein limitiertes, asynchrones Tiefen-Reading zu deiner konkreten Frage. Du erhältst ein persönlich eingesprochenes Audio und ein Foto deiner Legung als klaren Spiegel für das, was jetzt gesehen werden möchte." },
      { name: "Sternenanalyse · Kinderwunsch & weibliche Linie", price: "101,01 € · 303,03 €", image: "/products/kinderwunsch-lumia.png", description: "Eine fokussierte vedische Chart-Dekodierung zu Mutternarbe, Schoßraum-Dynamik, Kinderwunsch und weiblicher Ahnenlinie – als kuratierte Basic-Audiofassung oder als von Jennifer Olivia persönlich eingesprochene Lumia Podcast-Edition." },
      { name: "Sternenanalyse · Berufung & Dharma", price: "101,01 € · 303,03 €", image: "/products/berufung-lumia.png", description: "Eine fokussierte vedische Chart-Dekodierung zu Vaternarbe, Autorität, Berufung und Seelenauftrag – als kuratierte Basic-Audiofassung oder als von Jennifer Olivia persönlich eingesprochene Lumia Podcast-Edition." },
      { name: "Rituelles Schwellen-Blessing", price: "101,11 €", image: "/products/card-deck-blessing.png", description: "Eine persönliche Fernzeremonie für biografische Übergänge, Abschiede und Neuorientierungen. Jennifer Olivia hält den rituellen Raum, damit eine innere Schwelle bewusst gewürdigt und neu ausgerichtet werden kann." },
    ],
  },
];
