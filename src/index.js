import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import AppContainer from './components/AppContainer';
import './styles/index.scss';
import './styles/reset.scss';
import '@babel/polyfill';

const root = createRoot(document.getElementById('app'));
root.render(
  <>
    <CssBaseline />
    <AppContainer />
  </>,
);

if (process.env.NODE_ENV === 'development') {
  // module.hot.accept(); //TODO uncomment
}
