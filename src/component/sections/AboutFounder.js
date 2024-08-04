import './AboutFounder.css';
import FounderImage from '../images/tegafate-ceo.jpg'; // Replace with the actual path to the image

const AboutFounder = () => {
    return (
        <div id="about-founder">
            <div className="founder-wrapper">
                <div className="founder-image">
                    <img src={FounderImage} alt="Co-Founder" />
                </div>
                <div className="founder-content">
                    <h2>Meet Our Visionary CEO</h2>
                    <p>At the helm of TegaFate Brand is Abdul, a dynamic leader whose profound experience and visionary approach have been pivotal in shaping our company’s success. With an unwavering passion for innovation and a steadfast commitment to excellence, Abdul has driven TegaFate to the forefront of the industry.</p>
                    <p>Abdul's extensive background in technology and strategic business management has been instrumental in laying the foundation for our growth. Under his leadership, TegaFate continues to innovate and set new standards, ensuring our clients receive unparalleled service and results.</p>
                    <p>Abdul’s dedication to pushing the boundaries of what’s possible has not only fueled our company’s achievements but also inspired our team to strive for greatness. With Abdul at the helm, TegaFate is not just a brand—it's a testament to what can be achieved with visionary leadership and relentless pursuit of excellence.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutFounder;