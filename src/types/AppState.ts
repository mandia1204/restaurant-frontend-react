import DashboardFilters from './DashboardFilters';

interface AppState {
  showHeaderLinks: boolean;
  showFilters: boolean;
  loggedUser: any;
  dashboardFilters: DashboardFilters;
}

export default AppState;
