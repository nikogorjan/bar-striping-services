import React from 'react';

function AboutBar() {
    return (
        <section className="bar-about rts-section-gap" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="bar-about__images">
                            <span className="stripe-accent" aria-hidden="true" />
                            <img
                                className="main-img"
                                src="/assets/images/real-images/IMG_4175.webp"
                                alt="Freshly sealcoated and striped church parking lot"
                            />
                            <img
                                className="overlap-img"
                                src="/assets/images/real-images/IMG_3695.webp"
                                alt="BAR Striping line-striping machine next to a freshly painted yellow safety zone"
                            />
                            <div className="bar-owner-card">
                                <div className="avatar" aria-hidden="true">HR</div>
                                <div>
                                    <p className="name">Henry Randall</p>
                                    <p className="role">Owner &amp; Operator</p>
                                    <a href="tel:+12052403158">205-240-3158</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bar-about__content pl--40 pl_md--0 pl_sm--0 mt_md--30 mt_sm--30">
                            <div className="rts-title-area text-start">
                                <p className="pre-title">About Us</p>
                                <h2 className="title">
                                    Locally Owned.<br />Professionally Striped.
                                </h2>
                            </div>
                            <p className="disc">
                                BAR Striping Services is a locally owned and operated parking lot
                                striping company led by Henry Randall. From small storefront lots
                                to large commercial properties, we lay down bright, durable lines
                                that make your property look sharp, keep traffic flowing, and keep
                                you compliant.
                            </p>
                            <ul className="bar-checklist">
                                <li>
                                    <i className="fas fa-check" />
                                    Owner on every job — you deal directly with the person doing the work
                                </li>
                                <li>
                                    <i className="fas fa-check" />
                                    Premium traffic-grade paint for long-lasting, high-visibility lines
                                </li>
                                <li>
                                    <i className="fas fa-check" />
                                    Night and weekend scheduling to keep your business open
                                </li>
                            </ul>
                            <a href="#contact" className="rts-btn btn-primary">
                                Request a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBar;
