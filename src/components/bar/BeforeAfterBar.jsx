"use client"
import React, { useState } from 'react';

// Interactive before/after comparison slider.
// NOTE: stock photos for now — swap for real job photos when available.
function BeforeAfterBar() {
    const [pos, setPos] = useState(50);

    return (
        <section className="bar-ba rts-section-gapTop" id="before-after">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rts-title-area text-center">
                            <p className="pre-title">Before &amp; After</p>
                            <h2 className="title">See the Difference Fresh Lines Make</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-12">
                        <div className="bar-ba__frame">
                            <img
                                className="after-img"
                                src="/assets/images/bar-striping/parking-lot-after.webp"
                                alt="Parking lot after professional striping with crisp white stalls"
                                loading="lazy"
                            />
                            <img
                                className="before-img"
                                src="/assets/images/bar-striping/parking-lot-before.webp"
                                alt="Same parking lot before striping — blank asphalt"
                                loading="lazy"
                                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                            />
                            <div
                                className="divider"
                                style={{ left: `${pos}%` }}
                                aria-hidden="true"
                            >
                                <span className="knob">
                                    <i className="fas fa-arrows-alt-h" />
                                </span>
                            </div>
                            <span
                                className="tag tag-before"
                                style={{ opacity: pos > 18 ? 1 : 0 }}
                                aria-hidden="true"
                            >
                                Before
                            </span>
                            <span
                                className="tag tag-after"
                                style={{ opacity: pos < 82 ? 1 : 0 }}
                                aria-hidden="true"
                            >
                                After
                            </span>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={pos}
                                onChange={(e) => setPos(Number(e.target.value))}
                                aria-label="Drag to compare the lot before and after striping"
                            />
                        </div>
                        <p className="bar-ba__note">
                            Drag the handle to compare. Ready for your lot&apos;s after photo?{' '}
                            <a href="#contact">Get a free quote</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeforeAfterBar;
