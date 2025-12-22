import { useParams, Link } from 'react-router-dom';
import { Phone, MapPin, Globe, ArrowLeft, Star, Tag } from 'lucide-react';
import { getBusinessById } from '../data/mockData';
import './BusinessDetail.css';

const BusinessDetail = () => {
    const { id } = useParams();
    const business = getBusinessById(id);

    if (!business) {
        return (
            <div className="business-detail-page">
                <div className="container">
                    <div className="not-found">
                        <h1>Business Not Found</h1>
                        <p>The business you're looking for doesn't exist or has been removed.</p>
                        <Link to="/businesses" className="btn btn-primary">
                            Back to All Businesses
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const { name, category, phone, address, website, premium, image } = business;

    return (
        <div className="business-detail-page">
            {/* Back Button */}
            <div className="container">
                <Link to="/businesses" className="back-link">
                    <ArrowLeft size={20} />
                    Back to All Businesses
                </Link>
            </div>

            {/* Business Hero */}
            <section className="business-hero">
                <div className="container">
                    <div className="business-hero-grid">
                        <div className="business-hero-image">
                            <img src={image} alt={name} />
                            {premium && (
                                <span className="premium-badge detail-premium">
                                    <Star size={14} />
                                    Premium Partner
                                </span>
                            )}
                        </div>
                        <div className="business-hero-content">
                            {premium && (
                                <span className="premium-tag">
                                    <Star size={14} />
                                    Premium Business
                                </span>
                            )}
                            <h1>{name}</h1>
                            <span className="business-category">
                                <Tag size={16} />
                                {category}
                            </span>

                            <div className="business-details">
                                <div className="detail-item">
                                    <Phone size={20} />
                                    <div>
                                        <span className="detail-label">Phone</span>
                                        <a href={`tel:${phone}`} className="detail-value phone-link">
                                            {phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <MapPin size={20} />
                                    <div>
                                        <span className="detail-label">Address</span>
                                        <span className="detail-value">{address}</span>
                                    </div>
                                </div>

                                {website && (
                                    <div className="detail-item">
                                        <Globe size={20} />
                                        <div>
                                            <span className="detail-label">Website</span>
                                            <a
                                                href={website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="detail-value website-link"
                                            >
                                                {website.replace(/https?:\/\//, '')}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="business-actions">
                                <a href={`tel:${phone}`} className="btn btn-primary">
                                    <Phone size={18} />
                                    Call Now
                                </a>
                                {website && (
                                    <a
                                        href={website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        <Globe size={18} />
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="detail-cta section">
                <div className="container">
                    <div className="detail-cta-content">
                        <h2>Want Your Business Featured Like This?</h2>
                        <p>Join our directory and get discovered by thousands of local customers.</p>
                        <Link to="/contact" className="btn btn-accent">
                            Advertise Your Business
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessDetail;
