import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import AppContainer from './components/AppContainer';
import './styles/index.scss';
import './styles/reset.scss';
import '@babel/polyfill';
import theme from './theme';

const root = createRoot(document.getElementById('app'));
root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <AppContainer />
  </ThemeProvider>,
);

if (process.env.NODE_ENV === 'development') {
  // module.hot.accept(); //TODO uncomment
}
