# AuraLumia – kompakte Übergabe für einen neuen Codex-Chat

## Aktueller Stand

- Repository:
  `C:\Users\jenni\Documents\Codex\2026-09-10\hier-f-r-dich-zwei-links\outputs\auralumia-site`
- GitHub: `AuraLumiaTrix/auralumia-main-site`
- Aktiver Arbeitsbranch: `redesign-auralumia`
- Redesign-HEAD bei Übergabe:
  `73912080c0a1c8be0ef0f16d8babba8c16699620`
- Produktionsbranch: `main`
- Produktions-HEAD bei Übergabe:
  `d22517f9d1c9e64cc79824714aab7548d18f3bb2`
- Produktion: `https://www.auralumia.de`
- Stabile bekannte Redesign-Preview:
  `https://auralumia-main-site-git-redesign-auralumia-oasislumiatrix.vercel.app`
- Beim geprüften Stand war die aktuelle Preview READY. Die Preview kann wegen Vercel
  Deployment Protection eine Anmeldung verlangen.
- Die neue Dokumentation ist zunächst nur lokal. Sie wurde in diesem Übergabeauftrag
  weder committet noch gepusht.

## Zuerst lesen

1. `AGENTS.md` – verbindliche Sicherheits- und Arbeitsregeln
2. `docs/AURALUMIA_PROJECT_CONTEXT.md` – Marke, Methode, Angebote, Technik, Medien,
   Integrationen und Entscheidungen
3. `docs/AURALUMIA_STATUS.md` – Status und Freigabe jeder Route
4. Danach erst die konkret betroffenen Quell- und Style-Dateien

## Sicherheitsregeln in Kurzform

- Für das Redesign ausschließlich auf `redesign-auralumia` arbeiten.
- `main` ist Produktion und darf ohne separate eindeutige Freigabe nicht verändert,
  gemergt oder gepusht werden.
- Vor jeder Bearbeitung Branch und Arbeitsbaum prüfen.
- Standard ist **nur lokal**. Commit, Push, Preview und Produktion sind getrennte Schritte
  und benötigen jeweils die passende Freigabe.
- Nur den ausdrücklich beauftragten Bereich ändern; keine Nebenarbeiten oder
  unbeauftragten Text-/Designänderungen.
- Vor globalem CSS oder gemeinsamen Komponenten deren Nutzung auf anderen Seiten prüfen.
- Keine Inhalte, Preise, Links, Testimonials oder Methodendetails erfinden.
- Keine Zugangsdaten, privaten Drive-Links oder personenbezogenen Medien veröffentlichen.
- Rechtliche Seiten, YouTube-Consent, funktionierende URLs/Anker und `/danke` mit
  `noindex` schützen.
- Das Kontaktformular ist nicht aktiv und darf keinen erfolgreichen Versand vortäuschen.

## Kontrollierter Arbeitsablauf

### 1. Zustand prüfen

```powershell
Set-Location 'C:\Users\jenni\Documents\Codex\2026-09-10\hier-f-r-dich-zwei-links\outputs\auralumia-site'
git status --short --branch
git rev-parse HEAD
git diff --stat
git diff
```

Wenn der Branch nicht `redesign-auralumia` ist oder fremde Änderungen vorliegen, vor
einer Bearbeitung anhalten und Jennifer informieren.

### 2. Lokal umsetzen und prüfen

Nur beauftragte Dateien bearbeiten. Danach je nach Aufgabe:

```powershell
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Zusätzlich Desktop, Tablet, Mobil, Links, Anker, Medien, Interaktionen und Überläufe
kontrollieren. Nicht durchgeführte Prüfungen ausdrücklich benennen.

### 3. Commit nur nach Freigabe

```powershell
git diff --check
git diff -- path\zur\datei
git add -- path\zur\datei
git diff --cached --check
git diff --cached
git commit -m "Klare Beschreibung"
```

Keine pauschalen Staging-Befehle verwenden.

### 4. Push/Preview nur nach Freigabe

```powershell
git push origin redesign-auralumia
```

Dieser Push löst normalerweise automatisch ein Vercel-Preview-Deployment aus. Danach den
tatsächlichen Status prüfen und erst bei READY den direkten Link nennen. Niemals für eine
Preview auf `main` pushen.

## Wichtigste offene Aufgaben

Priorität und Umfang immer von Jennifer bestätigen lassen:

1. Preis-/Linkkonsistenz:
   - Startseite: Starter-Kits 47 € statt 49 € und falscher Anker
   - Startseite: Tarot-App 9 € statt 7,49 €
   - Tarot-Seite: 27 € statt bestätigtem Monatsmodell
   - `lib/site-content.ts`: mehrere veraltete Angebotsdaten
2. Podcast-Seite im neuen Design weiterentwickeln; bestätigten Spotify-Link beschaffen.
3. Musikseite im neuen Design weiterentwickeln; direkte Spotify-Künstler-/Album-URL
   bestätigen.
4. Feedback/finale Freigabe für die jüngste Über-mich-Version und die
   Aura-Luminess-Detailseite einholen.
5. Sicheren Kontaktformularversand und gegebenenfalls Newsletter separat planen und
   datenschutzrechtlich prüfen.
6. Große MP3/PNG/MP4-Dateien bei künftigen Arbeiten auf Performance prüfen; Originale
   erhalten.
7. Später persönliches Über-mich-Video, echte Absolventinnenfotos und finale
   Coming-soon-Produktmedien ergänzen, sobald Jennifer sie beauftragt/liefert.

## Was keinesfalls vermutet werden darf

- Direkter Spotify-Podcast-Link: noch nicht bestätigt.
- Direkter Spotify-Künstler-/Album-Link von Naru Hikari: noch nicht bestätigt; aktuell
  existiert nur eine Such-URL.
- Zusätzliche Karmabedürfnistyp-Namen: im aktuellen Projekt nicht definiert.
- Kauf- oder Bewerbungslinks für Coming-soon-, Blueprint-, Aura-Luminess- oder
  High-Touch-Angebote: nicht erfinden.
- Technische Funktionsfähigkeit des deaktivierten Kontaktformulars: nicht behaupten.
- Gestalterische Freigabe einer technisch fertigen Seite: nur laut Statusdokument nennen.

## Startprompt für den neuen Codex-Chat

Den folgenden Text vollständig in den neuen Chat kopieren:

```text
Bitte arbeite mit meinem bestehenden AuraLumia-Projekt im lokalen Repository
C:\Users\jenni\Documents\Codex\2026-09-10\hier-f-r-dich-zwei-links\outputs\auralumia-site.

Führe zunächst ausschließlich eine lesende Orientierung durch:
1. Bestätige, dass dies das richtige Git-Repository AuraLumiaTrix/auralumia-main-site ist.
2. Lies AGENTS.md sowie docs/AURALUMIA_PROJECT_CONTEXT.md,
   docs/AURALUMIA_STATUS.md und docs/AURALUMIA_HANDOFF.md vollständig.
3. Prüfe den aktuellen Branch, Git-Status, HEAD und Remote. Das Redesign gehört auf
   redesign-auralumia; main ist der geschützte Produktionsbranch.
4. Vergleiche den aktuellen Repository-Zustand mit der Dokumentation und nenne mir nur
   tatsächliche Abweichungen oder offene lokale Änderungen.
5. Bestätige mir kurz, dass du Markenwissen, Somatic Karma, Angebotsstruktur,
   Designsystem, Seitenstatus und den sicheren GitHub-/Vercel-Workflow verstanden hast.

Nimm noch keine Änderungen vor, erstelle keinen Commit, pushe nichts und löse kein
Deployment aus. Warte danach auf meinen ersten konkreten Arbeitsauftrag.
```
