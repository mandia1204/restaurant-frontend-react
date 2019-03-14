import { DashboardApi } from '../../api/DashboardApi';
import Actions from './DashboardActions';

const { Creators } = Actions;
const client = DashboardApi();

export const fetchDashboard = filters => dispatch => client.getDashboard(filters)
  .then(response => dispatch(Creators.receiveDashboard(response.data)));
