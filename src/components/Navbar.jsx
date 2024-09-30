// src/components/Navbar.jsx
import { faBone, faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <FontAwesomeIcon icon={faPaw} className="logo-icon" />
          <div className='Logo'>
            UrbanPaws
          </div>
          <FontAwesomeIcon icon={faBone} className="logo-icon" />
        </a>
      </div>
      <div className="navbar-center">
        <a href="/hotels">Hotels</a>
        <a href="/restaurants">Restaurants</a>
        <a href="/activities">Activities</a>
        <a href="/events">Events</a>
        <a href="/services">Services</a>
        <a href="/blogs">Blogs</a>
        <div className="dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <a href="/more/link1">Link 1</a>
            <a href="/more/link2">Link 2</a>
            <a href="/more/link3">Link 3</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <a href="/login" className="navbar-login">Log In</a>
        <a href="/signup" className="navbar-signup">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
