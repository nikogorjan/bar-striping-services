import React from 'react';

// Icon-free editorial section: when to re-stripe (SEO keyword cluster).
const SIGNS = [
    {
        lead: 'Your lines look gray, not white.',
        disc: 'Traffic paint oxidizes under sun and tire wear. Once bright white and yellow fade to gray, drivers stop trusting the lines — and your lot starts looking neglected.',
    },
    {
        lead: 'Drivers park crooked or invent their own spaces.',
        disc: 'Crooked parking, blocked aisles, and door dings are classic symptoms of faded stall lines. Fresh striping restores order overnight.',
    },
    {
        lead: 'You just sealcoated or repaved.',
        disc: 'Sealcoating and new asphalt erase every marking on the lot. Striping is the final step that turns fresh black pavement into a working parking lot.',
    },
    {
        lead: 'Your accessible stalls are outdated.',
        disc: 'ADA standards and local codes change. If your accessible parking was laid out years ago, the stall count, access aisles, or signage may no longer comply.',
    },
    {
        lead: 'The lot is changing how it works.',
        disc: 'New tenants, curbside pickup, drive-thru lanes, EV chargers — when traffic flow changes, the markings need to change with it.',
    },
];

function SignsBar() {
    return (
        <section className="bar-signs rts-section-gap" id="restriping-signs">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="bar-signs__intro">
                            <div className="rts-title-area text-start">
                                <p className="pre-title">Is It Time?</p>
                                <h2 className="title">5 Signs Your Parking Lot Needs Re-Striping</h2>
                            </div>
                            <p className="lead-disc">
                                Most property owners wait too long to re-stripe — and faded
                                markings quietly cost them in safety, compliance, and curb
                                appeal. If any of these sound familiar, your pavement is
                                overdue for fresh lines.
                            </p>
                            <p className="bar-signs__cta">
                                Sound familiar? <a href="#contact">Request your free quote</a>{' '}
                                and we&apos;ll take a look.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bar-signs__list">
                            {SIGNS.map((item) => (
                                <div className="sign-item" key={item.lead}>
                                    <p>
                                        <strong>{item.lead}</strong> {item.disc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignsBar;
