import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">F1 Dashboard</div>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Standings
          </Link>
          <Link to="/races" className={location.pathname.includes('/races') ? 'active' : ''}>
            Races
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 