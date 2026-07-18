import React from 'react';
import BrandLogo from './BrandLogo';

function FooterBar() {
    const year = new Date().getFullYear();

    return (
        <footer className="bar-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <BrandLogo light />
                        <p className="about-disc">
                            Professional parking lot striping and pavement markings.
                            Locally owned and operated — crisp lines, honest pricing,
                            and jobs done right the first time.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <p className="wized-title">Quick Links</p>
                        <span className="title-stripe" aria-hidden="true" />
                        <ul className="links">
                            <li><a href="#about"><i className="fas fa-arrow-right" />About Us</a></li>
                            <li><a href="#services"><i className="fas fa-arrow-right" />Services</a></li>
                            <li><a href="#why-us"><i className="fas fa-arrow-right" />Why Choose Us</a></li>
                            <li><a href="#process"><i className="fas fa-arrow-right" />How It Works</a></li>
                            <li><a href="#contact"><i className="fas fa-arrow-right" />Get a Quote</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <p className="wized-title">Get In Touch</p>
                        <span className="title-stripe" aria-hidden="true" />
                        <div className="contact-line">
                            <i className="fas fa-phone-alt" />
                            <a href="tel:+12052403158">205-240-3158</a>
                        </div>
                        <div className="contact-line">
                            <i className="fas fa-envelope" />
                            <a href="mailto:barstripingservices@gmail.com">barstripingservices@gmail.com</a>
                        </div>
                        <div className="contact-line">
                            <i className="fas fa-user" />
                            <span>Henry Randall, Owner</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <p>© {year} BAR Striping Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterBar;
