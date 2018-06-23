import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import DashboardContainer from './dashboard/DashboardContainer';
import PrivateRoute from './routing/PrivateRoute';
import Login from './login/Login';

const Main = () => (
  <main>
    <Switch>
      <PrivateRoute exact path='/' component={Home}/>
      <PrivateRoute path='/dashboard' component={DashboardContainer}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
);

export default Main;
