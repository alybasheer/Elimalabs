import { CrmConcept } from '../../crm-concept';
import { ProjectGallery } from '../../project-media';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA, Intro } from '../../components';
import { meta, projects } from '../../content';
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const { slug } = await params; const p = projects.find(p => p.slug === slug); return p ? meta(p.label, p.description, `/work/${slug}`) : {}; }
export default async function Page({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const { slug } = await params; const p = projects.find(p => p.slug === slug); if (!p)
    notFound(); return <><div className="breadcrumb"><Link href="/work">Work</Link><span>/</span>{p.label}</div><Intro eyebrow={p.category} title={p.name} text={p.description}/>{p.theme === 'crm' ? <CrmConcept/> : <ProjectGallery theme={p.theme}/>}<section className="section split"><div><p className="eyebrow">PROJECT OVERVIEW</p><h2>{p.label}</h2><p className="caption">{p.theme === 'crm' ? 'ElimaLabs concept / Sample data' : 'Private client / Identity withheld'}</p></div><div><p className="body-copy">{p.story}</p><h3 className="small-heading">Product experience</h3><ul className="feature-list">{p.features.map(f => <li key={f}>{f}</li>)}</ul><h3 className="small-heading">{p.theme === 'crm' ? 'Configuration scope' : 'Technology'}</h3><div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div></section><CTA /></>; }

export const dynamicParams = false;
