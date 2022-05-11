import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userSagas from './sagas/userSagas';
import appSagas from './sagas/appSagas';
import dashboardSagas from './sagas/dashboardSagas';
import roleSagas from './sagas/roleSagas';
import appSlice, { fetchLoginData } from './reducers/AppSlice';
import rolesSlice, { fetchRoles } from './reducers/RolesSlice';
import usersSlice from './reducers/UsersSlice';
import userPageSlice from './reducers/UserPageSlice';
import eventsSlice from './reducers/EventsSlice';
import dashboardSlice from './reducers/DashboardSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    appState: appSlice,
    roles: rolesSlice,
    users: usersSlice,
    userPage: userPageSlice,
    events: eventsSlice,
    dashboard: dashboardSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userSagas);
sagaMiddleware.run(appSagas);
sagaMiddleware.run(dashboardSagas);
sagaMiddleware.run(roleSagas);

store.dispatch(fetchLoginData());
store.dispatch(fetchRoles());

export const createAppStore = () => store;
