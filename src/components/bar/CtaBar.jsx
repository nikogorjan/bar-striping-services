import React from 'react';

function CtaBar() {
    return (
        <div className="bar-cta">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h3 className="title">Ready to give your lot a fresh new look?</h3>
                        <p>Free quotes. Fast scheduling. Lines that last.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="cta-btns">
                            <a href="tel:+12052403158" className="rts-btn btn-dark">
                                <i className="fas fa-phone-alt" /> &nbsp;205-240-3158
                            </a>
                            <a href="#contact" className="rts-btn btn-dark">
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaBar;
