"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ErrorBoundary from '@/components/ErrorBoundary';

// Real numbers provided by the client (July 2026).
const STATS = [
    { end: 100, label: 'Projects Done' },
    { end: 5000, separator: ',', label: 'Stalls Painted' },
    { end: 5, suffix: '+', label: 'Years of Experience' },
    { end: 100, suffix: '%', label: 'Jobs Done Right' },
];

function StatsBar() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <ErrorBoundary>
            <div className="bar-stats">
                <div className="container">
                    <div className="row" ref={ref}>
                        {STATS.map((stat) => (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6" key={stat.label}>
                                <div className="single-stat">
                                    <h2 className="title">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={stat.end}
                                                duration={1.5}
                                                suffix={stat.suffix}
                                                separator={stat.separator || ''}
                                            />
                                        )}
                                    </h2>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default StatsBar;
