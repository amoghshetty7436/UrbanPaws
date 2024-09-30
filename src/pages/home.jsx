// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/Home.css'; // Import custom styles for the Home component

const imageCollection = [
  '/image1.png', // Local image paths or URLs
  'image2.png',
  'image3.png',
  // Add more images as needed
];

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('hotels');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomImage = () => {
      setLoading(true);
      setError(null);
      try {
        const randomIndex = Math.floor(Math.random() * imageCollection.length);
        setImageUrl(imageCollection[randomIndex]);
        setLoading(false);
      } catch (err) {
        setError('Failed to load image. Please try again.');
        setLoading(false);
      }
    };

    fetchRandomImage();
  }, []);

  const handleSearch = () => {
    console.log(`Searching for ${searchQuery} in ${selectedCategory}`);
  };

  return (
    <Layout1>
      <div className="home-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <img src={imageUrl} alt="Random Pet" className="home-image" />
        )}
        <div className="home-content">
          <h1>Ready for a Pet Adventure?</h1>
          <div className="search-bar">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='hotel'
            >
              <option value="hotels" className='hotel'>Hotels</option>
              <option value="restaurants" className='hotel'>Restaurants</option>
              <option value="activities" className='hotel'>Activities</option>
              <option value="events" className='hotel'>Events</option>
              <option value="services" className='hotel'>Services</option>
              <option value="blogs" className='hotel'>Blogs</option>
            </select>
            <input
              type="text"
              placeholder="Search for places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='hotel'
            />
            <button onClick={handleSearch}>Fetch</button>
          </div>
        </div>
      </div>
      <h2>Make every moment count with your dog—find the best places to sleep, eat, and play!</h2>

      {/* Exclusive Features Section */}
      <div className="exclusive-features">
        <div className="feature">
          <img src="/money1.png" alt="No Booking Fees" className="feature-icon" />
          <h3>No Booking Fees</h3>
          <p>Fetch the perfect spot to stay with no extra charges—no hidden bones to dig up or surprise fees to bark about!</p>
        </div>
        <div className="feature">
          <img src="/handshake.png" alt="Pet-Friendly Guarantee" className="feature-icon" />
          <h3>Pet-Friendly Guarantee</h3>
          <p>We paw-mise that all our spots love furry friends just as much as you do. Wag those tails in delight!</p>
        </div>
        <div className="feature">
          <img src="/support.png" alt="24/7 Customer Support" className="feature-icon" />
          <h3>24/7 Customer Support</h3>
          <p>Got a question or need a paw? Our team is here around the clock to lend a helping paw, day or night!</p>
        </div>
      </div>
    </Layout1>
  );
};

export default Home;
