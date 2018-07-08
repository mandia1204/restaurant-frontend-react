import config from './apiConfig';
import {HttpWrapper} from '../wrappers/HttpWrapper';

export const DashboardClient = () => {
    const http = HttpWrapper(config.dashboardUri);
    const getDashboard = (filters) => {
        return http.get(`/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`);
    };

    return {
        getDashboard
    };
};