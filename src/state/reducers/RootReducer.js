import { combineReducers } from 'redux';
import { DashboardReducer } from './DashboardReducer';
import { AppReducer } from './AppReducer';
import { UserReducer } from './UserReducer';

export const RootReducer = combineReducers({
  dashboard: DashboardReducer,
  appState: AppReducer,
  users: UserReducer,
});
