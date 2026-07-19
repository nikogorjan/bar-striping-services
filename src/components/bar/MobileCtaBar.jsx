import React from 'react';

// Sticky call / quote bar, mobile and tablet only.
function MobileCtaBar() {
    return (
        <div className="bar-mobile-cta d-lg-none">
            <a href="tel:+12052403158" className="call">
                <i className="fas fa-phone-alt" /> Call Now
            </a>
            <a href="#contact" className="quote">
                Get a Free Quote
            </a>
        </div>
    );
}

export default MobileCtaBar;
