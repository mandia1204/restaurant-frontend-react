import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppContainer from './components/AppContainer';
import './index.scss';
import '@babel/polyfill';

const root = createRoot(document.getElementById('app'));
root.render(<AppContainer />);

if (process.env.NODE_ENV === 'development') {
  // module.hot.accept(); //TODO uncomment
}
