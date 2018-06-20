import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import AppRouter from './AppRouter';

//const element = <h1>Hello, world!!!!!!</h1>;
class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
        {/* {element}
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
