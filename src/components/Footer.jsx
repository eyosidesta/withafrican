import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/premium', label: 'Premium Businesses' },
        { path: '/businesses', label: 'All Businesses' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact Us' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <Building2 size={32} />
                            <span>WithAfrican</span>
                        </Link>
                        <p className="footer-description">
                            Your trusted business directory connecting customers with local businesses.
                            Discover, connect, and grow together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <Phone size={18} />
                                <span>(647) 706-0102</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>info@withafrican.com</span>
                            </li>
                            <li>
                                <MapPin size={18} />
                                <span>Toronto, Ontario, Canada</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="footer-section">
                        <h4>Grow Your Business</h4>
                        <p className="footer-cta-text">
                            Want to advertise your business? Join our directory today!
                        </p>
                        <Link to="/contact" className="btn btn-accent">
                            Advertise Now
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} WithAfrican Directory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
