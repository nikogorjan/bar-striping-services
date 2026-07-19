import React from 'react';

// Full-width map above the footer.
// NOTE: centered on Birmingham, AL (assumed from the 205 area code) —
// swap the q= parameter for the client's real address/city before launch.
function MapBar() {
    return (
        <div className="bar-map">
            <iframe
                title="BAR Striping Services service area map"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sBirmingham,+AL!6i10"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default MapBar;
