import React from 'react';

const FAQS = [
    {
        q: 'How often should a parking lot be re-striped?',
        a: 'Most lots need a refresh every 1–2 years depending on traffic, weather, and plowing. If your lines look gray instead of white or yellow, it is time.',
    },
    {
        q: 'How long until the lot can be used again?',
        a: 'Traffic-grade paint typically dries within an hour in good weather. We phase the work so part of your lot stays open whenever possible.',
    },
    {
        q: 'Do you handle ADA compliance?',
        a: 'Yes. We lay out accessible stalls, access aisles, and symbols to current ADA standards so your property stays compliant.',
    },
    {
        q: 'Can you work around business hours?',
        a: 'Absolutely. Nights and weekends are available so your customers never lose a parking space during business hours.',
    },
];

function FaqBar() {
    return (
        <section className="bar-faq rts-section-gapBottom" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">FAQ</p>
                            <h2 className="title">Common Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    {FAQS.map((item) => (
                        <div className="col-lg-6 col-12" key={item.q}>
                            <div className="bar-faq-item">
                                <div className="q">
                                    <i className="fas fa-question-circle" />
                                    {item.q}
                                </div>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqBar;
