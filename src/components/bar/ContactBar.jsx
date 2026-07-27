"use client"
import React, { useState } from 'react';

// Quote form — submits to our own API route (nodemailer + cPanel SMTP).
const FORM_ENDPOINT = '/api/contact';

function ContactBar() {
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        // honeypot: real visitors never fill this hidden field
        if (data.get('company')) return;

        setStatus('sending');
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.get('name'),
                    phone: data.get('phone'),
                    email: data.get('email'),
                    message: data.get('message'),
                    company: data.get('company'),
                }),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || !json.ok) throw new Error('send failed');
            setStatus('success');
            form.reset();
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="bar-contact rts-section-gap" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Contact Us</p>
                            <h2 className="title">Request Your Free Quote</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--40 g-5">
                    <div className="col-lg-5">
                        <div className="bar-contact-info">
                            <div className="info-card">
                                <div className="icon" aria-hidden="true">
                                    <i className="fas fa-phone-alt" />
                                </div>
                                <div>
                                    <span>Call or Text</span>
                                    <a href="tel:+12052403158">205-240-3158</a>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="icon" aria-hidden="true">
                                    <i className="fas fa-envelope" />
                                </div>
                                <div>
                                    <span>Email</span>
                                    <a href="mailto:barstripingservices@gmail.com">
                                        barstripingservices@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="icon" aria-hidden="true">
                                    <i className="fas fa-user" />
                                </div>
                                <div>
                                    <span>Your Contact</span>
                                    <strong>Henry Randall, Owner</strong>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="icon" aria-hidden="true">
                                    <i className="fas fa-map-marker-alt" />
                                </div>
                                <div>
                                    <span>Service Area</span>
                                    <strong>Central &amp; North Alabama</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bar-form">
                            <h4 className="form-title">Tell us about your lot</h4>
                            <p className="form-sub">
                                We&apos;ll get back to you with a free, no-obligation quote.
                            </p>
                            {status === 'success' ? (
                                <div className="form-status success" role="status">
                                    <i className="fas fa-check-circle" />
                                    <div>
                                        <strong>Request sent!</strong>
                                        <p>
                                            Henry will get back to you shortly. In a hurry?{' '}
                                            Call <a href="tel:+12052403158">205-240-3158</a>.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {/* honeypot — hidden from real visitors */}
                                    <input
                                        type="text"
                                        name="company"
                                        className="hp-field"
                                        tabIndex="-1"
                                        autoComplete="off"
                                        aria-hidden="true"
                                    />
                                    <div className="row g-0">
                                        <div className="col-md-6 pe-md-2">
                                            <input type="text" name="name" placeholder="Your Name" aria-label="Your name" required />
                                        </div>
                                        <div className="col-md-6 ps-md-2">
                                            <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" />
                                        </div>
                                    </div>
                                    <input type="email" name="email" placeholder="Email Address" aria-label="Email address" required />
                                    <textarea
                                        name="message"
                                        placeholder="What do you need striped? (size of lot, new layout or re-stripe, timeline...)"
                                        aria-label="What do you need striped?"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="rts-btn btn-primary"
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Sending…' : 'Send Quote Request'}
                                    </button>
                                    {status === 'error' && (
                                        <div className="form-status error" role="alert">
                                            <i className="fas fa-exclamation-triangle" />
                                            <div>
                                                <strong>Something went wrong.</strong>
                                                <p>
                                                    Please call <a href="tel:+12052403158">205-240-3158</a> or
                                                    email{' '}
                                                    <a href="mailto:barstripingservices@gmail.com">
                                                        barstripingservices@gmail.com
                                                    </a>{' '}
                                                    directly.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    <p className="form-note">
                                        Prefer to talk? Call or text Henry directly at{' '}
                                        <a href="tel:+12052403158">205-240-3158</a>.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactBar;
