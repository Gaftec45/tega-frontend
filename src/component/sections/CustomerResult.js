import React from 'react';
import './CustomerResult.css'; 
import VED from '../images/video1.mp4'
import VED2 from '../images/video2.mp4'

const CustomerResult = () => {
    const customerResults = [
        {
            id: 1,
            type: 'video',
            src: VED2,
            alt: 'Customer result image description',
        },
        {
            id: 2,
            type: 'video',
            src: VED,
            alt: 'Customer result video description',
        },
        // Add more results as needed
    ];

    return (
        <div className="customer-result-section" onContextMenu={(e) => e.preventDefault()}>
            <h2>Customer Results</h2>
            <div className="result-grid">
                {customerResults.map(result => (
                    <div key={result.id} className="result-item">
                        {result.type === 'image' ? (
                            <img src={result.src} alt={result.alt} className="result-image" />
                        ) : (
                            <video className="result-video" controls controlsList="nodownload">
                                <source src={result.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerResult;
