import React from 'react';

// Real client logo (public/LOGO-nobg.png).
// plate: white background plate so the dark logo reads on dark sections.
// size="sm": smaller variant for the side menu.
function BrandLogo({ plate = false, size = '', className = '' }) {
    const classes = [
        'bar-logo',
        plate ? 'bar-logo--plate' : '',
        size === 'sm' ? 'bar-logo--sm' : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <a href="/" className={classes} aria-label="BAR Striping Services — home">
            <img src="/LOGO-nobg.png" alt="BAR Striping Services logo" />
        </a>
    );
}

export default BrandLogo;
