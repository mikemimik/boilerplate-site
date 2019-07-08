/**
 * configureStore.js
 *
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore (initialState = {}, history) {
  const middlewares = [thunk];
  const enhancers = [
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : () => null,
  ];
  const store = createStore(createReducer(), initialState, compose(...enhancers));

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducers(createReducer(store.injectedReducers));
      store.dispatch({ type: '@@REDUCER_INJECTED' });
    });
  }

  return store;
}
