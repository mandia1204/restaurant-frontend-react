import DashboardFilters from './DashboardFilters';
import User from './User';
import { DashboardModel } from './Dashboard';

export interface AppStore {
  dashboard: DashboardModel;
  appState: AppState;
  users: User[];
}

export interface AppState {
  showHeaderLinks: boolean;
  showFilters: boolean;
  loggedUser: any;
  dashboardFilters: DashboardFilters;
}
