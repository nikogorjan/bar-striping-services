"use client"
import React from 'react';
import { Link } from 'react-scroll';

export const NAV_SECTIONS = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'services', label: 'Services' },
    { to: 'industries', label: 'Industries' },
    { to: 'why-us', label: 'Why Us' },
    { to: 'contact', label: 'Contact' },
];

function NavBar() {
    return (
        <nav className="nav-main mainmenu-nav onepage-nav-pp d-none d-xl-block">
            <ul className="mainmenu">
                {NAV_SECTIONS.map((item) => (
                    <li key={item.to}>
                        <Link
                            className="nav-item"
                            activeClass="active"
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
    );
}

export default NavBar;
