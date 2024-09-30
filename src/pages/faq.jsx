import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/FAQ.css'; // Ensure you create this CSS file

const FAQ = () => {
  return (
    <Layout1>
      <div className="faq">
        <div className="faq-hero">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">Find answers to our most common questions.</p>
        </div>
        
        <div className="faq-content">
          <div className="faq-item">
            <h2 className="faq-question">What is UrbanPaws?</h2>
            <p className="faq-answer">
              UrbanPaws is your go-to platform for finding pet-friendly accommodations, activities, and services. We specialize in ensuring that both you and your furry friends have a memorable and enjoyable experience.
            </p>
          </div>
          
          <div className="faq-item">
            <h2 className="faq-question">How do I book a stay?</h2>
            <p className="faq-answer">
              To book a stay, simply use our search functionality to find your desired location and accommodation. Once you've selected your options, you can proceed to book directly through our website.
            </p>
          </div>
          
          <div className="faq-item">
            <h2 className="faq-question">Are there any extra fees?</h2>
            <p className="faq-answer">
              We pride ourselves on having no hidden fees. The price you see is the price you pay, with no additional charges at checkout.
            </p>
          </div>
          
          <div className="faq-item">
            <h2 className="faq-question">What if I need to cancel or modify my booking?</h2>
            <p className="faq-answer">
              You can cancel or modify your booking by contacting our customer support team. Please refer to our cancellation policy for more details.
            </p>
          </div>
          
          <div className="faq-item">
            <h2 className="faq-question">How can I contact customer support?</h2>
            <p className="faq-answer">
              Our customer support team is available 24/7. You can contact us through the "Contact Us" page on our website or directly via email or phone.
            </p>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default FAQ;
