import React, { Component } from 'react';
import { withRouter } from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SecurityService from '../../services/SecurityService';
import Actions from '../../state/actions/AppActions';
import DashboardActions from '../../state/actions/DashboardActions';
import { Ops } from '../../util/Constants';
import Header from './Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.securityService = SecurityService();
    this.logout = this.logout.bind(this);
  }

  onFiltersChange = (filter) => {
    const { appState, dispatch } = this.props;
    const filters = { ...appState.dashboardFilters, ...filter, ops: Ops.all };
    dispatch(Actions.Creators.updateDashboardFilter(filter));
    dispatch(DashboardActions.Creators.fetchDashboard(filters));
  }

  logout() {
    const { history, dispatch } = this.props;
    this.securityService.logout();
    history.push('/login');
    dispatch(Actions.Creators.logout());
  }

  render() {
    const { appState } = this.props;
    const {
      showHeaderLinks, showFilters, dashboardFilters, loggedUser,
    } = appState;
    return (
      <Header
        showHeaderLinks={showHeaderLinks}
        showFilters={showFilters}
        dashboardFilters={dashboardFilters}
        onFiltersChange={this.onFiltersChange}
        logout={this.logout}
        loggedUser={loggedUser}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { appState } = state;
  return {
    appState,
  };
};

HeaderContainer.propTypes = {
  history: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(withRouter(HeaderContainer));
