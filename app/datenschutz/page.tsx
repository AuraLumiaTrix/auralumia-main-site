import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Aura Lumia® – Jennifer Olivia Kindereit.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page shell">
      <header className="legal-header">
        <p className="eyebrow">AURA LUMIA® · RECHTLICHES</p>
        <h1>Datenschutz&shy;erklärung</h1>
        <p className="legal-version">Stand: November 2026</p>
      </header>

      <div className="terms-content">
        <section>
          <h2>1. Verantwortliche</h2>
          <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website und im Rahmen der angebotenen Leistungen ist:</p>
          <p>Aura Lumia®<br />Inhaberin: Jennifer Olivia Kindereit<br />Im Morgartenfeld 7<br />29690 Schwarmstedt<br />Deutschland</p>
          <p><strong>E-Mail:</strong> <a href="mailto:jenniferkindereit@googlemail.com">jenniferkindereit@googlemail.com</a><br /><strong>Telefon:</strong> <a href="tel:+4917670339953">0176 70339953</a></p>
        </section>

        <section>
          <h2>2. Grundsätze der Datenverarbeitung</h2>
          <p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen. Wir verarbeiten solche Daten nur, soweit dies für die Bereitstellung dieser Website, die Kommunikation einschließlich abonnierter Newsletter, die Vertragsanbahnung, die Vertragserfüllung oder die Erfüllung gesetzlicher Pflichten erforderlich ist.</p>
          <p>Je nach Verarbeitung stützen wir uns insbesondere auf Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Soweit besondere Kategorien personenbezogener Daten betroffen sind, gilt ergänzend Abschnitt 8.</p>
        </section>

        <section>
          <h2>3. Bereitstellung und Hosting der Website</h2>
          <h3>Vercel</h3>
          <p>Diese Website wird technisch über Vercel bereitgestellt. Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Beim Aufruf der Website können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite oder Datei, Referrer-URL, Browsertyp, Betriebssystem sowie technische Status- und Protokolldaten verarbeitet werden.</p>
          <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer sicheren, stabilen und schnellen Bereitstellung der Website. Eine Verarbeitung in den USA oder anderen Drittländern kann nicht ausgeschlossen werden. Dabei sind die gesetzlichen Voraussetzungen für internationale Datenübermittlungen, insbesondere geeignete Garantien nach Art. 44 ff. DSGVO, zu beachten. Weitere Informationen enthält die <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Datenschutzerklärung von Vercel</a>.</p>
          <h3>Domain und E-Mail-Infrastruktur bei STRATO</h3>
          <p>Die Domain und Teile der E-Mail-Infrastruktur werden über STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, bereitgestellt. Dabei können für den technischen Betrieb erforderliche Stamm-, Vertrags-, Verbindungs- und Kommunikationsdaten verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung der Vertragsdurchführung dient, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres Interesses an einer zuverlässigen Domain- und Kommunikationsinfrastruktur. Weitere Informationen findest du in der <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noreferrer">Datenschutzerklärung von STRATO</a>.</p>
        </section>

        <section>
          <h2>4. Cookies, Reichweitenmessung und Marketing</h2>
          <p>Diese Website setzt derzeit keine eigenen Analyse-, Tracking- oder Marketingdienste ein. Eine Reichweitenmessung oder profilbasierte Werbung findet auf dieser Website nicht statt.</p>
          <p>Technisch notwendige Verarbeitungen durch den Hostinganbieter können stattfinden, um die Website sicher auszuliefern. Der YouTube-Player wird erst nach deiner ausdrücklichen Auswahl geladen; Einzelheiten findest du in Abschnitt 11.</p>
        </section>

        <section>
          <h2>5. Kontaktaufnahme per E-Mail oder Telefon</h2>
          <p>Wenn du uns per E-Mail oder Telefon kontaktierst, verarbeiten wir die von dir mitgeteilten Angaben, insbesondere Name, Kontaktdaten, Inhalt deiner Anfrage und gegebenenfalls weitere freiwillige Angaben, um dein Anliegen zu beantworten.</p>
          <p>Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn deine Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der sachgerechten Bearbeitung von Anfragen.</p>
          <p>E-Mails können über Dienste von STRATO und Google verarbeitet werden. Bei Google-Diensten ist Anbieterin im Europäischen Wirtschaftsraum grundsätzlich Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Verarbeitung durch verbundene Unternehmen in Drittländern, insbesondere den USA, kann nicht ausgeschlossen werden. Weitere Informationen enthält die <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzerklärung von Google</a>.</p>
        </section>

        <section id="brevo">
          <h2>5a. E-Mail-Versand und Newsletter über Brevo</h2>
          <p>Wir nutzen Brevo als Dienstleister für den E-Mail-Versand, die Verwaltung von Verteilerlisten und den Versand unseres Newsletters. Dabei verarbeitet Brevo in unserem Auftrag insbesondere deine E-Mail-Adresse, gegebenenfalls deinen Namen, Angaben zur Anmeldung und Abmeldung sowie technische Versanddaten wie den Zustellstatus. Weitere Informationen findest du in der <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noreferrer">Datenschutzrichtlinie von Brevo</a>.</p>
          <p>Die Anmeldung zum Newsletter ist freiwillig. Rechtsgrundlage für den Newsletter und werbliche Mailings ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen, über den Abmeldelink im Newsletter oder per Nachricht an die unter Abschnitt 1 genannte E-Mail-Adresse. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.</p>
          <p>Wir verwenden deine Daten für den Newsletterversand, solange dein Abonnement besteht. Nach der Abmeldung können die dafür erforderlichen Daten weiterhin gespeichert werden, soweit dies zum Nachweis der Einwilligung oder zur Beachtung deiner Abmeldung erforderlich ist. Grundlage dafür ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO, Einwilligungen nachweisen und unerwünschte Zusendungen vermeiden zu können.</p>
        </section>

        <section>
          <h2>6. Bestellungen und Zahlungsabwicklung über CopeCart</h2>
          <p>Für Bestellungen und Zahlungen verlinken wir auf die Verkaufs- und Zahlungsseiten der Copecart GmbH, Rosenstraße 2, 10178 Berlin. Sobald du eine entsprechende Angebotsseite aufrufst oder dort bestellst, verarbeitet CopeCart die für Bestellung, Vertragsabwicklung und Zahlung erforderlichen Daten. Dazu können insbesondere Name, Anschrift, E-Mail-Adresse, Rechnungs- und Bestelldaten, ausgewähltes Produkt, Zahlungsdaten, IP-Adresse sowie steuer- und handelsrechtlich erforderliche Angaben gehören.</p>
          <p>Die Verarbeitung erfolgt, soweit sie in unserem Verantwortungsbereich liegt, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung des Vertrags und Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung gesetzlicher Aufbewahrungs- und Nachweispflichten. Zahlungsdaten werden durch CopeCart und die dort ausgewählten Zahlungsdienstleister verarbeitet. Weitere Informationen zur eigenen Verarbeitung durch CopeCart erhältst du in der <a href="https://www.copecart.com/de/datenschutz" target="_blank" rel="noreferrer">Datenschutzerklärung von CopeCart</a>.</p>
        </section>

        <section id="supabase">
          <h2>6a. Geplante Zugangsverwaltung mit Supabase</h2>
          <p>Wir planen, Supabase als Datenbankdienst einzusetzen, um Zugänge zu unseren Apps und zum geschützten Ausbildungsbereich zu verwalten. Damit soll der Zugang zu einem gebuchten Angebot freigeschaltet werden können, wenn der erforderliche Zahlungs- und Lizenzstatus vorliegt. Bei Ablauf der Berechtigung kann der Zugang entsprechend enden.</p>
          <p>Dafür sollen die erforderlichen Angaben einander zugeordnet werden. Dazu können eine E-Mail-Adresse oder eine interne Kontokennung, das gebuchte Angebot oder eine Bestellreferenz, der Zahlungsstatus sowie Lizenzstatus und Laufzeit gehören. Die Zahlungsabwicklung ist in Abschnitt 6 beschrieben. Als Rechtsgrundlage für die erforderliche Zugangsverwaltung ist Art. 6 Abs. 1 lit. b DSGVO vorgesehen. Die Daten sollen so lange gespeichert werden, wie sie für die Zugangsverwaltung und die Abwicklung des Vertrags erforderlich sind. Gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
          <p>Für die Datenbank unseres App-Projekts ist die Hostingregion Central EU (Frankfurt am Main, Deutschland) eingestellt. Je nach Verarbeitung, etwa bei Support oder technischem Betrieb, sind auch Übermittlungen außerhalb des Europäischen Wirtschaftsraums möglich, insbesondere nach Singapur und in die USA. Supabase beschreibt hierfür Standardvertragsklauseln in seiner <a href="https://supabase.com/legal/customer-resources/data-processing-addendum" target="_blank" rel="noreferrer">Vereinbarung zur Auftragsverarbeitung</a>. Über die konkrete Konfiguration und den tatsächlichen Datenfluss für die Zugangsverwaltung informieren wir vor Inbetriebnahme. Weitere Angaben findest du in den <a href="https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq" target="_blank" rel="noreferrer">Hinweisen von Supabase zu Speicherorten und Datenübermittlungen</a>.</p>
        </section>

        <section>
          <h2>7. Durchführung gebuchter Leistungen</h2>
          <p>Für den Kauf und die Bereitstellung fertiger Audio- und Videokurse sowie Meditationen verarbeiten wir die dafür erforderlichen Kontakt-, Buchungs- und gegebenenfalls Zugangsdaten. Für diese Angebote ist kein persönlicher Fragebogen erforderlich.</p>
          <p>Wenn im Rahmen einer Ausbildung oder persönlichen Begleitung dein Horoskop erstellt wird, verwenden wir deinen vollständigen Namen sowie Geburtsdatum, Geburtszeit und Geburtsort. Wir berechnen das Horoskop mit dem eigenen Astrologie-Tool von AuraLumia®. Eingaben und Ergebnisse werden im Tool selbst nicht dauerhaft gespeichert. Das Ergebnis kann für die weitere Auswertung aus dem Tool übernommen und als PDF gespeichert werden.</p>
          <p>Persönliche Gespräche finden über Zoom oder Google Meet statt. Dabei können Gesprächsnotizen entstehen. Gehört eine persönliche Audio-Auswertung zum Angebot, spricht Jennifer Olivia sie separat ein und stellt sie dir zur Verfügung. Die Auswertung kann deinen Namen, deine Geburtsangaben und die für die astrologische Reflexion ausgewählten Gesprächsinhalte enthalten. Angaben zu den Gesprächsdiensten und zur Ablage findest du in den Abschnitten 9 und 10.</p>
          <p>Die für die gebuchte Leistung erforderliche Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO. Für Angaben nach Art. 9 DSGVO gilt zusätzlich Abschnitt 8. Zur Speicherdauer siehe Abschnitt 14.</p>
        </section>

        <section id="navigator">
          <h2>7a. Somatic Karma® Navigator</h2>
          <p>Im Navigator schätzt du dich anhand vorgegebener Aussagen ein, etwa zu Verantwortung, Selbstwert, Konkurrenz und Zugehörigkeit. Aus den Antworten wird ein Ergebnis zur persönlichen Reflexion berechnet. Die Antworten und der Fortschritt werden im lokalen Speicher deines Browsers abgelegt, damit du die Selbsteinschätzung fortsetzen kannst. Du kannst den gespeicherten Stand über die Browser-Einstellungen für die Website löschen.</p>
          <p>Wenn du den persönlichen PDF-Bericht per E-Mail anforderst, werden deine Antworten, deine E-Mail-Adresse und deine Auswahl zur Newsletter-Anmeldung an den Navigator-Server übermittelt. Die Antworten dienen der Berechnung des Berichts. Nach Bestätigung deiner E-Mail-Adresse erhältst du den Download-Link. Für den Versand kann Brevo eingesetzt werden. Die für den angeforderten Bericht notwendige Verarbeitung stützt sich auf Art. 6 Abs. 1 lit. b DSGVO. Die zusätzliche Newsletter-Anmeldung ist freiwillig und richtet sich nach <a href="#brevo">Abschnitt 5a</a>.</p>
        </section>

        <section>
          <h2>8. Besondere Kategorien personenbezogener Daten</h2>
          <p>Unser Coaching und die astrologische Begleitung dienen der Selbstreflexion und persönlichen Entwicklung. Sie umfassen keine medizinische, psychotherapeutische oder heilkundliche Beratung, Diagnose oder Behandlung. Gesundheitsangaben sind keine Voraussetzung für die Teilnahme.</p>
          <p>In einem persönlichen Gespräch kannst du freiwillig über deine Lebenssituation sprechen. Je nach Inhalt können dabei Angaben nach Art. 9 DSGVO zur Sprache kommen, etwa zur Gesundheit, zum Sexualleben oder zu religiösen oder weltanschaulichen Überzeugungen. Auch Gesprächsnotizen und eine eingesprochene Auswertung können solche Angaben enthalten, wenn sie darin aufgegriffen werden.</p>
          <p>Sollen solche Angaben im Rahmen der Begleitung gezielt genutzt, in Notizen festgehalten oder in einer persönlichen Audio-Auswertung verarbeitet werden, holen wir dafür vorher deine freiwillige, ausdrückliche Einwilligung für den jeweiligen Zweck ein. Grundlage ist Art. 9 Abs. 2 lit. a in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO. Das freiwillige Erzählen allein gilt nicht als Einwilligung. Die Begleitung steht dir auch ohne diese Einwilligung offen.</p>
          <p>Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, etwa per E-Mail an die in Abschnitt 1 genannte Adresse. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.</p>
        </section>

        <section>
          <h2>9. Ablage von Unterlagen und Auswertungen in Google Drive</h2>
          <p>Zur Ablage von Unterlagen aus der Ausbildung oder persönlichen Begleitung nutzen wir Google Drive. Dazu können aus dem Astrologie-Tool übernommene Horoskop-Auswertungen als PDF, Gesprächsnotizen und separat eingesprochene persönliche Audio-Auswertungen gehören. Anbieterin im Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
          <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit sie für die Erbringung der gebuchten Leistung erforderlich ist, und ergänzend Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres Interesses an einer sicheren und geordneten Arbeitsorganisation. Für besondere Kategorien personenbezogener Daten gilt zusätzlich die ausdrückliche Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO. Eine Verarbeitung durch Google oder verbundene Unternehmen in Drittländern, insbesondere den USA, kann nicht ausgeschlossen werden. Weitere Informationen findest du in der <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzerklärung von Google</a>.</p>
        </section>

        <section id="online-gespraeche">
          <h2>10. Online-Gespräche über Zoom und Google Meet</h2>
          <p>Für persönliche Online-Termine in der Begleitung und Ausbildung nutzen wir je nach Termin Zoom (Zoom Communications, Inc., 55 Almaden Boulevard, Suite 600, San Jose, CA 95113, USA) oder Google Meet (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Der jeweilige Dienst verarbeitet zur Durchführung des Termins unter anderem Anzeigenamen, gegebenenfalls E-Mail-Adressen, Angaben zum Termin, IP-Adresse, Geräte- und Verbindungsdaten sowie die im Termin übertragenen Audio- und Videoinhalte.</p>
          <p>Die für die Durchführung des vereinbarten Termins erforderliche Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO. Für Angaben nach Art. 9 DSGVO gilt zusätzlich Abschnitt 8. Je nach Dienst und Konfiguration können Daten in den USA oder anderen Ländern außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Weitere Informationen findest du in der <a href="https://www.zoom.com/de/trust/privacy/privacy-statement/" target="_blank" rel="noreferrer">Datenschutzerklärung von Zoom</a> und in der <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzerklärung von Google</a>.</p>
        </section>

        <section id="youtube">
          <h2>11. Eingebettete Inhalte von YouTube</h2>
          <p>Auf den Seiten für Musik und Podcast können Videos oder Audioinhalte von YouTube eingebettet werden. Der Player wird nicht automatisch geladen. Erst wenn du auf „YouTube-Inhalt laden“ klickst, wird eine Verbindung zu YouTube hergestellt und der eingebettete Inhalt im erweiterten Datenschutzmodus über die Domain youtube-nocookie.com geladen.</p>
          <p>Dabei können insbesondere IP-Adresse, Geräte- und Browserinformationen, die aufgerufene Seite sowie Nutzungsdaten an Google und YouTube übertragen werden. Wenn du bei YouTube oder Google angemeldet bist, kann die Nutzung deinem Konto zugeordnet werden. Anbieterin im Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Übermittlung in die USA oder andere Drittländer kann nicht ausgeschlossen werden.</p>
          <p>Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und, soweit Informationen auf deinem Endgerät gespeichert oder ausgelesen werden, § 25 Abs. 1 TDDDG. Die Einwilligung gilt nur für die aktuelle Seitennutzung und wird beim erneuten Laden der Seite erneut abgefragt. Weitere Informationen findest du in der <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzerklärung von Google</a>.</p>
        </section>

        <section>
          <h2>12. Externe Links</h2>
          <p>Diese Website enthält Links zu Angeboten Dritter, unter anderem zu CopeCart, YouTube, Instagram und Let&apos;s Cast. Eine Verbindung zum jeweiligen Anbieter wird grundsätzlich erst hergestellt, wenn du den Link öffnest. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Zielangebots. Die Verarbeitung in unserem eigenen Somatic Karma® Navigator ist in <a href="#navigator">Abschnitt 7a</a> beschrieben.</p>
        </section>

        <section>
          <h2>13. Empfängerinnen und Empfänger</h2>
          <p>Personenbezogene Daten werden nur weitergegeben, wenn dies zur Vertragsdurchführung, zur technischen Bereitstellung, zur Erfüllung gesetzlicher Pflichten oder auf Grundlage einer Einwilligung erforderlich ist. Als Empfänger oder Auftragsverarbeiter kommen insbesondere Hosting-, Domain-, E-Mail-, Cloud-, Zahlungs-, IT- und Videokonferenzdienstleister in Betracht.</p>
          <p>Soweit Dienstleister Daten in unserem Auftrag verarbeiten, werden die datenschutzrechtlich erforderlichen Vereinbarungen geschlossen. Eine darüber hinausgehende Weitergabe oder ein Verkauf personenbezogener Daten findet nicht statt.</p>
        </section>

        <section>
          <h2>14. Speicherdauer</h2>
          <p>Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Danach werden sie gelöscht oder anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten oder berechtigten Interessen an einer weiteren Speicherung entgegenstehen.</p>
          <p>Gesprächsnotizen und persönliche Audio-Auswertungen löschen wir in der Regel drei Monate nach Abschluss der Begleitung. Bei einer Einzelleistung beginnt die Frist mit Abschluss der Leistung. Ist eine längere Aufbewahrung für eine vereinbarte Nachbereitung erforderlich, löschen wir die Dateien nach deren Abschluss, spätestens nach sechs Monaten. Gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
          <p>Vertrags-, Rechnungs- und steuerrelevante Unterlagen werden entsprechend den gesetzlichen Fristen aufbewahrt. Kommunikationsdaten werden gelöscht, wenn die Anfrage abschließend bearbeitet ist und keine gesetzlichen oder vertraglichen Gründe für eine weitere Speicherung bestehen. Einwilligungsbasierte Daten werden grundsätzlich bis zum Widerruf oder Wegfall des Zwecks verarbeitet, soweit keine andere Rechtsgrundlage die weitere Aufbewahrung erlaubt.</p>
        </section>

        <section>
          <h2>15. Deine Rechte</h2>
          <p>Du hast nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.</p>
          <p>Du hast außerdem das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit gegen Verarbeitungen Widerspruch einzulegen, die auf Art. 6 Abs. 1 lit. e oder lit. f DSGVO beruhen. Werden Daten für Direktwerbung verarbeitet, kannst du dieser Verarbeitung jederzeit ohne besondere Begründung widersprechen.</p>
          <p>Zur Ausübung deiner Rechte genügt eine Nachricht an die oben genannte E-Mail-Adresse. Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren. Für unseren Sitz ist zuständig:</p>
          <p>Die Landesbeauftragte für den Datenschutz Niedersachsen<br />Prinzenstraße 5<br />30159 Hannover<br />E-Mail: <a href="mailto:poststelle@lfd.niedersachsen.de">poststelle@lfd.niedersachsen.de</a><br /><a href="https://www.lfd.niedersachsen.de/" target="_blank" rel="noreferrer">www.lfd.niedersachsen.de</a></p>
        </section>

        <section>
          <h2>16. Datensicherheit und Aktualisierung</h2>
          <p>Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, unbefugtem Zugriff und sonstigem Missbrauch zu schützen. Die Datenübertragung über diese Website erfolgt verschlüsselt per HTTPS.</p>
          <p>Diese Datenschutzerklärung wird angepasst, wenn sich eingesetzte Dienste, rechtliche Anforderungen oder unsere Datenverarbeitungen ändern. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.</p>
        </section>
      </div>
    </main>
  );
}
