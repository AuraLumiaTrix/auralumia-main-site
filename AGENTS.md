# AuraLumia: verbindliche Arbeitsregeln

Diese Datei gilt für das gesamte Repository. Sie ist vor jeder Änderung zusammen mit
`docs/AURALUMIA_PROJECT_CONTEXT.md`, `docs/AURALUMIA_STATUS.md` und
`docs/AURALUMIA_HANDOFF.md` vollständig zu lesen.

## 1. Vor jeder Arbeit

1. Bestätige das lokale Repository:
   `C:\Users\jenni\Documents\Codex\2026-09-10\hier-f-r-dich-zwei-links\outputs\auralumia-site`.
2. Prüfe mit `git status --short --branch` den aktiven Branch und den Arbeitsbaum.
3. Das laufende Redesign findet ausschließlich auf `redesign-auralumia` statt, solange
   Jennifer nichts anderes ausdrücklich beauftragt. `main` ist der Produktionsbranch.
4. Lies die vier Projektdokumente und anschließend die tatsächlich betroffenen Dateien.
5. Vorhandene lokale Änderungen gehören der Nutzerin. Nicht überschreiben,
   zurücksetzen, bereinigen oder als eigene Arbeit ausgeben.
6. Der aktuelle Code- und Git-Stand hat Vorrang vor älteren Chatangaben. Bei einem
   Widerspruch nicht raten, sondern ihn benennen.

## 2. Nur den beauftragten Bereich bearbeiten

- Ändere nur ausdrücklich beauftragte Dateien, Komponenten und Funktionen.
- Gestalte keine angrenzenden Bereiche oder bereits freigegebenen Seiten eigenmächtig um.
- Ergänze keine ungefragten Features, Texte oder Refactorings.
- Entferne keine bestehenden Inhalte oder Dateien ohne ausdrückliche Zustimmung.
- Wenn die Umsetzung weitere Dateien erfordert, erkläre zuerst warum und hole eine
  Erweiterung des Arbeitsumfangs ein.
- Eine Diagnose oder Bestandsaufnahme ist grundsätzlich nur lesend, sofern nicht auch
  eine Umsetzung verlangt wurde.

## 3. Globale Dateien besonders schützen

Besondere Vorsicht gilt für:

- `app/globals.css`
- `app/layout.tsx`
- `components/site-header.tsx` und `components/site-footer.tsx`
- gemeinsam verwendete Komponenten unter `components/`
- globale Schriften, Metadaten und Layoutregeln
- zentrale Produktdaten und Links in `lib/site-content.ts`
- Konfigurationsdateien wie `next.config.ts`, `package.json` und `tsconfig.json`

Vor einer Änderung an globalen Styles oder gemeinsamen Komponenten ist ihre Verwendung
auf allen Seiten zu untersuchen. Für lokale Korrekturen sind seitenspezifische Klassen zu
verwenden. Aktuelle Präfixe sind unter anderem `.landing-home`, `.sk-page`,
`.offers-v2-page`, `.mentoring-v2-page`, `.blueprint-page`, `.luminess-page` und
`.about-v2`.

## 4. Git- und Branch-Sicherheit

- `main` niemals ohne gesonderten Auftrag auschecken, verändern, committen oder pushen.
- Keine Branches eigenmächtig mergen oder löschen.
- Keine Force-Pushes, Hard Resets oder Rebases ohne ausdrückliche Genehmigung.
- Keine automatische Bereinigung vermeintlich überflüssiger Dateien.
- Vor jedem Commit den vollständigen Diff und jede vorgesehene Datei einzeln prüfen.
- Nur explizite Pfade stagen, zum Beispiel `git add -- app/seite/page.tsx`.
  Kein pauschales `git add .` oder `git add -A`, wenn dadurch fremde Änderungen erfasst
  werden könnten.
- Zugangsdaten, `.env`-Dateien, lokale Build-Ausgaben und private Medien dürfen nicht in
  Git gelangen.

## 5. Lokal, Commit, Push und Deployment sind getrennte Schritte

Standardmäßig werden Änderungswünsche nur lokal umgesetzt.

1. Lokale Änderung: erst nach Auftrag ausführen.
2. Commit: nur nach ausdrücklicher Freigabe.
3. Push nach GitHub: nur nach ausdrücklicher Freigabe und ausschließlich auf den
   genannten Branch.
4. Vercel-Preview: ein Push auf `redesign-auralumia` löst voraussichtlich automatisch ein
   Preview-Deployment aus; dies vor dem Push berücksichtigen.
5. Produktion: Merge oder Push nach `main` und damit eine Produktionsveröffentlichung
   benötigen immer eine eigene, eindeutige Freigabe.

Nach jedem dieser Schritte den tatsächlichen Zustand nennen. Nicht behaupten, etwas sei
committet, gepusht, deployed oder geprüft worden, wenn es nicht wirklich geschehen ist.

## 6. Medien und neue Dateien

- Vor Verwendung klären, für welchen konkreten Bereich das Medium bestimmt ist.
- Ein neues Hero-Bild darf nicht automatisch andere Bilder ersetzen.
- Originale nicht überschreiben. Für bearbeitete Varianten nachvollziehbare Dateinamen
  verwenden und Originale bewahren.
- Desktop- und Mobile-Bildausschnitt, Dateigröße, Ladeverhalten, Alt-Text und öffentliche
  Verwendbarkeit prüfen.
- Keine privaten oder personenbezogenen Dateien versehentlich unter `public/` ablegen.
- Keine privaten Google-Drive-Links, Tokens oder Zugangsdaten veröffentlichen.
- Vorhandene persönliche Videos und Originalbilder erhalten, auch wenn sie aktuell nicht
  gerendert werden.

## 7. Keine erfundenen Inhalte

Niemals Preise, Angebote, Leistungen, Termine, Testimonials, Referenzen,
Qualifikationen, Zertifikate, Podcast-Folgen, Buchungslinks, persönliche Geschichten oder
methodische Zuordnungen erfinden. Bestätigte Angaben stehen in den Projektdokumenten und
im aktuellen Code. Bei Unklarheit nachfragen.

Wichtig: `lib/site-content.ts` enthält teilweise ältere Angebotsdaten. Für Preise ist die
Tabelle in `docs/AURALUMIA_PROJECT_CONTEXT.md` der vereinbarte Stand; sichtbare
Abweichungen im Code sind als offene Inkonsistenz zu behandeln und nicht stillschweigend
zu übernehmen.

## 8. Sprache, Marke und rechtliche Sicherheit

- Marke: `AuraLumia`; Methode: `Somatic Karma`; Ansprache: persönliches deutsches Du.
- Ton: sanft, klar, hochwertig, feminin, spirituell und nutzenorientiert.
- Keine medizinischen oder therapeutischen Wirkversprechen.
- Das Wort „Heilung“ nicht in neu geschriebenen AuraLumia-Werbetexten verwenden.
- Spirituelle Deutungen nicht als psychologische oder medizinische Diagnosen darstellen.
- Somatic Karma ist Jennifers eigene spirituelle Methode und keine wissenschaftlich
  validierte Diagnostik.
- Bestehende Datenschutz- und Einwilligungsmechanismen erhalten.
- Keine neuen Trackingdienste oder externen Einbettungen ohne Zustimmung.
- Ein Kontaktformular nicht als funktionsfähig darstellen, solange kein Versanddienst
  angebunden und geprüft ist.
- Rechtliche Seiten (`/impressum`, `/datenschutz`, `/agb`) nur auf ausdrücklichen Auftrag
  verändern. Neue rechtlich oder datenschutzrelevante Funktionen vor Produktion zur
  fachlichen Prüfung kennzeichnen.

## 9. URLs und bestehende Funktionen schützen

Insbesondere erhalten:

- bestehende Routen und interne Anker
- Header, Footer und mobile Navigation
- Produkt-, Kauf-, Podcast- und Musiklinks
- Bewerbungs- und Verfügbarkeitswege
- Tarot-Archiv mit Suche, Filtern und Detailansicht
- echte Testimonials
- Impressum, Datenschutz und AGB
- `/danke` einschließlich `noindex`
- YouTube-Einwilligung über `components/youtube-listener.tsx`

Externe Ziele sollen weiterhin in einem neuen Tab öffnen, sofern dies für den bestehenden
Link bereits so vorgesehen ist. Links nicht ohne Prüfung ersetzen.

## 10. Designsystem respektieren

- Überschriften: Cormorant Garamond; Fließtext und Bedienelemente: Manrope.
- Farbwelt: Creme, Rosé, zartes Lavendel, Taupe; ruhige weiße Abschnitte im Wechsel mit
  atmosphärischen Bildflächen.
- Runde Buttons und Karten, feine Linien/Symbole, dezente Schatten, großzügige
  Abschnittsabstände und kompakte Inhalte innerhalb der Karten.
- Keine willkürlichen Textausschnitte aus Mockups als Webassets.
- Keine dekorativen Pfeile auf Seiten, auf denen Jennifer ihre Entfernung ausdrücklich
  verlangt hat; derzeit besonders `/ueber-jennifer`.
- Bestehende freigegebene Gestaltung nicht ohne Auftrag neu interpretieren.

## 11. Technische Qualitätsprüfung

Nach Codeänderungen, soweit anwendbar:

```powershell
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Zusätzlich kontrollieren:

- Desktop, Tablet und Smartphone
- keine horizontalen Überläufe oder Textüberlagerungen
- Bilder, interne Links, externe Links und Anker
- interaktive Komponenten, Audio/Video und FAQ
- Tastaturbedienung, Fokus und sinnvolle Alternativtexte
- keine unnötige Performance-Verschlechterung

Wenn eine Prüfung nicht möglich war, die Einschränkung ausdrücklich nennen.

## 12. Zusammenarbeit und Abschluss einer Aufgabe

- Nur notwendige Rückfragen stellen und technische Sachverhalte verständlich erklären.
- Unerwartete Risiken vor einer Änderung melden.
- In kleinen, kontrollierbaren Schritten arbeiten.
- Nach jeder Aufgabe kurz nennen: geänderte Dateien, geprüfte Funktionen, Testresultate,
  Git-Status sowie Commit-/Push-/Deployment-Status.
- Bei wesentlichen nächsten Schritten auf Jennifers Entscheidung warten.
