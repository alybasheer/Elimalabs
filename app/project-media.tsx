import crmDashboard from '../public/projects/crm-dashboard.png';
import Image from 'next/image';
import parcelOverview from '../public/projects/parcel-overview.jpeg';
import parcelRequests from '../public/projects/parcel-requests.jpeg';
import parcelTravelers from '../public/projects/parcel-travelers.jpeg';
import parcelTracking from '../public/projects/parcel-tracking.jpeg';
import parcelForm from '../public/projects/parcel-request-form.jpeg';
import commerceHome from '../public/projects/commerce-home.png';
import commerceSeller from '../public/projects/commerce-seller.png';
import marketDashboard from '../public/projects/market-dashboard.png';
import marketAnalysis from '../public/projects/market-analysis.png';
import marketHome from '../public/projects/market-home.png';

const galleries = {
    parcel: [
        { image: parcelOverview, caption: 'Traveler dashboard and active deliveries' },
        { image: parcelRequests, caption: 'Available requests and delivery offers' },
        { image: parcelTravelers, caption: 'Find a traveler by route' },
        { image: parcelTracking, caption: 'Step-by-step parcel progress' },
        { image: parcelForm, caption: 'Create a parcel request' },
    ],
    commerce: [
        { image: commerceHome, caption: 'Buyer storefront and product discovery' },
        { image: commerceSeller, caption: 'Seller dashboard and order management' },
    ],
    market: [
        { image: marketDashboard, caption: 'Market overview and portfolio dashboard' },
        { image: marketAnalysis, caption: 'AI analysis and investment workspace' },
        { image: marketHome, caption: 'Product landing page' },
    ],
};

type Theme = keyof typeof galleries;

export function ProjectPreview({ theme }: { theme: string }) {
    if (theme === 'crm') return <div className="screenshot-preview crm-image-preview"><Image src={crmDashboard} alt="CRM sales pipeline concept with deal cards and follow-up activity" sizes="(max-width: 560px) 88vw, 44vw" /></div>;
    const screens = galleries[theme as Theme];
    if (!screens) return null;
    const visible = theme === 'market' ? screens.slice(0, 1) : screens.slice(0, 2);
    return <div className={`screenshot-preview ${theme}`}>
        {visible.map(({ image, caption }) => <div className="preview-screen" key={caption}>
            <Image src={image} alt={caption} sizes="(max-width: 560px) 44vw, 25vw" />
        </div>)}
    </div>;
}

export function ProjectGallery({ theme }: { theme: string }) {
    const screens = galleries[theme as Theme];
    if (!screens) return null;
    return <section className="section screenshot-section" aria-label="Project screenshots">
        <div className="section-heading"><div><p className="eyebrow">INSIDE THE PRODUCT</p><h2>The experience, on screen.</h2></div></div>
        <div className={`screenshot-gallery ${theme === 'market' ? 'wide-gallery' : ''}`}>
            {screens.map(({ image, caption }, index) => <figure key={caption}>
                <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot: ${caption}`}>
                    <Image src={image} alt={caption} sizes={theme === 'market' ? '88vw' : '(max-width: 560px) 88vw, (max-width: 850px) 42vw, 28vw'} />
                </a>
                <figcaption><span>0{index + 1}</span>{caption}<span aria-hidden="true">↗</span></figcaption>
            </figure>)}
        </div>
        <p className="caption">Supplied project screens. Displayed accounts, figures, and marketing statements are interface content, not verified project outcomes.</p>
    </section>;
}
