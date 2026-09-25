import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Mentoring", description: "Aura Luminess Premium und exklusives 1:1 Mentoring mit Jennifer Olivia Kindereit." };

const formats = [
  { label: "GRUPPEN-BEGLEITUNG", title: "Aura Luminess Premium", price: "3.333,33 €", image: "/products/aura-luminess-premium.png", text: "Ein intensiver gemeinsamer Raum für Transformation, Verkörperung und neue Ausrichtung – getragen von Gruppe und Jennifer Olivias persönlicher Führung." },
  { label: "EXKLUSIVE EINZEL-BEGLEITUNG", title: "Aura Luminess V.I.P.", price: "9.999,99 €", image: "/products/aura-luminess-vip.png", text: "Der persönlichste AuraLumia-Raum: fokussiert auf deine Geschichte, deine Schwelle und die Veränderung, die jetzt wirklich gelebt werden will." },
];

export default function MentoringPage() {
  return <>
    <div className="mentoring-hero">
      <img className="mentoring-hero-portrait" src="/aura-luminess-hero.png" alt="" aria-hidden="true" />
      <PageHero eyebrow="AURA LUMINESS · INTENSIVE BEGLEITUNG" title="Du brauchst nicht mehr Wissen. Du brauchst einen Raum, in dem Veränderung geschehen darf."><p>Aura Luminess ist für Frauen, die an einer echten Schwelle stehen – persönlich, beruflich oder spirituell – und ihre nächste Version nicht länger nur denken möchten.</p></PageHero>
    </div>
    <section className="mentoring-manifesto"><div className="shell"><p>Keine schnelle Lösung.</p><p>Kein spirituelles Darüberhinweggehen.</p><h2>Eine präzise, intuitive und körpernahe Begleitung für das, was wirklich in Bewegung kommen will.</h2></div></section>
    <section className="mentoring-formats shell"><div className="section-heading"><div><p className="eyebrow">ZWEI FORMATE</p><h2>Wähle die Nähe, die deine Schwelle braucht.</h2></div></div>{formats.map((format)=><article className="mentoring-card" key={format.title}><div className="mentoring-image"><img src={format.image} alt={format.title} /></div><div className="mentoring-copy"><span>{format.label}</span><h2>{format.title}</h2><p>{format.text}</p><strong>{format.price}</strong><a className="text-link" href="#bewerbung">Bewerbung ab Oktober</a></div></article>)}</section>
    <section className="fit-section shell"><div><p className="eyebrow">WARUM DIESER RAUM FÜR DICH DER RICHTIGE IST</p><h2>Verkörpere, was du längst erkannt hast.</h2></div><ul><li>Du erkennst deine Muster, aber sie bestimmen noch immer deine Entscheidungen.</li><li>Du stehst vor einer persönlichen oder beruflichen Neuorientierung.</li><li>Du wünschst dir Tiefe, Klarheit und eine Begleitung, die dich nicht klein macht.</li><li>Du bist bereit, Verantwortung für die Veränderung zu übernehmen, die du dir wünschst.</li></ul></section>
    <section className="mentoring-application" id="bewerbung"><div className="shell mentoring-application-grid"><div><p className="eyebrow">AURA LUMINESS · SAMHAIN CIRCLE</p><h2>Ein Raum wie dieser beginnt mit dem richtigen Zeitpunkt.</h2><p>Im Oktober öffnet sich die Bewerbung für den Aura Luminess Samhain Circle. Die Begleitung ist bewusst persönlich gehalten – deshalb vergebe ich nur wenige Plätze. Wenn du spürst, dass dieser Raum deiner sein könnte, kehre im Oktober hierher zurück.</p></div><aside className="application-notice"><span>BEWERBUNG AB OKTOBER</span><h3>Oktober 2026</h3><p>Bewerbungsphase für den Aura Luminess Samhain Circle</p><strong>Wenige, bewusst vergebene Plätze</strong></aside></div></section>
  </>;
}
