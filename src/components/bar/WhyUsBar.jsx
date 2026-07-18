import React from 'react';

const REASONS = [
    {
        icon: 'fas fa-ruler-combined',
        title: 'Precision Layouts',
        disc: 'Measured, chalked, and striped with professional equipment — no crooked lines, no guesswork.',
    },
    {
        icon: 'fas fa-tint',
        title: 'Premium Paint',
        disc: 'Traffic-grade paint engineered to withstand sun, rain, and constant tire wear.',
    },
    {
        icon: 'fas fa-clock',
        title: 'Minimal Downtime',
        disc: 'Fast-drying paint and smart phasing so your lot stays open while we work.',
    },
    {
        icon: 'fas fa-moon',
        title: 'Nights & Weekends',
        disc: 'We schedule around your business hours — your customers never lose a space.',
    },
    {
        icon: 'fas fa-clipboard-check',
        title: 'Code Compliant',
        disc: 'ADA stalls, fire lanes, and safety zones marked to current standards and local codes.',
    },
    {
        icon: 'fas fa-handshake',
        title: 'Straight Answers',
        disc: 'Free quotes, honest pricing, and direct communication with the owner from start to finish.',
    },
];

function WhyUsBar() {
    return (
        <section className="bar-why rts-section-gap" id="why-us">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Why Choose Us</p>
                            <h2 className="title">The BAR Standard</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--40 align-items-center">
                    <div className="col-lg-8">
                        <div className="row">
                            {REASONS.map((reason) => (
                                <div className="col-md-6" key={reason.title}>
                                    <div className="bar-why-item">
                                        <div className="icon" aria-hidden="true">
                                            <i className={reason.icon} />
                                        </div>
                                        <div>
                                            <h6 className="title">{reason.title}</h6>
                                            <p>{reason.disc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bar-why__panel">
                            <div className="stripes" aria-hidden="true">
                                <span />
                                <span />
                            </div>
                            <p className="quote">
                                A freshly striped lot is the <span>first impression</span> your
                                customers get. Make it a good one.
                            </p>
                            <a href="tel:+12052403158" className="rts-btn btn-primary">
                                <i className="fas fa-phone-alt" /> &nbsp;Call Henry Today
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUsBar;
