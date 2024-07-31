import './App.css';
import Footer from './component/Navbar/Footer';
import Navbar from './component/Navbar/Navbar';
import AboutSection from './component/sections/About';
import Main from './component/sections/Main';
import Portfolio from './component/sections/Portfolio';
import ReviewSection from './component/sections/Rating';
import ServiceSection from './component/sections/Service';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <ReviewSection />
      <br />
      <Footer />
    </div>  
  );
}

export default App;
