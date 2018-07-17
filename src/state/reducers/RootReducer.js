import { combineReducers } from 'redux';
import { DashboardReducer } from './DashboardReducer';
import { AppReducer } from './AppReducer';

export const RootReducer = combineReducers({
  dashboard: DashboardReducer,
  appState: AppReducer,
});
