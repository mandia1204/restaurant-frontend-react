import axios from 'axios';
import config from './apiConfig';

const http = axios.create({
    baseURL: config.dashboardUri,
    timeout: config.timeout
});

export const DashboardClient = () => {
    const getDashboard = (filters) => {
        return http.get(`/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`);
    };

    return {
        getDashboard
    };
};