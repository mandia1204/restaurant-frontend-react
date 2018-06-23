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
              <NavBar showLinks={this.props.appState.showHeaderLinks} />
              <Filters />
              { this.props.appState.showHeaderLinks ? <UserInfo logout={this.logout} /> : null }
              <span>Charts: {this.props.dashboard.charts.length}</span>
              <span>Bars: {this.props.dashboard.bars.length}</span>
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

  export default connect(mapStateToProps)(withRouter(HeaderContainer));