import { combineReducers } from 'redux';
import { DashboardReducer } from './DashboardReducer';
import { AppReducer } from './AppReducer';
import { UserReducer } from './UserReducer';
import { UserPageReducer } from './UserPageReducer';
import { AppStore } from '../../types/AppStore';

export const RootReducer = combineReducers<AppStore>({
  dashboard: DashboardReducer,
  appState: AppReducer,
  users: UserReducer,
  userPage: UserPageReducer,
});
