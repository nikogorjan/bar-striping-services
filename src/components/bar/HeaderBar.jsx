"use client"
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SideMenuBar from './SideMenuBar';
import BrandLogo from './BrandLogo';

function HeaderBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = (value) => {
        setIsSidebarOpen(typeof value === 'boolean' ? value : !isSidebarOpen);
    };

    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* start header area */}
            <header className={`header--sticky header-one ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top header-top-one bg-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-xl-block d-none">
                                <div className="left">
                                    <div className="mail">
                                        <a href="mailto:barstripingservices@gmail.com">
                                            <i className="fal fa-envelope" /> barstripingservices@gmail.com
                                        </a>
                                    </div>
                                    <div className="working-time">
                                        <p>
                                            <i className="fal fa-map-marker-alt" /> Locally owned &amp; operated
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-xl-block d-none">
                                <div className="right">
                                    <ul className="top-nav">
                                        <li>
                                            <a href="tel:+12052403158">
                                                <i className="fal fa-phone-alt" /> 205-240-3158
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#contact">
                                                <i className="fal fa-comment-dots" /> Free Quotes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main-one bg-white">
                    <div className="container">
                        <div className="bar-nav-row">
                            <BrandLogo />
                            <NavBar />
                            <div className="button-area">
                                <a href="tel:+12052403158" className="bar-call-btn">
                                    <span className="icon"><i className="fas fa-phone-alt" /></span>
                                    <span className="info">
                                        <span>Call for a free quote</span>
                                        <strong>205-240-3158</strong>
                                    </span>
                                </a>
                                <a
                                    href="#contact"
                                    className="rts-btn btn-primary quote-btn d-none d-sm-block"
                                >
                                    Get Quote
                                </a>
                                <button
                                    id="menu-btn"
                                    aria-label="Open menu"
                                    className="menu rts-btn btn-primary-alta d-xl-none"
                                    onClick={() => toggleSidebar()}
                                >
                                    <img
                                        className="menu-dark"
                                        src="/assets/images/icon/menu.png"
                                        alt="Menu-icon"
                                    />
                                    <img
                                        className="menu-light"
                                        src="/assets/images/icon/menu-light.png"
                                        alt="Menu-icon"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* End header area */}

            {/* reserves the fixed header's space in the page flow */}
            <div className="bar-header-spacer" aria-hidden="true" />

            <SideMenuBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default HeaderBar;
