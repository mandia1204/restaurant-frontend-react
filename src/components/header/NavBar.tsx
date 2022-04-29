import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '@mui/icons-material/Dashboard';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';

function NavBar() {
  return (
    <>
      <IconButton color="inherit" aria-label="Menu">
        <Link to="/">
          <Home />
        </Link>
      </IconButton>
      <IconButton color="inherit" aria-label="Menu">
        <Link to="/dashboard">
          <Dashboard />
        </Link>
      </IconButton>
      <IconButton color="inherit" aria-label="Menu">
        <Link to="/settings">
          <Settings />
        </Link>
      </IconButton>
    </>
  );
}

export default NavBar;
