import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const NavBar = ({showLinks}) => showLinks ? (
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </nav>
) : null;

NavBar.propTypes = {
  showLinks: PropTypes.bool
};

export default NavBar;