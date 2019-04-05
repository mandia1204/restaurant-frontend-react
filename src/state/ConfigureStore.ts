import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootReducer } from './reducers/RootReducer';
import AppActions from './actions/AppActions';
import RoleActions from './actions/RoleActions';
import userSagas from './sagas/userSagas';
import appSagas from './sagas/appSagas';
import dashboardSagas from './sagas/dashboardSagas';
import roleSagas from './sagas/roleSagas';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(RootReducer, enhancer);
sagaMiddleware.run(userSagas);
sagaMiddleware.run(appSagas);
sagaMiddleware.run(dashboardSagas);
sagaMiddleware.run(roleSagas);

store.dispatch(AppActions.Creators.fetchLoginData());
store.dispatch(RoleActions.Creators.fetchRoles());

export const createAppStore = () => store;
