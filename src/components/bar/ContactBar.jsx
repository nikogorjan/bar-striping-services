"use client"
import React from 'react';

// The form composes an email in the visitor's mail app — no backend needed.
function ContactBar() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(
            `Quote request from ${data.get('name') || 'website visitor'}`
        );
        const body = encodeURIComponent(
            `Name: ${data.get('name')}\n` +
            `Phone: ${data.get('phone')}\n` +
            `Email: ${data.get('email')}\n\n` +
            `${data.get('message')}`
        );
        window.location.href = `mailto:barstripingservices@gmail.com?subject=${subject}&body=${body}`;
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
                                    <strong>Locally owned &amp; operated</strong>
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
                            <form onSubmit={handleSubmit}>
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
                                <button type="submit" className="rts-btn btn-primary">
                                    Send Quote Request
                                </button>
                                <p className="form-note">
                                    Sending opens your email app. Prefer to talk?{' '}
                                    Call Henry directly at <a href="tel:+12052403158">205-240-3158</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactBar;
