import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Sparkles } from 'lucide-react';
import PremiumSlider from '../components/PremiumSlider';
import SearchBar from '../components/SearchBar';
import { getBusinessesByCategory, searchBusinesses, getAllBusinesses } from '../data/mockData';
import './Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const allBusinesses = getAllBusinesses();
    const businessesByCategory = getBusinessesByCategory();

    // Filter businesses based on search
    const filteredBusinesses = searchQuery
        ? searchBusinesses(searchQuery, allBusinesses)
        : null;

    // Group filtered businesses by category if searching
    const getFilteredByCategory = () => {
        if (!filteredBusinesses) return businessesByCategory;

        const grouped = {};
        filteredBusinesses.forEach((business) => {
            if (!grouped[business.category]) {
                grouped[business.category] = [];
            }
            grouped[business.category].push(business);
        });
        return grouped;
    };

    const displayData = getFilteredByCategory();
    const sortedCategories = Object.keys(displayData).sort();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">
                            <Sparkles size={16} />
                            Your Local Business Directory
                        </span>
                        <h1>
                            Discover <span className="gradient-text">Local Businesses</span> In Your Community
                        </h1>
                        <p>
                            Find trusted local businesses across all categories. From accounting to restaurants,
                            connect with the services you need.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/businesses" className="btn btn-primary">
                                Browse All Businesses
                            </Link>
                            <Link to="/contact" className="btn btn-accent">
                                Advertise Your Business
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Slider */}
            <PremiumSlider />

            {/* Business Directory Section */}
            <section className="directory-section section">
                <div className="container">
                    <div className="directory-header">
                        <h2 className="section-title">
                            Business <span className="gradient-text">Directory</span>
                        </h2>
                        <p className="section-subtitle">
                            Browse businesses by category, sorted alphabetically for easy navigation
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="directory-search">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Search by business name, category, phone, or address..."
                        />
                    </div>

                    {/* Results Count */}
                    {searchQuery && (
                        <p className="search-results-count">
                            Found {filteredBusinesses.length} business{filteredBusinesses.length !== 1 ? 'es' : ''} matching "{searchQuery}"
                        </p>
                    )}

                    {/* Category Lists */}
                    <div className="category-list">
                        {sortedCategories.length > 0 ? (
                            sortedCategories.map((category) => (
                                <div key={category} className="category-group">
                                    <h3 className="category-title">{category}</h3>
                                    <ul className="business-list">
                                        {displayData[category].map((business) => (
                                            <li key={business.id}>
                                                <Link to={`/business/${business.id}`} className="business-list-item">
                                                    <div className="business-list-info">
                                                        <span className="business-list-name">
                                                            {business.name}
                                                            {business.premium && (
                                                                <span className="premium-badge-mini">★ Premium</span>
                                                            )}
                                                        </span>
                                                        <span className="business-list-phone">
                                                            <Phone size={14} />
                                                            {business.phone}
                                                        </span>
                                                    </div>
                                                    <ChevronRight size={18} className="business-list-arrow" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No businesses found matching your search.</p>
                                <button className="btn btn-secondary" onClick={() => setSearchQuery('')}>
                                    Clear Search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Grow Your Business?</h2>
                        <p>Join our directory and reach thousands of potential customers in your area.</p>
                        <Link to="/contact" className="btn btn-accent btn-lg">
                            Advertise Your Business Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
