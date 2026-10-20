# AuraLumia – Entwicklungsstand

Verifiziert am **20. Oktober 2026** im Branch `redesign-auralumia`.

## Gesamtstatus

- Aktiver Branch: `redesign-auralumia`
- HEAD: `73912080c0a1c8be0ef0f16d8babba8c16699620`
- Remote-Branch: gleicher Commit; vor Beginn dieser Dokumentation war der Arbeitsbaum
  sauber.
- Produktionsbranch `main`:
  `d22517f9d1c9e64cc79824714aab7548d18f3bb2`
- Abstand zu `main`: 14 Commits voraus, keine getrennte Gegenentwicklung festgestellt.
- Letztes geprüftes Redesign-Preview: READY.
- Diese Dokumentationsdateien sind bewusst lokal und noch nicht committet oder gepusht.

„Technisch umgesetzt“ bedeutet nicht automatisch „endgültig gestalterisch freigegeben“.
Freigaben werden unten nur genannt, wenn sie aus der bisherigen Zusammenarbeit eindeutig
hervorgehen.

## `/` – Startseite

- Quelle: `app/page.tsx`, Styles in `app/globals.css` unter `.landing-home`.
- Status: Redesign umgesetzt und von Jennifer gestalterisch freigegeben.
- Vorhanden: Frauenkreis-Hero, vier karmische Narben, nicht-lineare Angebotswege,
  beliebte Angebote, Podcast, Über-Jennifer-Teaser, echte Testimonials und Abschluss-CTA.
- Offen: bestätigte Preis- und Linkkorrekturen kontrolliert einpflegen.
- Bekannte Probleme:
  - Starter-Kits zeigen 47 € statt 49 €.
  - Link `/angebote#starter-kits` trifft keinen aktuellen Anker; Ziel wäre nach Prüfung
    `#meditationspakete`.
  - Tarot-App zeigt 9 €/Monat statt 7,49 €/Monat.
- Freigabe: **Ja, Gestaltung freigegeben**; die genannten Datenfehler sind trotzdem offen.

## `/somatic-karma` – Methode

- Quelle: `app/somatic-karma/page.tsx`, Styles unter `.sk-page`.
- Status: Redesign umgesetzt und vorläufig freigegeben.
- Vorhanden: Hero, vier Narben/Grundbedürfnisse, vier echte Triadengrafiken,
  verzweigter Deutungsprozess, Tarot-Arcana, vier Elementgrafiken und Abschluss-CTA.
- Offen: späterer gezielter Bildaustausch ist möglich; methodische Inhalte nur nach
  Rücksprache ändern.
- Bekannte Probleme: keine akuten Funktionsfehler dokumentiert.
- Freigabe: **Vorläufig ja**; spätere Bildverbesserungen ausdrücklich offen.

## `/angebote` – Audiokurse, App und Selbstlernangebote

- Quelle: `app/angebote/page.tsx`, Styles unter `.offers-v2-page`.
- Status: neu strukturiert und nachträglich korrigiert.
- Vorhanden: vereinfachter Hero, freie Symbolbotschaften, funktionierende Filter/Anker,
  Navigator, vier Meditationspakete, Tarot-App/-Kurs, Venus und Lilith sowie Hinweis auf
  Mentoring.
- Offen: Coming-soon-Produkte später mit finalen Bildern und echten Links versehen.
- Bekannte Probleme: Die sichtbaren Werte dieser Seite stimmen mit der vereinbarten
  Preisliste überein, aber zentrale ältere Daten in `lib/site-content.ts` widersprechen
  ihnen.
- Freigabe: **Basisgestaltung und die drei Korrekturen wurden akzeptiert; keine separate
  abschließende Gesamtfreigabe dokumentiert.**

## `/mentoring` – Begleitung und Ausbildung

- Quelle: `app/mentoring/page.tsx`, Styles unter `.mentoring-v2-page`.
- Status: Redesign umgesetzt und freigegeben.
- Vorhanden: Blueprint, Aura Luminess, High Touch mit Premiumbild, drei optionale
  Vertiefungsmodule, echte Elena-M.-Stimme, Angebotsorientierung, Blueprint-Verfügbarkeit,
  Bewerbungshinweis für Samhain/Walpurgis und Navigator-CTA.
- Offen: später echte Fotos der Absolventinnen mit Zertifikaten ergänzen. Keine erfundenen
  Stimmen verwenden.
- Bekannte Probleme: Anfrage und Bewerbung sind informative Bereiche, kein aktives
  Formular oder Buchungssystem.
- Freigabe: **Ja**.

## `/drei-monde-blueprint` – Detailseite

- Quelle: `app/drei-monde-blueprint/page.tsx`, Styles unter `.blueprint-page`.
- Status: umgesetzt, technisch geprüft und freigegeben; FAQ-Schrift wurde nachträglich
  vergrößert.
- Vorhanden: Hero/Preis, sechs Leistungsbausteine, Zielgruppe, Drei-Monats-Ablauf,
  mögliche Anschlusswege, FAQ und CTA zur Verfügbarkeit auf `/mentoring`.
- Offen: tatsächlichen Anfrage-/Buchungsprozess erst nach gesonderter Entscheidung
  anbinden.
- Bekannte Probleme: keine akuten Funktionsfehler dokumentiert.
- Freigabe: **Ja**.

## `/neun-monde-aura-luminess` – Ausbildungsdetailseite

- Quelle: `app/neun-monde-aura-luminess/page.tsx`, Styles unter `.luminess-page`.
- Status: vollständig umgesetzt; Typografie wurde an das globale Redesign angeglichen.
- Vorhanden: Hero/Preis, Lerninhalte, vier Planetengruppen, Werkzeuge, Neun-Monde-Aufbau,
  drei optionale Vertiefungen, Zielgruppe, FAQ und Bewerbungsbereich.
- Offen: echte Teilnehmerinnenstimmen/Fotos später ergänzen; finalen Bewerbungsablauf und
  Termine bei Veröffentlichung erneut bestätigen.
- Bekannte Probleme: Stimmenbereich ist bewusst nur vorbereitet; keine erfundenen
  Testimonials. Bewerbung ist kein aktiver Formularprozess.
- Freigabe: **Technisch umgesetzt, aber keine eindeutige endgültige gestalterische
  Freigabe nach der letzten Korrektur dokumentiert.**

## `/ueber-jennifer` – persönliche Vorstellung

- Quelle: `app/ueber-jennifer/page.tsx`, Styles unter `.about-v2`.
- Status: Redesign umgesetzt und mehrfach gezielt überarbeitet; jüngste Preview wurde
  technisch und visuell kontrolliert.
- Vorhanden:
  - Frauenkreis-Hero mit Jennifer links, weichem Verlauf und ohne Textkasten
  - drei korrekt zugeordnete Storybilder
  - Wertebereich
  - Podcastbild, YouTube-Link und drei native HTML5-Audioplayer
  - Musikbereich mit drei echten/aus Originalen gekürzten Stimmen
  - Arbeitsmöglichkeiten, echte anonymisierte Begleitungsstimme
  - Kontaktbereich mit `mailto:` und eindeutig deaktiviertem Vorschauformular
  - FAQ und Abschluss-CTA
  - keine dekorativen Pfeile auf dieser Seite
- Offen:
  - bestätigten Spotify-Podcast-Link ergänzen, sobald vorhanden
  - möglichen Wiedereinbau des persönlichen Über-mich-Videos planen
  - sicheren Formularversand auswählen und datenschutzrechtlich prüfen
- Bekannte Probleme: drei MP3-Dateien sind groß (ca. 19–25 MB); Spotify fehlt bewusst.
- Freigabe: **Noch keine ausdrückliche endgültige gestalterische Freigabe nach der
  jüngsten Audio-/Hero-Korrektur dokumentiert; Feedback steht aus.**

## `/podcast` – Karma mit Zimt und Zucker

- Quelle: `app/podcast/page.tsx`; ältere gemeinsame Komponenten/Styles.
- Status: bestehende funktionsfähige Seite, noch nicht im vollständigen neuen Design.
- Vorhanden: Hero, consent-gesteuerte YouTube-Hörmöglichkeit über
  `YoutubeListener`, Verweise auf Somatic Karma und Podcast-Plattformen.
- Offen: Redesign; entscheiden, ob und wie die drei vorhandenen Audiodateien auch hier
  verwendet werden; Spotify-Link bestätigen; Text an aktuelle Copy-Regeln angleichen.
- Bekannte Probleme: bestehender Alttext enthält eine Formulierung mit „Heilung“; dies ist
  bei einer beauftragten Überarbeitung zu korrigieren, nicht ungefragt.
- Freigabe: **Nein, weitere Entwicklung ausdrücklich gewünscht.**

## `/musik` – Naru Hikari

- Quelle: `app/musik/page.tsx`; ältere gemeinsame Komponenten/Styles.
- Status: bestehende funktionsfähige Seite, noch nicht vollständig neu gestaltet.
- Vorhanden: Albumdarstellung, fünf consent-gesteuerte YouTube-Tracks, YouTube- und
  Spotify-Verweise, Musik-Testimonials.
- Songs und YouTube-IDs:
  - Loving Is Devotion – `rLr9CtIl-OA`
  - No Shame – `-CfII5sW2Uk`
  - In Japan – `8_4pnSai_Vg`
  - Goddess – `VepDlf7S86Y`
  - Come What May – `TN5086zEU8w`
- Offen: Redesign; direkte Spotify-Künstler-/Album-URL bestätigen; alte Formulierungen an
  aktuelle Copy-Regeln anpassen.
- Bekannte Probleme: Spotify führt derzeit nur zu einer Suche. Bestehende Inhalte nutzen
  teilweise „Healing“; bei einer beauftragten Überarbeitung prüfen.
- Freigabe: **Nein, weitere Entwicklung ausdrücklich gewünscht.**

## `/tarot` – Tarot-Archiv

- Quelle: `app/tarot/page.tsx`, `components/tarot-library.tsx`,
  `lib/tarot-data.ts`, Karten unter `public/tarot-cards/`.
- Status: bestehende interaktive Seite, nicht Teil der jüngsten Redesign-Phasen.
- Vorhanden: 78 Karten, Suche, Kategorien/Filter, Detaildialog, Tastatur- und
  Escape-Unterstützung sowie externer App-Link.
- Offen: Preisaussage mit bestätigtem App-Modell abstimmen; späteres Redesign nur auf
  Auftrag.
- Bekannte Probleme: CTA nennt 27 €, während die vereinbarte App 7,49 €/Monat kostet.
- Freigabe: **Keine aktuelle Redesign-Freigabe dokumentiert.**

## `/danke` – Kauf-Dankeseite

- Quelle: `app/danke/page.tsx`.
- Status: bestehend und funktionsfähig als versteckte Folgeseite nach einem Kauf.
- Vorhanden: Bestellbestätigung, sichtbarer Hinweis auf weitere Schritte, Detailabschnitt,
  Rückkehr zur Startseite und `robots: noindex, nofollow`.
- Offen: pro Produkt prüfen, welche tatsächlichen Zugangs- und Rückmeldeschritte gelten;
  CopeCart-Linksetzung erfolgt außerhalb dieses Repositorys.
- Bekannte Probleme: keine akuten technischen Probleme dokumentiert.
- Freigabe: **Funktional abgestimmt; nicht Teil des aktuellen visuellen Redesigns.**

## Rechtliche Seiten

### `/impressum`

- Quelle: `app/impressum/page.tsx`.
- Status: vorhanden; schützen.
- Offen: nur nach ausdrücklichem Auftrag und gegebenenfalls fachlicher Rechtsprüfung.
- Hinweis: Kontaktadresse unterscheidet sich vom neuen allgemeinen Kontakt.

### `/datenschutz`

- Quelle: `app/datenschutz/page.tsx`.
- Status: vorhanden; enthält Informationen zu Vercel, Strato, CopeCart, YouTube und den
  Anker `#youtube`.
- Offen: bei neuen Formular-, Tracking-, Audio- oder Embed-Funktionen fachlich prüfen.
- Hinweis: YouTube-Consent darf nicht umgangen werden.

### `/agb`

- Quelle: `app/agb/page.tsx`.
- Status: vorhanden; schützen.
- Offen: nur auf ausdrücklichen Auftrag und gegebenenfalls fachliche Rechtsprüfung.

Eine juristische Wirksamkeitsprüfung wurde nicht vorgenommen.

## Seitenübergreifende offene Punkte

1. Preise und Anker zwischen Startseite, Angebotsseite, Tarot-Seite und
   `lib/site-content.ts` konsolidieren.
2. Podcast und Musik im neuen Design weiterentwickeln.
3. Direkte Spotify-Ziele bestätigen.
4. Kontaktformular/Newsletter technisch und datenschutzkonform planen.
5. Große Medien hinsichtlich Performance prüfen, ohne Originale zu verlieren.
6. Fehlende finale Produktbilder und Links für Coming-soon-Angebote ergänzen.
7. Spätere Absolventinnenbilder und echte Ausbildungsstimmen vorbereiten.
8. SEO-Infrastruktur wie Sitemap/Robots bei Bedarf separat prüfen.
