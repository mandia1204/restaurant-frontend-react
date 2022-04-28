import DashboardFilters from './DashboardFilters';
import User, { Role } from './User';
import { DashboardModel } from './Dashboard';
import FormState from './FormState';

export interface AppState {
  showHeaderLinks: boolean;
  showFilters: boolean;
  loggedUser: any;
  dashboardFilters: DashboardFilters;
}

export interface AppStore {
  dashboard: DashboardModel;
  appState: AppState;
  users: User[];
  userPage: FormState;
  roles: Role [];
}
