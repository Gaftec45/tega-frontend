import Navbar from "../Navbar/Navbar";
import AboutSection from "../sections/About";
import AboutFounder from "../sections/AboutFounder";
import ContactSection from "../sections/ContactSection";
import CustomerResult from "../sections/CustomerResult";
import Main from "../sections/Main";
import OfferSection from "../sections/OfferSection";
import ReviewSection from "../sections/Rating";
import SectionCounter from "../sections/SectionCounter";
import ServiceSection from "../sections/Service";
import SupportPlatform from "../sections/SupportPlatform";


const metrics = [
    { value: '50+', label: 'Happy Customers' },
    { value: '150', label: 'Projects Completed' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support Availability' }
  ];

const HomePage = () => {
    return (
        <>
        <Navbar />
        <div id="home">
            <Main/>
        </div>
        <SectionCounter metrics={metrics} />
        <SupportPlatform />
        <div id="about">
            <AboutSection />
        </div>
        <div id="services">
            <ServiceSection />
        </div>
        <AboutFounder />
        <div id="solution">
            <OfferSection />
        </div>
        <CustomerResult />
        <ReviewSection />
        <div id="contact">
            <ContactSection />
        </div>
        <br />
      </>
    );
}
 
export default HomePage;