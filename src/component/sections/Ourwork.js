import Banner1 from '../images/banner-1.jpg';
import './Ourwork.css';

// Sample data for portfolio items
const portfolioData = [
    { id: 1, category: 'Web Design', title: 'Project 1', image: Banner1 },
    { id: 2, category: 'SEO', title: 'Project 2', image: Banner1 },
    { id: 3, category: 'Web Design', title: 'Project 3', image: Banner1 },
    { id: 4, category: 'Content Marketing', title: 'Project 4', image: Banner1 },
    // Add more items as needed
];

const OurWork = () => {
    return (
        <div className="work">
            {portfolioData.map(item => (
                <div key={item.id} className="ourwork-item">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default OurWork;