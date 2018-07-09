import React, { Fragment } from 'react';
import './App.scss';
import HeaderContainer from './header/HeaderContainer';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAppStore } from '../state/AppStore';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class AppContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
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
  }
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContainer);
