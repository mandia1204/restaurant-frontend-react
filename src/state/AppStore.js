import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootReducer } from './reducers/RootReducer';
import Actions from './actions/AppActions';
import userSagas from './sagas/userSagas';
import appSagas from './sagas/appSagas';
import dashboardSagas from './sagas/dashboardSagas';
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(RootReducer, enhancer);
sagaMiddleware.run(userSagas);
sagaMiddleware.run(appSagas);
sagaMiddleware.run(dashboardSagas);

const { Creators } = Actions;
store.dispatch(Creators.fetchLoginData());

export const createAppStore = () => store;
