import './Service.css';
// import Banner1 from '../images/banner-1.jpg'

const ServiceSection = () => {
    return (
        <div id="service-section">
            <div className="wrapper">
                <div className='idex'></div>
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service-card">
                        <i className="fas fa-search"></i>
                        <h3>Search Engine Optimization (SEO)</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-ad"></i>
                        <h3>Pay-Per-Click Advertising (PPC)</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-thumbs-up"></i>
                        <h3>Social Media Marketing (SMM)</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Web Design and Development</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-file-alt"></i>
                        <h3>Content Marketing</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-envelope"></i>
                        <h3>Email Marketing Personalized</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-chart-line"></i>
                        <h3>Analytics and Reporting</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-chart-pie"></i>
                        <h3>Conversion Rate Optimization (CRO)</h3>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Already Made Store</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ServiceSection;