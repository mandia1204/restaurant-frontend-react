import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Box from '@mui/material/Box';
import { createAppStore } from '../state/ConfigureStore';
import Main from './Main';
import HeaderContainer from './header/HeaderContainer';
import { configureAuth } from '../ConfigureAuth';
import Notification from './controls/Notification';
import EventViewer from './events/EventViewer';

configureAuth();

function AppContainer() {
  return (
    <Provider store={createAppStore()}>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <HeaderContainer />
          <Main />
          <Notification />
          <EventViewer />
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default AppContainer;
