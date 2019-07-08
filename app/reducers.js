/**
 * reducers.js
 *
 * Combine all reducers in this file and export the combined reducers
 */

import { combineReducers } from 'redux';
import globalReducers from './containers/App/reducers';

export default function createReducers (injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducers,
    ...injectedReducers,
  });

  return rootReducer;
}
