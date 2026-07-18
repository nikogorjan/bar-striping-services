"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ErrorBoundary from '@/components/ErrorBoundary';

const STATS = [
    { end: 250, suffix: '+', label: 'Parking Lots Striped' },
    { end: 12000, suffix: '+', separator: ',', label: 'Stalls Painted' },
    { end: 10, suffix: '+', label: 'Years of Experience' },
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
