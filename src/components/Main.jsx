import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './routing/PrivateRoute';
import Login from './login/Login';

const Main = () => (
  <main>
    <Switch>
      <PrivateRoute exact path='/' component={Home}/>
      <PrivateRoute path='/dashboard' component={Dashboard}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
);

export default Main;
