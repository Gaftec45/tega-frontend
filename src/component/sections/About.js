import React from 'react';
import Banner1 from '../images/about-banner.jpg';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div id="about-section">
            <div className="about-banner">
                <img src={Banner1} alt="Digital Marketing Services by TEGAFATE" />
            </div>
            <div className="about-content">
                <h1>About Us</h1>
                <p>We are a digital marketing agency that specializes in creating impactful campaigns to grow your business. Our expertise spans across SEO, PPC, content creation, social media management, analytics, design, and development. We combine these strategies to deliver stunningly effective digital marketing solutions tailored to your needs.</p>
                <p>With a commitment to excellence and a passion for driving business success, we have established ourselves as a leading player in the dynamic and ever-evolving landscape of online marketing.</p>
                {/* <button>Get Started</button> */}
            </div>
        </div>
    );
}
 
export default AboutSection;