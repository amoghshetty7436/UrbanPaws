import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus'; // New About Us page
import Activities from './pages/activities';
import Advertising from './pages/advertising';
import Blogs from './pages/blogs';
import BookingPage from './pages/booking';
import ContactUs from './pages/contactus';
import Events from './pages/events';
import FAQ from './pages/faq';
import Help from './pages/help';
import Home from './pages/home';
import Hotel from './pages/hotel';
import Jobs from './pages/jobs';
import PetCharity from './pages/petCharity';
import Press from './pages/press';
import Promotions from './pages/promotions';
import Restaurants from './pages/restaurants';
import Services from './pages/services';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/booking/:name" element={<BookingPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/press" element={<Press />} />
        <Route path="/petcharity" element={<PetCharity />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/aboutus" element={<AboutUs />} /> {/* New route for About Us */}
      </Routes>
    </Router>
  );
}

export default App;
