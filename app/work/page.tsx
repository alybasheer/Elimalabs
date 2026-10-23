import { CTA, Intro, ProjectCards } from '../components';
import { meta } from '../content';
export const metadata = meta('Selected Work', 'Explore ElimaLabs projects across parcel delivery, technology commerce, and AI-assisted market analysis.', '/work');
export default function Page() { return <><Intro eyebrow="SELECTED WORK" title="Different challenges. Thoughtful software." text="Client projects across mobile, commerce, and AI-assisted web platforms, alongside an ElimaLabs CRM concept."/><section className="section"><ProjectCards /><p className="caption">Explore supplied screens from our mobile and web projects. Client company identities are withheld.</p></section><CTA /></>; }
