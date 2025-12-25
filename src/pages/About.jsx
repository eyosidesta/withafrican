import { Link } from 'react-router-dom';
import { Users, Target, Award, Heart, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        {
            icon: <Target size={28} />,
            title: 'Our Mission',
            description: 'To connect local businesses with their communities, making it easy for customers to discover and support the businesses that make our neighborhoods thrive.'
        },
        {
            icon: <Heart size={28} />,
            title: 'Community First',
            description: 'We believe in the power of local businesses. They are the backbone of our communities, creating jobs and building relationships.'
        },
        {
            icon: <Award size={28} />,
            title: 'Quality Service',
            description: 'We carefully curate our directory to ensure customers find reliable, trustworthy businesses they can depend on.'
        }
    ];

    const features = [
        'Easy-to-navigate business directory',
        'Categorized listings from A to Z',
        'Premium visibility for featured businesses',
        'Direct contact information for all listings',
        'Mobile-friendly responsive design',
        'Free advertising inquiry for new businesses'
    ];

    return (
        <div className="about-page">
            {/* Page Header */}
            <div className="page-header about-header">
                <div className="container">
                    <div className="page-header-icon">
                        <Users size={24} />
                    </div>
                    <h1>
                        About <span className="gradient-text">WithAfrican</span>
                    </h1>
                    <p>
                        Your trusted local business directory, connecting communities with the services they need.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <section className="about-story section">
                <div className="container">
                    <div className="story-content">
                        <h2>Our <span className="gradient-text">Story</span></h2>
                        <p>
                            WithAfrican started as a simple idea: what if we could take the trusted, paper-based calendar advertisements
                            that communities have relied on for years and bring them to the digital world?
                        </p>
                        <p>
                            For decades, local businesses have connected with customers through calendar advertising a familiar,
                            trusted format that people keep in their homes all year long. We saw an opportunity to extend that
                            reach by creating an online directory that complements these traditional methods.
                        </p>
                        <p>
                            Today, WithAfrican serves as a bridge between the time-tested approach of calendar advertising and
                            the modern convenience of online search. Our directory makes it easy for customers to find local
                            businesses anytime, anywhere, while giving businesses the visibility they deserve.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values section">
                <div className="container">
                    <h2 className="section-title text-center">
                        What We <span className="gradient-text">Stand For</span>
                    </h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="about-features section">
                <div className="container">
                    <div className="features-grid">
                        <div className="features-content">
                            <h2>
                                Why Choose <span className="gradient-text">WithAfrican</span>?
                            </h2>
                            <p>
                                We're more than just a directory. We're a platform dedicated to helping local businesses
                                grow while making life easier for customers.
                            </p>
                            <ul className="features-list">
                                {features.map((feature, index) => (
                                    <li key={index}>
                                        <CheckCircle size={20} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn btn-accent">
                                Advertise Your Business
                            </Link>
                        </div>
                        <div className="features-visual">
                            <div className="visual-card">
                                <span className="visual-number">70+</span>
                                <span className="visual-label">Local Businesses</span>
                            </div>
                            <div className="visual-card">
                                <span className="visual-number">30+</span>
                                <span className="visual-label">Categories</span>
                            </div>
                            <div className="visual-card accent">
                                <span className="visual-number">100+</span>
                                <span className="visual-label">Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Get Listed?</h2>
                        <p>Join our growing community of local businesses and reach more customers today.</p>
                        <div className="cta-buttons">
                            <Link to="/businesses" className="btn btn-primary">
                                Browse Directory
                            </Link>
                            <Link to="/contact" className="btn btn-accent">
                                Advertise Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
