import DashboardFilters from './DashboardFilters';
import User, { Role } from './User';
import { DashboardModel } from './Dashboard';
import FormState from './FormState';
import { AppEvents } from './Events';

export interface LoggedUser {
  name: string;
  authenticated: boolean;
}

export interface AppState {
  showHeaderLinks: boolean;
  showFilters: boolean;
  loggedUser: LoggedUser;
  dashboardFilters: DashboardFilters;
  theme: string;
  showEvents: boolean;
}

export interface AppStore {
  dashboard: DashboardModel;
  appState: AppState;
  users: User[];
  userPage: FormState;
  roles: Role [];
  events: AppEvents;
}
