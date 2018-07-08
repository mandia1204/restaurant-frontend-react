import { DashboardClient } from '../../api/DashboardClient';
//import { DashboardClient } from '../../api/mocks/DashboardClient';
export const GET_DASHBOARD = 'GET_DASHBOARD';
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';

const client = DashboardClient();

export const fetchDashboard = filters => dispatch => {
    return client.getDashboard(filters).then(response => dispatch(receiveDashboard(response.data)));
};

export const getDashboard = () => {
    return { type: GET_DASHBOARD };
};

export const receiveDashboard = (dashboard) => {
    return { type: RECEIVE_DASHBOARD, dashboard };
};