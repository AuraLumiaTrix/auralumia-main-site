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
  kicker: string;
  title: string;
  intro: string;
  offers: Offer[];
};

export const offerGroups: OfferGroup[] = [
  {
    kicker: "01 · SOMATIC KARMA",
    title: "Deine Muster verstehen",
    intro: "Digitale Räume und persönliche Audios, die astrologische Erkenntnis in eine Erfahrung übersetzen, die im Körper ankommt.",
    offers: [
      { name: "Somatic Karma Tarot – Zugang", price: "27 €", image: "/products/somatic-tarot-access.png", description: "78 archetypische Spiegel für Licht, Schatten und deine innere Narbenarchitektur.", href: links.tarot },
      { name: "Somatic Karma Audio Bundle", price: "47 €", image: "/products/somatic-audio-bundle.png", description: "Meditation, Affirmation und Transformationsritual für deinen Hauptarchetypen.", href: links.audio },
      { name: "Somatic Karma Code – Essential", price: "97 €", image: "/products/somatic-code-essential.png", description: "Deine persönliche astrologische Audioanalyse in konzentrierter Form.", href: links.code },
      { name: "Somatic Karma Code – Podcast Edition", price: "333 €", image: "/products/somatic-code-podcast.png", description: "Von Jennifer Olivia persönlich eingesprochen – wie eine private Podcastfolge nur für dich.", href: links.code },
    ],
  },
  {
    kicker: "02 · KLARHEIT & RITUAL",
    title: "Innere Anker & energetische Begleitung",
    intro: "Für deinen Alltag und besondere Übergänge: eine individuell eingesprochene Anker-Meditation als tägliches Ritual, ein klärender Tarot-Impuls sowie persönliche Schutz-Grids und Card Blessings, die Jennifer Olivia energetisch für dich durchführt.",
    offers: [
      { name: "Anker Meditation", price: "99,99 €", image: "/products/anker-meditation.png", description: "Für Kinderwunsch, Berufung, Schoßraum oder den Mutter-Kind-Weg." },
      { name: "Tarot Impuls", price: "99,99 €", image: "/products/tarot-legung.png", description: "Ein fokussierter Blick auf die Frage, die gerade wirklich gesehen werden möchte." },
      { name: "Energetische Versiegelung & Schutz-Grids", price: "101,01 €", image: "/products/schutzgrid.png", description: "Ein geschützter energetischer Raum für Übergänge und sensible Phasen." },
      { name: "Orakel Blessing – Card Deck Activation", price: "101,11 €", image: "/products/card-deck-blessing.png", description: "Eine persönliche Aktivierung für dein Karten- oder Orakeldeck." },
      { name: "Tarot Online-Kurs", price: "Selbstlernkurs", image: "/products/tarot-kurs.png", description: "Neun Videos, begleitende Audios und Journaling für eine intuitive, fundierte Kartenpraxis." },
    ],
  },
  {
    kicker: "03 · KINDERWUNSCH & WEIBLICHE LINIE",
    title: "Den eigenen Weg würdigen",
    intro: "Vedische Sternenanalysen und körperorientierte Energiearbeit für Frauen, die ihren Kinderwunsch oder Schoßraum tiefer verstehen möchten.",
    offers: [
      { name: "Kinderwunsch Sternenanalyse Basic", price: "101,01 €", image: "/products/kinderwunsch-basic.png", description: "Deine von Jennifer Olivia kuratierte Sternenanalyse, als Audio mit einer KI-Stimme für dich aufbereitet." },
      { name: "Kinderwunsch Sternenanalyse Lumia", price: "303,03 €", image: "/products/kinderwunsch-lumia.png", description: "Die persönliche Podcast-Edition: umfassend gedeutet und von Jennifer Olivia selbst für dich eingesprochen." },
      { name: "Cosmic Womb Clearing", price: "303,03 €", image: "/products/schossraum-clearing.png", description: "Energetische Schoßraum-Reinigung für Loslassen, Schutz und neue Ausrichtung." },
    ],
  },
  {
    kicker: "04 · BERUFUNG",
    title: "Die eigene Richtung erkennen",
    intro: "Für die Schwelle zwischen dem, was funktioniert, und dem, was deiner inneren Wahrheit entspricht.",
    offers: [
      { name: "Berufungs-Sternenanalyse Basic", price: "101,01 €", image: "/products/berufung-basic.png", description: "Deine von Jennifer Olivia kuratierte Berufungsanalyse, als Audio mit einer KI-Stimme für dich aufbereitet." },
      { name: "Berufungs-Sternenanalyse Lumia", price: "303,03 €", image: "/products/berufung-lumia.png", description: "Die persönliche Podcast-Edition: umfassend gedeutet und von Jennifer Olivia selbst für dich eingesprochen." },
    ],
  },
];
