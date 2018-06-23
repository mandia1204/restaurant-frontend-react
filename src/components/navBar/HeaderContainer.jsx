import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './NavBar';
import Filters from './Filters';
import UserInfo from './UserInfo';
import AuthClient from '../../api/security/AuthClient';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    }

    render() {
      return (
        <header>
          <AppBar position="static">
              <NavBar />
              <Filters />
              <UserInfo logout={this.logout} />
              <span>Charts: {this.props.dashboard.charts.length}</span>
              <span>Bars: {this.props.dashboard.bars.length}</span>
          </AppBar>
        </header>
      );
    }
  }

  const mapStateToProps = state => {
    const { dashboard } = state;
    return {
      dashboard
    };
  };

  HeaderContainer.propTypes = {
    history: PropTypes.object,
    dashboard: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  export default connect(mapStateToProps)(withRouter(HeaderContainer));