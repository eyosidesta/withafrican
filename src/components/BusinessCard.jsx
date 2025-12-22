import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, ExternalLink } from 'lucide-react';
import './BusinessCard.css';

const BusinessCard = ({ business, showCategory = true }) => {
    const { id, name, category, phone, address, premium, image, website } = business;

    return (
        <Link to={`/business/${id}`} className="business-card">
            <div className="business-card-image">
                <img src={image} alt={name} />
                {premium && (
                    <span className="premium-badge">
                        <Star size={12} />
                        Premium
                    </span>
                )}
            </div>
            <div className="business-card-content">
                <h3 className="business-card-name">{name}</h3>
                {showCategory && <span className="business-card-category">{category}</span>}
                <div className="business-card-info">
                    <p>
                        <Phone size={16} />
                        {phone}
                    </p>
                    <p>
                        <MapPin size={16} />
                        {address}
                    </p>
                </div>
                {website && (
                    <span className="business-card-link">
                        <ExternalLink size={14} />
                        Visit Website
                    </span>
                )}
            </div>
        </Link>
    );
};

export default BusinessCard;
