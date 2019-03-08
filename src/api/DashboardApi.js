import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';

const http = HttpWrapper(config.dashboardUri);

export const DashboardApi = () => {
  const getDashboard = filters => http.get(`/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`);

  return {
    getDashboard,
  };
};
