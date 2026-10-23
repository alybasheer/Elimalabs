import Image from 'next/image';
import crmDashboard from '../public/projects/crm-dashboard.png';

export function CrmConcept() {
    return <section className="section crm-section" aria-labelledby="crm-title">
        <div className="section-heading">
            <div><p className="eyebrow">ELIMALABS CONCEPT / SAMPLE DATA</p><h2 id="crm-title">Every lead.<br />A clear next step.</h2></div>
            <p className="crm-intro">A sales-workspace concept showing pipeline stages, deal ownership, and follow-up activity in one place.</p>
        </div>
        <figure className="crm-screenshot">
            <a href={crmDashboard.src} target="_blank" rel="noopener noreferrer" aria-label="Open full CRM dashboard concept image">
                <Image src={crmDashboard} alt="CRM concept dashboard with sales pipeline, opportunity cards, deal owners, and follow-up tasks" sizes="88vw" />
            </a>
            <figcaption>CRM interface concept with illustrative data. <a href={crmDashboard.src} target="_blank" rel="noopener noreferrer">View full image ↗</a></figcaption>
        </figure>
        <div className="crm-outcomes"><div><h3>Configure</h3><p>Fields, stages, permissions, and ownership around your process.</p></div><div><h3>Connect</h3><p>Bring inquiries from your website and business tools into one place.</p></div><div><h3>Maintain</h3><p>Keep workflows, access, and pipeline administration up to date.</p></div></div>
    </section>;
}
