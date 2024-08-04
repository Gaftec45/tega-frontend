import React from 'react';
import './SectionCounter.css'; // Assuming you have some CSS for styling

const SectionCounter = ({ metrics }) => {
    return (
        <div className="section-counter">
            <h2>Our Business Performance</h2>
            <div className="metrics-container">
                {metrics.map((metric, index) => (
                    <div key={index} className="metric">
                        <h3>{metric.value}</h3>
                        <p>{metric.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionCounter;