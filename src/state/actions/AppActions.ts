import { createActions } from 'reduxsauce';
import DashboardFilters from '../../types/DashboardFilters';

interface AppActions {
  showNavLinks(showLinks: boolean): any;
  showFilters(show: boolean): any;
  updateDashboardFilter(filter: DashboardFilters): any;
  updateLoginData(data: any): any;
  fetchLoginData(): any;
  logout(): any;
}

const { Types, Creators } = createActions<any, AppActions>({
  showNavLinks: ['showLinks'],
  showFilters: ['show'],
  updateDashboardFilter: ['filter'],
  updateLoginData: ['data'],
  fetchLoginData: null,
  logout: null,
}, { prefix: '' });

const Actions = {
  Types,
  Creators,
};

export default Actions;
