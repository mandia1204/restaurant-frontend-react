import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import Home from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

const NavBar = () => (
  <Fragment>
    <IconButton color="inherit" aria-label="Menu">
      <Link to='/'><Home /></Link>
    </IconButton>
    <IconButton color="inherit" aria-label="Menu">
      <Link to='/dashboard'><Dashboard /></Link>
    </IconButton>
  </Fragment>
);

export default NavBar;