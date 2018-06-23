import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { RootReducer } from './reducers/RootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware())
    // other store enhancers if any
);

export const createAppStore = () => {
    return createStore(RootReducer, enhancer);
};