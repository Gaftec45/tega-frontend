import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">Latheef</div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-toggle" id="mobile-menu" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'rotate-1' : ''}`}></span>
                <span className={`bar ${isOpen ? 'fade' : ''}`}></span>
                <span className={`bar ${isOpen ? 'rotate-2' : ''}`}></span>
            </div>
        </nav>
    );
}

export default Navbar;