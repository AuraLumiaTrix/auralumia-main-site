import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Mentoring", description: "Aura Luminess Premium und exklusives 1:1 Mentoring mit Jennifer Kindereit." };

const formats = [
  { label: "GRUPPEN-BEGLEITUNG", title: "Aura Luminess Premium", price: "3.333,33 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1705489/fileb8977a966ebae42163436a5e8671d4d6.png", text: "Ein intensiver gemeinsamer Raum für Transformation, Verkörperung und neue Ausrichtung – getragen von Gruppe und Jennifers persönlicher Führung." },
  { label: "EXKLUSIVE EINZEL-BEGLEITUNG", title: "Aura Luminess V.I.P.", price: "9.999,99 €", image: "https://s3.eu-central-1.amazonaws.com/public-prod-copecart.com/uploads/image/1705498/filefee6cf71105501fbca497fab2ba977ce.png", text: "Der persönlichste AuraLumia-Raum: fokussiert auf deine Geschichte, deine Schwelle und die Veränderung, die jetzt wirklich gelebt werden will." },
];

export default function MentoringPage() {
  return <>
    <PageHero eyebrow="AURA LUMINESS · INTENSIVE BEGLEITUNG" title="Du brauchst nicht mehr Wissen. Du brauchst einen Raum, in dem Veränderung geschehen darf."><p>Aura Luminess ist für Frauen, die an einer echten Schwelle stehen – persönlich, beruflich oder spirituell – und ihre nächste Version nicht länger nur denken möchten.</p></PageHero>
    <section className="mentoring-manifesto"><div className="shell"><p>Keine schnelle Lösung.</p><p>Kein spirituelles Darüberhinweggehen.</p><h2>Eine präzise, intuitive und körpernahe Begleitung für das, was wirklich in Bewegung kommen will.</h2></div></section>
    <section className="mentoring-formats shell"><div className="section-heading"><div><p className="eyebrow">ZWEI FORMATE</p><h2>Wähle die Nähe, die deine Schwelle braucht.</h2></div></div>{formats.map((format)=><article className="mentoring-card" key={format.title}><div className="mentoring-image"><img src={format.image} alt={format.title} /></div><div className="mentoring-copy"><span>{format.label}</span><h2>{format.title}</h2><p>{format.text}</p><strong>{format.price}</strong></div></article>)}</section>
    <section className="fit-section shell"><div><p className="eyebrow">WANN DIESER RAUM PASST</p><h2>Wenn du nicht am Anfang deiner Erkenntnis stehst – sondern am Anfang ihrer Verkörperung.</h2></div><ul><li>Du erkennst deine Muster, aber sie bestimmen noch immer deine Entscheidungen.</li><li>Du stehst vor einer persönlichen oder beruflichen Neuorientierung.</li><li>Du wünschst dir Tiefe, Klarheit und eine Begleitung, die dich nicht klein macht.</li><li>Du bist bereit, Verantwortung für die Veränderung zu übernehmen, die du dir wünschst.</li></ul></section>
    <section className="closing-cta shell"><p className="eyebrow">DEIN NÄCHSTER SCHRITT</p><h2>Ein Premium-Raum beginnt mit einer klaren Entscheidung.</h2><a className="button button-outline" href="/ueber-jennifer">Jennifer kennenlernen</a></section>
  </>;
}
