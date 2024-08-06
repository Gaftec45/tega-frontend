import React, { useEffect, useRef } from 'react';
import './ReviewSection.css'; // Make sure to create this CSS file

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            name: 'Jelly Jewels MTL',
            feedback: 'TegaFate has been instrumental in growing my business. Their innovative approach and commitment to excellence are unmatched.',
            rating: 5,
        },
        {
            id: 2,
            name: 'RMB Style Store',
            feedback: 'Working with TegaFate has been a game-changer for our company. Their expertise in technology and business strategy is top-notch.',
            rating: 4,
        },
        {
            id: 3,
            name: 'Newlife Auri Store',
            feedback: 'TegaFate’s team is dedicated and professional. They’ve helped us achieve our goals efficiently.',
            rating: 5,
        },
        {
            id: 4,
            name: "Lynarose Official",
            feedback: "The professionalism and dedication of the TegaFate team are unmatched. They’ve consistently gone above and beyond to help us achieve our business goals. We are extremely pleased with their work.",
            rating: 5,
        },
        {
            id: 5,
            name: "Bask's Jewelry",
            feedback: "The team at TegaFate has exceeded our expectations. Their visionary leadership and dedication have made a real difference for our company.",
            rating: 5,
        },
        { id: 6, 
          name: "Luxurydainty Brand",
          feedback: "We couldn't be happier with the results we've seen since partnering with TegaFate. Their attention to detail and passion for innovation is evident in everything they do.",
          rating: 5,
        },
   
        // Add more reviews as needed
    ];

    const reviewRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (reviewRef.current) {
                reviewRef.current.scrollBy({ left: reviewRef.current.clientWidth, behavior: 'smooth' });
                if (reviewRef.current.scrollLeft + reviewRef.current.clientWidth >= reviewRef.current.scrollWidth) {
                    reviewRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="review-section">
            <h2>Feedback From Our Satisfied Clients</h2>
            <div className="review-list" ref={reviewRef}>
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <h3>{review.name}</h3>
                        <p>{review.feedback}</p>
                        <div className="rating">
                            {'⭐'.repeat(review.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewSection;