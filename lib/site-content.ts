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
  welcomeVideo: "/aura-lumia-welcome.mp4",
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
      { name: "Somatic Karma Tarot – Zugang", price: "27 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1887138/filefe6e2cb62a385cebad349bc9c9b5f0ec.png", description: "78 archetypische Spiegel für Licht, Schatten und deine innere Narbenarchitektur.", href: links.tarot },
      { name: "Somatic Karma Audio Bundle", price: "47 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1880162/file0127e5f3ade13f745903a7c4942706a3.png", description: "Meditation, Affirmation und Transformationsritual für deinen Hauptarchetypen.", href: links.audio },
      { name: "Somatic Karma Code – Essential", price: "97 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1880154/file4fd969433ca71cd26623f8eb24af4c17.png", description: "Deine persönliche astrologische Audioanalyse in konzentrierter Form.", href: links.code },
      { name: "Somatic Karma Code – Podcast Edition", price: "333 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1880159/filef6fe4f2a79bc4320b31c5879721d8fe3.png", description: "Von Jennifer Olivia persönlich eingesprochen – wie eine private Podcastfolge nur für dich.", href: links.code },
    ],
  },
  {
    kicker: "02 · KLARHEIT & RITUAL",
    title: "Klarheit für deine nächste Entscheidung",
    intro: "Persönliche Tarotimpulse, individuell eingesprochene Meditationen und energetische Rituale für konkrete Lebensfragen – etwa Kinderwunsch, Berufung, Schoßraum oder den Mutter-Kind-Weg.",
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
      { name: "Kinderwunsch Sternenanalyse Basic", price: "101,01 €", image: "/products/kinderwunsch-basic.png", description: "Ein erster präziser Blick auf die astrologischen Signaturen deines Weges." },
      { name: "Kinderwunsch Sternenanalyse Plus", price: "202,02 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539290/file1d7b78512dabd28ac3b22f69786dc6bb.png", description: "Mehr Tiefe, Zusammenhänge und persönliche Einordnung." },
      { name: "Kinderwunsch Sternenanalyse Lumia", price: "303,03 €", image: "/products/kinderwunsch-lumia.png", description: "Die umfassende astrologische Betrachtung deiner Kinderwunschreise." },
      { name: "Cosmic Womb Clearing", price: "303,03 €", image: "/products/schossraum-clearing.png", description: "Energetische Schoßraum-Reinigung für Loslassen, Schutz und neue Ausrichtung." },
    ],
  },
  {
    kicker: "04 · BERUFUNG",
    title: "Die eigene Richtung erkennen",
    intro: "Für die Schwelle zwischen dem, was funktioniert, und dem, was deiner inneren Wahrheit entspricht.",
    offers: [
      { name: "Berufungs-Sternenanalyse Basic", price: "101,01 €", image: "/products/berufung-basic.png", description: "Deine zentralen Begabungen und Berufungssignaturen im vedischen Chart." },
      { name: "Berufungs-Sternenanalyse Plus", price: "202,02 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539702/file2026d6c21da14ad058dc07053e8a6c34.png", description: "Vertiefende Analyse mit mehr Kontext für deine nächsten Entscheidungen." },
      { name: "Berufungs-Sternenanalyse Lumia", price: "303,03 €", image: "/products/berufung-lumia.png", description: "Die umfassende Deutung für Positionierung, Richtung und Seelenweg." },
    ],
  },
];
