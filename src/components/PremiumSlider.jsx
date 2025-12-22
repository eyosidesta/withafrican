import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Phone, MapPin } from 'lucide-react';
import { getPremiumBusinesses } from '../data/mockData';
import './PremiumSlider.css';

const PremiumSlider = () => {
    const premiumBusinesses = getPremiumBusinesses();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-rotate every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % premiumBusinesses.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [premiumBusinesses.length]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + premiumBusinesses.length) % premiumBusinesses.length);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % premiumBusinesses.length);
    };

    const currentBusiness = premiumBusinesses[currentIndex];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="premium-slider-section">
            <div className="container">
                <div className="premium-slider-header">
                    <div className="premium-slider-badge">
                        <Star size={16} />
                        Featured Premium Businesses
                    </div>
                    <h2 className="section-title">
                        Our <span className="gradient-text">Premium</span> Partners
                    </h2>
                    <p className="section-subtitle">
                        Discover top-rated businesses in your community
                    </p>
                </div>

                <div className="premium-slider-container">
                    <button className="slider-btn slider-btn-prev" onClick={handlePrev}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="slider-wrapper">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="slider-slide"
                            >
                                <Link to={`/business/${currentBusiness.id}`} className="premium-card">
                                    <div className="premium-card-image">
                                        <img src={currentBusiness.image} alt={currentBusiness.name} />
                                        <div className="premium-card-overlay" />
                                    </div>
                                    <div className="premium-card-content">
                                        <span className="premium-badge">
                                            <Star size={12} />
                                            Premium
                                        </span>
                                        <h3>{currentBusiness.name}</h3>
                                        <span className="premium-card-category">{currentBusiness.category}</span>
                                        <div className="premium-card-info">
                                            <p>
                                                <Phone size={16} />
                                                {currentBusiness.phone}
                                            </p>
                                            <p>
                                                <MapPin size={16} />
                                                {currentBusiness.address}
                                            </p>
                                        </div>
                                        <span className="premium-card-cta">View Details →</span>
                                    </div>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="slider-btn slider-btn-next" onClick={handleNext}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="slider-dots">
                    {premiumBusinesses.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumSlider;
