import config from './apiConfig';
import {HttpWrapper} from '../wrappers/HttpWrapper';

const http = HttpWrapper(config.dashboardUri);

export const DashboardClient = () => {
    const getDashboard = (filters) => {
        return http.get(`/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`);
    };

    return {
        getDashboard
    };
};