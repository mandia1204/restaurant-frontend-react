import React, { Component } from 'react';
import { withRouter } from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthClient from '../../api/security/AuthClient';
import { userLoggedOut, updateDashboardFilter } from '../../state/actions/AppActions';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import { Ops } from '../../util/Constants';
import Header from './Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.authClient = AuthClient();
    this.logout = this.logout.bind(this);
  }

    onFiltersChange = (filter) => {
      const { appState, dispatch } = this.props;
      const filters = { ...appState.dashboardFilters, ...filter, ops: Ops.all };
      dispatch(updateDashboardFilter(filter));
      dispatch(fetchDashboard(filters));
    }

    logout() {
      const { history, dispatch } = this.props;
      this.authClient.logout();
      history.push('/login');
      dispatch(userLoggedOut());
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
