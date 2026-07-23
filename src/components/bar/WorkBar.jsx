import React from 'react';

const IMG = '/assets/images/real-images';

// Real BAR Striping job photos.
const WORK = [
    {
        img: `${IMG}/IMG_4181.webp`,
        alt: 'Crisp white crosshatched markings at an athletic facility entrance',
        caption: 'Athletic facility markings',
    },
    {
        img: `${IMG}/IMG_3598.webp`,
        alt: 'Storefront parking with freshly striped angled stalls at dusk',
        caption: 'Storefront stalls, striped overnight',
    },
    {
        img: `${IMG}/IMG_4185.webp`,
        alt: 'Bright yellow crosshatched walkway striping at a school athletic facility',
        caption: 'School safety zones',
    },
    {
        img: `${IMG}/IMG_4017.webp`,
        alt: 'Yellow hatched no-parking zone around an industrial generator pad',
        caption: 'Industrial no-parking zones',
    },
    {
        img: `${IMG}/IMG_4145.webp`,
        alt: 'Fresh double yellow centerline and white directional arrows on a campus road',
        caption: 'Centerlines & directional arrows',
    },
    {
        img: `${IMG}/IMG_3720.webp`,
        alt: 'Retail parking lot with brand new white stall lines',
        caption: 'Retail lot re-stripe',
    },
];

function WorkBar() {
    return (
        <section className="bar-work rts-section-gap" id="work">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Recent Work</p>
                            <h2 className="title">Real Jobs. Real Lines.</h2>
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
