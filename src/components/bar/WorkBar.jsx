import React from 'react';

const IMG = '/assets/images/bar-striping';

const WORK = [
    {
        img: `${IMG}/aerial-view-of-many-colorful-cars-parked-on-parkin.webp`,
        alt: 'Aerial view of a freshly striped parking lot with trees',
        caption: 'Parking lot layout & striping',
    },
    {
        img: `${IMG}/top-down-of-car-park-at-outdoor.webp`,
        alt: 'Top-down view of clean white parking stall lines',
        caption: 'Crisp stall lines & hatched zones',
    },
    {
        img: `${IMG}/white-and-yellow-lines-of-pedestrian-crossing-at-i.webp`,
        alt: 'Fresh white and yellow pedestrian crossing markings',
        caption: 'Crosswalks & speed tables',
    },
    {
        img: `${IMG}/parking-spot-designated-for-people-with-disabiliti.webp`,
        alt: 'Yellow accessible parking and hatched safety markings',
        caption: 'Accessible & safety markings',
    },
    {
        img: `${IMG}/huge-parking-for-cars-near-the-shopping-center-fro.webp`,
        alt: 'Large retail shopping center parking lot from above',
        caption: 'Large commercial properties',
    },
    {
        img: `${IMG}/painting-white-line-road-with-marking-machine-duri.webp`,
        alt: 'Line striping machine spraying a fresh white line',
        caption: 'Professional striping equipment',
    },
];

function WorkBar() {
    return (
        <section className="bar-work rts-section-gap" id="work">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Our Work</p>
                            <h2 className="title">Lines We&apos;re Proud Of</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {WORK.map((item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item.caption}>
                            <div className="bar-work-item">
                                <img src={item.img} alt={item.alt} loading="lazy" />
                                <div className="caption">
                                    <span>{item.caption}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkBar;
