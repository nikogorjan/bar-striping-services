import React from 'react';

// NOTE: city list is an assumption based on the 205 area code (Birmingham, AL
// region) — confirm the actual service area with the client before launch.
export const SERVICE_AREAS = [
    'Birmingham',
    'Hoover',
    'Vestavia Hills',
    'Homewood',
    'Trussville',
    'Bessemer',
    'Alabaster',
    'Pelham',
    'Gardendale',
    'Mountain Brook',
];

function ServiceAreaBar() {
    return (
        <section className="bar-area" id="service-area">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Service Area</p>
                            <h2 className="title">Parking Lot Striping Across Central Alabama</h2>
                        </div>
                        <p className="area-disc">
                            BAR Striping Services is locally owned and operated, serving
                            businesses and property owners throughout the Birmingham metro
                            area, including:
                        </p>
                        <ul className="area-list">
                            {SERVICE_AREAS.map((city) => (
                                <li key={city}>
                                    <i className="fas fa-map-marker-alt" />
                                    {city}
                                </li>
                            ))}
                        </ul>
                        <p className="area-note">
                            Don&apos;t see your town? We travel.{' '}
                            <a href="tel:+12052403158">Call 205-240-3158</a> and ask.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceAreaBar;
