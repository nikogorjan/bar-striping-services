import React from 'react';

// Educational / SEO content section: why parking lot striping matters.
const BENEFITS = [
    {
        icon: 'fas fa-shield-alt',
        title: 'Safety & Liability',
        disc: 'Faded lines cause confusion, fender benders, and pedestrian accidents. Clearly marked stalls, crosswalks, and fire lanes protect your visitors — and protect you from liability claims.',
    },
    {
        icon: 'fas fa-wheelchair',
        title: 'ADA Compliance',
        disc: 'Federal and local codes require a set number of accessible stalls with proper access aisles and markings. Non-compliant lots risk complaints and fines that cost far more than fresh paint.',
    },
    {
        icon: 'fas fa-star',
        title: 'Curb Appeal & First Impressions',
        disc: 'Your parking lot is the first thing every customer, tenant, and inspector sees. Crisp, bright striping signals a well-run property before anyone walks through the door.',
    },
    {
        icon: 'fas fa-th-large',
        title: 'Maximize Your Spaces',
        disc: 'A smart layout can often add stalls to the same pavement while improving traffic flow. More parking capacity means more customers — without expanding your lot.',
    },
];

function BenefitsBar() {
    return (
        <section className="bar-benefits rts-section-gapBottom" id="benefits">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="bar-benefits__content">
                            <div className="rts-title-area text-start">
                                <p className="pre-title">Why It Matters</p>
                                <h2 className="title">Why Fresh Parking Lot Striping Pays Off</h2>
                            </div>
                            <p className="disc">
                                Parking lot striping is one of the most affordable improvements a
                                property owner can make — and one of the most visible. Here is what
                                bright, professionally applied pavement markings do for your
                                property.
                            </p>
                            <div className="benefit-list">
                                {BENEFITS.map((item) => (
                                    <div className="bar-why-item" key={item.title}>
                                        <div className="icon" aria-hidden="true">
                                            <i className={item.icon} />
                                        </div>
                                        <div>
                                            <h6 className="title">{item.title}</h6>
                                            <p>{item.disc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bar-benefits__visual pl--40 pl_md--0 pl_sm--0 mt_md--40 mt_sm--40">
                            <img
                                className="main-img"
                                src="/assets/images/bar-striping/top-down-of-car-park-at-outdoor.webp"
                                alt="Top-down view of a cleanly striped parking lot layout"
                                loading="lazy"
                            />
                            <img
                                className="second-img"
                                src="/assets/images/bar-striping/blue-handicapped-symbol-in-a-parking-spot.webp"
                                alt="ADA-compliant accessible parking symbol freshly painted on asphalt"
                                loading="lazy"
                            />
                            <div className="fact-card">
                                <span className="num">1–2 yrs</span>
                                <span className="label">
                                    recommended re-striping cycle for busy commercial lots
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BenefitsBar;
