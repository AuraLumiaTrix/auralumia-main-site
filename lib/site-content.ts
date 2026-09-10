export const links = {
  navigator: "https://somatic-karma-navigator.vercel.app/",
  transit: "https://somatic-karma-transit.vercel.app/",
  tarot: "https://somatic-karma-navigator.vercel.app/somatic-karma-tarot/",
  audio: "https://somatic-karma-navigator.vercel.app/audio-bundle/",
  code: "https://somatic-karma-navigator.vercel.app/somatic-karma-code/",
  podcast: "https://karma-mit-zimt-und-zucker.letscast.fm/",
  podcastYoutube: "https://www.youtube.com/@Karma_mit_Zimt_und_Zucker",
  music: "https://music.youtube.com/search?q=Naru%20Hikari%20Rising%20of%20the%20Womb",
  welcomeVideo: "/aura-lumia-welcome.mp4",
  portraitVideo: "/jennifer-portrait-collage.mp4",
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
    title: "Eine konkrete Frage bewegen",
    intro: "Für Zeiten, in denen du nicht noch mehr Informationen brauchst, sondern einen klaren Impuls, einen inneren Anker oder energetischen Schutz.",
    offers: [
      { name: "Anker Meditation", price: "99,99 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1564819/fileca9a8823cc42a6afbf30c03404534c64.png", description: "Für Kinderwunsch, Berufung, Schoßraum oder den Mutter-Kind-Weg." },
      { name: "Tarot Impuls", price: "99,99 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539888/filef5e280419880bcba0fe3ae52df05a45f.png", description: "Ein fokussierter Blick auf die Frage, die gerade wirklich gesehen werden möchte." },
      { name: "Energetische Versiegelung & Schutz-Grids", price: "101,01 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539176/file68bb390b7fca7914f7de0659212a3a41.png", description: "Ein geschützter energetischer Raum für Übergänge und sensible Phasen." },
      { name: "Orakel Blessing – Card Deck Activation", price: "101,11 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539357/file287d4e9bdfa1c29bc97454e0350dd653.png", description: "Eine persönliche Aktivierung für dein Karten- oder Orakeldeck." },
    ],
  },
  {
    kicker: "03 · KINDERWUNSCH & WEIBLICHE LINIE",
    title: "Den eigenen Weg würdigen",
    intro: "Vedische Sternenanalysen und körperorientierte Energiearbeit für Frauen, die ihren Kinderwunsch oder Schoßraum tiefer verstehen möchten.",
    offers: [
      { name: "Kinderwunsch Sternenanalyse Basic", price: "101,01 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539291/filee7849be5e9bb96d3409b719bcd2163c7.png", description: "Ein erster präziser Blick auf die astrologischen Signaturen deines Weges." },
      { name: "Kinderwunsch Sternenanalyse Plus", price: "202,02 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539290/file1d7b78512dabd28ac3b22f69786dc6bb.png", description: "Mehr Tiefe, Zusammenhänge und persönliche Einordnung." },
      { name: "Kinderwunsch Sternenanalyse Lumia", price: "303,03 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539289/file88997dd0d3807f35372244f0d4d5f921.png", description: "Die umfassende astrologische Betrachtung deiner Kinderwunschreise." },
      { name: "Cosmic Womb Clearing", price: "303,03 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539220/file06c0843374a9036db5cb54e37e71e5c7.png", description: "Energetische Schoßraum-Reinigung für Loslassen, Schutz und neue Ausrichtung." },
    ],
  },
  {
    kicker: "04 · BERUFUNG",
    title: "Die eigene Richtung erkennen",
    intro: "Für die Schwelle zwischen dem, was funktioniert, und dem, was deiner inneren Wahrheit entspricht.",
    offers: [
      { name: "Berufungs-Sternenanalyse Basic", price: "101,01 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539674/filec50b5363470ba28d40501c971c949259.png", description: "Deine zentralen Begabungen und Berufungssignaturen im vedischen Chart." },
      { name: "Berufungs-Sternenanalyse Plus", price: "202,02 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539702/file2026d6c21da14ad058dc07053e8a6c34.png", description: "Vertiefende Analyse mit mehr Kontext für deine nächsten Entscheidungen." },
      { name: "Berufungs-Sternenanalyse Lumia", price: "303,03 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1539725/file3c941e3abddbd48d7f90621c404e27a4.png", description: "Die umfassende Deutung für Positionierung, Richtung und Seelenweg." },
    ],
  },
];
