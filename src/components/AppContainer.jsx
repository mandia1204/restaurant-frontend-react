import React from 'react';
import './App.scss';
import HeaderContainer from './navBar/HeaderContainer';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAppStore } from '../state/AppStore';

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={createAppStore()}>
        <BrowserRouter>
          <div>
            <HeaderContainer />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppContainer;
