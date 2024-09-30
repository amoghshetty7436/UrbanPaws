import React, { useState } from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/ContactUs.css'; // Ensure you create this CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Layout1>
      <div className="contact-us">
        <div className="contact-hero">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you! Reach out with any questions or feedback.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-info-title">Contact Information</h2>
            <div className="contact-info-item">
              <img src="/phone-icon.png" alt="Phone" className="contact-icon" />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-info-item">
              <img src="/email-icon.png" alt="Email" className="contact-icon" />
              <p>support@urbanpaws.com</p>
            </div>
            <div className="contact-info-item">
              <img src="/location-icon.png" alt="Location" className="contact-icon" />
              <p>123 Pet Street, Pet City, PC 12345</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default ContactUs;
