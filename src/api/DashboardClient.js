import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000
});

export const DashboardClient = () => {
    const getDashboard = (filters) => {
        return http.get(`/dashboard?anio=${filters.year}&mes=${filters.month}&ops=${filters.ops}`);
    };

    return {
        getDashboard
    };
};