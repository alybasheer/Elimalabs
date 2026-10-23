import { ProjectPreview } from './project-media';
import Link from 'next/link';
import { projects, services } from './content';
export function Logo() { return <span className="wordmark"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><strong>lima</strong><span>Labs</span></span>; }
export function Intro({ eyebrow, title, text }: {
    eyebrow: string;
    title: string;
    text: string;
}) { return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{text}</p></header>; }
export function CTA() { return <section className="cta"><div><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>What are you<br />building next?</h2></div><Link className="button light" href="/contact">Let’s talk about it <span>↗</span></Link></section>; }
export function ServicesList() { return <div className="service-list">{services.map((s, i) => <Link className="service-row" href={`/services/${s.slug}`} key={s.slug}><span className="index">0{i + 1}</span><div><h3>{s.title}</h3><p>{s.short}</p></div><span className="arrow">↗</span></Link>)}</div>; }
export function ProjectCards({ limit = projects.length }: {
    limit?: number;
}) { return <div className="project-grid">{projects.slice(0, limit).map(p => <Link className="project-card" key={p.slug} href={`/work/${p.slug}`}><ProjectPreview theme={p.theme}/><div className="project-meta"><p className="eyebrow">{p.category}</p><span>↗</span></div><h3>{p.name}</h3></Link>)}</div>; }
