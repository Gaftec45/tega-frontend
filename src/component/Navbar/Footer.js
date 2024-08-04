import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: tegaafate@gmail.com</p>
                    <p>Phone: (901) 121-4122</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#solution">Solution</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Follow us on Facebook">
                            <FaFacebook /> <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://instagram.com" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Follow us on Instagram">
                            <FaInstagram /> <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;