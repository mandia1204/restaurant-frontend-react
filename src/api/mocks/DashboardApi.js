import dashboardJson from './FullResponse';
import dashboardJson2 from './FullResponse2';

export const DashboardApi = () => {
  const getDashboard = filters => new Promise((resolve) => {
    if (filters.year < 2018) {
      setTimeout(() => { resolve({ data: dashboardJson2 }); }, 100);
    } else {
      setTimeout(() => { resolve({ data: dashboardJson }); }, 100);
    }
  });

  return {
    getDashboard,
  };
};
