import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import TestButton from './Buttons.js';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Season of Discovery</Link></li>
        <li><Link to="/talents">Talents</Link></li>
      </ul>
      <div classname="test-button-container">   
        <TestButton />
      </div>
    </nav>
  );
};

export default Navbar;