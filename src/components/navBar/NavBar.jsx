import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home as HomeIcon, Dashboard as DashboardIcon } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
// import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const NavBar = ({showLinks}) => showLinks && (
  <Fragment>
    <IconButton color="inherit" aria-label="Menu">
      <Link to='/'><HomeIcon /></Link>
    </IconButton>
    <IconButton color="inherit" aria-label="Menu">
      <Link to='/dashboard'><DashboardIcon /></Link>
    </IconButton>
    <Button color="inherit">Login</Button>
  </Fragment>
);

NavBar.propTypes = {
  showLinks: PropTypes.bool
};

export default NavBar;