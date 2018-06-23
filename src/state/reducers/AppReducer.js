import { combineReducers } from 'redux';
import { DashboardReducer } from './DashboardReducer';

export const AppReducer = combineReducers({
    dashboard: DashboardReducer
});