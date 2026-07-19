"use client"
import React, { useState } from 'react';

export const FAQS = [
    {
        q: 'How much does parking lot striping cost?',
        a: 'It depends on the number of stalls, whether it is a new layout or a re-stripe, and how many special markings (ADA stalls, arrows, fire lanes) you need. Every quote is free, itemized, and honest — call 205-240-3158 or use the form below and we will walk your lot.',
    },
    {
        q: 'How often should a parking lot be re-striped?',
        a: 'Most commercial lots need a refresh every 1–2 years depending on traffic, weather, and plowing. If your lines look gray instead of white or yellow, it is time.',
    },
    {
        q: 'How long does parking lot striping last?',
        a: 'With premium traffic-grade paint applied to clean, dry pavement, lines typically stay bright for 1–3 years. High-traffic drive lanes fade first; stalls last longer.',
    },
    {
        q: 'How long until the lot can be used again?',
        a: 'Traffic-grade paint typically dries within an hour in good weather. We phase the work so part of your lot stays open whenever possible.',
    },
    {
        q: 'Do you handle ADA compliance?',
        a: 'Yes. We lay out accessible stalls, access aisles, and symbols to current ADA standards so your property stays compliant and avoids costly complaints.',
    },
    {
        q: 'Can you work around business hours?',
        a: 'Absolutely. Nights and weekends are available so your customers never lose a parking space during business hours.',
    },
];

// FAQPage structured data for Google rich results
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
        },
    })),
};

function FaqBar() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bar-faq rts-section-gapBottom" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">FAQ</p>
                            <h2 className="title">Parking Lot Striping Questions, Answered</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-12">
                        <div className="bar-accordion">
                            {FAQS.map((item, index) => (
                                <div
                                    className={`bar-accordion__item ${openIndex === index ? 'open' : ''}`}
                                    key={item.q}
                                >
                                    <button
                                        type="button"
                                        className="q"
                                        onClick={() => toggle(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span>{item.q}</span>
                                        <span className="chev" aria-hidden="true">
                                            <i className="fas fa-chevron-down" />
                                        </span>
                                    </button>
                                    <div className="a">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqBar;
