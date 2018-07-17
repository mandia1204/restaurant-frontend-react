import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import './index.scss';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<AppContainer />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
