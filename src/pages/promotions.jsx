import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/Promotions.css'; // Ensure you create this CSS file

const Promotions = () => {
  return (
    <Layout1>
      <div className="promotions-page">
        <div className="promotions-hero">
          <h1 className="promotions-title">Current Promotions</h1>
          <p className="promotions-subtitle">Check out our latest offers and special deals to make your pet-friendly travels even better!</p>
          <img src="/promotions-hero.jpg" alt="Promotions" className="promotions-hero-image" />
        </div>

        <div className="promotions-content">
          <div className="promotion-list">
            <div className="promotion-item">
              <h2>Summer Sale: 20% Off All Bookings</h2>
              <p>Enjoy a 20% discount on all bookings made this summer. Use code <strong>SUMMER20</strong> at checkout.</p>
              <p><strong>Valid Until:</strong> August 31, 2024</p>
              <a href="/book-now" className="promotion-button">Book Now</a>
            </div>
            <div className="promotion-item">
              <h2>Referral Program: Earn $50 for Each Referral</h2>
              <p>Refer a friend and earn $50 for each successful booking they make. The more you refer, the more you earn!</p>
              <p><strong>Valid Until:</strong> December 31, 2024</p>
              <a href="/refer-a-friend" className="promotion-button">Refer Now</a>
            </div>
            {/* Add more promotions as needed */}
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Promotions;
