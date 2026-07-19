import React from 'react';

const INDUSTRIES = [
    {
        icon: 'fas fa-store',
        title: 'Retail & Shopping Centers',
        disc: 'Clear stalls and traffic flow that keep customers moving and storefronts looking sharp.',
    },
    {
        icon: 'fas fa-briefcase',
        title: 'Offices & Business Parks',
        disc: 'Professional parking lot striping that matches the standard your tenants expect.',
    },
    {
        icon: 'fas fa-city',
        title: 'Apartments & HOAs',
        disc: 'Numbered stalls, visitor parking, and fire lanes for multi-family communities.',
    },
    {
        icon: 'fas fa-church',
        title: 'Churches',
        disc: 'Safe, organized lots for high-traffic weekends — striped around your schedule.',
    },
    {
        icon: 'fas fa-school',
        title: 'Schools & Daycares',
        disc: 'Crosswalks, drop-off zones, and bus lanes marked for student safety.',
    },
    {
        icon: 'fas fa-hospital',
        title: 'Medical Facilities',
        disc: 'ADA-compliant accessible parking and clear wayfinding for patients and visitors.',
    },
    {
        icon: 'fas fa-warehouse',
        title: 'Warehouses & Industrial',
        disc: 'Loading zones, safety aisles, and interior floor striping for busy facilities.',
    },
    {
        icon: 'fas fa-utensils',
        title: 'Restaurants & Hospitality',
        disc: 'Maximize every space with efficient layouts, to-go stalls, and drive-thru arrows.',
    },
];

function IndustriesBar() {
    return (
        <section className="bar-industries rts-section-gap" id="industries">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Industries We Serve</p>
                            <h2 className="title">Striping for Every Kind of Property</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {INDUSTRIES.map((item) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={item.title}>
                            <div className="bar-industry-card">
                                <div className="icon" aria-hidden="true">
                                    <i className={item.icon} />
                                </div>
                                <h3 className="title">{item.title}</h3>
                                <p>{item.disc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IndustriesBar;
