import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';
import Actions from '../../state/actions/AppActions';
import DashboardActions from '../../state/actions/DashboardActions';
import { Ops } from '../../util/Constants';
import Header from './Header';
import ISecurityService from '../../types/ISecurityService';
import DashboardFilters from '../../types/DashboardFilters';
import { selectAppState } from '../../state/selectors';

const securityService: ISecurityService = SecurityService();
function HeaderContainer() {
  const navigate = useNavigate();
  const appState = useSelector(selectAppState);
  const dispatch = useDispatch();

  const onFiltersChange = (filter: DashboardFilters) => {
    const filters: DashboardFilters = { ...appState.dashboardFilters, ...filter, ops: Ops.all };
    dispatch(Actions.Creators.updateDashboardFilter(filter));
    dispatch(DashboardActions.Creators.fetchDashboard(filters));
  };

  const logout = () => {
    securityService.logout();
    navigate('login');
    dispatch(Actions.Creators.logout());
  };

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

export default HeaderContainer;