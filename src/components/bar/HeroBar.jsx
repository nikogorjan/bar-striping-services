import React from 'react';
import { preload } from 'react-dom';

// Full-width photo hero, content centered (background image set in bar-theme.css).
function HeroBar() {
    // the hero photo is the page's LCP element but loads via CSS —
    // preload it so the browser fetches it immediately
    preload('/assets/images/bar-striping/aerial-view-of-many-colorful-cars-parked-on-parkin.webp', {
        as: 'image',
        fetchPriority: 'high',
    });
    return (
        <section className="bar-hero" id="home">
            <div className="bar-hero__bg" aria-hidden="true" />
            <div className="container">
                <div className="bar-hero__content">
                    <p className="pre-title">Crisp Lines. Safe Lots.</p>
                    <h1 className="title">
                        Parking Lot Striping<br />
                        <span>Done Right.</span>
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
        </section>
    );
}

export default HeroBar;
