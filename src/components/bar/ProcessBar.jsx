import React from 'react';

const STEPS = [
    {
        num: '01',
        title: 'Request a Quote',
        disc: 'Call, email, or use the form below. Tell us about your lot and what you need.',
    },
    {
        num: '02',
        title: 'On-Site Assessment',
        disc: 'We walk the property, measure, and recommend the best layout for your space.',
    },
    {
        num: '03',
        title: 'Striping Day',
        disc: 'We show up on schedule and lay down clean, bright lines with pro equipment.',
    },
    {
        num: '04',
        title: 'Final Walkthrough',
        disc: 'We inspect every line together — the job is done when you are happy with it.',
    },
];

function ProcessBar() {
    return (
        <section className="bar-process rts-section-gapBottom" id="process">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">How It Works</p>
                            <h2 className="title">From Faded to Fresh in 4 Steps</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {STEPS.map((step) => (
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={step.num}>
                            <div className="bar-step">
                                <span className="num">{step.num}</span>
                                <h3 className="title">{step.title}</h3>
                                <p>{step.disc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProcessBar;
