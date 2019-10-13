// @ts-ignore
import { createReducer } from 'reduxsauce';
import Actions from '../actions/DashboardActions';
import { DashboardModel } from '../../types/Dashboard';

const { Types } = Actions;
const INITIAL_STATE: DashboardModel = {
  cards: {},
  charts: [],
  anulaciones: [],
};

interface ReduceMethod {
  (state: DashboardModel, action: any): DashboardModel;
}

const getDashboard: ReduceMethod = (state) => state;
const receiveDashboard: ReduceMethod = (state, action) => action.dashboard;
const fetchDashboard: ReduceMethod = (state) => state;

export const DashboardReducer = createReducer(INITIAL_STATE,
  {
    [Types.GET_DASHBOARD]: getDashboard,
    [Types.RECEIVE_DASHBOARD]: receiveDashboard,
    [Types.FETCH_DASHBOARD]: fetchDashboard,
  });
