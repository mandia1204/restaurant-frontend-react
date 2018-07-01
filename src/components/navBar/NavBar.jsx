import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Dashboard as DashboardIcon } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const NavBar = () => (
  <Fragment>
    <IconButton color="inherit" aria-label="Menu">
      <Link to='/'><HomeIcon /></Link>
    </IconButton>
    <IconButton color="inherit" aria-label="Menu">
      <Link to='/dashboard'><DashboardIcon /></Link>
    </IconButton>
  </Fragment>
);

export default NavBar;