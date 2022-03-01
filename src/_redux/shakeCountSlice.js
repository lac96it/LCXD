import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';

const initialState = {
  count: 0,
  updated_at: '',
  created_at: '',
  name: '',
  step_count: 1,
  isUseShakeReaction: true,
  history: []
};

const shakeCountSlice = createSlice({
  name: 'shakeCount',
  initialState,
  reducers: {
    plus(state) {

      if (state.count === 0) state.created_at = moment().valueOf();

      state.count = Number(state.count || 0) + Number(state.step_count || 1);
      state.updated_at = moment().valueOf();
    },
    minus(state) {
      state.count = Number(state.count || 0) - Number(state.step_count || 1);
      state.updated_at = moment().valueOf();
    },
    onSaveHistory(state) {
      state.history.unshift({
        count: state.count,
        updated_at: state.updated_at,
        created_at: state.updated_at,
        name: state.name
      });

      if (state.history.length > 10) {
        state.history.pop();
      }

      state.count = 0;
      state.created_at = '';
      state.updated_at = '';
      state.name = '';
    },
    setSetting(state, action) {
      Object.entries(action.payload).forEach(([k, v]) => {
        state[k] = v;
      })
    },
  },
  extraReducers: {

  }
});

export const shakeCountAction = shakeCountSlice.actions;

const shakeCountReducer = shakeCountSlice.reducer;

export default shakeCountReducer;
