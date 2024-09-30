import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/Jobs.css'; // Ensure you create this CSS file

const Jobs = () => {
  return (
    <Layout1>
      <div className="jobs-page">
        <div className="jobs-hero">
          <h1 className="jobs-title">Join Our Team</h1>
          <p className="jobs-subtitle">Discover exciting career opportunities with UrbanPaws and make a meaningful impact on the lives of pets and their owners!</p>
          <img src="/jobs-hero.jpg" alt="Careers at UrbanPaws" className="jobs-hero-image" />
        </div>

        <div className="jobs-content">
          <div className="job-list">
            <div className="job-item">
              <h2 style={{ paddingTop: '0' }}>Pet Care Specialist</h2>
              <p><strong>Location:</strong> New York, NY</p>
              <p><strong>Job Type:</strong> Full-Time</p>
              <p><strong>About the Role:</strong> As a Pet Care Specialist at UrbanPaws, you will play a vital role in ensuring that our furry guests receive top-quality care. Your responsibilities will include feeding, grooming, and providing a safe and loving environment for pets. This is an ideal position for someone who is passionate about animals and eager to make a positive difference in their lives.</p>
              <p><strong>What We Offer:</strong> Competitive salary, comprehensive benefits, and a supportive team environment. Join us and contribute to creating a welcoming and caring space for pets!</p>
              <a href="/apply/pet-care-specialist" className="apply-button">Apply Now</a>
            </div>
            <div className="job-item">
              <h2 style={{ paddingTop: '0' }}>Customer Service Representative</h2>
              <p><strong>Location:</strong> Remote</p>
              <p><strong>Job Type:</strong> Part-Time</p>
              <p><strong>About the Role:</strong> We are seeking a dedicated Customer Service Representative to join our remote team. You will assist clients with their inquiries, handle bookings, and resolve any issues with efficiency and empathy. This role requires excellent communication skills and a genuine passion for pets.</p>
              <p><strong>What We Offer:</strong> Flexible working hours, a supportive remote team, and opportunities for professional growth. Be a part of our mission to provide exceptional service to our customers!</p>
              <a href="/apply/customer-service-rep" className="apply-button">Apply Now</a>
            </div>
            {/* Add more job listings as needed */}
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Jobs;
