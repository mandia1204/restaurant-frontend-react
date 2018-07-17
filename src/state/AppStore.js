import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { RootReducer } from './reducers/RootReducer';
import { updateLoginData } from './actions/AppActions';
import AuthClient from '../api/security/AuthClient';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, promiseMiddleware()),
  // other store enhancers if any
);
const authClient = AuthClient();

const getLoginData = () => {
  const decoded = authClient.getAuthData();

  if (decoded !== null) {
    return { user: { name: decoded.userName }, authenticated: true };
  }
  return { user: { name: '' }, authenticated: false };
};

const store = createStore(RootReducer, enhancer);

store.dispatch(updateLoginData(getLoginData()));

export const createAppStore = () => store;
