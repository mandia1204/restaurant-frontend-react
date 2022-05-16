import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '@mui/icons-material/Dashboard';
import Home from '@mui/icons-material/Home';
import { SxProps } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import Settings from '@mui/icons-material/Settings';
import ScienceIcon from '@mui/icons-material/Science';
import IconButton from '@mui/material/IconButton';
import { updateSettingsMenu } from '../../state/reducers/EventsSlice';

const imageButtonStyle:SxProps = {
  color: 'secondary.main',
};

function NavBar() {
  const dispatch = useDispatch();
  const setMenuItem = (item: string) => () => {
    dispatch(updateSettingsMenu({ payload: item }));
  };

  return (
    <>
      <IconButton aria-label="Menu">
        <Link to="/">
          <Home sx={imageButtonStyle} color="inherit" />
        </Link>
      </IconButton>
      <IconButton color="inherit" aria-label="Menu">
        <Link to="/dashboard">
          <Dashboard sx={imageButtonStyle} />
        </Link>
      </IconButton>
      <IconButton onClick={setMenuItem('Settings')} color="inherit" aria-label="Menu">
        <Link to="/settings">
          <Settings sx={imageButtonStyle} />
        </Link>
      </IconButton>
      <IconButton color="inherit" aria-label="Menu">
        <Link to="/features">
          <ScienceIcon sx={imageButtonStyle} />
        </Link>
      </IconButton>
    </>
  );
}

export default NavBar;
