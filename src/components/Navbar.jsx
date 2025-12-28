import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = (id) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleScroll('home')}>
          HK
        </div>
        <ul className="navbar-menu">
          <li>
            <button
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={() => handleScroll('skills')}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => handleScroll('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleScroll('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
