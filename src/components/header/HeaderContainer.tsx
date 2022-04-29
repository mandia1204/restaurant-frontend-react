import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';
import Actions from '../../state/actions/AppActions';
import DashboardActions from '../../state/actions/DashboardActions';
import { Ops } from '../../util/Constants';
import Header from './Header';
import ISecurityService from '../../types/ISecurityService';
import { AppState, AppStore } from '../../types/AppStore';
import DashboardFilters from '../../types/DashboardFilters';

interface Props {
  dispatch: Dispatch<any>;
  appState: AppState;
}
const securityService: ISecurityService = SecurityService();
function HeaderContainer(props: Props) {
  const navigate = useNavigate();

  const onFiltersChange = (filter: DashboardFilters) => {
    const { appState, dispatch } = props;
    const filters: DashboardFilters = { ...appState.dashboardFilters, ...filter, ops: Ops.all };
    dispatch(Actions.Creators.updateDashboardFilter(filter));
    dispatch(DashboardActions.Creators.fetchDashboard(filters));
  };

  const logout = () => {
    const { dispatch } = props;
    securityService.logout();
    navigate('login');
    dispatch(Actions.Creators.logout());
  };
  const { appState } = props;
  const { showHeaderLinks, showFilters, dashboardFilters, loggedUser } = appState;
  return (
    <Header
      showHeaderLinks={showHeaderLinks}
      showFilters={showFilters}
      dashboardFilters={dashboardFilters}
      onFiltersChange={onFiltersChange}
      logout={logout}
      loggedUser={loggedUser}
    />
  );
}

const mapStateToProps = (state: AppStore) => {
  const { appState } = state;
  return {
    appState,
  };
};

export default connect(mapStateToProps)(HeaderContainer);
