"use client"
import React from 'react';
import { Link } from 'react-scroll';
import BrandLogo from './BrandLogo';
import { NAV_SECTIONS } from './NavBar';

function SideMenuBar({ isSidebarOpen, toggleSidebar }) {
    const closeSidebar = () => toggleSidebar(false);

    return (
        <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
            <button
                className="close-icon-menu"
                aria-label="Close Menu"
                onClick={closeSidebar}
            >
                <i className="far fa-times"></i>
            </button>

            <div className="rts-sidebar-menu-desktop">
                <BrandLogo size="sm" />

                <div className="body-mobile d-block">
                    <nav className="nav-main mainmenu-nav">
                        <ul className="mainmenu">
                            {NAV_SECTIONS.map((item) => (
                                <li className="menu-item" key={item.to}>
                                    <Link
                                        onClick={closeSidebar}
                                        className="nav-item"
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
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
                        className="rts-btn btn-primary header-one-btn quote-btnmenu"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SideMenuBar;
