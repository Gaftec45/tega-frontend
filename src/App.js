import Footer from './component/Navbar/Footer';
import Navbar from './component/Navbar/Navbar';
import AboutSection from './component/sections/About';
import AboutFounder from './component/sections/AboutFounder';
import ContactSection from './component/sections/ContactSection';
import CustomerResult from './component/sections/CustomerResult';
import Main from './component/sections/Main';
import OfferSection from './component/sections/OfferSection';
// import Portfolio from './component/sections/Portfolio';
import ReviewSection from './component/sections/Rating';
import SectionCounter from './component/sections/SectionCounter';
import ServiceSection from './component/sections/Service';
import SupportPlatform from './component/sections/SupportPlatform';


const metrics = [
  { value: '50+', label: 'Happy Customers' },
  { value: '150', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Availability' }
];

function App() {
  
  return (
    <div className="App">
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
      {/* <Portfolio /> */}
      <ReviewSection />
      <div id="contact">
        <ContactSection />
      </div>
      <br />
      <Footer />
    </div>  
  );
}

export default App;
