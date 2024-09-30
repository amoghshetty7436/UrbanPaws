import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      {/* Dog Images Section */}
      <div className="footer__dogs">
        <img className="footer__dogs__img" src="/footer1.png" alt="Dog" />
        <img className="footer__dogs__img" src="/footer2.png" alt="Dog" />
        <img className="footer__dogs__img" src="/footer3.png" alt="Dog" />
        <img className="footer__dogs__img" src="/footer4.png" alt="Dog" />
        <img className="footer__dogs__img" src="/footer5.png" alt="Dog" />
        <img className="footer__dogs__img" src="/footer6.png" alt="Dog" />
        <img className="footer__dogs__img" src="/footer7.png" alt="Dog" />
        {/* Add more dog images as needed */}
      </div>

      <div className="footer__main">
        {/* Footer Content Section */}
        <div className="footer__content">
          <div className="footer__section">
            <h2>Company Info</h2>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/promotions">Promotions</Link></li>
              {/* Add more footer links as needed */}
            </ul>
          </div>
          <div className="footer__section">
            <h2>Partners</h2>
            <ul>
              <li><Link to="/advertising">Advertise with Us</Link></li>
              <li><Link to="/press">Media</Link></li>
              <li><Link to="/petcharity">Pet Charities</Link></li>
              {/* Add more footer links as needed */}
            </ul>
          </div>
          <div className="footer__section">
            <h2>Customer Service</h2>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              {/* Add more footer links as needed */}
            </ul>
          </div>
        </div>

        {/* Additional Footer Text */}
        <div className="footer__additional">
          <ul className="footer__links">
            <li>© 2024-2030 Sardar Patel, Inc.</li>
            <li><Link to="/privacy-policy">Privacy Policy & Ads Disclosure</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="footer__social__icon" src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="footer__social__icon" src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
