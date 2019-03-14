import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { RootReducer } from './reducers/RootReducer';
import Actions from './actions/AppActions';
import SecurityService from '../services/SecurityService';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, promiseMiddleware()),
  // other store enhancers if any
);
const securityService = SecurityService();

const getLoginData = () => {
  const decoded = securityService.getAuthData();

  if (decoded !== null) {
    return { user: { name: decoded.userName }, authenticated: true };
  }
  return { user: { name: '' }, authenticated: false };
};

const store = createStore(RootReducer, enhancer);

const { Creators } = Actions;
store.dispatch(Creators.updateLoginData(getLoginData()));

export const createAppStore = () => store;
