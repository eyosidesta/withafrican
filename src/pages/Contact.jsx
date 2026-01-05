import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { getCategories } from '../data/mockData';
import './Contact.css';

const Contact = () => {
    const categories = getCategories();
    const [formData, setFormData] = useState({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        category: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
        if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.category) newErrors.category = 'Please select a category';
        if (!formData.message.trim()) newErrors.message = 'Please include a message';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    setIsSubmitted(true);
                    setFormData({
                        businessName: '',
                        contactName: '',
                        phone: '',
                        email: '',
                        category: '',
                        message: ''
                    });
                } else {
                    setErrors(prev => ({ ...prev, submit: data.message || 'Something went wrong. Please try again.' }));
                }
            } catch (error) {
                console.error('Submission error:', error);
                setErrors(prev => ({ ...prev, submit: 'Failed to send inquiry. Please try again later.' }));
            }
        }
    };

    if (isSubmitted) {
        return (
            <div className="contact-page">
                <div className="container">
                    <div className="success-message">
                        <div className="success-icon">
                            <CheckCircle size={48} />
                        </div>
                        <h2>Thank You!</h2>
                        <p>Your inquiry has been submitted successfully. We'll get back to you within 1-2 business days.</p>
                        <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                            Submit Another Inquiry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-page">
            {/* Page Header */}
            <div className="page-header contact-header">
                <div className="container">
                    <div className="page-header-icon">
                        <Send size={24} />
                    </div>
                    <h1>
                        <span className="gradient-text">Advertise</span> Your Business
                    </h1>
                    <p>
                        Ready to reach more customers? Fill out the form below and we'll help you get started.
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2>Send Us an Inquiry</h2>
                            <p className="form-subtitle">
                                Fill out the form below and our team will reach out to discuss advertising options.
                            </p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="businessName">Business Name *</label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Enter your business name"
                                        className={errors.businessName ? 'error' : ''}
                                    />
                                    {errors.businessName && <span className="error-text">{errors.businessName}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contactName">Contact Person Name *</label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className={errors.contactName ? 'error' : ''}
                                    />
                                    {errors.contactName && <span className="error-text">{errors.contactName}</span>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(416) 555-0100"
                                            className={errors.phone ? 'error' : ''}
                                        />
                                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@business.com"
                                            className={errors.email ? 'error' : ''}
                                        />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Business Category *</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className={errors.category ? 'error' : ''}
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.category && <span className="error-text">{errors.category}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message / Inquiry *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your business and what you're looking for..."
                                        rows="5"
                                        className={errors.message ? 'error' : ''}
                                    />
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn btn-accent btn-lg submit-btn">
                                    <Send size={18} />
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card">
                                <h3>Get in Touch</h3>
                                <p>Have questions? We're here to help you grow your business visibility.</p>

                                <div className="info-items">
                                    <div className="info-item">
                                        <Phone size={20} />
                                        <div>
                                            <span className="info-label">Phone</span>
                                            <a href="tel:4165550100" className="info-value">(647) 706-0102</a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <Mail size={20} />
                                        <div>
                                            <span className="info-label">Email</span>
                                            <a href="mailto:info@withafrican.com" className="info-value">info@withafrican.com</a>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <MapPin size={20} />
                                        <div>
                                            <span className="info-label">Location</span>
                                            <span className="info-value">Toronto, Ontario, Canada</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="benefits-card">
                                <h3>Why Advertise With Us?</h3>
                                <ul>
                                    <li>
                                        <CheckCircle size={18} />
                                        Reach thousands of local customers
                                    </li>
                                    <li>
                                        <CheckCircle size={18} />
                                        Premium placement on our platform
                                    </li>
                                    <li>
                                        <CheckCircle size={18} />
                                        Complement your calendar advertising
                                    </li>
                                    <li>
                                        <CheckCircle size={18} />
                                        Affordable advertising packages
                                    </li>
                                    <li>
                                        <CheckCircle size={18} />
                                        24/7 online visibility
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
