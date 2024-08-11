// ServicePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ServicePage.css"

const ServicePage = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (plan) => {
    const planDetails = {
      basic: { amount: 2000, currency: 'NGN' },
      standard: { amount: 5000, currency: 'NGN' },
    };

    navigate('/payment', { state: planDetails[plan] });
  };

  return (
    <div id="service-page">
      <h1>Already Made Ecommerce Store</h1>
      <p>
        Our "Already Made Ecommerce Store" service is designed to provide you with a fully functional, ready-to-launch online store. This service is perfect for entrepreneurs looking to start their online business quickly and efficiently without the hassle of building a store from scratch.
      </p>
      
      <h2>Why Choose Our Already Made Ecommerce Store?</h2>
      <p>
        Launching an ecommerce store can be a time-consuming and complex process, requiring technical expertise and a deep understanding of web development and design. Our service takes care of all the heavy lifting, providing you with a professionally designed, user-friendly store that is optimized for sales and customer experience.
      </p>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Quick Launch: Start selling within days, not months.</li>
        <li>Professional Design: Aesthetic and functional design tailored to your brand.</li>
        <li>SEO Optimized: Built with SEO best practices to help you rank higher on search engines.</li>
        <li>Responsive Design: Your store will look great on any device.</li>
        <li>Secure and Reliable: Ensuring the safety of your transactions and customer data.</li>
      </ul>

      <h2>Pricing Packages</h2>
      <p>
        We offer two different packages to suit your business needs:
      </p>
      
      <div className="pricing-plans">
        <div className="plan">
          <h3>Basic Plan</h3>
          <p>Price: ₦2,000</p>
          <p>Our Basic Plan includes:</p>
          <ul>
            <li>Pre-built Ecommerce Store</li>
            <li>Basic SEO Optimization</li>
            <li>Responsive Design</li>
            <li>Email Support for Setup Assistance</li>
          </ul>
          <button onClick={() => handlePlanSelection('basic')}>Choose Basic Plan</button>
        </div>

        <div className="plan">
          <h3>Standard Plan</h3>
          <p>Price: ₦5,000</p>
          <p>Our Standard Plan includes:</p>
          <ul>
            <li>All features in the Basic Plan</li>
            <li>Custom Domain Setup</li>
            <li>Advanced SEO and Analytics Setup</li>
            <li>Priority Support with Live Chat</li>
            <li>1 Month of Free Hosting</li>
          </ul>
          <button onClick={() => handlePlanSelection('standard')}>Choose Standard Plan</button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;