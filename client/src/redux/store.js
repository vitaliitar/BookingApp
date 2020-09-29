import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import authentication from './reducers/auth';

const createRootReducer = () => combineReducers({
  authentication,
});

export default function makeStore(initialState = {}) {
  let composeEnhancers = compose;
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}
