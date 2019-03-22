import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';
import DashboardFilters from '../types/DashboardFilters';

const http = HttpWrapper(config.dashboardUri);

export const DashboardApi = () => {
  const getDashboard = (filters: DashboardFilters) => {
    const url = `/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`;
    return http.get(url);
  };

  return {
    getDashboard,
  };
};