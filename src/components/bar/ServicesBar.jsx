import React from 'react';

const SERVICES = [
    {
        icon: 'fas fa-drafting-compass',
        title: 'New Lot Layout & Striping',
        disc: 'Complete layout design and first-time striping for freshly paved or sealed lots — maximize spaces and keep traffic flowing.',
    },
    {
        icon: 'fas fa-paint-roller',
        title: 'Re-Striping & Line Refresh',
        disc: 'Bring faded lines back to life with bright, durable traffic paint. Fast turnaround and minimal downtime for your business.',
    },
    {
        icon: 'fas fa-wheelchair',
        title: 'ADA-Compliant Markings',
        disc: 'Accessible stalls, access aisles, and symbols laid out to current ADA standards — stay compliant and avoid costly fines.',
    },
    {
        icon: 'fas fa-road',
        title: 'Arrows, Stencils & Curbs',
        disc: 'Directional arrows, crosswalks, speed bump painting, and curb marking that guide drivers safely through your property.',
    },
    {
        icon: 'fas fa-fire',
        title: 'Fire Lanes & Safety Zones',
        disc: 'High-visibility fire lanes, no-parking zones, and loading areas marked clearly and to local code requirements.',
    },
    {
        icon: 'fas fa-warehouse',
        title: 'Warehouse Floor Striping',
        disc: 'Interior line striping for warehouses and facilities — aisles, walkways, and safety zones that keep your team organized.',
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
                            <h2 className="title">Striping Services That Last</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {SERVICES.map((service) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={service.title}>
                            <div className="bar-service-card">
                                <div className="icon" aria-hidden="true">
                                    <i className={service.icon} />
                                </div>
                                <h5 className="title">{service.title}</h5>
                                <p className="disc">{service.disc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesBar;
