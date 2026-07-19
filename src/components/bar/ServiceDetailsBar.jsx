import React from 'react';

// Icon-free editorial section: keyword-rich service descriptions for SEO.
const DETAILS = [
    {
        title: 'Parking Lot Re-Striping',
        disc: 'Sun, rain, and daily traffic slowly erase your lines. Our re-striping service follows your existing layout — or improves it where it makes sense — using premium traffic-grade paint that restores bright, high-visibility white and yellow lines. It is the fastest way to make an aging lot look freshly paved, and the perfect finish after sealcoating or resurfacing.',
    },
    {
        title: 'New Parking Lot Layouts',
        disc: 'Fresh asphalt is a blank canvas. We measure your property, plan stall counts, drive lanes, and traffic flow to fit the most parking onto your pavement, then chalk and stripe the entire layout from scratch — stalls, aisles, directional arrows, and all. A smart layout often adds spaces without adding a single square foot of asphalt.',
    },
    {
        title: 'Compliance & Safety Markings',
        disc: 'From ADA-accessible stalls with proper access aisles and painted symbols to fire lanes, no-parking zones, crosswalks, speed bumps, and curb painting — pavement markings are what keep your property safe, legal, and inspection-ready. We stay current on ADA standards and local fire codes so you do not have to.',
    },
];

function ServiceDetailsBar() {
    return (
        <section className="bar-details rts-section-gap" id="striping-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="rts-title-area text-start">
                            <p className="pre-title">In More Detail</p>
                            <h2 className="title">More Than Just Straight Lines</h2>
                        </div>
                        <p className="lead-disc">
                            Every parking lot quietly tells drivers what to do — where to park,
                            where to walk, where not to stop. Whether your lot needs a simple
                            refresh or a complete redesign, here is how BAR Striping Services
                            gets it done.
                        </p>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {DETAILS.map((item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item.title}>
                            <div className="bar-detail-col">
                                <h3 className="title">{item.title}</h3>
                                <p>{item.disc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="bar-details__cta">
                            Not sure what your lot needs? Send us a photo or two and we&apos;ll
                            tell you straight — <a href="#contact">get a free assessment</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceDetailsBar;
