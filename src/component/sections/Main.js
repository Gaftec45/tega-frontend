import Banner1 from '../images/banner-1.jpg'
import './Main.css'
import OurWork from './Ourwork';
import SupportPlatform from './SupportPlatform';


const Main = () => {

    return (
        <div id='main-section'>
            <div className="main-content">
                <h1>Your Digital Marketing Agency</h1>
                <p>SEO. PPC. Content. Social Media. Analytics. Design. Development. Portent pulls together these tactics to craft stunningly useful digital marketing campaigns that grow your business.</p>
                <button>Get Started</button>
            </div>
            {/* <div className="main-banner">
                <img src={Banner1} alt="Digital Marketing Services by TEGAFATE" />
            </div> */}

        <SupportPlatform />
        <OurWork />
        </div>
    );
}
 
export default Main;