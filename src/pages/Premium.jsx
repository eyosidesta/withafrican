import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import BusinessCard from '../components/BusinessCard';
import { getPremiumBusinesses, searchBusinesses } from '../data/mockData';
import './Premium.css';

const Premium = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const premiumBusinesses = getPremiumBusinesses();

    const filteredBusinesses = searchQuery
        ? searchBusinesses(searchQuery, premiumBusinesses)
        : premiumBusinesses;

    return (
        <div className="premium-page">
            {/* Page Header */}
            <div className="page-header premium-header">
                <div className="container">
                    <div className="premium-header-badge">
                        <Star size={20} />
                        Premium Partners
                    </div>
                    <h1>
                        <span className="gradient-text">Premium</span> Businesses
                    </h1>
                    <p>
                        Explore our featured premium advertisers who go above and beyond to serve the community.
                    </p>
                </div>
            </div>

            {/* Search & Content */}
            <section className="section">
                <div className="container">
                    {/* Search Bar */}
                    <div className="premium-search">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Search premium businesses by name, phone, or address..."
                        />
                    </div>

                    {/* Results Count */}
                    {searchQuery && (
                        <p className="search-results-info">
                            Showing {filteredBusinesses.length} of {premiumBusinesses.length} premium businesses
                        </p>
                    )}

                    {/* Business Cards Grid */}
                    {filteredBusinesses.length > 0 ? (
                        <div className="business-cards-grid">
                            {filteredBusinesses.map((business) => (
                                <BusinessCard key={business.id} business={business} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results-box">
                            <Star size={48} />
                            <h3>No Premium Businesses Found</h3>
                            <p>Try adjusting your search query</p>
                            <button className="btn btn-secondary" onClick={() => setSearchQuery('')}>
                                Clear Search
                            </button>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="premium-cta">
                        <h3>Want Premium Visibility?</h3>
                        <p>Upgrade your listing to premium and get featured across our platform.</p>
                        <Link to="/contact" className="btn btn-accent">
                            Become a Premium Partner
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Premium;
