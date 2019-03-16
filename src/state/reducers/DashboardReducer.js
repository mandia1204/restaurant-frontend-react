import { createReducer } from 'reduxsauce';
import Actions from '../actions/DashboardActions';

const { Types } = Actions;
const INITIAL_STATE = {
  cards: {},
  charts: [],
  anulaciones: [],
};

const getDashboard = state => state;
const receiveDashboard = (state, action) => action.dashboard;
const fetchDashboard = state => state;

export const DashboardReducer = createReducer(INITIAL_STATE,
  {
    [Types.GET_DASHBOARD]: getDashboard,
    [Types.RECEIVE_DASHBOARD]: receiveDashboard,
    [Types.FETCH_DASHBOARD]: fetchDashboard,
  });
