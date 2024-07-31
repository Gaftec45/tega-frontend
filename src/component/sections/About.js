import Banner1 from '../images/about-banner.jpg'


const AboutSection = () => {
    return (
        <div id="about-section">
            <div className="about-content">
                <h1>About Us</h1>
                <p>Transform your brand's online presence with our innovative strategies and creative solutions.</p>
                {/* <button>Get Started</button> */}
            </div>
            <div className="main-banner">
                <img src={Banner1} alt="Digital Marketing Services by TEGAFATE" />
            </div>
        </div>
    );
}
 
export default AboutSection;