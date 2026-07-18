import React from 'react';

function HeroBar() {
    return (
        <section className="bar-hero" id="home">
            <div className="bar-hero__stripes" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="bar-hero__content">
                            <p className="pre-title">Parking Lot Striping Professionals</p>
                            <h1 className="title">
                                Crisp Lines. <span>Safe Lots.</span><br />
                                Done Right.
                            </h1>
                            <p className="disc">
                                BAR Striping Services delivers professional parking lot striping,
                                re-striping, and pavement markings — on time, on budget, and built
                                to last through years of traffic and weather.
                            </p>
                            <div className="hero-btns">
                                <a href="#contact" className="rts-btn btn-primary">
                                    Get a Free Quote
                                </a>
                                <a href="tel:+12052403158" className="rts-btn btn-outline-light">
                                    <i className="fas fa-phone-alt" /> &nbsp;205-240-3158
                                </a>
                            </div>
                            <ul className="hero-trust">
                                <li><i className="fas fa-check" />Free on-site estimates</li>
                                <li><i className="fas fa-check" />Owner-operated</li>
                                <li><i className="fas fa-check" />Flexible scheduling</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bar-hero__art" aria-hidden="true">
                            {/* stylized top view of a freshly striped parking lot */}
                            <svg viewBox="0 0 520 430" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="10" width="500" height="410" rx="18" fill="#3a3a3a" />
                                <rect x="10" y="10" width="500" height="410" rx="18" fill="none" stroke="#fdcd35" strokeWidth="4" />

                                {/* top row of stalls */}
                                <g stroke="#fdcd35" strokeWidth="7" strokeLinecap="round">
                                    <line x1="90" y1="30" x2="90" y2="140" />
                                    <line x1="170" y1="30" x2="170" y2="140" />
                                    <line x1="250" y1="30" x2="250" y2="140" />
                                    <line x1="330" y1="30" x2="330" y2="140" />
                                    <line x1="410" y1="30" x2="410" y2="140" />
                                </g>

                                {/* bottom row of stalls */}
                                <g stroke="#fdcd35" strokeWidth="7" strokeLinecap="round">
                                    <line x1="90" y1="290" x2="90" y2="400" />
                                    <line x1="170" y1="290" x2="170" y2="400" />
                                    <line x1="250" y1="290" x2="250" y2="400" />
                                    <line x1="330" y1="290" x2="330" y2="400" />
                                    <line x1="410" y1="290" x2="410" y2="400" />
                                </g>

                                {/* access aisle hatch (bottom-right stall) */}
                                <g stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.9">
                                    <line x1="422" y1="390" x2="490" y2="322" />
                                    <line x1="422" y1="360" x2="470" y2="312" />
                                    <line x1="440" y1="400" x2="498" y2="342" />
                                </g>

                                {/* center drive lane dashes */}
                                <g stroke="#fdcd35" strokeWidth="7" strokeLinecap="round" strokeDasharray="34 26">
                                    <line x1="40" y1="215" x2="480" y2="215" />
                                </g>

                                {/* directional arrow */}
                                <g fill="#ffffff" opacity="0.92">
                                    <rect x="205" y="243" width="80" height="12" rx="2" />
                                    <path d="M285 230 L320 249 L285 268 Z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBar;
