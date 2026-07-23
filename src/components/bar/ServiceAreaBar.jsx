import React from 'react';

// Confirmed by the client (July 2026): based in Birmingham, serving central
// and north Alabama — from Montgomery up to Huntsville.
export const SERVICE_AREAS = [
    'Birmingham',
    'Hoover',
    'Vestavia Hills',
    'Mountain Brook',
    'Tuscaloosa',
    'Gadsden',
    'Montgomery',
    'Huntsville',
];

function ServiceAreaBar() {
    return (
        <section className="bar-area" id="service-area">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Service Area</p>
                            <h2 className="title">Striping Central &amp; North Alabama</h2>
                        </div>
                        <p className="area-disc">
                            BAR Striping Services is based in Birmingham and works across
                            central and north Alabama — from Montgomery all the way up to
                            Huntsville, including:
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
                            …and anywhere in between.{' '}
                            <a href="tel:+12052403158">Call 205-240-3158</a> and ask about
                            your town.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceAreaBar;
