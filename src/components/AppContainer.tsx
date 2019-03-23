import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { createAppStore } from '../state/AppStore';
import Main from './Main';
import HeaderContainer from './header/HeaderContainer';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

const AppContainer = ({ classes }: WithStyles<typeof styles>) => (
  <Provider store={createAppStore()}>
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <HeaderContainer />
          <Main />
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default withStyles(styles)(AppContainer);
