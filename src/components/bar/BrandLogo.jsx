import React from 'react';

// CSS recreation of the BAR Striping Services logo (word mark + yellow stripes).
// Pass light for dark backgrounds, size="lg" for a bigger variant.
function BrandLogo({ light = false, size = '', className = '' }) {
    const classes = [
        'bar-logo',
        light ? 'bar-logo--light' : '',
        size === 'lg' ? 'bar-logo--lg' : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <a href="/" className={classes} aria-label="BAR Striping Services — home">
            <span className="bar-logo__word">BAR</span>
            <span className="bar-logo__stripes" aria-hidden="true">
                <span />
                <span />
            </span>
            <span className="bar-logo__sub">Striping Services</span>
        </a>
    );
}

export default BrandLogo;
