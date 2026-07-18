import React from 'react';

// Full-width photo hero (background image set in bar-theme.css).
function HeroBar() {
    return (
        <section className="bar-hero" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-xl-8">
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
                </div>
            </div>
        </section>
    );
}

export default HeroBar;
