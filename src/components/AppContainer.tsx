import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { createAppStore } from '../state/ConfigureStore';
import Main from './Main';
import HeaderContainer from './header/HeaderContainer';
import { configureAuth } from '../ConfigureAuth';

configureAuth();

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

function AppContainer({ classes }: WithStyles<typeof styles>) {
  return (
    <Provider store={createAppStore()}>
      <BrowserRouter>
        <>
          <CssBaseline />
          <div className={classes.root}>
            <HeaderContainer />
            <Main />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default withStyles(styles)(AppContainer);
