import React, { Component, Dispatch } from 'react';
import { withRouter, RouteComponentProps } from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import SecurityService from '../../services/SecurityService';
import Actions from '../../state/actions/AppActions';
import DashboardActions from '../../state/actions/DashboardActions';
import { Ops } from '../../util/Constants';
import Header from './Header';
import ISecurityService from '../../types/ISecurityService';
import AppState from '../../types/AppState';
import DashboardFilters from '../../types/DashboardFilters';

interface Props extends RouteComponentProps<any> {
  dispatch: Dispatch<any>;
  appState: AppState;
}

class HeaderContainer extends Component<Props, any> {
  securityService:ISecurityService;

  constructor(props: Props) {
    super(props);
    this.securityService = SecurityService();
    this.logout = this.logout.bind(this);
  }

  onFiltersChange = (filter: DashboardFilters) => {
    const { appState, dispatch } = this.props;
    const filters: DashboardFilters = { ...appState.dashboardFilters, ...filter, ops: Ops.all };
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
    const { showHeaderLinks, showFilters, dashboardFilters, loggedUser } = appState;
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

const mapStateToProps = (state: any) => {
  const { appState } = state;
  return {
    appState,
  };
};

export default connect(mapStateToProps)(withRouter(HeaderContainer));
