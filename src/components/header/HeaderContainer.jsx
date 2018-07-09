import React, { Component } from 'react';
import AuthClient from '../../api/security/AuthClient';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNavLinks, updateDashboardFilter } from '../../state/actions/AppActions';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import { Ops } from '../../util/Constants';
import Header from './Header';

class HeaderContainer extends Component {
    constructor(props){
      super(props);
      this.authClient = AuthClient();
      this.logout = this.logout.bind(this);
    }

    logout() {
      this.authClient.logout();
      this.props.history.push('/login');
      this.props.dispatch(showNavLinks(false));
    }

    onFiltersChange = (filter) => {
      const filters = {...this.props.appState.dashboardFilters, ...filter, ops: Ops.all };
      this.props.dispatch(updateDashboardFilter(filter));
      this.props.dispatch(fetchDashboard(filters));
    }

    render() {
      const {showHeaderLinks, showFilters, dashboardFilters} = this.props.appState;
      return (
        <Header showHeaderLinks={showHeaderLinks} showFilters={showFilters} 
                dashboardFilters={dashboardFilters} onFiltersChange={this.onFiltersChange} logout={this.logout}  />
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