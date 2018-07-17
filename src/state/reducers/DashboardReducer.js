import { GET_DASHBOARD, RECEIVE_DASHBOARD } from '../actions/DashboardActions';

const initialState = {
  cards: {},
  charts: [],
  anulaciones: [],
};

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD:
      return state;
    case RECEIVE_DASHBOARD:
      return action.dashboard;
    default:
      return state;
  }
};
