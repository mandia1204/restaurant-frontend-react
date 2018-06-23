import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { RootReducer } from './reducers/RootReducer';
import { showNavLinks } from './actions/AppActions';
import AuthClient from '../api/security/AuthClient';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware())
    // other store enhancers if any
);
const authClient = AuthClient();
const store = createStore(RootReducer, enhancer);

store.dispatch(showNavLinks(authClient.isAuthenticated()));

export const createAppStore = () => {
    return store;
};