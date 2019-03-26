import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';
import DashboardFilters from '../types/DashboardFilters';
import { DashboardModel } from '../types/Dashboard';

const http = HttpWrapper(config.dashboardUri);

export const DashboardApi = () => {
  const getDashboard = (filters: DashboardFilters) => {
    const url = `/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`;
    return http.get<DashboardModel>(url);
  };

  return {
    getDashboard,
  };
};
