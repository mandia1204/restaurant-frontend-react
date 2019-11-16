import { createActions } from 'reduxsauce';
import { DashboardModel } from '../../types/Dashboard';
import DashboardFilters from '../../types/DashboardFilters';

interface DashboardActions {
  getDashboard(): any;
  receiveDashboard(dashboard: DashboardModel): any;
  fetchDashboard(filters: DashboardFilters): any;
}

const { Types, Creators } = createActions<any, DashboardActions>({
  getDashboard: null,
  receiveDashboard: ['dashboard'],
  fetchDashboard: ['filters'],
}, { prefix: '' });

const Actions = {
  Types,
  Creators,
};

export default Actions;
