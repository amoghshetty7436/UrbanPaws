import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/Help.css'; // Ensure you create this CSS file

const Help = () => {
  return (
    <Layout1>
      <div className="help-page">
        <div className="help-hero">
          <h1 className="help-title">How Can We Assist You?</h1>
          <p className="help-subtitle">Find answers to common questions or get in touch with our support team for further assistance.</p>
        </div>

        <div className="help-content">
          <div className="help-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <ul className="faq-list">
              <li>
                <h3>How do I book a pet-friendly accommodation?</h3>
                <p>To book a pet-friendly accommodation, simply visit our booking page, enter your travel details, and use the filters to select 'Pet-Friendly' options. Follow the booking instructions to confirm your reservation.</p>
              </li>
              <li>
                <h3>What is UrbanPaws' cancellation policy?</h3>
                <p>Our cancellation policy varies depending on the accommodation. Please check the specific property's cancellation terms before booking. If you need further assistance, contact our support team.</p>
              </li>
              <li>
                <h3>Are there any additional fees for pets?</h3>
                <p>Some properties may charge an additional fee for pets. This information will be provided during the booking process, and you can view the fees in the property details.</p>
              </li>
            </ul>
          </div>

          <div className="help-section">
            <h2 className="section-title">Contact Support</h2>
            <p>If you have any other questions or need further assistance, please reach out to our support team. We are here to help you 24/7.</p>
            <div className="contact-info">
              <div className="contact-info-item">
                <img src="/phone-icon.png" alt="Phone" className="contact-icon" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="contact-info-item">
                <img src="/email-icon.png" alt="Email" className="contact-icon" />
                <p>support@urbanpaws.com</p>
              </div>
            </div>
          </div>

          <div className="help-section">
            <h2 className="section-title">Useful Links</h2>
            <ul className="useful-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Help;
