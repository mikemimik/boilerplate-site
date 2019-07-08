/**
 * App/reducers.js
 */

import { LOAD_SUCCESS, LOAD, LOAD_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
};

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD: {
      const newState = {
        ...state,
        loading: true,
        error: false,
      };

      return newState;
    }
    case LOAD_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
      };

      return newState;
    }
    case LOAD_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default:
      return state;
  }
}
