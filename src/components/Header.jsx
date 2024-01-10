// Header.js

import React, { useState } from 'react';
import './Header.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  return (
    <header>
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
      <div className='title'>
        <h1>Shoe Planet</h1>
      </div>
      <div className="search-box">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="user-section">
        <a href="/login" className="login-btn">Login</a>
        <a href="/register" className="register-btn">Register</a>
      </div>
    </header>
  );
}

export default Header;
