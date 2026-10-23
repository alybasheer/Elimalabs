import { CrmConcept } from '../../crm-concept';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA, Intro } from '../../components';
import { meta, services } from '../../content';
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const { slug } = await params; const s = services.find(s => s.slug === slug); return s ? meta(s.title, s.description, `/services/${slug}`) : {}; }
export default async function Page({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const { slug } = await params; const s = services.find(s => s.slug === slug); if (!s)
    notFound(); return <><div className="breadcrumb"><Link href="/services">Services</Link><span>/</span>{s.title}</div><Intro eyebrow="WHAT WE DO" title={s.title} text={s.description}/><section className="section split"><h2>{s.short}</h2><div><p className="body-copy">{s.detail}</p><h3 className="small-heading">What an engagement can include</h3><ul className="feature-list">{s.deliverables.map(d => <li key={d}>{d}<span>↗</span></li>)}</ul><div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div></div></section>{s.slug === 'crm-and-integrations' && <CrmConcept/>}<section className="section"><p className="eyebrow">HOW WE WORK</p><div className="process-grid">{[['01', 'Understand', 'Align on the problem, users, constraints, and scope.'], ['02', 'Build together', 'Review progress and make decisions through regular feedback.'], ['03', 'Keep improving', 'Launch with an agreed plan for handover, support, and next steps.']].map(([n, t, d]) => <div key={n}><span className="index">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section><CTA /></>; }

export const dynamicParams = false;
