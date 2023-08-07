import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">About Me</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Web Developer Portfolio</h1>
      <Navigation />
    </header>
  );
};

export default Header;
