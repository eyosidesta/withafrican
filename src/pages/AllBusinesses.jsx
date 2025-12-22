import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import BusinessCard from '../components/BusinessCard';
import { getBusinessesByCategory, searchBusinesses, getAllBusinesses, getCategories } from '../data/mockData';
import './AllBusinesses.css';

const AllBusinesses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const allBusinesses = getAllBusinesses();
    const businessesByCategory = getBusinessesByCategory();
    const categories = getCategories();

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
        <div className="all-businesses-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <div className="page-header-icon">
                        <LayoutGrid size={24} />
                    </div>
                    <h1>
                        All <span className="gradient-text">Businesses</span>
                    </h1>
                    <p>
                        Explore our complete directory of {allBusinesses.length} businesses across {categories.length} categories.
                    </p>
                </div>
            </div>

            {/* Search & Content */}
            <section className="section">
                <div className="container">
                    {/* Search Bar */}
                    <div className="all-biz-search">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Search by business name, category, phone, or address..."
                        />
                    </div>

                    {/* Results Info */}
                    {searchQuery && (
                        <p className="search-results-info">
                            Found {filteredBusinesses.length} business{filteredBusinesses.length !== 1 ? 'es' : ''} matching "{searchQuery}"
                        </p>
                    )}

                    {/* Categories with Cards */}
                    {sortedCategories.length > 0 ? (
                        <div className="categories-container">
                            {sortedCategories.map((category) => (
                                <div key={category} className="category-section">
                                    <h2 className="category-heading">{category}</h2>
                                    <div className="business-cards-grid">
                                        {displayData[category].map((business) => (
                                            <BusinessCard key={business.id} business={business} showCategory={false} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results-box">
                            <LayoutGrid size={48} />
                            <h3>No Businesses Found</h3>
                            <p>Try adjusting your search query</p>
                            <button className="btn btn-secondary" onClick={() => setSearchQuery('')}>
                                Clear Search
                            </button>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="all-biz-cta">
                        <h3>Is your business not listed?</h3>
                        <p>Join our growing directory and connect with potential customers.</p>
                        <Link to="/contact" className="btn btn-accent">
                            Advertise Your Business
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllBusinesses;
