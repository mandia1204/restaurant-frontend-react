import React from 'react';
import './App.scss';
import HeaderContainer from './navBar/HeaderContainer';
import Main from './Main';
class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Main />
      </div>
    );
  }
}

export default AppContainer;
