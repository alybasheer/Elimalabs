import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from './components';
import { email, siteUrl, whatsapp } from './content';
import './globals.css';
export const metadata: Metadata = { metadataBase: siteUrl ? new URL(siteUrl) : undefined, title: { default: 'ElimaLabs | Software Engineering & AI Automation', template: '%s | ElimaLabs' }, description: 'Websites, apps, AI automation, and ongoing software support. Based in Sheffield and Pakistan.', robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) }, icons: { icon: '/icon.svg' } };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'ElimaLabs', ...(siteUrl ? { url: siteUrl } : {}), email, telephone: '+447405726557', location: [{ '@type': 'Place', name: 'Sheffield, United Kingdom' }, { '@type': 'Place', name: 'Pakistan' }] };
    return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><header className="site-header"><Link href="/" aria-label="ElimaLabs home"><Logo /></Link><nav aria-label="Main navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link className="nav-cta" href="/contact">Let’s talk <span>↗</span></Link></nav></header><main id="main">{children}</main><footer><div className="footer-top"><Link href="/" aria-label="ElimaLabs home"><Logo /></Link><p>Independent thinking.<br />Connected engineering.</p><a href={`mailto:${email}`}>{email} ↗</a></div><div className="footer-bottom"><span>© 2026 ElimaLabs</span><span>Sheffield, UK · Pakistan</span><Link href="/contact">Start a conversation ↗</Link></div></footer><a className="whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with ElimaLabs on WhatsApp"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M27 15.5A11 11 0 0 1 10 25l-6 2 2-6A11 11 0 1 1 27 15.5Z" stroke="currentColor" strokeWidth="2"/><path d="M12 9c-3 2 1 10 6 12 3 1 5-2 3-3l-3-1-1 2c-2-1-4-3-5-5l2-1-2-4Z" fill="currentColor"/></svg></a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}/></body></html>;
}
