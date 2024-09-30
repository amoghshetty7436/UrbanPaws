import React from 'react';
import Layout1 from '../Layout/Layout1';
import '../styles/Press.css'; // Ensure you create this CSS file

const Press = () => {
  return (
    <Layout1>
      <div className="press-page">
        <div className="press-hero">
          <h1 className="press-title">In the Press</h1>
          <p className="press-subtitle">Explore our latest media coverage and press releases to stay updated with UrbanPaws' exciting news and features.</p>
        </div>

        <div className="press-content">
          <div className="press-section">
            <h2 className="section-title">Recent News</h2>
            <div className="press-articles">
              <article className="press-article">
                <img src="/press1.jpg" alt="Press Article 1" className="press-image" />
                <div className="press-article-content">
                  <h3>UrbanPaws Featured in Top Travel Magazine</h3>
                  <p>Discover how UrbanPaws is revolutionizing pet-friendly travel with our latest feature in a leading travel magazine.</p>
                  <a href="https://example.com/article1" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
                </div>
              </article>
              <article className="press-article">
                <img src="/press2.jpg" alt="Press Article 2" className="press-image" />
                <div className="press-article-content">
                  <h3>UrbanPaws Wins Best Pet-Friendly Service Award</h3>
                  <p>We’re thrilled to announce that UrbanPaws has won the Best Pet-Friendly Service Award at the annual Pet Travel Awards.</p>
                  <a href="https://example.com/article2" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
                </div>
              </article>
              {/* Add more articles as needed */}
            </div>
          </div>

          <div className="press-section">
            <h2 className="section-title">Press Releases</h2>
            <div className="press-releases">
              <article className="press-release">
                <h3>UrbanPaws Announces New Partnership with Leading Pet Brands</h3>
                <p>We are excited to share our new partnership with top pet brands to bring even more value to our customers and their furry friends.</p>
                <a href="https://example.com/press-release1" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Release</a>
              </article>
              <article className="press-release">
                <h3>UrbanPaws Expands Services to New Cities</h3>
                <p>UrbanPaws is expanding its services to several new cities, offering more pet-friendly accommodations and activities than ever before.</p>
                <a href="https://example.com/press-release2" target="_blank" rel="noopener noreferrer" className="read-more">Read Full Release</a>
              </article>
              {/* Add more press releases as needed */}
            </div>
          </div>

          <div className="press-section">
            <h2 className="section-title">Media Contacts</h2>
            <p>For media inquiries, interviews, and additional information, please reach out to our media relations team:</p>
            <div className="media-contacts">
              <div className="media-contact">
                <img src="/phone-icon.png" alt="Phone" className="contact-icon" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="media-contact">
                <img src="/email-icon.png" alt="Email" className="contact-icon" />
                <p>media@urbanpaws.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Press;
