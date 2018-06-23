import { GET_DASHBOARD, RECEIVE_DASHBOARD , ADD_CHART } from '../actions/DashboardActions';

const initialState = {
    bars: [],
    charts: [],
};

export const DashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DASHBOARD:
            return state;
        case RECEIVE_DASHBOARD:
            return action.dashboard;
        case ADD_CHART:
            return {...state, charts: [...state.charts, action.chart] };
        default:
            return state;
    }
};