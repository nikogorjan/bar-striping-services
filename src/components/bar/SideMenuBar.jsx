"use client"
import React from 'react';
import { Link } from 'react-scroll';
import BrandLogo from './BrandLogo';
import { NAV_SECTIONS } from './NavBar';

function SideMenuBar({ isSidebarOpen, toggleSidebar }) {
    const closeSidebar = () => toggleSidebar(false);

    return (
        <>
            <div
                className={`bar-menu-backdrop ${isSidebarOpen ? 'show' : ''}`}
                onClick={closeSidebar}
                aria-hidden="true"
            />
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button
                    className="close-icon-menu"
                    aria-label="Close Menu"
                    onClick={closeSidebar}
                >
                    <i className="far fa-times"></i>
                </button>

                <BrandLogo plate size="sm" />

                <nav className="bar-menu-nav">
                    <ul>
                        {NAV_SECTIONS.map((item) => (
                            <li key={item.to}>
                                <Link
                                    onClick={closeSidebar}
                                    className="nav-item"
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-85}
                                    duration={700}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="bar-side-contact">
                    <div className="single">
                        <i className="fas fa-phone-alt" />
                        <a href="tel:+12052403158">205-240-3158</a>
                    </div>
                    <div className="single">
                        <i className="fas fa-envelope" />
                        <a href="mailto:barstripingservices@gmail.com">barstripingservices@gmail.com</a>
                    </div>
                    <div className="single">
                        <i className="fas fa-user" />
                        <span>Henry Randall, Owner</span>
                    </div>
                </div>

                <a
                    href="#contact"
                    onClick={closeSidebar}
                    className="rts-btn btn-primary bar-menu-cta"
                >
                    Get a Free Quote
                </a>

                <div className="bar-menu-stripes" aria-hidden="true" />
            </div>
        </>
    );
}

export default SideMenuBar;
