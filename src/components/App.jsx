import React from 'react';
import './App.scss';
import HeaderContainer from './navBar/HeaderContainer';
import Main from './Main';
class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Main />
      </div>
    );
  }
}

export default App;
