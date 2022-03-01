import { combineReducers } from 'redux';

import homeReducer from './homeSlice';
import shakeCountReducer from './shakeCountSlice';

const combinedReducer = combineReducers({
  home: homeReducer,
  shakeCount: shakeCountReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return combinedReducer(undefined, action);
  }

  return combinedReducer(state, action);
}
