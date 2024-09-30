import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/PetCharity.css'; // Ensure you create this CSS file

const PetCharity = () => {
  return (
    <Layout1>
      <div className="pet-charity-page">
        <div className="charity-hero">
          <h1 className="charity-title">Our Commitment to Pet Charities</h1>
          <p className="charity-subtitle">Join us in making a difference in the lives of pets in need. Learn more about our initiatives and how you can help.</p>
          <img src="/charity-hero.jpg" alt="Pet Charity" className="charity-hero-image" />
        </div>

        <div className="charity-content">
          <div className="charity-section">
            <h2 className="section-title">Our Initiatives</h2>
            <div className="charity-initiatives">
              <div className="charity-initiative">
                <img src="/initiative1.jpg" alt="Initiative 1" className="initiative-image" />
                <div className="initiative-content">
                  <h3>Supporting Local Shelters</h3>
                  <p>We collaborate with local shelters to provide necessary resources, including food, medical supplies, and adoption events.</p>
                </div>
              </div>
              <div className="charity-initiative">
                <img src="/initiative2.jpg" alt="Initiative 2" className="initiative-image" />
                <div className="initiative-content">
                  <h3>Foster and Adoption Programs</h3>
                  <p>Our foster and adoption programs help find loving homes for pets and provide support to foster families.</p>
                </div>
              </div>
              <div className="charity-initiative">
                <img src="/initiative3.jpg" alt="Initiative 3" className="initiative-image" />
                <div className="initiative-content">
                  <h3>Pet Health and Wellness</h3>
                  <p>We fund veterinary care and wellness programs to ensure that pets receive the best possible care.</p>
                </div>
              </div>
              {/* Add more initiatives as needed */}
            </div>
          </div>

          <div className="charity-section">
            <h2 className="section-title">Get Involved</h2>
            <p>Your support can make a huge difference. Here’s how you can contribute:</p>
            <ul className="get-involved-list">
              <li><strong>Donate:</strong> Your financial contributions help fund our programs and initiatives.</li>
              <li><strong>Volunteer:</strong> Join our team of volunteers to assist with events and programs.</li>
              <li><strong>Adopt:</strong> Consider adopting a pet in need or fostering a pet to help us provide temporary care.</li>
              <li><strong>Spread the Word:</strong> Share our mission and initiatives with your network to raise awareness.</li>
            </ul>
            <a href="/donate" className="donate-button">Make a Donation</a>
          </div>

          <div className="charity-section">
            <h2 className="section-title">Success Stories</h2>
            <div className="success-stories">
              <div className="success-story">
                <img src="/success1.jpg" alt="Success Story 1" className="story-image" />
                <div className="story-content">
                  <h3>Happy Tails: Max's Journey</h3>
                  <p>Read about Max, a shelter dog who found a loving home through our adoption program.</p>
                  <a href="/success-stories/max" className="read-more">Read More</a>
                </div>
              </div>
              <div className="success-story">
                <img src="/success2.jpg" alt="Success Story 2" className="story-image" />
                <div className="story-content">
                  <h3>From Foster to Forever Home: Bella's Story</h3>
                  <p>Learn about Bella’s transformation from a foster pet to a cherished family member.</p>
                  <a href="/success-stories/bella" className="read-more">Read More</a>
                </div>
              </div>
              {/* Add more success stories as needed */}
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default PetCharity;
