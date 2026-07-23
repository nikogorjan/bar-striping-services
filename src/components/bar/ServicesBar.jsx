import React from 'react';

const IMG = '/assets/images/bar-striping';

const SERVICES = [
    {
        icon: 'fas fa-drafting-compass',
        img: `${IMG}/top-down-of-car-park-at-outdoor.webp`,
        alt: 'Top-down view of a newly laid out parking lot',
        title: 'New Lot Layout & Striping',
        disc: 'Complete layout design and first-time striping for freshly paved or sealed lots — maximize spaces and keep traffic flowing.',
    },
    {
        icon: 'fas fa-paint-roller',
        img: `${IMG}/aerial-view-of-many-colorful-cars-parked-on-parkin.webp`,
        alt: 'Aerial view of a parking lot with crisp fresh lines',
        title: 'Re-Striping & Line Refresh',
        disc: 'Bring faded lines back to life with bright, durable traffic paint. Fast turnaround and minimal downtime for your business.',
    },
    {
        icon: 'fas fa-wheelchair',
        img: '/assets/images/real-images/IMG_3971.webp',
        alt: 'Blue ADA-compliant accessible stalls striped by BAR Striping at a commercial building',
        title: 'ADA-Compliant Markings',
        disc: 'Accessible stalls, access aisles, and symbols laid out to current ADA standards — stay compliant and avoid costly fines.',
    },
    {
        icon: 'fas fa-road',
        img: '/assets/images/real-images/IMG_4147.webp',
        alt: 'Fresh double yellow centerline, stop bar, and directional arrows painted by BAR Striping',
        title: 'Arrows, Crosswalks & Curbs',
        disc: 'Directional arrows, crosswalks, speed bump painting, and curb marking that guide drivers safely through your property.',
    },
    {
        icon: 'fas fa-fire',
        img: '/assets/images/real-images/IMG_4186.webp',
        alt: 'Bright yellow hatched safety zone painted by BAR Striping at a facility entrance',
        title: 'Fire Lanes & Safety Zones',
        disc: 'High-visibility fire lanes, no-parking zones, and loading areas marked clearly and to local code requirements.',
    },
    {
        icon: 'fas fa-warehouse',
        img: '/assets/images/real-images/IMG_3754.webp',
        alt: 'Parking garage with fresh blue ADA stalls striped by BAR Striping',
        title: 'Warehouse & Facility Striping',
        disc: 'Interior and exterior line striping for warehouses, parking garages, and commercial facilities — aisles, walkways, and safety zones.',
    },
];

function ServicesBar() {
    return (
        <section className="bar-services rts-section-gap" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area service text-center">
                            <p className="pre-title">Our Services</p>
                            <h2 className="title">Parking Lot Striping Services That Last</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {SERVICES.map((service) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={service.title}>
                            <div className="bar-service-card">
                                <div className="thumb">
                                    <div className="img-clip">
                                        <img src={service.img} alt={service.alt} loading="lazy" />
                                    </div>
                                    <div className="icon" aria-hidden="true">
                                        <i className={service.icon} />
                                    </div>
                                </div>
                                <div className="body">
                                    <h3 className="title">{service.title}</h3>
                                    <p className="disc">{service.disc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesBar;
