import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/AboutUs.css'; // Ensure you create this CSS file

const AboutUs = () => {
  return (
    <Layout1>
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to UrbanPaws</h1>
        <p>Your ultimate destination for unforgettable pet-friendly adventures!</p>
        <img src="/hero-image.jpg" alt="UrbanPaws" className="hero-image" />
      </div>

      {/* Company Overview */}
      <div className="company-overview">
      <h2 style={{ paddingTop: '0' }}>About Us</h2>

        <p>
          At UrbanPaws, we’re more than just a service; we're your trusted partner in making every journey with your furry companions memorable. We offer a comprehensive range of pet-friendly accommodations and services designed to ensure both you and your pets have a wonderful experience. Whether you’re looking for a luxury stay or a cozy retreat, we’ve got you covered with our unbeatable offers and customer care.
        </p>
      </div>

      {/* Our Services */}
      <div className="services">
        <div className="service">
          <img src="/no-booking-fees-icon.png" alt="No Booking Fees" className="service-icon" />
          <h3>No Booking Fees</h3>
          <p>
            Enjoy the perfect spot to stay without worrying about hidden fees. Our transparent pricing ensures that you get exactly what you pay for—no extra bones to dig up!
          </p>
        </div>
        <div className="service">
          <img src="/pet-friendly-icon.png" alt="Pet-Friendly Guarantee" className="service-icon" />
          <h3>Pet-Friendly Guarantee</h3>
          <p>
            We guarantee that all our locations are welcoming to furry friends. From pet beds to play areas, we ensure that your pets are pampered just like you are.
          </p>
        </div>
        <div className="service">
          <img src="/customer-support-icon.png" alt="24/7 Customer Support" className="service-icon" />
          <h3>24/7 Customer Support</h3>
          <p>
            Whether you have a question or need assistance, our team is available around the clock to help. We’re here for you and your pets, anytime, anywhere.
          </p>
        </div>
        <div className="service">
          <img src="/pet-amenities-icon.png" alt="Exclusive Pet Amenities" className="service-icon" />
          <h3>Exclusive Pet Amenities</h3>
          <p>
            Treat your pets to gourmet treats, spa services, and more. Our exclusive amenities ensure that your furry friends are as comfortable and happy as you are.
          </p>
        </div>
        <div className="service">
          <img src="/activities-icon.png" alt="Curated Pet-Friendly Activities" className="service-icon" />
          <h3>Curated Pet-Friendly Activities</h3>
          <p>
            Explore exciting activities that both you and your pets can enjoy together. From dog-friendly beaches to scenic parks, our local guides have the best recommendations.
          </p>
        </div>
        <div className="service">
          <img src="/custom-packages-icon.png" alt="Customized Travel Packages" className="service-icon" />
          <h3>Customized Travel Packages</h3>
          <p>
            Create the perfect getaway with our tailor-made travel packages. Whether it’s relaxation or adventure, we design itineraries to suit your unique needs.
          </p>
        </div>
      </div>
    </div>
    </Layout1>
  );
};

export default AboutUs;
