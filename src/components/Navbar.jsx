import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/premium', label: 'Premium' },
        { path: '/businesses', label: 'All Businesses' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <Building2 size={32} />
                    <span>WithAfrican</span>
                </Link>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn btn-accent navbar-cta" onClick={() => setIsOpen(false)}>
                        Advertise Your Business
                    </Link>
                </div>

                <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
