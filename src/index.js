import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , 
  document.getElementById('app')
);

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

