import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { createAppStore } from '../state/ConfigureStore';
import Main from './Main';
import themeMap from '../theme';
import HeaderContainer from './header/HeaderContainer';
import { configureAuth } from '../ConfigureAuth';
import Notification from './controls/Notification';
import EventViewer from './events/EventViewer';
import { selectTheme } from '../state/selectors';

configureAuth();

function Container(){
  const selectedTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={themeMap[selectedTheme]}>
      <Box sx={{ flexGrow: 1 }}>
            <HeaderContainer />
            <Main />
            <Notification />
            <EventViewer />
      </Box>
    </ThemeProvider>
  )
}

function AppContainer() {
  return (
    <Provider store={createAppStore()}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </Provider>
  );
}

export default AppContainer;
