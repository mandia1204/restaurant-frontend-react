import dashboardJson from './FullResponse';
import dashboardJson2 from './FullResponse2';
import DashboardFilters from '../../types/DashboardFilters';

export const DashboardApi = () => {
  const getDashboard = (filters: DashboardFilters) => new Promise((resolve) => {
    if (filters.year && filters.year < 2018) {
      setTimeout(() => { resolve({ data: dashboardJson2 }); }, 100);
    } else {
      setTimeout(() => { resolve({ data: dashboardJson }); }, 100);
    }
  });

  return {
    getDashboard,
  };
};
