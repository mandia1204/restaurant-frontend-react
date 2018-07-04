import dashboardJson from '../../api/mocks/FullResponse';
import dashboardJson2 from '../../api/mocks/FullResponse2';

export const DashboardClient = () => {
    const getDashboard = (filters) => {
        return new Promise((resolve) => {
            if(filters.year < 2018){
                setTimeout(function(){ resolve({ data: dashboardJson2 }); }, 100);
            }else{
                setTimeout(function(){ resolve({ data: dashboardJson }); }, 100);
            }
        });
    };

    return {
        getDashboard
    };
};
