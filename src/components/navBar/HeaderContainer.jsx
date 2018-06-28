import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './NavBar';
import Filters from './Filters';
import UserInfo from './UserInfo';
import AuthClient from '../../api/security/AuthClient';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNavLinks } from '../../state/actions/AppActions';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class HeaderContainer extends Component {
    constructor(props){
      super(props);
      this.state = { filters: { navFilterYear: '2017', navFilterMonth: '4', type: ''} };
      this.authClient = AuthClient();
      this.logout = this.logout.bind(this);
    }

    logout() {
      this.authClient.logout();
      this.props.history.push('/login');
      this.props.dispatch(showNavLinks(false));
    }

    render() {
      return (
        <AppBar position="static">
            <Toolbar>
              <Grid container spacing={8}>
                <Grid item xs>
                  <NavBar showLinks={this.props.appState.showHeaderLinks} />  
                </Grid>
                <Grid item xs={6}>
                  { this.props.appState.showHeaderLinks && <Filters /> }
                </Grid>
                <Grid item xs>
                  { this.props.appState.showHeaderLinks && <UserInfo logout={this.logout} /> }
                </Grid>
              </Grid>
            </Toolbar>
        </AppBar>
      );
    }
  }

  const mapStateToProps = state => {
    const { dashboard, appState } = state;
    return {
      dashboard,
      appState
    };
  };

  HeaderContainer.propTypes = {
    history: PropTypes.object,
    dashboard: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  export default connect(mapStateToProps)(withRouter(withStyles(styles)(HeaderContainer)));