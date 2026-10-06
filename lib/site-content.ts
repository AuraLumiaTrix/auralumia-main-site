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
    id: "orientierung",
    kicker: "01 · KOSTENFREIE ORIENTIERUNG",
    title: "Erkenne zuerst, wo dein System nach Entlastung ruft.",
    intro: "Der Navigator gibt dir eine klare erste Landkarte. So wählst du nicht irgendein Angebot, sondern den Weg, der zu deinem gegenwärtigen Muster passt.",
    offers: [
      { name: "Somatic Karma Navigator-Test", price: "Kostenfrei", image: "/products/produktbild-karma-navigator.png", description: "Das interaktive Online-Tool macht sichtbar, welche der vier Somatic-Karma-Narben gegenwärtig am stärksten wirkt. Du erhältst eine erste Einordnung und einen passenden Themenpfad für deinen nächsten Schritt.", href: links.navigator },
    ],
  },
  {
    id: "starter-kits",
    kicker: "02 · DIE VIER NARBEN-STARTER-KITS",
    title: "Gib deinem erkannten Muster eine konkrete tägliche Praxis.",
    intro: "Jedes Kit verbindet drei gezielte Audios: somatische Entlastung, Ahnenreflexion und eine neue Verankerung. Die Produktbilder sind Platzhalter bis zur finalen Veröffentlichung.",
    offers: [
      { name: "Mutternarbe · Urvertrauen", price: "47 €", image: "/products/anker-meditation.png", description: "Für Bindung, emotionale Sicherheit und die Rückkehr in einen inneren Rhythmus, der dich wirklich trägt.", status: "Coming soon" },
      { name: "Vaternarbe · Selbstbestimmung", price: "47 €", image: "/products/produktbild-audio-bundle.png", description: "Für klare Grenzen, eigene Regeln und Autonomie ohne permanenten inneren Widerstand.", status: "Coming soon" },
      { name: "Schuldnarbe · Empfangen", price: "47 €", image: "/products/somatic-audio-bundle.png", description: "Für Genussfähigkeit, materielle Fülle und das Erleben, dass du empfangen darfst, ohne dich schuldig zu fühlen.", status: "Coming soon" },
      { name: "Schwesternarbe · Sichtbarkeit", price: "47 €", image: "/products/produktbild-narben-transformationskurs.png", description: "Für Berufung, gesunde Gleichrangigkeit und den Mut, deinen Platz sichtbar einzunehmen.", status: "Coming soon" },
      { name: "Alle vier Starter-Kits", price: "147 €", image: "/products/produktbild-audio-bundle.png", description: "Die vollständige Audio-Bibliothek für alle vier Narben – damit du auch wechselnde Dynamiken sicher begleiten kannst.", status: "Coming soon" },
    ],
  },
  {
    id: "frequenzraeume",
    kicker: "03 · AURALUMIA DEEP DIVES",
    title: "Betritt eine weibliche Frequenzwelt, wenn dein Thema tiefer ruft.",
    intro: "Zwei kuratierte Erlebnisräume aus Audios, Workbook und Ritualen. Nicht als schnelle Lösung, sondern als bewusste Vertiefung in deinem eigenen Tempo.",
    offers: [
      { name: "Venus Raum · Ur-Empfangen", price: "149 €", image: "/products/kinderwunsch-lumia.png", description: "Ein Raum für bedingungslose Selbstliebe, Herzöffnung und die Erinnerung daran, dass Empfangen kein Verdienst sein muss.", status: "Coming soon" },
      { name: "Lilith Raum · Urkraft", price: "149 €", image: "/products/schossraum-clearing.png", description: "Ein Raum für Sinnlichkeit, Erotik, Leidenschaft und das sanfte Ablegen übernommener Scham.", status: "Coming soon" },
      { name: "Venus & Lilith · Duo", price: "249 €", image: "/products/aura-luminess-premium.png", description: "Beide Frequenzwelten als zusammenhängender Weg zwischen weichem Empfangen und ungefilterter weiblicher Kraft.", status: "Coming soon" },
    ],
  },
  {
    id: "tarot-werkzeuge",
    kicker: "04 · DEIN DIGITALER SPIEGEL",
    title: "Nutze Tarot als Reflexionsraum – nicht als schnelle Vorhersage.",
    intro: "Die Somatic Karma Tarot-Werkzeuge übersetzen Symbolik in Körperwahrnehmung, Ahnenarchitektur und selbstbestimmte nächste Schritte.",
    offers: [
      { name: "Somatic Karma Tarot App", price: "9–14 € / Monat · 99 € / Jahr", image: "/products/somatic-tarot-access.png", description: "Dein digitaler Kartenraum für die tägliche Selbstpraxis. Ziehe intuitiv Karten und begegne dir mit Klarheit, Mitgefühl und Bewusstsein.", href: links.tarot },
      { name: "Somatic Karma Tarot Onlinekurs", price: "149–222 €", image: "/products/tarot-kurs.png", description: "Lerne das Deck, seine Ahnenarchitektur und die eigenständige Deutung Schritt für Schritt als fundiertes Spiegelsystem kennen.", status: "Release Dezember 2026" },
      { name: "Somatic Karma Card Deck Blessing", price: "101,11 €", image: "/products/card-deck-blessing.png", description: "Eine persönliche energetische Aktivierung für dein Karten- oder Orakeldeck, verbunden mit deinem Archetypen und deiner intuitiven Praxis.", href: links.cardDeckBlessing },
    ],
  },
];
