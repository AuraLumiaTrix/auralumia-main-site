import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children, aside }: { eyebrow: string; title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="page-hero shell">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-hero-copy">{children}</div>
      {aside ? <div className="page-hero-aside">{aside}</div> : null}
    </section>
  );
}
