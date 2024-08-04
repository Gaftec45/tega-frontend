import React from 'react';
import CUSTOM from '../images/Customer-service.jpg';
import './ContactSection.css'; // Create this CSS file for styling
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div className="container">
            <div style={{ textAlign: 'center' }}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className="row">
                <div className="column">
                    <img src={CUSTOM} alt="Customer service" style={{ width: '100%' }} />
                </div>
                <div className="column">
                    <form action="/action_page.php">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '170px' }}></textarea>
                        <input type="submit" value="Submit" style={{ borderRadius: "10px", fontSize: "25px" }} />
                    </form>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>Follow Us</h2>
                <p>Connect with us on social media:</p>
                <ul className="social-media">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61556636033347&mibextid=ZbWKwL" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Follow us on Facebook">
                            <FaFacebook /> <span className="sr-only">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/tegafate" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Follow us on Instagram">
                            <FaInstagram /> <span className="sr-only">Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactSection;