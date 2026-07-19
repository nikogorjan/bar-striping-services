"use client"
import { useLayoutEffect } from 'react';

// Reveals each section (and staggers its cards) as it scrolls into view.
// Renders nothing — it just wires up an IntersectionObserver.

const SECTIONS = [
    '.bar-about',
    '.bar-services',
    '.bar-details',
    '.bar-industries',
    '.bar-stats',
    '.bar-benefits',
    '.bar-signs',
    '.bar-ba',
    '.bar-why',
    '.bar-process',
    '.bar-testimonials',
    '.bar-faq',
    '.bar-area',
    '.bar-cta',
    '.bar-contact',
    '.bar-map',
    '.bar-footer',
].join(', ');

const CARDS = [
    '.bar-service-card',
    '.bar-industry-card',
    '.bar-detail-col',
    '.sign-item',
    '.bar-step',
    '.bar-testimonial-card',
    '.bar-accordion__item',
    '.bar-why-item',
    '.bar-contact-info .info-card',
    '.single-stat',
].join(', ');

const STAGGER_MS = 70;
const MAX_DELAY_MS = 560;
// after the animation finishes, strip the reveal classes so the cards'
// normal hover transitions are not delayed
const CLEANUP_MS = 1800;

function ScrollReveal() {
    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const cleanup = (el) => {
            el.classList.remove('reveal', 'reveal-child', 'is-visible');
            el.style.transitionDelay = '';
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const section = entry.target;
                    section.classList.add('is-visible');
                    const children = section.querySelectorAll('.reveal-child');
                    children.forEach((child) => child.classList.add('is-visible'));
                    observer.unobserve(section);
                    window.setTimeout(() => {
                        cleanup(section);
                        children.forEach(cleanup);
                    }, CLEANUP_MS);
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
        );

        const sections = document.querySelectorAll(SECTIONS);
        sections.forEach((section) => {
            section.classList.add('reveal');
            section.querySelectorAll(CARDS).forEach((card, index) => {
                card.classList.add('reveal-child');
                card.style.transitionDelay = `${Math.min(index * STAGGER_MS, MAX_DELAY_MS)}ms`;
            });
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}

export default ScrollReveal;
