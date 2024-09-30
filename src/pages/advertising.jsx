import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/Advertising.css'; // Ensure you create this CSS file

const Advertising = () => {
  return (
    <Layout1>
      <div className="advertising-page">
        <div className="advertising-hero">
          <h1 className="advertising-title">Advertise with Us</h1>
          <p className="advertising-subtitle">Reach our dedicated audience and showcase your brand through tailored advertising solutions.</p>
        </div>

        <div className="advertising-content">
          <div className="advertising-section">
            <h2 className="section-title">Why Advertise with UrbanPaws?</h2>
            <p>UrbanPaws is a leading platform in the pet-friendly travel industry. Our engaged audience consists of pet lovers who are always on the lookout for the best products and services for their furry friends. By advertising with us, you can:</p>
            <ul className="benefits-list">
              <li>Reach a highly targeted and engaged audience</li>
              <li>Increase your brand visibility in a niche market</li>
              <li>Benefit from our extensive digital presence and marketing strategies</li>
              <li>Leverage our expertise in creating compelling ad content</li>
            </ul>
          </div>

          <div className="advertising-section">
            <h2 className="section-title">Our Advertising Options</h2>
            <p>We offer a variety of advertising solutions to suit your needs:</p>
            <div className="ad-options">
              <div className="ad-option">
                <h3>Banner Ads</h3>
                <p>Place banner ads on our website and reach visitors across various pages.</p>
              </div>
              <div className="ad-option">
                <h3>Sponsored Content</h3>
                <p>Feature your brand in sponsored blog posts and articles on our platform.</p>
              </div>
              <div className="ad-option">
                <h3>Email Campaigns</h3>
                <p>Reach our audience directly through targeted email campaigns.</p>
              </div>
              <div className="ad-option">
                <h3>Social Media Promotions</h3>
                <p>Promote your brand through our social media channels for maximum exposure.</p>
              </div>
            </div>
          </div>

          <div className="advertising-section">
            <h2 className="section-title">Get Started</h2>
            <p>Ready to get started? Contact us to discuss your advertising needs and learn more about our packages and pricing.</p>
            <div className="contact-info">
              <div className="contact-info-item">
                <img src="/phone-icon.png" alt="Phone" className="contact-icon" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="contact-info-item">
                <img src="/email-icon.png" alt="Email" className="contact-icon" />
                <p>advertising@urbanpaws.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Advertising;
