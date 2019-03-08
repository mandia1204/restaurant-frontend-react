import { DashboardApi } from '../../api/DashboardApi';

export const GET_DASHBOARD = 'GET_DASHBOARD';
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';

const client = DashboardApi();

export const receiveDashboard = dashboard => ({ type: RECEIVE_DASHBOARD, dashboard });

export const fetchDashboard = filters => dispatch => client.getDashboard(filters)
  .then(response => dispatch(receiveDashboard(response.data)));

export const getDashboard = () => ({ type: GET_DASHBOARD });
