import React from 'react';

// PLACEHOLDER testimonials — replace with real customer quotes from the
// client before launch. Kept generic (first name + role, no company names).
const TESTIMONIALS = [
    {
        text: 'Henry re-striped our shopping center overnight and the lot looked brand new when we opened. Straight lines, zero disruption to our tenants.',
        name: 'Mark T.',
        role: 'Property Manager',
    },
    {
        text: 'Our church lot was a free-for-all on Sunday mornings. BAR laid out new stalls and traffic arrows, and parking is finally calm. Fair price, great communication.',
        name: 'Sandra W.',
        role: 'Church Administrator',
    },
    {
        text: 'We needed our warehouse aisles and ADA stalls brought up to code before an inspection. Done in one visit — passed without a single note.',
        name: 'David R.',
        role: 'Facility Manager',
    },
];

function TestimonialsBar() {
    return (
        <section className="bar-testimonials rts-section-gap" id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Testimonials</p>
                            <h2 className="title">What Property Owners Say</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {TESTIMONIALS.map((item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item.name}>
                            <div className="bar-testimonial-card">
                                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                                <div className="stars" aria-label="5 out of 5 stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <p className="text">{item.text}</p>
                                <div className="who">
                                    <span className="chip" aria-hidden="true">
                                        {item.name.charAt(0)}
                                    </span>
                                    <div>
                                        <p className="name">{item.name}</p>
                                        <p className="role">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsBar;
