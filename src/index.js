import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
  , 
  document.getElementById('app')
);

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

