import React from 'react';
import './OfferSection.css';
import SEO from '../images/1.png'; 
import PPC from '../images/2.png';
import SMM from '../images/3.png';
import CMS from '../images/4.png';
import ANA from '../images/5.png';
import WEB from '../images/6.png';
import EMS from '../images/7.png';
import CRS from '../images/8.png';


const OfferSection = () => {

    const services = [
        { id: 'b1', title: "SEO", description: "Scalable, sustainable growth with sophisticated search engine optimization from the best in the business.", image: SEO },
        { id: 'b2', title: "PPC", description: "Higher return on investment from a team that’s managed pay-per-click and paid media for two decades.", image: PPC },
        { id: 'b3', title: "Social Media", description: "Effective social reach with campaigns by veterans who have partnered with the best-loved brands.", image: SMM },
        { id: 'b4', title: "Content Marketintg", description: "Compelling content that builds loyalty and grows share of voice from smart creators.", image: CMS },
        { id: 'b5', title: "Analytics", description: "Accurate, actionable reports and analysis executed by nerds who know marketing.", image: ANA },
        { id: 'b6', title: "Web Design", description: "Functional, brilliant creative and technology from a team that builds with a purpose.", image: WEB },
        { id: 'b7', title: "Email Marketing", description: "Our email marketing experts design and execute personalized campaigns that deliver the right message to the right audience.", image: EMS },
        { id: 'b8', title: "Conversion Rate", description: "Our CRO specialists analyze user behavior, identify conversion bottlenecks, and optimize your website for maximum conversions.", image: CRS },
        // { id: 'b9', title: "Ready Made Shopify Store", description: "Ready made shopify store made for you with 10 winning Product, ready to transfer Ownership.", color: "black" },
        // Add more services as needed
    ];

    return (

        <div className="offer-section">
            <h2>Solution To Your Problem</h2>
        <div className="offer-grid">
            {services.map(service => (
                <div key={service.id} className="offer-container">
                    <span>{service.title}</span>
                    <img src={service.image} alt={service.title} className="offer-image" />
                    <div className="offer-overlay">
                        <div className="offer-text">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

    );
}

export default OfferSection;