import { useState } from 'react';
import Banner1 from '../images/banner-1.jpg'
import './Portfolio.css';

// Sample data for portfolio items
const portfolioData = [
    { id: 1, category: 'Web Design', title: 'Project 1', image: {Banner1}},
    { id: 2, category: 'SEO', title: 'Project 2', image: {Banner1} },
    { id: 3, category: 'Web Design', title: 'Project 3', image: {Banner1} },
    { id: 4, category: 'Content Marketing', title: 'Project 4', image: {Banner1} },
    // Add more items as needed
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter portfolio items based on selected category
    const filteredItems = selectedCategory === 'All'
        ? portfolioData
        : portfolioData.filter(item => item.category === selectedCategory);

    return (
        <div id="portfolio-section">
            <div className="filter-buttons">
                <button onClick={() => setSelectedCategory('All')}>All</button>
                <button onClick={() => setSelectedCategory('Web Design')}>Web Design</button>
                <button onClick={() => setSelectedCategory('SEO')}>SEO</button>
                <button onClick={() => setSelectedCategory('Content Marketing')}>Content Marketing</button>
                {/* Add more filter buttons as needed */}
            </div>
            <div className="portfolio-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="portfolio-item">
                        <img src={Banner1} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
