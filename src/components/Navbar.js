import React from 'react';
import './Navbar.css'; 
import Buttons from './Buttons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Season of Discovery</Link></li>
        <li><Link to="/talents">Talents</Link></li>
      </ul>
      <Buttons />
    </nav>
  );
};

export default Navbar;